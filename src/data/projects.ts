import type { Locale } from '../i18n/messages';
import portfolioCover from '../assets/projects/marco-website.png';
import type { ImageMetadata } from 'astro';

interface ProjectContent {
  description: string;
  role: string;
  objective: string;
  activities: string[];
  learnings: string[];
  nextSteps: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  technologies: string[];
  status: 'in-progress' | 'completed';
  content: Record<Locale, ProjectContent>;
  demoUrl?: string;
  repositoryUrl?: string;
  image?: {
    src: ImageMetadata;
    alt: Record<Locale, string>;
  };
}

export const projects = [
  {
    id: 'marco-website',
    slug: 'marco-website',
    title: 'Marco Polato - Portfolio',
    technologies: ['Astro', 'TypeScript', 'CSS', 'GitHub Actions'],
    status: 'in-progress',
    repositoryUrl: 'https://github.com/marcopolato/marco-website',
    content: {
      it: {
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
] satisfies Project[];
