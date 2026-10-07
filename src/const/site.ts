// Absolute URLs are needed for RSS and social cards.
// Set NEXT_PUBLIC_SITE_URL to the custom domain once there is one.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:3000');

export const SITE_AUTHOR = 'Tzu-Yun Liang';
