import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { getWhatsAppUrl } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent implements OnInit {
  readonly whatsappHelpUrl = getWhatsAppUrl(
    "Hi Apex Project Labs, I have questions about how the project delivery and setup support works."
  );
  totalProjectsFormatted: string = '60+';

  constructor(private router: Router, private projectService: ProjectService) {}

  ngOnInit(): void {
    const total = this.projectService.getAllProjects().length;
    this.totalProjectsFormatted = `${Math.floor(total / 10) * 10}+`;
  }


  scrollToCatalog(): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      this.router.navigate(['/'], { fragment: 'catalog' });
    }
  }
}
