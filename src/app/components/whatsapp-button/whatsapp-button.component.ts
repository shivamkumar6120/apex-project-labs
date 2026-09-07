import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getWhatsAppUrl } from '../../models/project.model';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss'
})
export class WhatsAppButtonComponent {
  readonly whatsappUrl = getWhatsAppUrl(
    "Hi Apex Project Labs, I'm interested in your pre-built final year engineering projects. Please guide me."
  );
}
