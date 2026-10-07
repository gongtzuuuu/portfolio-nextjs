import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Info, Tag } from 'lucide-react';
import { Locales } from '@/i18n';
import { WRITING_COLUMN_CLASS } from '@/const/writing';
import { formatPostDate, Post } from '@/utils/posts';
import { GoBackLink } from '@/components/base/links/GoBackLink';
import { ScrollBox } from '@/components/base/ScrollBox';

interface PostLayoutProps {
  post: Post;
  /** Post body converted from Notion */
  html: string;
}

/** Right column of the writing pages: the open post */
export const PostLayout = ({ post, html }: PostLayoutProps) => {
  const activeLocale = useLocale() as Locales;
  const t = useTranslations('WritingPage');

  const isFallback = post.locale !== activeLocale;

  const renderInfo = () => {
    return (
      <div className="flex flex-wrap items-center gap-2 text-sm font-light">
        <Info size={14} className="shrink-0" />
        <time dateTime={post.date}>
          {formatPostDate(post.date, activeLocale)}
        </time>
        <p>{' / '}</p>
        <p>{t('readingTime', { minutes: post.readingTime })}</p>
      </div>
    );
  };

  const renderTags = () => {
    if (post.tags.length === 0) return null;

    return (
      <div className="flex flex-wrap items-center gap-2 text-sm font-light">
        <Tag size={14} className="shrink-0" />
        {post.tags.map((tag, index) => (
          <React.Fragment key={tag}>
            <p>{tag}</p>
            {index < post.tags.length - 1 && <p>{' / '}</p>}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <ScrollBox className={WRITING_COLUMN_CLASS}>
      <article className="flex flex-col gap-y-4">
        {/* Title row as in WorkDetailLayout */}
        <div className="flex flex-wrap gap-y-2 justify-between items-end">
          <h1 className="text-4xl font-bold">{post.title}</h1>
          {/* The list is beside the post on wider screens */}
          <div className="md:hidden">
            <GoBackLink href={`/${activeLocale}/writing`} label={t('back')} />
          </div>
        </div>
        <hr />
        <div className="space-y-2">
          {renderInfo()}
          {renderTags()}
        </div>
        {isFallback && (
          <p
            role="note"
            className="rounded-md border border-[#937829]/50 px-4 py-2 text-sm font-light"
          >
            {t('onlyIn', { language: t(`languages.${post.locale}`) })}
          </p>
        )}
        <hr />
        {/* Our own content from Notion, so rendering its HTML is safe */}
        <div
          lang={post.locale}
          className="prose dark:prose-invert max-w-none pb-8 prose-a:text-[#937829] prose-pre:rounded-xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </ScrollBox>
  );
};
