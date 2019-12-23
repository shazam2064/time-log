import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProjectStartComponent } from './project/project-start/project-start.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import {AuthComponent} from './auth/auth.component';
import { ProjectsResolverService } from './project/project-resolver.service';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  {
    path: 'projects',
    component: ProjectComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ProjectStartComponent },
      { path: 'new', component: ProjectEditComponent },
      {
        path: ':id',
        component: ProjectDetailComponent,
        resolve: [ProjectsResolverService]
      },
      {
        path: ':id/edit',
        component: ProjectEditComponent,
        resolve: [ProjectsResolverService]
      }
    ]
  },
  { path: 'user-list', component: UserListComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
