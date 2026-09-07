import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project, getProjectWhatsAppUrl } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;

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

  get whatsappUrl(): string {
    return getProjectWhatsAppUrl(this.project.title);
  }
}
