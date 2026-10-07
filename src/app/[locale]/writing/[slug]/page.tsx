import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Locales } from '@/i18n';
import { SITE_AUTHOR } from '@/const/site';
import {
  getPost,
  getPostHtml,
  getPostLocales,
  getPostPath,
  getPostSlugs,
} from '@/utils/posts';
import { PostLayout } from '@/components/layouts/PostLayout';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// Re-fetch from Notion at most once an hour (keep in sync with NOTION_REVALIDATE;
// Next needs a literal here). Posts published after the build render on first visit.
export const revalidate = 3600;

export async function generateStaticParams() {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPost(slug, locale as Locales);
  if (!post) return {};

  const languages = Object.fromEntries(
    (await getPostLocales(slug)).map((l) => [l, getPostPath(slug, l)]),
  );

  return {
    title: post.title,
    description: post.description,
    alternates: {
      // A fallback page shows another locale's text; point search engines at the original
      canonical: getPostPath(slug, post.locale),
      languages,
      types: { 'application/rss+xml': `/${locale}/feed.xml` },
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [SITE_AUTHOR],
      tags: post.tags,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = await getPost(slug, locale as Locales);
  if (!post) notFound();

  return <PostLayout post={post} html={await getPostHtml(post)} />;
}
