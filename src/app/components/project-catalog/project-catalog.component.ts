import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectService } from '../../services/project.service';
import { Project, ProjectCategory } from '../../models/project.model';

@Component({
  selector: 'app-project-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, ProjectCardComponent],
  templateUrl: './project-catalog.component.html',
  styleUrl: './project-catalog.component.scss'
})
export class ProjectCatalogComponent implements OnInit {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  categories: (ProjectCategory | 'All Categories')[] = [];

  selectedCategory: string = 'All Categories';
  searchQuery: string = '';
  sortBy: string = 'featured';

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
    this.categories = ['All Categories', ...this.projectService.categories];
    this.applyFilters();
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onSortChange(): void {
    this.applyFilters();
  }

  resetFilters(): void {
    this.selectedCategory = 'All Categories';
    this.searchQuery = '';
    this.sortBy = 'featured';
    this.applyFilters();
  }

  private applyFilters(): void {
    let result = [...this.projects];

    // Filter by Category
    if (this.selectedCategory && this.selectedCategory !== 'All Categories') {
      result = result.filter((p) => p.category === this.selectedCategory);
    }

    // Filter by Search Query
    if (this.searchQuery.trim()) {
      const q = this.searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.techStack.some((t) => t.toLowerCase().includes(q))
      );
    }

    // Sort
    if (this.sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'title') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    this.filteredProjects = result;
  }
}
