import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { Locales } from '@/i18n';
import { WRITING_COLUMN_CLASS } from '@/const/writing';
import { getPosts } from '@/utils/posts';
import { WritingNav } from '@/components/WritingNav/WritingNav';
import { WritingSplitLayout } from '@/components/layouts/WritingSplitLayout';

interface WritingLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

// Shared by /writing and /writing/[slug], so the list stays put
// (and keeps its scroll position) while switching posts
export default async function WritingLayout({
  children,
  params,
}: Readonly<WritingLayoutProps>) {
  const { locale } = await params;
  setRequestLocale(locale);

  const posts = await getPosts(locale as Locales);

  return (
    <WritingSplitLayout
      nav={<WritingNav posts={posts} className={WRITING_COLUMN_CLASS} />}
    >
      {children}
    </WritingSplitLayout>
  );
}
