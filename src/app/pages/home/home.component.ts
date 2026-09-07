import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import { ProjectCatalogComponent } from '../../components/project-catalog/project-catalog.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    HowItWorksComponent, 
    ProjectCatalogComponent, 
    TestimonialsComponent
  ],
  template: `
    <main>
      <app-hero></app-hero>
      <app-how-it-works></app-how-it-works>
      <app-project-catalog></app-project-catalog>
      <app-testimonials></app-testimonials>
    </main>
  `
})
export class HomeComponent {}
