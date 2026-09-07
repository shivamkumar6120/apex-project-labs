import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectCatalogComponent } from '../../components/project-catalog/project-catalog.component';

/** Maps URL-friendly slugs to the exact ProjectCategory names used in data */
const CATEGORY_SLUG_MAP: Record<string, string> = {
  'ai-ml': 'AI/ML',
  'data-science': 'Data Science',
  'web-dev': 'Web Dev',
  'app-dev': 'App Dev',
  'cybersecurity': 'Cybersecurity',
  'blockchain': 'Blockchain',
  'mba-bba': 'MBA/BBA'
};

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectCatalogComponent],
  templateUrl: './projects-page.component.html'
})
export class ProjectsPageComponent implements OnInit {
  initialCategory: string = 'All Categories';
  pageTitle: string = 'All Projects';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('category');
      if (slug && CATEGORY_SLUG_MAP[slug]) {
        this.initialCategory = CATEGORY_SLUG_MAP[slug];
        this.pageTitle = `${this.initialCategory} Projects`;
      } else {
        this.initialCategory = 'All Categories';
        this.pageTitle = 'All Projects';
      }
    });
  }
}
