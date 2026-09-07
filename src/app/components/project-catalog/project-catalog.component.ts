import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectService } from '../../services/project.service';
import { 
  Project, 
  ProjectCategory, 
  getProjectWhatsAppUrl, 
  getCatalogCustomProjectWhatsAppUrl 
} from '../../models/project.model';

@Component({
  selector: 'app-project-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ProjectCardComponent],
  templateUrl: './project-catalog.component.html',
  styleUrl: './project-catalog.component.scss'
})
export class ProjectCatalogComponent implements OnInit {
  projects: Project[] = [];
  displayedProjects: Project[] = [];
  categories: (ProjectCategory | 'All Categories')[] = [];

  selectedCategory: string = 'All Categories';
  searchQuery: string = '';
  sortBy: string = 'featured';

  readonly customProjectWhatsAppUrl = getCatalogCustomProjectWhatsAppUrl();

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
    this.categories = ['All Categories', ...this.projectService.categories];
    this.updateCatalogDisplay();
  }

  get isSearching(): boolean {
    return this.searchQuery.trim().length > 0;
  }

  get isCategoryFiltered(): boolean {
    return this.selectedCategory !== 'All Categories';
  }

  get isListView(): boolean {
    // Both search mode AND category filter mode use the compact list view
    return this.isSearching || this.isCategoryFiltered;
  }

  get catalogHeading(): string {
    if (this.isSearching) {
      return `Search Results (${this.displayedProjects.length})`;
    }
    if (this.isCategoryFiltered) {
      return `${this.selectedCategory} Projects (${this.displayedProjects.length})`;
    }
    return 'Featured Projects';
  }

  get catalogSubtitle(): string {
    if (this.isSearching) {
      return `Found ${this.displayedProjects.length} result${this.displayedProjects.length === 1 ? '' : 's'} matching "${this.searchQuery.trim()}".`;
    }
    if (this.isCategoryFiltered) {
      return `Full list of ready-to-submit ${this.selectedCategory} projects with verified source code, report, and quick setup support.`;
    }
    return 'A curated sample of 1–2 featured projects per category. Select any category above to view the full domain list in detail.';
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.updateCatalogDisplay();
  }

  onSearchChange(): void {
    this.updateCatalogDisplay();
  }

  onSortChange(): void {
    this.updateCatalogDisplay();
  }

  resetFilters(): void {
    this.selectedCategory = 'All Categories';
    this.searchQuery = '';
    this.sortBy = 'featured';
    this.updateCatalogDisplay();
  }

  getProjectWhatsAppUrl(title: string): string {
    return getProjectWhatsAppUrl(title);
  }

  getCategoryBadgeClass(category: string): string {
    switch (category) {
      case 'AI/ML':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Data Science':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      case 'Web Dev':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'App Dev':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200';
      case 'Cybersecurity':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Blockchain':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'IoT/Embedded':
        return 'bg-teal-50 text-teal-700 border-teal-200';
      default:
        return 'bg-blue-50 text-blue-700 border-blue-200';
    }
  }

  private updateCatalogDisplay(): void {
    // 1. If searching, filter across all projects (or current category if selected)
    if (this.isSearching) {
      const q = this.searchQuery.toLowerCase().trim();
      let matches = this.projects.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q))
      );

      if (this.isCategoryFiltered) {
        matches = matches.filter((p) => p.category === this.selectedCategory);
      }

      this.displayedProjects = this.applySorting(matches);
      return;
    }

    // 2. If category filter is applied (and not searching), show full list of that category
    if (this.isCategoryFiltered) {
      const categoryProjects = this.projects.filter(
        (p) => p.category === this.selectedCategory
      );
      this.displayedProjects = this.applySorting(categoryProjects);
      return;
    }

    // 3. Default view: curated sample (1-2 featured projects per category)
    const sampleProjects: Project[] = [];
    for (const cat of this.projectService.categories) {
      const projectsInCat = this.projects.filter((p) => p.category === cat);
      // Sample 1-2 featured projects per category
      sampleProjects.push(...projectsInCat.slice(0, 2));
    }

    this.displayedProjects = this.applySorting(sampleProjects);
  }

  private applySorting(list: Project[]): Project[] {
    const result = [...list];
    if (this.sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    return result;
  }
}
