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
  viewProjectDetails: string;
  backToProjects: string;
  technologiesLabel: string;
  projectStatusLabel: string;
  objectiveTitle: string;
  activitiesTitle: string;
  learningsTitle: string;
  projectLinksLabel: string;
  projectPageTitle: string;
  navigationLabel: string;
  experienceNavLabel: string;
  experienceTitle: string;
  professionalExperienceTitle: string;
  educationTitle: string;
  experiencePresent: string;
  experienceCurrent: string;
  educationInProgress: string;
  coordinatorSinceLabel: string;
}

export const messages = {
  it: {
    pageTitle: 'Marco Polato | Sviluppatore software',
    pageDescription:
      'Il portfolio di Marco: sviluppo software, coordinamento di progetti tech e passioni personali.',
    languageLabel: 'Seleziona la lingua',
    role: 'Sviluppatore software · Coordinamento progetti tech',
    heading: 'Ciao, sono Marco.',
    introduction:
      'Sviluppo applicazioni web e mobile e, da gennaio 2026, coordino le attività di un team di due sviluppatori. Lavoro con il cliente per trasformare i requisiti in task, sprint e priorità di sviluppo.',
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
    viewProjectDetails: 'Scopri il progetto',
    backToProjects: 'Torna ai progetti',
    technologiesLabel: 'Tecnologie',
    projectStatusLabel: 'Stato',
    objectiveTitle: 'Obiettivo',
    activitiesTitle: 'Attività svolte e scelte tecniche',
    learningsTitle: 'Cosa ho imparato',
    projectLinksLabel: 'Collegamenti del progetto',
    projectPageTitle: 'Dettaglio progetto',
    navigationLabel: 'Navigazione principale',
    experienceNavLabel: 'Esperienza',
    experienceTitle: 'Esperienza e percorso',
    professionalExperienceTitle: 'Esperienza professionale',
    educationTitle: 'Formazione e crescita',
    experiencePresent: 'presente',
    experienceCurrent: 'Attuale',
    educationInProgress: 'In corso',
    coordinatorSinceLabel: 'Responsabilità di coordinamento da',
  },
  en: {
    pageTitle: 'Marco Polato | Software developer',
    pageDescription:
      "Marco's portfolio: software development, tech project coordination and personal interests.",
    languageLabel: 'Select language',
    role: 'Software developer · Tech project coordination',
    heading: "Hi, I'm Marco.",
    introduction:
      'I develop web and mobile applications and, since January 2026, I have coordinated the activities of a team of two developers. I work with the client to transform requirements into tasks, sprints and development priorities.',
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
    viewProjectDetails: 'View project details',
    backToProjects: 'Back to projects',
    technologiesLabel: 'Technologies',
    projectStatusLabel: 'Status',
    objectiveTitle: 'Objective',
    activitiesTitle: 'Work done and technical decisions',
    learningsTitle: 'What I learned',
    projectLinksLabel: 'Project links',
    projectPageTitle: 'Project details',
    navigationLabel: 'Main navigation',
    experienceNavLabel: 'Experience',
    experienceTitle: 'Experience & background',
    professionalExperienceTitle: 'Professional experience',
    educationTitle: 'Education & development',
    experiencePresent: 'present',
    experienceCurrent: 'Current',
    educationInProgress: 'In progress',
    coordinatorSinceLabel: 'Coordination responsibilities since',
  },
} satisfies Record<Locale, Messages>;
