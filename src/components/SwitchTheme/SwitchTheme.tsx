'use client';
import React, { FC } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { useHasMounted } from '@/hook/useHasMounted';

type Theme = 'light' | 'dark';

export const SwitchTheme: FC = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const mounted = useHasMounted();

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  if (!mounted) {
    return null;
  }

  const renderSwitcher = () => {
    const newTheme: Theme = resolvedTheme === 'dark' ? 'light' : 'dark';

    const Icon = resolvedTheme === 'dark' ? Moon : Sun;

    return (
      <Icon
        size={20}
        className="cursor-pointer hover:text-[#937829] transition-color duration-200 ease-in-out"
        onClick={() => handleThemeChange(newTheme)}
      />
    );
  };

  return renderSwitcher();
};
