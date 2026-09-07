import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
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
}
