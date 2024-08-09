import { redirect } from 'next/navigation';
import { useLocale } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

interface RootPageProps {
  params: {
    locale: string;
  };
}

export default function RootPage({ params: { locale } }: RootPageProps) {
  unstable_setRequestLocale(locale);
  const activeLocale = useLocale();
  redirect(`/${activeLocale}`);
}
