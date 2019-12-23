import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';


import { ProjectService } from '../project/project.service';
import { AuthService } from './auth.service';
import { Project } from '../project/project.model';


@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private projectService: ProjectService,
    private authService: AuthService
  ) {}

  storeProjects() {
    const projects = this.projectService.getProjects();
    this.http
      .put(
        'https://time-log-7f950.firebaseio.com/projects.json',
        projects
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchProjects() {
    return this.http
      .get<Project[]>(
        'https://time-log-7f950.firebaseio.com/projects.json'
      )
      .pipe(
        map(projects => {
          return projects.map(project => {
            return {
              ...project,
              users: project.users ? project.users : []
            };
          });
        }),
        tap(projects => {
          this.projectService.setProjects(projects);
        })
      );
  }
}
