import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from './messages';

export type PageName = 'home' | 'experience' | 'projects';

const pagePaths = {
  it: {
    home: '',
    experience: 'esperienza/',
    projects: 'progetti/',
  },
  en: {
    home: '',
    experience: 'experience/',
    projects: 'projects/',
  },
} satisfies Record<Locale, Record<PageName, string>>;

export function getPageUrl(locale: Locale, page: PageName): string {
  return getRelativeLocaleUrl(locale, pagePaths[locale][page]);
}

export function getProjectUrl(locale: Locale, slug: string): string {
  return getRelativeLocaleUrl(locale, `${pagePaths[locale].projects}${slug}/`);
}

export function getHomeContactsUrl(locale: Locale): string {
  return `${getPageUrl(locale, 'home')}#contacts`;
}
