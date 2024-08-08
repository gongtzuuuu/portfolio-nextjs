'use client';
import React, { ReactNode, useState, createContext, useContext } from 'react';

interface MenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuContext = createContext<MenuContextType>(
  {} as MenuContextType
);

export const useMenuContext = () => useContext(MenuContext);

interface MenuProviderProps {
  children?: ReactNode;
}

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const value = { isMenuOpen, setIsMenuOpen };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};
