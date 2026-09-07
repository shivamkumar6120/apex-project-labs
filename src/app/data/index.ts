import { Project, ProjectCategory } from '../models/project.model';
import { AI_ML_PROJECTS } from './ai-ml.data';
import { DATA_SCIENCE_PROJECTS } from './data-science.data';
import { WEB_DEV_PROJECTS } from './web-dev.data';
import { APP_DEV_PROJECTS } from './app-dev.data';
import { CYBERSECURITY_PROJECTS } from './cybersecurity.data';
import { BLOCKCHAIN_PROJECTS } from './blockchain.data';

export * from './ai-ml.data';
export * from './data-science.data';
export * from './web-dev.data';
export * from './app-dev.data';
export * from './cybersecurity.data';
export * from './blockchain.data';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'AI/ML',
  'Data Science',
  'Web Dev',
  'App Dev',
  'Cybersecurity',
  'Blockchain',
];

export const ALL_PROJECTS: Project[] = [
  ...AI_ML_PROJECTS,
  ...DATA_SCIENCE_PROJECTS,
  ...WEB_DEV_PROJECTS,
  ...APP_DEV_PROJECTS,
  ...CYBERSECURITY_PROJECTS,
  ...BLOCKCHAIN_PROJECTS,
];

// Alias for seamless backward compatibility
export const PROJECTS: Project[] = ALL_PROJECTS;
