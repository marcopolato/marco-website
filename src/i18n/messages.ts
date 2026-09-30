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
  switchToLight: string;
  switchToDark: string;
  skipToContent: string;
  contactAction: string;
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
    switchToLight: 'Attiva tema chiaro',
    switchToDark: 'Attiva tema scuro',
    skipToContent: 'Vai al contenuto',
    contactAction: 'Contattami',
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
    switchToLight: 'Switch to light theme',
    switchToDark: 'Switch to dark theme',
    skipToContent: 'Skip to content',
    contactAction: 'Contact me',
  },
} satisfies Record<Locale, Messages>;
