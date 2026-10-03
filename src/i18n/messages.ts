export type Locale = 'it' | 'en';

interface Messages {
  activitiesTitle: string;
  backgroundAction: string;
  backToProjects: string;
  contactAction: string;
  contactsTitle: string;
  coordinatorSinceLabel: string;
  darkThemeLabel: string;
  educationInProgress: string;
  educationTitle: string;
  experienceCurrent: string;
  experienceNavLabel: string;
  experiencePresent: string;
  experienceTitle: string;
  experiencePageDescription: string;
  exploreProjectsAction: string;
  heading: string;
  homeNavLabel: string;
  interests: string[];
  interestsTitle: string;
  introduction: string;
  languageLabel: string;
  learningsTitle: string;
  navigationLabel: string;
  objectiveTitle: string;
  pageMetaContentDescription: string;
  pageTitle: string;
  portraitAlt: string;
  professionalExperienceTitle: string;
  projectCompleted: string;
  projectInProgress: string;
  projectLinksLabel: string;
  projectPageTitle: string;
  projectRoleLabel: string;
  projectStatusLabel: string;
  projectsDescription: string;
  projectsTitle: string;
  role: string;
  skipToContent: string;
  statusDescription: string;
  statusTitle: string;
  technologiesLabel: string;
  viewCode: string;
  viewProject: string;
  viewProjectDetails: string;
}

export const messages = {
  it: {
    activitiesTitle: 'Attività svolte e scelte tecniche',
    backgroundAction: 'Il mio percorso',
    backToProjects: 'Torna ai progetti',
    contactAction: 'Contattami',
    contactsTitle: 'Contatti',
    coordinatorSinceLabel: 'Responsabilità di coordinamento da',
    darkThemeLabel: 'Tema scuro',
    educationTitle: 'Formazione e crescita',
    educationInProgress: 'In corso',
    experienceCurrent: 'Attuale',
    experiencePageDescription:
      'Il mio percorso nello sviluppo web e mobile, tra esperienza professionale, formazione e responsabilità di coordinamento.',
    experiencePresent: 'presente',
    experienceNavLabel: 'Esperienza',
    experienceTitle: 'Esperienza e percorso',
    exploreProjectsAction: 'Esplora i progetti',
    heading: 'Marco Polato',
    homeNavLabel: 'Home',
    interests: ['Carte Pokémon', 'LEGO', 'Viaggi', 'Sport'],
    interestsTitle: 'Fuori dal lavoro',
    introduction:
      'Sviluppo applicazioni web e mobile. Lavoro con il cliente per chiarire requisiti e priorità e organizzo le attività del team.',
    languageLabel: 'Seleziona la lingua',
    learningsTitle: 'Cosa ho imparato',
    navigationLabel: 'Navigazione principale',
    objectiveTitle: 'Obiettivo',
    pageMetaContentDescription:
      'Il portfolio di Marco: sviluppo software, coordinamento di progetti tech e passioni personali.',
    pageTitle: 'Marco Polato | Sviluppatore software',
    portraitAlt: 'Foto di Marco Polato',
    professionalExperienceTitle: 'Esperienza professionale',
    projectCompleted: 'Completato',
    projectInProgress: 'In sviluppo',
    projectLinksLabel: 'Collegamenti del progetto',
    projectPageTitle: 'Dettaglio progetto',
    projectRoleLabel: 'Il mio contributo',
    projectStatusLabel: 'Stato',
    projectsDescription:
      'Una selezione dei progetti a cui ho lavorato e a cui sto lavorando.',
    projectsTitle: 'Progetti',
    role: 'Software Developer, con responsabilità di coordinamento tecnico',
    skipToContent: 'Vai al contenuto',
    statusDescription:
      'Sto costruendo questo spazio per raccontare le mie esperienze, i miei progetti e quello che mi appassiona.',
    statusTitle: 'Work in progress',
    technologiesLabel: 'Tecnologie',
    viewCode: 'Codice sorgente',
    viewProject: 'Visita il sito',
    viewProjectDetails: 'Scopri il progetto',
  },
  en: {
    activitiesTitle: 'Work done and technical decisions',
    backgroundAction: 'My background',
    backToProjects: 'Back to projects',
    contactAction: 'Contact me',
    contactsTitle: 'Contacts',
    coordinatorSinceLabel: 'Coordination responsibilities since',
    darkThemeLabel: 'Dark theme',
    educationInProgress: 'In progress',
    educationTitle: 'Education & development',
    experienceCurrent: 'Current',
    experienceNavLabel: 'Experience',
    experiencePageDescription:
      'My background in web and mobile development, including professional experience, education and coordination responsibilities.',
    experiencePresent: 'present',
    experienceTitle: 'Experience & background',
    exploreProjectsAction: 'Explore projects',
    heading: 'Marco Polato',
    homeNavLabel: 'Home',
    interests: ['Pokémon cards', 'LEGO', 'Travel', 'Sports'],
    interestsTitle: 'Outside of work',
    introduction:
      'I develop web and mobile applications. I work with the client to clarify requirements and priorities and organize the team’s activities.',
    languageLabel: 'Select language',
    learningsTitle: 'What I learned',
    navigationLabel: 'Main navigation',
    objectiveTitle: 'Objective',
    pageMetaContentDescription:
      "Marco's portfolio: software development, tech project coordination and personal interests.",
    pageTitle: 'Marco Polato | Software developer',
    portraitAlt: 'Picture of Marco Polato',
    professionalExperienceTitle: 'Professional experience',
    projectCompleted: 'Completed',
    projectInProgress: 'In progress',
    projectLinksLabel: 'Project links',
    projectPageTitle: 'Project details',
    projectRoleLabel: 'My contribution',
    projectStatusLabel: 'Status',
    projectsDescription:
      'A selection of the projects I have worked on and am currently working on.',
    projectsTitle: 'Projects',
    role: 'Software Developer with technical coordination responsibilities',
    skipToContent: 'Skip to content',
    statusDescription:
      "I'm building this space to share my experience, my projects and the things I enjoy.",
    statusTitle: 'Work in progress',
    technologiesLabel: 'Technologies',
    viewCode: 'Source code',
    viewProject: 'Visit website',
    viewProjectDetails: 'View project details',
  },
} satisfies Record<Locale, Messages>;
