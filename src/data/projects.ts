import type { Locale } from '../i18n/messages';
import portfolioCover from '../assets/projects/marco-website.webp';
import molenaHome from '../assets/projects/molena-home.webp';
import molenaReviews from '../assets/projects/molena-reviews.webp';
import molenaContact from '../assets/projects/molena-contact.webp';
import trackDexDashboard from '../assets/projects/trackdex-dashboard.webp';
import trackDexCollection from '../assets/projects/trackdex-collection.webp';
import trackDexSearch from '../assets/projects/trackdex-search.webp';
import kuamaLogo from '../assets/projects/logos/kuama.webp';
import reactLogo from '../assets/projects/logos/react.svg?url&no-inline';
import svelteLogo from '../assets/projects/logos/svelte.svg?url&no-inline';
import flutterLogo from '../assets/projects/logos/flutter.svg?url&no-inline';
import dartLogo from '../assets/projects/logos/dart.svg?url&no-inline';
import astroLogo from '../assets/projects/logos/astro.svg?url&no-inline';
import cssLogo from '../assets/projects/logos/css.svg?url&no-inline';
import githubLogo from '../assets/projects/logos/github.svg?url&no-inline';
import typescriptLogo from '../assets/projects/logos/typescript.svg?url&no-inline';
import figmaLogo from '../assets/projects/logos/figma.svg?url&no-inline';
import wordpressLogo from '../assets/projects/logos/wordpress.svg?url&no-inline';
import type { ImageMetadata } from 'astro';

interface ProjectContent {
  title: string;
  description: string;
  role: string;
  objective: string;
  activities: string[];
  learnings: string[];
  nextSteps?: string[];
}

interface ProjectImage {
  src: ImageMetadata;
  alt: Record<Locale, string>;
}

export type ProjectLogoAsset = string | ImageMetadata;

interface ProjectBranding {
  company?: { name: string; logo: ProjectLogoAsset };
  technologyLogos: Partial<Record<string, ProjectLogoAsset>>;
}

export interface Project {
  id: string;
  slug: string;
  technologies: string[];
  status: 'in-progress' | 'completed';
  content: Record<Locale, ProjectContent>;
  demoUrl?: string;
  repositoryUrl?: string;
  image?: ProjectImage;
  branding?: ProjectBranding;
  gallery?: ProjectImage[];
}

const trackDexScreenshots = [
  {
    src: trackDexDashboard,
    alt: {
      it: 'Dashboard di TrackDex con grafico del valore della collezione nel tempo',
      en: 'TrackDex dashboard with a chart of collection value over time',
    },
  },
  {
    src: trackDexCollection,
    alt: {
      it: 'Schermata della collezione di TrackDex con carte raggruppate per set',
      en: 'TrackDex collection screen with cards grouped by set',
    },
  },
  {
    src: trackDexSearch,
    alt: {
      it: 'Ricerca di TrackDex con un catalogo di carte e prodotti Pokémon',
      en: 'TrackDex search screen for browsing Pokémon cards and products',
    },
  },
] satisfies ProjectImage[];

const molenaScreenshots = [
  {
    src: molenaHome,
    alt: {
      it: 'Homepage di Molena Bike Service con la presentazione del negozio e dei servizi',
      en: 'Molena Bike Service homepage introducing the shop and its services',
    },
  },
  {
    src: molenaReviews,
    alt: {
      it: 'Sezioni del sito di Molena Bike Service dedicate alle recensioni e alle riparazioni',
      en: 'Reviews and bicycle repair sections of the Molena Bike Service website',
    },
  },
  {
    src: molenaContact,
    alt: {
      it: 'Sezione contatti di Molena Bike Service con mappa e orari del negozio',
      en: 'Molena Bike Service contact section with a map and opening hours',
    },
  },
] satisfies ProjectImage[];

const kuamaCompany = { name: 'Kuama', logo: kuamaLogo };
const kuamaMobileBranding = {
  company: kuamaCompany,
  technologyLogos: { Flutter: flutterLogo, Dart: dartLogo },
};

