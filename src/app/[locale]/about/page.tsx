import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { AboutLayout } from '@/components/layouts/AboutLayout';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <AboutLayout />;
}
