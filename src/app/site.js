export const SITE = {
  name: 'Shahid ul Islam',
  title: 'Shahid ul Islam — Full Stack Developer',
  description:
    'Shahid ul Islam is a Full Stack Developer from Jammu and Kashmir, India, specializing in React, Node.js, and modern web technologies.',
  /**
   * Set this in production (used for OG tags + sitemap):
   * VITE_SITE_URL="https://your-domain.com"
   */
  url: import.meta.env.VITE_SITE_URL || '',
  /**
   * Path to an image under /public. Example: "/og.png"
   */
  ogImagePath: import.meta.env.VITE_OG_IMAGE_PATH || '/og.png',
  twitterHandle: import.meta.env.VITE_TWITTER_HANDLE || '',
};

