import { getTranslations } from 'next-intl/server';
import { isLocale, locales } from '@/i18n';
import { SITE_AUTHOR, SITE_URL } from '@/const/site';
import { getPostPath, getPosts } from '@/utils/posts';

export const dynamic = 'force-static';
// Keep in sync with NOTION_REVALIDATE (Next needs a literal here)
export const revalidate = 3600;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

// Only posts written in this locale: subscribers of one language
// shouldn't get fallback posts in the other.
export async function GET(
  _request: Request,
  { params }: { params: { locale: string } },
) {
  const { locale } = params;
  if (!isLocale(locale)) return new Response('Not found', { status: 404 });

  const t = await getTranslations({ locale, namespace: 'WritingPage' });
  const posts = (await getPosts(locale)).filter(
    (post) => post.locale === locale,
  );

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}${getPostPath(post.slug, locale)}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
${post.tags.map((tag) => `      <category>${escapeXml(tag)}</category>`).join('\n')}
    </item>`;
    })
    .join('\n');

  const feedUrl = `${SITE_URL}/${locale}/feed.xml`;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${SITE_AUTHOR} — ${t('title')}`)}</title>
    <link>${SITE_URL}/${locale}/writing</link>
    <description>${escapeXml(t('description'))}</description>
    <language>${locale === 'zh' ? 'zh-TW' : 'en'}</language>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
}
