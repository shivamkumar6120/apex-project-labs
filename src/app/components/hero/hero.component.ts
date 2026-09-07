import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getWhatsAppUrl, getCustomProjectWhatsAppUrl } from '../../models/project.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly whatsappConsultUrl = getWhatsAppUrl(
    "Hi Apex Project Labs, I need assistance choosing a high-scoring final year project."
  );

  readonly customProjectUrl = getCustomProjectWhatsAppUrl();

  scrollToCatalog(): void {
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
