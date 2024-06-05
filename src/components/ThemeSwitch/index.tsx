'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

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
    <div>
      {(resolvedTheme === 'dark' || !mounted) && (
        <Moon className="cursor-pointer" onClick={handleClickedChange} />
      )}
      {(resolvedTheme === 'light' || !mounted) && (
        <Sun className="cursor-pointer" onClick={handleClickedChange} />
      )}
    </div>
  );
};

export default ThemeSwitch;
