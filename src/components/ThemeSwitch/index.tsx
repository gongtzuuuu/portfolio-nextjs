'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Switch } from '../ui/Switch/Switch';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleClickedChange = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    }

    if (resolvedTheme === 'light') {
      setTheme('dark');
    }
  };

  return (
    <div className="flex space-x-2">
      <Moon />
      <Switch
        checked={resolvedTheme === 'light'}
        onCheckedChange={handleClickedChange}
      />
      <Sun />
    </div>
  );
};

export default ThemeSwitch;
