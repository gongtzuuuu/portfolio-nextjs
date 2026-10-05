import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

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
