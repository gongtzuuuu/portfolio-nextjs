import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

interface CatchAllPageProps {
  params: {
    locale: string;
  };
}

export default function CatchAllPage({
  params: { locale },
}: CatchAllPageProps) {
  unstable_setRequestLocale(locale);
  notFound();
}
