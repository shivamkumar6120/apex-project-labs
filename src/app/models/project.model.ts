export type ProjectCategory =
  | 'AI/ML'
  | 'Data Science'
  | 'Web Dev'
  | 'App Dev'
  | 'Cybersecurity'
  | 'Blockchain'
  | 'IoT/Embedded';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  techStack: string[];
  price: number;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  deliverables: string[];
  features?: string[];
}

export const WHATSAPP_PHONE = '919209645820';
export const WHATSAPP_DISPLAY_PHONE = '+91 92096 45820';

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getProjectWhatsAppUrl(projectTitle: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(`Hi, I'm interested in ${projectTitle}`)}`;
}
