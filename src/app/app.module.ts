import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import {UserListService} from './user-list/user-list.service';
import {UserEditComponent} from './user-list/user-edit/user-edit.component';
import { ProjectComponent } from './project/project.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserEditComponent,
    ProjectComponent
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
