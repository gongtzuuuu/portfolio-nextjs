import React from 'react';
import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Locales } from '@/i18n';
import { getPosts } from '@/utils/posts';
import { WritingIndexLayout } from '@/components/layouts/WritingIndexLayout';

// Keep in sync with NOTION_REVALIDATE (Next needs a literal here)
export const revalidate = 3600;

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'WritingPage' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/writing`,
      languages: { en: '/en/writing', zh: '/zh/writing' },
      // Page alternates replace the layout's, so repeat the feed link
      types: { 'application/rss+xml': `/${locale}/feed.xml` },
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  // The post list itself is rendered by writing/layout.tsx
  const hasPosts = (await getPosts(locale as Locales)).length > 0;

  return <WritingIndexLayout hasPosts={hasPosts} />;
}
