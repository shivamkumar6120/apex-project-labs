import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Apex Project Labs | Industry-Grade Engineering Projects'
  },
  {
    path: 'project/:id',
    component: ProjectDetailComponent,
    title: 'Project Details | Apex Project Labs'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
