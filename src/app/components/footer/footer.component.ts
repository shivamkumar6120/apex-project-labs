import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { WHATSAPP_DISPLAY_PHONE, WHATSAPP_PHONE, getWhatsAppUrl, getCustomProjectWhatsAppUrl } from '../../models/project.model';
import { PROJECT_CATEGORIES } from '../../data/index';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly currentYear = new Date().getFullYear();
  readonly displayPhone = WHATSAPP_DISPLAY_PHONE;
  readonly rawPhone = WHATSAPP_PHONE;
  readonly categories = PROJECT_CATEGORIES;
  readonly whatsappSupportUrl = getWhatsAppUrl(
    "Hi Apex Project Labs, I have a question regarding college project submissions."
  );
  readonly customProjectUrl = getCustomProjectWhatsAppUrl();

  constructor(private router: Router) {}

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(sectionId: string): void {
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      this.router.navigate(['/'], { fragment: sectionId });
    }
  }
}
