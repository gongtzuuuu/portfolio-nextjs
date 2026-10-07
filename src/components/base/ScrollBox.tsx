'use client';
import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/style';
import { GoDownButton } from '@/components/base/GoDownButton';

type ScrollBoxProps = PropsWithChildren<{
  className?: string;
}>;

/**
 * Fixed-height scroll area for the one-screen layout.
 * Shows the GoDownButton hint only while there is more content below.
 */
export const ScrollBox = ({ className, children }: ScrollBoxProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasMoreBelow, setHasMoreBelow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      setHasMoreBelow(el.scrollTop + el.clientHeight < el.scrollHeight - 8);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(el);
    Array.from(el.children).forEach((child) => observer.observe(child));

    return () => {
      el.removeEventListener('scroll', update);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={ref}
        tabIndex={0}
        className={cn(
          'overflow-y-auto no-scrollbar rounded-sm outline-none focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#937829]',
          className,
        )}
      >
        {children}
      </div>
      {hasMoreBelow && (
        <div aria-hidden className="pointer-events-none">
          <GoDownButton />
        </div>
      )}
    </div>
  );
};
