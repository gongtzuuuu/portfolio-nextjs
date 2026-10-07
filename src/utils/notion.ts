import { Client, collectPaginatedAPI, isFullPage } from '@notionhq/client';
import type { PageObjectResponse } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { marked } from 'marked';
import { unstable_cache } from 'next/cache';
import { isLocale, Locales } from '@/const/locales';

// Notion database columns used by the blog
const PROPS = {
  title: 'Title',
  slug: 'Slug',
  locale: 'Locale', // optional Select (en / zh)
  date: 'Date',
  description: 'Description',
  tags: 'Tags',
  status: 'Published',
} as const;

// Posts with this status are on the live site; `next dev` shows every status
const PUBLISHED_STATUS = 'Done';

// How often (seconds) the site picks up changes from Notion
export const NOTION_REVALIDATE = 3600;

export type NotionPost = {
  id: string;
  slug: string;
  locale: Locales;
  title: string;
  description: string;
  date: string;
  tags: string[];
  lastEdited: string;
};

const notion = new Client({ auth: process.env.NOTION_TOKEN });

const n2m = new NotionToMarkdown({
  notionClient: notion,
  config: { parseChildPages: false },
});

// Uploaded Notion images have URLs that expire after an hour, so point them
// at /api/notion-image, which fetches a fresh URL on every request
n2m.setCustomTransformer('image', async (block) => {
  if (!('image' in block) || block.image.type !== 'file') return false;

  const caption = block.image.caption.map((t) => t.plain_text).join('');
  return `![${caption}](/api/notion-image/${block.id})`;
});

export { notion };

const isConfigured = () =>
  Boolean(process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID);

// API 2025-09-03: a database holds data sources, and queries go to those
const getDataSourceId = async () => {
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID!,
  });
  if (!('data_sources' in database) || !database.data_sources[0]) {
    throw new Error(
      'Notion database not found: check NOTION_DATABASE_ID and that the integration is added under Connections',
    );
  }
  return database.data_sources[0].id;
};

type Property = PageObjectResponse['properties'][string];

const plainText = (property?: Property) => {
  if (property?.type === 'title') {
    return property.title.map((t) => t.plain_text).join('');
  }
  if (property?.type === 'rich_text') {
    return property.rich_text.map((t) => t.plain_text).join('');
  }
  return '';
};

const hasCJK = (text: string) => /[㐀-鿿豈-﫿]/.test(text);

const toPost = (page: PageObjectResponse): NotionPost => {
  const p = page.properties;
  const title = plainText(p[PROPS.title]);

  const localeProp = p[PROPS.locale];
  const localeValue =
    localeProp?.type === 'select' ? localeProp.select?.name ?? '' : '';
  // Without a Locale column, guess from the title
  const locale: Locales = isLocale(localeValue)
    ? localeValue
    : hasCJK(title)
      ? 'zh'
      : 'en';

  const dateProp = p[PROPS.date];
  const tagsProp = p[PROPS.tags];

  return {
    id: page.id,
    // An empty Slug falls back to the page id so the post still has a URL
    slug: plainText(p[PROPS.slug]).trim() || page.id.replace(/-/g, ''),
    locale,
    title,
    description: plainText(p[PROPS.description]),
    date:
      (dateProp?.type === 'date' && dateProp.date?.start) || page.created_time,
    tags:
      tagsProp?.type === 'multi_select'
        ? tagsProp.multi_select.map((tag) => tag.name)
        : [],
    lastEdited: page.last_edited_time,
  };
};

const fetchPosts = async (includeUnpublished: boolean) => {
  if (!isConfigured()) {
    console.warn('[notion] NOTION_TOKEN / NOTION_DATABASE_ID not set');
    return [];
  }

  const pages = await collectPaginatedAPI(notion.dataSources.query, {
    data_source_id: await getDataSourceId(),
    filter: includeUnpublished
      ? undefined
      : { property: PROPS.status, status: { equals: PUBLISHED_STATUS } },
    sorts: [{ property: PROPS.date, direction: 'descending' }],
  });

  return pages.filter(isFullPage).map(toPost);
};

/** Every post row, cached so a build queries Notion once instead of per page */
export const getNotionPosts = unstable_cache(
  () => fetchPosts(process.env.NODE_ENV === 'development'),
  ['notion-posts'],
  { revalidate: NOTION_REVALIDATE, tags: ['notion-posts'] },
);

const fetchContent = async (pageId: string) => {
  const markdown = n2m.toMarkdownString(
    await n2m.pageToMarkdown(pageId),
  ).parent;
  return {
    html: await marked.parse(markdown),
    readingTime: getReadingTime(markdown),
  };
};

/**
 * A post's body as HTML. The cache key includes the last edit time,
 * so editing the page in Notion refreshes it.
 */
export const getNotionContent = (post: NotionPost) =>
  unstable_cache(
    () => fetchContent(post.id),
    ['notion-content', post.id, post.lastEdited],
    { revalidate: NOTION_REVALIDATE, tags: ['notion-posts'] },
  )();

/** Minutes to read: ~400 CJK characters or ~200 English words a minute */
export const getReadingTime = (markdown: string) => {
  const text = markdown.replace(/```[\s\S]*?```/g, ' ');
  const cjk = (text.match(/[㐀-鿿豈-﫿]/g) ?? []).length;
  const words = (
    text.replace(/[㐀-鿿豈-﫿]/g, ' ').match(/[A-Za-z0-9]+/g) ?? []
  ).length;

  return Math.max(1, Math.round(cjk / 400 + words / 200));
};
