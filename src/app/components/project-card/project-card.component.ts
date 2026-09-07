import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Project, getProjectTags, getProjectWhatsAppUrl, isResearchProject } from '../../models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;

  get isResearch(): boolean {
    return isResearchProject(this.project);
  }

  get tags(): string[] {
    return getProjectTags(this.project);
  }

  getCategoryBadgeClass(_category?: string): string {
    return 'bg-blue-50 text-blue-700 border-blue-200/90';
  }

  get whatsappUrl(): string {
    return getProjectWhatsAppUrl(this.project.title);
  }
}
