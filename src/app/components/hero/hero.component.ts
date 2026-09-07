import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { getWhatsAppUrl, getCustomProjectWhatsAppUrl } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  readonly whatsappConsultUrl = getWhatsAppUrl(
    "Hi Apex Project Labs, I would like to inquire about your engineering projects and reference architectures."
  );

  readonly customProjectUrl = getCustomProjectWhatsAppUrl();
  totalProjectsFormatted: string = '60+';

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(): void {
    const total = this.projectService.getAllProjects().length;
    this.totalProjectsFormatted = `${Math.floor(total / 10) * 10}+`;
  }

  navigateToProjects(): void {
    this.router.navigate(['/projects']);
  }
}


