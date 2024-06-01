import { useTranslations } from 'next-intl';
import ThemeSwitch from '@/components/ThemeSwitch';
import LangSelect from '@/components/LangSelect';

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex justify-between">
        <ThemeSwitch />
        <LangSelect />
      </div>
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p>{t('description')}</p>
    </main>
  );
}
