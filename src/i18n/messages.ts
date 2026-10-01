export type Locale = 'it' | 'en';

interface Messages {
  pageTitle: string;
  pageDescription: string;
  languageLabel: string;
  role: string;
  heading: string;
  introduction: string;
  interestsTitle: string;
  interests: string[];
  statusTitle: string;
  statusDescription: string;
  contactsTitle: string;
  darkThemeLabel: string;
  skipToContent: string;
  contactAction: string;
  projectsTitle: string;
  projectsDescription: string;
  projectRoleLabel: string;
  projectInProgress: string;
  projectCompleted: string;
  viewProject: string;
  viewCode: string;
}

export const messages = {
  it: {
    pageTitle: 'Marco Polato | Sviluppatore software',
    pageDescription:
      'Il portfolio di Marco: sviluppo software, coordinamento di progetti tech e passioni personali.',
    languageLabel: 'Seleziona la lingua',
    role: 'Sviluppatore software',
    heading: 'Ciao, sono Marco.',
    introduction:
      'Sviluppo software e sto ampliando le mie responsabilità verso il coordinamento e la gestione di progetti tech.',
    interestsTitle: 'Fuori dal lavoro',
    interests: ['Carte Pokémon', 'LEGO', 'Viaggi', 'Sport'],
    statusTitle: 'Work in progress',
    statusDescription:
      'Sto costruendo questo spazio per raccontare le mie esperienze, i miei progetti e quello che mi appassiona.',
    contactsTitle: 'Contatti',
    darkThemeLabel: 'Tema scuro',
    skipToContent: 'Vai al contenuto',
    contactAction: 'Contattami',
    projectsTitle: 'Progetti',
    projectsDescription:
      'Una selezione dei progetti che a cui ho lavorato e a cui sto lavorando.',
    projectRoleLabel: 'Il mio contributo',
    projectInProgress: 'In sviluppo',
    projectCompleted: 'Completato',
    viewProject: 'Visita il sito',
    viewCode: 'Codice sorgente',
  },
  en: {
    pageTitle: 'Marco Polato | Software developer',
    pageDescription:
      "Marco's portfolio: software development, tech project coordination and personal interests.",
    languageLabel: 'Select language',
    role: 'Software developer',
    heading: "Hi, I'm Marco.",
    introduction:
      "I develop software and I'm expanding my responsibilities into coordinating and managing tech projects.",
    interestsTitle: 'Outside of work',
    interests: ['Pokémon cards', 'LEGO', 'Travel', 'Sports'],
    statusTitle: 'Work in progress',
    statusDescription:
      "I'm building this space to share my experience, my projects and the things I enjoy.",
    contactsTitle: 'Contacts',
    darkThemeLabel: 'Dark theme',
    skipToContent: 'Skip to content',
    contactAction: 'Contact me',
    projectsTitle: 'Projects',
    projectsDescription:
      'A selection of the projects I have worked on and am currently working on.',
    projectRoleLabel: 'My contribution',
    projectInProgress: 'In progress',
    projectCompleted: 'Completed',
    viewProject: 'Visit website',
    viewCode: 'Source code',
  },
} satisfies Record<Locale, Messages>;
