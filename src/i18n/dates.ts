import type { ExperienceDate } from '../data/experience';
import type { Locale } from './messages';

export function formatExperienceDate(
  value: ExperienceDate,
  locale: Locale,
): string {
  const [year, month] = value.split('-');
  const date = new Date(Date.UTC(Number(year), Number(month ?? '01') - 1, 1));

  // Both the date and the formatter use UTC, regardless of the build machine.
  return new Intl.DateTimeFormat(locale === 'it' ? 'it-IT' : 'en-GB', {
    year: 'numeric',
    ...(month ? { month: 'long' as const } : {}),
    timeZone: 'UTC',
  }).format(date);
}
