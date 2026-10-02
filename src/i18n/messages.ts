export type Locale = 'it' | 'en';

interface Messages {
  activitiesTitle: string;
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
    homeNavLabel: 'Home',
    experienceNavLabel: 'Esperienza',
    experienceTitle: 'Esperienza e percorso',
    interests: ['Carte Pokémon', 'LEGO', 'Viaggi', 'Sport'],
    interestsTitle: 'Fuori dal lavoro',
    introduction:
      'Sviluppo applicazioni web e mobile e, da gennaio 2026, coordino le attività di un team di due sviluppatori. Lavoro con il cliente per trasformare i requisiti in task, sprint e priorità di sviluppo.',
    heading: 'Ciao, sono Marco.',
    languageLabel: 'Seleziona la lingua',
    learningsTitle: 'Cosa ho imparato',
    navigationLabel: 'Navigazione principale',
    objectiveTitle: 'Obiettivo',
    pageTitle: 'Marco Polato | Sviluppatore software',
    pageMetaContentDescription:
      'Il portfolio di Marco: sviluppo software, coordinamento di progetti tech e passioni personali.',
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
    role: 'Sviluppatore software · Coordinamento progetti tech',
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
    heading: "Hi, I'm Marco.",
    homeNavLabel: 'Home',
    interests: ['Pokémon cards', 'LEGO', 'Travel', 'Sports'],
    interestsTitle: 'Outside of work',
    introduction:
      'I develop web and mobile applications and, since January 2026, I have coordinated the activities of a team of two developers. I work with the client to transform requirements into tasks, sprints and development priorities.',
    languageLabel: 'Select language',
    learningsTitle: 'What I learned',
    navigationLabel: 'Main navigation',
    objectiveTitle: 'Objective',
    pageMetaContentDescription:
      "Marco's portfolio: software development, tech project coordination and personal interests.",
    pageTitle: 'Marco Polato | Software developer',
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
    role: 'Software developer · Tech project coordination',
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
