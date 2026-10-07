import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { HomePageLayout } from '@/components/layouts/HomePageLayout';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePageLayout />;
}
