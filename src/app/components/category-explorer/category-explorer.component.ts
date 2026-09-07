import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';

interface CategoryCard {
  name: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  badgeBg: string;
  statusTag?: string;
  projectCount: number;
}

@Component({
  selector: 'app-category-explorer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category-explorer.component.html'
})
export class CategoryExplorerComponent implements OnInit {
  categoryCards: CategoryCard[] = [];
  totalProjects: number = 0;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    const allProjects = this.projectService.getAllProjects();
    this.totalProjects = allProjects.length;

    const countFor = (cat: string) => allProjects.filter(p => p.category === cat).length;

    this.categoryCards = [
      {
        name: 'AI/ML',
        slug: 'ai-ml',
        title: 'AI & Machine Learning',
        description: 'Deep learning models, computer vision, NLP, and intelligent prediction systems.',
        icon: '🤖',
        badgeBg: 'bg-indigo-50 border-indigo-200/80 text-indigo-600',
        statusTag: 'Popular',
        projectCount: countFor('AI/ML')
      },
      {
        name: 'Data Science',
        slug: 'data-science',
        title: 'Data Science',
        description: 'Predictive forecasting, analytics pipelines, and interactive intelligence dashboards.',
        icon: '📊',
        badgeBg: 'bg-blue-50 border-blue-200/80 text-blue-600',
        projectCount: countFor('Data Science')
      },
      {
        name: 'Web Dev',
        slug: 'web-dev',
        title: 'Web Development',
        description: 'Full-stack web architectures, microservices platforms, and REST/GraphQL APIs.',
        icon: '💻',
        badgeBg: 'bg-emerald-50 border-emerald-200/80 text-emerald-600',
        statusTag: 'Popular',
        projectCount: countFor('Web Dev')
      },
      {
        name: 'App Dev',
        slug: 'app-dev',
        title: 'App Development',
        description: 'Cross-platform Flutter & native Android mobile apps with cloud integration.',
        icon: '📱',
        badgeBg: 'bg-amber-50 border-amber-200/80 text-amber-600',
        projectCount: countFor('App Dev')
      },
      {
        name: 'Cybersecurity',
        slug: 'cybersecurity',
        title: 'Cybersecurity',
        description: 'Network vulnerability scanners, threat detection tools, and encryption systems.',
        icon: '🛡️',
        badgeBg: 'bg-rose-50 border-rose-200/80 text-rose-600',
        projectCount: countFor('Cybersecurity')
      },
      {
        name: 'Blockchain',
        slug: 'blockchain',
        title: 'Blockchain & Web3',
        description: 'Decentralized applications, Solidity smart contracts, and Web3 security protocols.',
        icon: '⛓️',
        badgeBg: 'bg-cyan-50 border-cyan-200/80 text-cyan-700',
        projectCount: countFor('Blockchain')
      },
      {
        name: 'MBA/BBA',
        slug: 'mba-bba',
        title: 'MBA / BBA Research',
        description: 'Marketing, finance, HR, operations, and strategy research reports with PPT and viva notes.',
        icon: '💼',
        badgeBg: 'bg-violet-50 border-violet-200/80 text-violet-700',
        statusTag: 'New',
        projectCount: countFor('MBA/BBA')
      }
    ];
  }

  formatProjectCount(count: number): string {
    if (count < 10) return `${count}`;
    return `${Math.floor(count / 10) * 10}+`;
  }
}
