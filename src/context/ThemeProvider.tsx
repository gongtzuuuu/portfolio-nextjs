'use client';
import React from 'react';
import { ThemeProvider as Provider } from 'next-themes';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <Provider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </Provider>
  );
};
