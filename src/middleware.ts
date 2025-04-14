import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n';

export default createMiddleware({
  /**
   * A list of all locales that are supported
   */
  locales,
  /**
   * The default locale when no match is found
   */
  defaultLocale,
});

export const config = {
  /**
   * Match only internationalized pathnames
   */
  matcher: ['/', '/(zh|en)/:path*'],
};
