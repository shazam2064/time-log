import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListService } from './user-list/user-list.service';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { ProjectComponent } from './project/project.component';
import { ProjectDetailComponent } from './project/project-detail/project-detail.component';
import { ProjectEditComponent } from './project/project-edit/project-edit.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { ProjectStartComponent } from './project/project-start/project-start.component';
import { ProjectItemComponent } from './project/project-list/project-item/project-item.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './auth/loading-spinner/loading-spinner.component';
import { DropdownDirective } from './auth/dropdow.directive';
import {ProjectService} from './project/project.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {AppRoutingModule} from './app-routing.module';

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
    ProjectStartComponent,
    ProjectItemComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserListService,
    ProjectService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
