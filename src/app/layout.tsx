import './globals.css';

interface RootLayoutProps {
  children: React.ReactNode;
}

// <html> lives in [locale]/layout so the locale comes from params
// (keeps pages statically rendered) instead of request headers.
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return children;
}
