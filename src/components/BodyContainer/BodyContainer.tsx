'use client';
import React, { PropsWithChildren, FC } from 'react';
import { useMenuContext } from '@/context/MenuProvider';
import { Sidebar } from '@/components/Sidebar/Sidebar';

export const BodyContainer: FC<PropsWithChildren> = ({ children }) => {
  const { isMenuOpen } = useMenuContext();
  return <>{isMenuOpen ? <Sidebar /> : children}</>;
};
