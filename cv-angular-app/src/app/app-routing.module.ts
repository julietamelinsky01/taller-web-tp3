import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { PositionListComponent } from './components/position-list/position-list.component';
import { CvFormComponent } from './components/cv-form/cv-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/cv', pathMatch: 'full' },
  { path: 'cv', component: CvComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: 'positions', component: PositionListComponent },
  { path: 'cv-form', component: CvFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }