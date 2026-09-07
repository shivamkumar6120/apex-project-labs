import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { getWhatsAppUrl } from '../../models/project.model';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {
  readonly whatsappHelpUrl = getWhatsAppUrl(
    "Hi Apex Project Labs, I have questions about how the project delivery and setup support works."
  );

  constructor(private router: Router) {}

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
