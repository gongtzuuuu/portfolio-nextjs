import React from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { AboutLayout } from '@/components/layouts/AboutLayout';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return <AboutLayout />;
}