export const projects = [
  {
    id: 'marco-website',
    slug: 'marco-website',
    technologies: ['Astro', 'TypeScript', 'CSS', 'GitHub Actions'],
    branding: {
      technologyLogos: {
        Astro: astroLogo,
        TypeScript: typescriptLogo,
        CSS: cssLogo,
        'GitHub Actions': githubLogo,
      },
    },
    status: 'in-progress',
    repositoryUrl: 'https://github.com/marcopolato/marco-website',
    content: {
      it: {
        title: 'Marco Polato - Portfolio',
        description:
          'Portfolio personale multilingua, con temi chiaro e scuro e pubblicazione automatica su Vercel.',
        role: 'Progettazione dell’interfaccia, sviluppo del sito e configurazione della pipeline CI.',
        objective:
          'Costruire uno spazio personale per presentare esperienza, progetti e interessi, accompagnando l’evoluzione dallo sviluppo software al coordinamento di progetti tech.',
        activities: [
          'Sviluppo di un sito statico con Astro, con componenti condivisi per layout, homepage e card dei progetti.',
          'Gestione dei contenuti in TypeScript e Git, con italiano senza prefisso e inglese sotto /en/.',
          'Realizzazione dei temi scuro e chiaro con variabili CSS native e preferenza salvata nel browser.',
          'Uso delle immagini locali ottimizzate da Astro e configurazione dei controlli di formattazione, tipi e build in GitHub Actions.',
        ],
        learnings: [
          'Organizzare dati, traduzioni e componenti riutilizzabili separando i contenuti dalla presentazione.',
          'Generare pagine statiche dai dati con getStaticPaths() e mantenere coerenti i collegamenti tra le lingue.',
          'Curare immagini responsive, struttura dei titoli e focus visibile con HTML semantico e CSS nativo.',
        ],
        nextSteps: [
          'Aggiungere altri progetti e approfondire il racconto delle esperienze.',
          'Aggiornare contenuti e copertina mentre il portfolio evolve.',
          'Valutare le Content Collections quando quantità e lunghezza dei contenuti lo richiederanno.',
        ],
      },
      en: {
        title: 'Marco Polato - Portfolio',
        description:
          'A multilingual personal portfolio with light and dark themes and automated deployment to Vercel.',
        role: 'Interface design, website development and CI pipeline setup.',
        objective:
          'Build a personal space to present experience, projects and interests, supporting the evolution from software development to tech project coordination.',
        activities: [
          'Building a static Astro site with shared components for the layout, homepage and project cards.',
          'Managing content in TypeScript and Git, with Italian at the root and English under /en/.',
          'Implementing dark and light themes with native CSS variables and a preference saved in the browser.',
          'Using local images optimized by Astro and configuring formatting, type and build checks in GitHub Actions.',
        ],
        learnings: [
          'Organizing data, translations and reusable components to separate content from presentation.',
          'Generating static pages from data with getStaticPaths() and keeping links consistent across languages.',
          'Handling responsive images, heading structure and visible focus with semantic HTML and native CSS.',
        ],
        nextSteps: [
          'Add more projects and expand the account of my experience.',
          'Update content and the cover image as the portfolio evolves.',
          'Consider Content Collections when the amount and length of content call for them.',
        ],
      },
    },
    image: {
      src: portfolioCover,
      alt: {
        it: 'Homepage del portfolio di Marco Polato in tema scuro',
        en: "Marco Polato's portfolio homepage in dark mode",
      },
    },
  },
  {
    id: 'trackdex',
    slug: 'trackdex',
    technologies: ['Figma', 'Flutter'],
    branding: {
      technologyLogos: {
        Flutter: flutterLogo,
        Figma: figmaLogo,
      },
    },
    status: 'in-progress',
    image: trackDexScreenshots[0],
    gallery: trackDexScreenshots,
    content: {
      it: {
        title: 'TrackDex',
        description:
          'App Flutter per catalogare carte e prodotti Pokémon e seguire l’andamento del valore della collezione.',
        role: 'Progettazione dell’interfaccia in Figma e analisi delle funzionalità per guidare lo sviluppatore nell’implementazione dell’app.',
        objective:
          'Riunire in un’unica app il catalogo, la gestione della collezione e una panoramica del suo valore nel tempo.',
        activities: [
          'Progettazione dei flussi per consultare la collezione, cercare carte e prodotti e leggerne il valore dalla schermata iniziale.',
          'Definizione delle funzionalità e preparazione dei prototipi in Figma per il passaggio allo sviluppo.',
        ],
        learnings: [
          'Collegare una bozza Figma e un progetto Flutter a un agente AI per accelerare la traduzione delle schermate di design in interfacce dell’app.',
        ],
      },
      en: {
        title: 'TrackDex',
        description:
          'A Flutter app for cataloging Pokémon cards and products and tracking changes in the value of a collection.',
        role: 'Designed the interface in Figma and analyzed features to guide the developer implementing the app.',
        objective:
          'Bring catalog search, collection management, and a view of collection value over time into one app.',
        activities: [
          'Designed flows for browsing the collection, searching for cards and products, and checking collection value on the home screen.',
          'Defined features and prepared Figma prototypes for development handoff.',
        ],
        learnings: [
          'Connected a Figma draft and a Flutter project to an AI agent to speed up the conversion of designs into app interfaces.',
        ],
      },
    },
  },
  {
    id: 'molena-bike-service',
    slug: 'molena-bike-service',
    technologies: ['WordPress'],
    branding: {
      technologyLogos: {
        WordPress: wordpressLogo,
      },
    },
    status: 'completed',
    demoUrl: 'https://www.molenabike.it/',
    image: molenaScreenshots[0],
    gallery: molenaScreenshots,
    content: {
      it: {
        title: 'Sito WordPress per Molena Bike Service',
        description: 'Sito vetrina per un negozio di biciclette.',
        role: 'Progettazione dell’interfaccia, realizzazione del sito da zero, pubblicazione e manutenzione.',
        objective:
          'Dare al negozio una presenza online per presentare l’attività e i suoi servizi.',
        activities: [
          'Organizzazione dei contenuti e progettazione dello stile di pagine e sezioni in WordPress.',
          'Pubblicazione del sito su un servizio di hosting e manutenzione con aggiornamenti periodici.',
        ],
        learnings: [
          'Gestire l’intero ciclo di un sito WordPress, dalla costruzione delle pagine alla pubblicazione e agli aggiornamenti dopo il lancio.',
        ],
      },
      en: {
        title: 'WordPress website for Molena Bike Service',
        description: 'A website for a bicycle shop.',
        role: 'Designed the interface, built the site from scratch, published it, and handled maintenance.',
        objective:
          'Give the shop an online presence where visitors can learn about the business and its services.',
        activities: [
          'Organized the content and styled the pages and sections in WordPress.',
          'Published the site on a hosting service and maintained it with regular updates.',
        ],
        learnings: [
          'Managed the full lifecycle of a WordPress site, from building its pages to publishing it and applying updates after launch.',
        ],
      },
    },
  },
  {
    id: 'financial-web-applications',
    slug: 'financial-web-applications',
    technologies: ['React', 'Svelte'],
    status: 'completed',
    branding: {
      company: kuamaCompany,
      technologyLogos: { React: reactLogo, Svelte: svelteLogo },
    },
    content: {
      it: {
        title: 'Applicazioni web per il settore finanziario',
        description:
          'Applicazioni web sviluppate in Kuama per un cliente internazionale del settore finanziario.',
        role: 'Sviluppo di applicazioni e analisi dei requisiti con un team internazionale.',
        objective:
          'Realizzare applicazioni web a supporto dei servizi digitali del cliente.',
        activities: [
          'Contributo allo sviluppo di applicazioni web con React e Svelte, dai requisiti all’implementazione.',
          'Traduzione dei requisiti del cliente in specifiche e attività di sviluppo.',
        ],
        learnings: [
          'Sviluppare un’applicazione web lungo l’intero ciclo di lavoro e collaborare in inglese con colleghi di paesi diversi.',
        ],
      },
      en: {
        title: 'Web applications for financial services',
        description:
          'Web applications built at Kuama for an international financial services client.',
        role: 'Developed applications and analyzed requirements with an international team.',
        objective:
          'Build web applications to support the client’s digital services.',
        activities: [
          'Contributed to web application development with React and Svelte, from requirements through implementation.',
          'Translated client requirements into specifications and development tasks.',
        ],
        learnings: [
          'Worked through the full development cycle of a web application and collaborated in English with colleagues from different countries.',
        ],
      },
    },
  },
  {
    id: 'appointment-booking-app',
    slug: 'appointment-booking-app',
    technologies: ['Flutter', 'Dart'],
    status: 'completed',
    branding: kuamaMobileBranding,
    content: {
      it: {
        title: 'App mobile per la prenotazione di visite',
        description:
          'App mobile sviluppata in Kuama per prenotare appuntamenti con professionisti sanitari.',
        role: 'Sviluppo dell’app in Flutter, implementazione delle schermate e correzione dei bug.',
        objective:
          'Consentire agli utenti di prenotare appuntamenti sanitari da mobile.',
        activities: [
          'Sviluppo dell’app a partire dall’impostazione iniziale del progetto Flutter.',
          'Implementazione delle schermate a partire dai design forniti e gestione dello stato dell’applicazione.',
        ],
        learnings: [
          'Impostare un’app Flutter da zero e tradurre i design in schermate funzionanti, integrando nuove funzionalità e risolvendo problemi durante lo sviluppo.',
        ],
      },
      en: {
        title: 'Mobile app for booking healthcare appointments',
        description:
          'A mobile app built at Kuama for booking appointments with healthcare professionals.',
        role: 'Developed the Flutter app, implemented screens, and fixed bugs.',
        objective: 'Let users book healthcare appointments from their phones.',
        activities: [
          'Developed the app from the initial Flutter project setup.',
          'Implemented the supplied designs and managed application state.',
        ],
        learnings: [
          'Set up a Flutter app from scratch and turned designs into working screens while adding features and resolving development issues.',
        ],
      },
    },
  },
  {
    id: 'farm-operations-app',
    slug: 'farm-operations-app',
    technologies: ['Flutter', 'Dart'],
    status: 'completed',
    branding: kuamaMobileBranding,
    content: {
      it: {
        title: 'App mobile per la gestione di attività agricole',
        description:
          'App mobile agritech sviluppata in Kuama per gestire attività agricole.',
        role: 'Coordinamento dello sviluppo e contributo diretto al codice Flutter.',
        objective:
          'Fornire uno strumento mobile per gestire le attività operative in ambito agricolo.',
        activities: [
          'Organizzazione del lavoro di sviluppo e implementazione dell’app insieme a un altro sviluppatore.',
          'Realizzazione delle interfacce, gestione dello stato e dei dati dell’app, e correzione dei bug.',
        ],
        learnings: [
          'Portare avanti lo sviluppo di un’app Flutter mentre coordinavo il lavoro tecnico e contribuivo all’implementazione.',
        ],
      },
      en: {
        title: 'Mobile app for farm operations',
        description:
          'An agritech mobile app built at Kuama to manage farming activities.',
        role: 'Coordinated development and contributed directly to the Flutter codebase.',
        objective:
          'Provide a mobile tool for managing day-to-day farming activities.',
        activities: [
          'Organized development work and built the app alongside another developer.',
          'Implemented interfaces, handled application state and data, and fixed bugs.',
        ],
        learnings: [
          'Led the technical work on a Flutter app while continuing to contribute to its implementation.',
        ],
      },
    },
  },
] satisfies Project[];
