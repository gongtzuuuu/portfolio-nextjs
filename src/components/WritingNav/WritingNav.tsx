import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Rss } from 'lucide-react';
import { Locales } from '@/i18n';
import { formatPostDate, getPostPath, Post } from '@/utils/posts';
import { ScrollBox } from '@/components/base/ScrollBox';
import { PostNavLink } from '@/components/PostNavLink/PostNavLink';

type WritingNavProps = {
  posts: Post[];
  className?: string;
};

/** Left column of the writing pages: the list of posts */
export const WritingNav = ({ posts, className }: WritingNavProps) => {
  const activeLocale = useLocale() as Locales;
  const t = useTranslations('WritingPage');

  return (
    <ScrollBox className={className}>
      <nav aria-label={t('title')} className="flex flex-col gap-y-4">
        <div className="flex flex-wrap gap-y-2 justify-between items-end">
          <h3 className="text-4xl font-bold">{t('title')}</h3>
          <a
            href={`/${activeLocale}/feed.xml`}
            className="flex items-center gap-1 text-xs font-light hover:text-[#937829]"
          >
            <Rss size={14} />
            {t('rss')}
          </a>
        </div>
        <hr />
        {posts.length === 0 ? (
          <p className="font-light">{t('empty')}</p>
        ) : (
          <ul className="flex flex-col gap-y-4">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="[&:not(:last-child)]:border-b pb-4"
              >
                <PostNavLink
                  slug={post.slug}
                  href={getPostPath(post.slug, activeLocale)}
                  title={post.title}
                  meta={`${formatPostDate(post.date, activeLocale)} / ${t(
                    'readingTime',
                    { minutes: post.readingTime },
                  )}`}
                  localeBadge={
                    post.locale !== activeLocale ? post.locale : undefined
                  }
                />
              </li>
            ))}
          </ul>
        )}
      </nav>
    </ScrollBox>
  );
};
