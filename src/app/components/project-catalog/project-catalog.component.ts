import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { ProjectService } from '../../services/project.service';
import { 
  Project, 
  getProjectWhatsAppUrl, 
  getCatalogCustomProjectWhatsAppUrl 
} from '../../models/project.model';

export interface CategoryTile {
  name: string;
  title: string;
  description: string;
  icon: string;
  badgeBg: string;
  statusTag?: string;
  projectCount: number;
}

@Component({
  selector: 'app-project-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ProjectCardComponent],
  templateUrl: './project-catalog.component.html',
  styleUrl: './project-catalog.component.scss'
})
export class ProjectCatalogComponent implements OnInit, OnChanges {
  /** When set by a parent (e.g. ProjectsPage), the catalog initializes with this category filter */
  @Input() initialCategory: string = '';

  projects: Project[] = [];
  displayedProjects: Project[] = [];
  categories: string[] = [];
  categoryTiles: CategoryTile[] = [];

  readonly sortOptions = [
    { value: 'featured', label: 'Featured First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'title', label: 'Alphabetical (A–Z)' }
  ];

  selectedCategory: string = 'Featured';
  searchQuery: string = '';
  sortBy: string = 'featured';

  // Pagination state
  readonly pageSize: number = 10;
  currentPage: number = 1;

  readonly customProjectWhatsAppUrl = getCatalogCustomProjectWhatsAppUrl();

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getAllProjects();
    this.categories = ['Featured', 'All Categories', ...this.projectService.categories];
    this.initializeCategoryTiles();
    this.applyInitialCategory();
    this.updateCatalogDisplay();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialCategory'] && !changes['initialCategory'].firstChange) {
      this.applyInitialCategory();
      this.updateCatalogDisplay();
    }
  }

  private applyInitialCategory(): void {
    if (this.initialCategory) {
      this.selectedCategory = this.initialCategory;
      this.currentPage = 1;
      this.searchQuery = '';
      this.sortBy = 'featured';
    }
  }

  get isSearching(): boolean {
    return this.searchQuery.trim().length > 0;
  }

  get isCategoryFiltered(): boolean {
    return this.selectedCategory !== 'Featured' && this.selectedCategory !== 'All Categories';
  }

  get isAllCategories(): boolean {
    return this.selectedCategory === 'All Categories';
  }

  get isListView(): boolean {
    // Both search mode, specific category mode, and "All Categories" use the list view
    return this.isSearching || this.isCategoryFiltered || this.isAllCategories;
  }

  formatProjectCount(count: number): string {
    if (count < 10) return `${count}`;
    return `${Math.floor(count / 10) * 10}+`;
  }

  get catalogHeading(): string {
    if (this.isSearching) {
      return `Search Results (${this.displayedProjects.length})`;
    }
    if (this.isCategoryFiltered) {
      return `${this.selectedCategory} Projects (${this.formatProjectCount(this.displayedProjects.length)} Projects)`;
    }
    if (this.isAllCategories) {
      return `All Engineering Projects (${this.formatProjectCount(this.displayedProjects.length)} Projects)`;
    }
    return 'Featured Projects';
  }

  get catalogSubtitle(): string {
    if (this.isSearching) {
      return `Found ${this.displayedProjects.length} result${this.displayedProjects.length === 1 ? '' : 's'} matching "${this.searchQuery.trim()}".`;
    }
    if (this.isCategoryFiltered) {
      return `Full catalog of industry-grade ${this.selectedCategory} projects with verified source code, architecture reports, and setup support.`;
    }
    if (this.isAllCategories) {
      return 'Complete catalog across all engineering domains with verified source code, architecture reports, and setup support.';
    }
    return 'A curated showcase featuring 1 signature project from each engineering domain. Select any category above to browse the complete catalog.';
  }

  // Pagination getters
  get totalPages(): number {
    return Math.ceil(this.displayedProjects.length / this.pageSize) || 1;
  }

  get pagedProjects(): Project[] {
    if (!this.isListView) {
      return this.displayedProjects;
    }
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.displayedProjects.slice(startIndex, startIndex + this.pageSize);
  }

  get pageStartIndex(): number {
    if (this.displayedProjects.length === 0) return 0;
    return (this.currentPage - 1) * this.pageSize + 1;
  }

  get pageEndIndex(): number {
    return Math.min(this.currentPage * this.pageSize, this.displayedProjects.length);
  }

  getPageNumbers(): (number | string)[] {
    const total = this.totalPages;
    if (total <= 7) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    const current = this.currentPage;
    const pages: (number | string)[] = [];

    if (current <= 4) {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push('...');
      pages.push(total);
    } else if (current >= total - 3) {
      pages.push(1);
      pages.push('...');
      for (let i = total - 4; i <= total; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      pages.push('...');
      pages.push(current - 1);
      pages.push(current);
      pages.push(current + 1);
      pages.push('...');
      pages.push(total);
    }

    return pages;
  }

  onPageClick(item: number | string): void {
    if (typeof item === 'number') {
      this.goToPage(item);
    }
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) {
      return;
    }
    this.currentPage = page;
    this.scrollToResultsTop();
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  scrollToResultsTop(): void {
    const resultsAnchor = document.getElementById('catalog-results-top');
    if (resultsAnchor) {
      resultsAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.updateCatalogDisplay();
  }

  onSearchChange(): void {
    this.currentPage = 1;
    this.updateCatalogDisplay();
  }

  onSortChange(): void {
    this.currentPage = 1;
    this.updateCatalogDisplay();
  }

  resetFilters(): void {
    this.selectedCategory = 'Featured';
    this.searchQuery = '';
    this.sortBy = 'featured';
    this.currentPage = 1;
    this.updateCatalogDisplay();
  }

  get projectCategoriesList(): string[] {
    return this.projectService.categories;
  }

  getCategoryCount(categoryName: string): number {
    return this.projects.filter((p) => p.category === categoryName).length;
  }

  selectCategoryTile(catName: string): void {
    this.onCategoryChange(catName);
    this.scrollToResultsTop();
  }

  getProjectWhatsAppUrl(title: string): string {
    return getProjectWhatsAppUrl(title);
  }

  getCategoryBadgeClass(_category?: string): string {
    return 'bg-blue-50 text-blue-700 border-blue-200/90';
  }

  private initializeCategoryTiles(): void {
    this.categoryTiles = [
      {
        name: 'AI/ML',
        title: 'AI & Machine Learning',
        description: 'Deep learning models, computer vision, NLP, and intelligent prediction systems.',
        icon: '🤖',
        badgeBg: 'bg-indigo-50 border-indigo-200/80 text-indigo-600',
        statusTag: 'Popular',
        projectCount: this.getCategoryCount('AI/ML')
      },
      {
        name: 'Data Science',
        title: 'Data Science',
        description: 'Predictive forecasting, analytics pipelines, and interactive intelligence dashboards.',
        icon: '📊',
        badgeBg: 'bg-blue-50 border-blue-200/80 text-blue-600',
        projectCount: this.getCategoryCount('Data Science')
      },
      {
        name: 'Web Dev',
        title: 'Web Development',
        description: 'Full-stack web architectures, microservices platforms, and REST/GraphQL APIs.',
        icon: '💻',
        badgeBg: 'bg-emerald-50 border-emerald-200/80 text-emerald-600',
        statusTag: 'Popular',
        projectCount: this.getCategoryCount('Web Dev')
      },
      {
        name: 'App Dev',
        title: 'App Development',
        description: 'Cross-platform Flutter & native Android mobile apps with cloud integration.',
        icon: '📱',
        badgeBg: 'bg-amber-50 border-amber-200/80 text-amber-600',
        projectCount: this.getCategoryCount('App Dev')
      },
      {
        name: 'Cybersecurity',
        title: 'Cybersecurity',
        description: 'Network vulnerability scanners, threat detection tools, and encryption systems.',
        icon: '🛡️',
        badgeBg: 'bg-rose-50 border-rose-200/80 text-rose-600',
        projectCount: this.getCategoryCount('Cybersecurity')
      },
      {
        name: 'Blockchain',
        title: 'Blockchain & Web3',
        description: 'Decentralized applications, Solidity smart contracts, and Web3 security protocols.',
        icon: '⛓️',
        badgeBg: 'bg-cyan-50 border-cyan-200/80 text-cyan-700',
        projectCount: this.getCategoryCount('Blockchain')
      }
    ];
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

    // 2. If category filter is applied (and not searching)
    if (this.isCategoryFiltered) {
      const categoryProjects = this.projects.filter(
        (p) => p.category === this.selectedCategory
      );
      this.displayedProjects = this.applySorting(categoryProjects);
      return;
    }

    // 3. If "All Categories" full list view
    if (this.isAllCategories) {
      this.displayedProjects = this.applySorting(this.projects);
      return;
    }

    // 4. Default view: curated sample (EXACTLY 1 featured project per category)
    const sampleProjects: Project[] = [];
    for (const cat of this.projectService.categories) {
      const firstInCat = this.projects.find((p) => p.category === cat);
      if (firstInCat) {
        sampleProjects.push(firstInCat);
      }
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
