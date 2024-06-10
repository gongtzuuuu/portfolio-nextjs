'use client';
import React, { ReactNode } from 'react';
import { useMenuContext } from '@/context/MenuProvider';
import Menu from '../Menu';

interface BodyProps {
  children: ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  const { isMenuOpen } = useMenuContext();
  return <>{isMenuOpen ? <Menu /> : children}</>;
};

export default Body;
