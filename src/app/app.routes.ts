import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { ProjectsPageComponent } from './pages/projects/projects-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Apex Project Labs | Industry-Grade Engineering Projects'
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
    title: 'All Projects | Apex Project Labs'
  },
  {
    path: 'projects/:category',
    component: ProjectsPageComponent,
    title: 'Projects | Apex Project Labs'
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
