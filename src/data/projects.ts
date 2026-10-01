import type { Locale } from '../i18n/messages';
import portfolioCover from '../assets/projects/marco-website.png';
import type { ImageMetadata } from 'astro';

interface ProjectContent {
  description: string;
  role: string;
}

export interface Project {
  id: string;
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
    title: 'Marco Polato - Portfolio',
    technologies: ['Astro', 'TypeScript', 'CSS', 'GitHub Actions'],
    status: 'in-progress',
    demoUrl: '#',
    repositoryUrl: 'https://github.com/marcopolato/marco-website',
    content: {
      it: {
        description:
          'Portfolio personale multilingua, con temi chiaro e scuro e pubblicazione automatica su Vercel.',
        role: 'Progettazione dell’interfaccia, sviluppo e configurazione della pipeline CI.',
      },
      en: {
        description:
          'A multilingual personal portfolio with light and dark themes and automated deployment to Vercel.',
        role: 'Interface design, development and CI pipeline setup.',
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
