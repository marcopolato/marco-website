import type { Locale } from '../i18n/messages';

type Month =
  | '01'
  | '02'
  | '03'
  | '04'
  | '05'
  | '06'
  | '07'
  | '08'
  | '09'
  | '10'
  | '11'
  | '12';

export type Year = `${number}`;
export type YearMonth = `${Year}-${Month}`;
export type ExperienceDate = Year | YearMonth;

type PeriodEnd<DateValue extends ExperienceDate> =
  { ongoing: true; end: null } | { ongoing: false; end: DateValue };

// Keep the precision supplied by the CV: months for work, years for diplomas.
export type ExperiencePeriod =
  | ({ precision: 'month'; start: YearMonth } & PeriodEnd<YearMonth>)
  | ({ precision: 'year'; start: Year } & PeriodEnd<Year>);

interface ExperienceEntry {
  id: string;
  organization: string;
  location?: string;
  period: ExperiencePeriod;
}

export interface ProfessionalExperience extends ExperienceEntry {
  kind: 'professional';
  content: Record<Locale, { title: string; description: string }>;
  coordinatorSince?: YearMonth;
  addressedPoints?: Record<Locale, string[]>;
}

export interface EducationEntry extends ExperienceEntry {
  kind: 'education';
  content: Record<Locale, { title: string }>;
}

// Most recent first, independently of the localized labels.
export const professionalExperience = [
  {
    id: 'kuama',
    kind: 'professional',
    organization: 'Kuama Srl',
    location: 'Vigonza',
    period: {
      precision: 'month',
      start: '2021-09',
      end: null,
      ongoing: true,
    },
    content: {
      it: {
        title: 'Software Developer',
        description:
          'Sviluppo e manutenzione di applicazioni web B2B, frontend e backend, con React, Next.js, Svelte, TypeScript e Laravel, e di applicazioni mobile multipiattaforma con Flutter e Dart.',
      },
      en: {
        title: 'Software Developer',
        description:
          'Development and maintenance of B2B web applications, across frontend and backend, with React, Next.js, Svelte, TypeScript and Laravel, and cross-platform mobile applications with Flutter and Dart.',
      },
    },
    coordinatorSince: '2026-01',
    addressedPoints: {
      it: [
        'Referente tecnico principale per il cliente, con riunioni quotidiane per chiarire requisiti e priorità.',
        'Coordinamento operativo di un team di due sviluppatori, continuando a contribuire allo sviluppo.',
        'Requisiti tradotti in task documentate, assegnazione delle attività e organizzazione degli sprint con YouTrack.',
        'Documentazione e allineamento con cliente, Project Manager e team usando YouTrack, Microsoft Teams ed Excel.',
      ],
      en: [
        'Main technical point of contact for the client, with daily meetings to clarify requirements and priorities.',
        'Operational coordination of a team of two developers, while continuing to contribute to development.',
        'Requirements translated into documented tasks, assignment of activities and sprint organization with YouTrack.',
        'Documentation and alignment with the client, Project Manager and team using YouTrack, Microsoft Teams and Excel.',
      ],
    },
  },
  {
    id: 'busnet',
    kind: 'professional',
    organization: 'Busnet.it',
    location: 'Padova',
    period: {
      precision: 'month',
      start: '2021-01',
      end: '2021-08',
      ongoing: false,
    },
    content: {
      it: {
        title: 'Junior Web Developer',
        description:
          'Sviluppo e manutenzione di siti e applicazioni aziendali con PHP, JavaScript e MySQL, lavorando su frontend, backend e risoluzione dei problemi.',
      },
      en: {
        title: 'Junior Web Developer',
        description:
          'Development and maintenance of business websites and applications with PHP, JavaScript and MySQL, working on frontend, backend and troubleshooting.',
      },
    },
  },
  {
    id: 'res-media',
    kind: 'professional',
    organization: 'Res Media Srl',
    location: 'Vigonza',
    period: {
      precision: 'month',
      start: '2020-09',
      end: '2020-12',
      ongoing: false,
    },
    content: {
      it: {
        title: 'Mobile Developer',
        description:
          'Sviluppo e test di applicazioni mobile multipiattaforma con Flutter e Dart.',
      },
      en: {
        title: 'Mobile Developer',
        description:
          'Development and testing of cross-platform mobile applications with Flutter and Dart.',
      },
    },
  },
] satisfies ProfessionalExperience[];

export const education = [
  {
    id: 'google-project-management',
    kind: 'education',
    organization: 'Google Career Certificates / Coursera',
    period: {
      precision: 'month',
      start: '2026-03',
      end: null,
      ongoing: true,
    },
    content: {
      it: { title: 'Google Project Management Certificate' },
      en: { title: 'Google Project Management Certificate' },
    },
  },
  {
    id: 'its-kennedy',
    kind: 'education',
    organization: 'ITS J.F. Kennedy',
    location: 'Padova',
    period: {
      precision: 'year',
      start: '2018',
      end: '2020',
      ongoing: false,
    },
    content: {
      it: {
        title: 'Diploma tecnico superiore in sviluppo di applicazioni mobile',
      },
      en: {
        title: 'Higher Technical Diploma in Mobile Application Development',
      },
    },
  },
  {
    id: 'itis-severi',
    kind: 'education',
    organization: 'ITIS F. Severi',
    location: 'Padova',
    period: {
      precision: 'year',
      start: '2013',
      end: '2018',
      ongoing: false,
    },
    content: {
      it: { title: 'Diploma in Informatica' },
      en: { title: 'Diploma in Computer Science' },
    },
  },
] satisfies EducationEntry[];
