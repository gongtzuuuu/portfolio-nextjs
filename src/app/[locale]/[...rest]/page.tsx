import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

interface CatchAllPageProps {
  params: {
    locale: string;
  };
}

export default function CatchAllPage({
  params: { locale },
}: CatchAllPageProps) {
  setRequestLocale(locale);
  notFound();
}
