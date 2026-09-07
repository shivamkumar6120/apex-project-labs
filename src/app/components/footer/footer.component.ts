import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { WHATSAPP_DISPLAY_PHONE, WHATSAPP_PHONE, getWhatsAppUrl, getCustomProjectWhatsAppUrl } from '../../models/project.model';
import { PROJECT_CATEGORIES } from '../../data/index';

const CATEGORY_TO_SLUG: Record<string, string> = {
  'AI/ML': 'ai-ml',
  'Data Science': 'data-science',
  'Web Dev': 'web-dev',
  'App Dev': 'app-dev',
  'Cybersecurity': 'cybersecurity',
  'Blockchain': 'blockchain',
  'MBA/BBA': 'mba-bba'
};

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

  getCategorySlug(category: string): string {
    return CATEGORY_TO_SLUG[category] || category.toLowerCase().replace(/[\/\s]+/g, '-');
  }

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

