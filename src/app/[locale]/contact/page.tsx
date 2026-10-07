import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import { ContactLayout } from '@/components/layouts/ContactLayout';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactLayout />;
}
