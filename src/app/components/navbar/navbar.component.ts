import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { WHATSAPP_DISPLAY_PHONE, getWhatsAppUrl } from '../../models/project.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  readonly displayPhone = WHATSAPP_DISPLAY_PHONE;
  readonly whatsappUrl = getWhatsAppUrl("Hi Apex Project Labs, I would like to inquire about your engineering projects and solutions.");

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  navigateToProjects(): void {
    this.closeMobileMenu();
    if (this.router.url === '/' || this.router.url.startsWith('/#')) {
      const catalogEl = document.getElementById('catalog');
      if (catalogEl) {
        catalogEl.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      this.router.navigate(['/'], { fragment: 'catalog' });
    }
  }

  navigateToContact(): void {
    this.closeMobileMenu();
    const footerEl = document.getElementById('contact');
    if (footerEl) {
      footerEl.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
