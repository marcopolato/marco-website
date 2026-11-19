import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  fonts: [
    {
      name: 'Inter',
      provider: fontProviders.fontsource(),
      cssVariable: '--font-inter',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
    },
    {
      name: 'Source Serif 4',
      provider: fontProviders.fontsource(),
      cssVariable: '--font-source-serif',
      weights: [500],
      styles: ['italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
  ],
});
