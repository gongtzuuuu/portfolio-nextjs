'use client';
import React, { PropsWithChildren, ReactNode } from 'react';
import { useMenuContext } from '@/context/MenuProvider';
import Sidebar from '../Sidebar';

type MainContentProps = PropsWithChildren;

export const MainContent = (props: MainContentProps) => {
  const { children } = props;
  const { isMenuOpen } = useMenuContext();

  return isMenuOpen ? <Sidebar /> : children;
};
