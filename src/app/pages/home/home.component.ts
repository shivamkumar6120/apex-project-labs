import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { ProjectCatalogComponent } from '../../components/project-catalog/project-catalog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, ProjectCatalogComponent],
  template: `
    <main>
      <app-hero></app-hero>
      <app-project-catalog></app-project-catalog>
    </main>
  `
})
export class HomeComponent {}
