import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import { CategoryExplorerComponent } from '../../components/category-explorer/category-explorer.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    HeroComponent, 
    HowItWorksComponent, 
    CategoryExplorerComponent, 
    TestimonialsComponent
  ],
  template: `
    <main>
      <app-hero></app-hero>
      <app-how-it-works></app-how-it-works>
      <app-category-explorer></app-category-explorer>
      <app-testimonials></app-testimonials>
    </main>
  `
})
export class HomeComponent {}

