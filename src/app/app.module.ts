import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListService } from './user-list/user-list.service';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectStartComponent } from './project/project-start/project-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserEditComponent,
    ProjectComponent,
    ProjectDetailComponent,
    ProjectEditComponent,
    ProjectListComponent,
    ProjectStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    UserListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
