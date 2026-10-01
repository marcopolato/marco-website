import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from './messages';

export function getProjectUrl(locale: Locale, slug: string): string {
  const section = locale === 'it' ? 'progetti' : 'projects';
  return getRelativeLocaleUrl(locale, `${section}/${slug}/`);
}

export function getHomeProjectsUrl(locale: Locale): string {
  return `${getRelativeLocaleUrl(locale)}#projects`;
}
