'use client';
import React, { ReactNode } from 'react';
import { useMenuContext } from '@/context/MenuProvider';
import Sidebar from '../Sidebar';

interface BodyProps {
  children: ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  const { isMenuOpen } = useMenuContext();
  return <>{isMenuOpen ? <Sidebar /> : children}</>;
};

export default Body;
