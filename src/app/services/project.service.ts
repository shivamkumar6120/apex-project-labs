import { Injectable } from '@angular/core';
import { Project, ProjectCategory } from '../models/project.model';
import { ALL_PROJECTS, PROJECT_CATEGORIES } from '../data/index';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly projects: Project[] = ALL_PROJECTS;
  readonly categories: ProjectCategory[] = PROJECT_CATEGORIES;

  getAllProjects(): Project[] {
    return [...this.projects];
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find((p) => p.id.toLowerCase() === id.toLowerCase());
  }

  getProjectsByCategory(category: string): Project[] {
    if (!category || category === 'All') {
      return this.getAllProjects();
    }
    return this.projects.filter((p) => p.category === category);
  }

  getRelatedProjects(currentProjectId: string, category: ProjectCategory, limit: number = 3): Project[] {
    return this.projects
      .filter((p) => p.id !== currentProjectId && p.category === category)
      .slice(0, limit);
  }
}
