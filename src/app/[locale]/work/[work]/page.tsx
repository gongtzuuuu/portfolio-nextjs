import React from 'react';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { WORK_LIST, WorkTitles } from '@/const/works';
import { WorkDetailLayout } from '@/components/layouts/WorkDetailLayout';

interface PageProps {
  params: Promise<{ locale: string; work: string }>;
}

const isWorkTitle = (id: string): id is WorkTitles =>
  Object.prototype.hasOwnProperty.call(WORK_LIST, id);

export function generateStaticParams() {
  return Object.keys(WORK_LIST).map((work) => ({ work }));
}

export default async function Page({ params }: PageProps) {
  const { locale, work } = await params;
  unstable_setRequestLocale(locale);

  if (!isWorkTitle(work)) notFound();

  return <WorkDetailLayout work={WORK_LIST[work]} />;
}
