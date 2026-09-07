import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project, WHATSAPP_DISPLAY_PHONE, WHATSAPP_PHONE, getProjectWhatsAppUrl } from '../../models/project.model';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, ProjectCardComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  project?: Project;
  relatedProjects: Project[] = [];

  readonly phoneConstant = WHATSAPP_PHONE;
  readonly displayPhone = WHATSAPP_DISPLAY_PHONE;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loadProject(id);
      }
    });
  }

  loadProject(id: string): void {
    this.project = this.projectService.getProjectById(id);
    if (this.project) {
      this.relatedProjects = this.projectService.getRelatedProjects(this.project.id, this.project.category, 3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  get whatsAppUrl(): string {
    if (!this.project) return '';
    return getProjectWhatsAppUrl(this.project.title);
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
}
