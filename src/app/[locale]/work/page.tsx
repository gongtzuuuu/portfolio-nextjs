import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { WorkListLayout } from '@/components/layouts/WorkListLayout';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <WorkListLayout />;
}
