import createNextIntlPlugin from 'next-intl/plugin';

// Point at our request config explicitly (the default path changed in next-intl 3.22)
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // Work ids were renamed from camelCase to kebab-case
    const renamedWorks = {
      gluttonGlobe: 'glutton-globe',
      fitQuest: 'fit-quest',
      officeSimulator: 'office-simulator',
    };

    return Object.entries(renamedWorks).map(([from, to]) => ({
      source: `/:locale(en|zh)/work/${from}`,
      destination: `/:locale/work/${to}`,
      permanent: true,
    }));
  },
};

export default withNextIntl(nextConfig);
