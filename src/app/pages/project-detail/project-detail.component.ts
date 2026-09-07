import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project, WHATSAPP_DISPLAY_PHONE, WHATSAPP_PHONE, getProjectWhatsAppUrl, getCustomProjectWhatsAppUrl } from '../../models/project.model';
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
  readonly customProjectWhatsAppUrl = getCustomProjectWhatsAppUrl();

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

  getCategoryBadgeClass(_category?: string): string {
    return 'bg-blue-50 text-blue-700 border-blue-200/90';
  }
}
