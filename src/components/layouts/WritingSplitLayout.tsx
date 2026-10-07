'use client';
import React, { ReactNode } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/utils/style';

type WritingSplitLayoutProps = {
  nav: ReactNode;
  children: ReactNode;
};

/**
 * Posts list on the left, the open post on the right, with the gap and
 * bottom alignment of WorkListLayout. 40/60 from lg; 50/50 on tablets,
 * where 40% would be too narrow for the titles.
 * On small screens only one column fits: the list at /writing,
 * the post at /writing/[slug].
 */
export const WritingSplitLayout = ({
  nav,
  children,
}: WritingSplitLayoutProps) => {
  const isPostOpen = useSelectedLayoutSegment() !== null;

  return (
    <div
      className={cn(
        'w-full flex flex-col md:flex-row md:items-end md:gap-x-5',
        // Fixed height (= the columns' max-h-96) so the list doesn't jump
        // up and down when switching between short and long posts
        'md:h-96',
      )}
    >
      <aside
        className={cn(
          'w-full md:w-[50%] lg:w-[40%] md:block',
          isPostOpen && 'hidden',
        )}
      >
        {nav}
      </aside>
      <section
        className={cn(
          'w-full md:w-[50%] lg:w-[60%] md:block',
          !isPostOpen && 'hidden',
        )}
      >
        {children}
      </section>
    </div>
  );
};
