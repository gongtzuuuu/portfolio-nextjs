import { defaultLocale, Locales } from '@/i18n';
import { getNotionContent, getNotionPosts, NotionPost } from '@/utils/notion';

export type Post = NotionPost & { readingTime: number };

// Posts come from the Notion database (see utils/notion.ts)
const getAllPosts = async (): Promise<Post[]> => {
  const posts = await getNotionPosts();

  // Reading time needs the body; each body is cached separately
  return Promise.all(
    posts.map(async (post) => ({
      ...post,
      readingTime: (await getNotionContent(post)).readingTime,
    })),
  );
};

const byNewest = (a: Post, b: Post) =>
  new Date(b.date).getTime() - new Date(a.date).getTime();

/** Locales a post has been written in */
export const getPostLocales = async (slug: string): Promise<Locales[]> =>
  (await getAllPosts())
    .filter((post) => post.slug === slug)
    .map((post) => post.locale);

const pickTranslation = (translations: Post[], locale: Locales) =>
  translations.find((post) => post.locale === locale) ??
  translations.find((post) => post.locale === defaultLocale) ??
  translations[0];

/**
 * A post in the requested locale, or the closest translation:
 * requested locale → default locale → whatever exists.
 */
export const getPost = async (
  slug: string,
  locale: Locales,
): Promise<Post | undefined> =>
  pickTranslation(
    (await getAllPosts()).filter((post) => post.slug === slug),
    locale,
  );

/** One entry per post, newest first, each in the closest available locale */
export const getPosts = async (locale: Locales): Promise<Post[]> => {
  const posts = await getAllPosts();
  const slugs = Array.from(new Set(posts.map((post) => post.slug)));

  return slugs
    .map((slug) =>
      pickTranslation(
        posts.filter((post) => post.slug === slug),
        locale,
      ),
    )
    .filter((post): post is Post => Boolean(post))
    .sort(byNewest);
};

export const getPostSlugs = async () =>
  Array.from(new Set((await getAllPosts()).map((post) => post.slug)));

/** The post body as HTML */
export const getPostHtml = async (post: Post) =>
  (await getNotionContent(post)).html;

export const getPostPath = (slug: string, locale: Locales) =>
  `/${locale}/writing/${slug}`;

export const formatPostDate = (date: string, locale: Locales) =>
  new Intl.DateTimeFormat(locale === 'zh' ? 'zh-TW' : 'en-US', {
    dateStyle: 'long',
    // Notion dates are calendar dates; don't shift them by time zone
    timeZone: 'UTC',
  }).format(new Date(date));
