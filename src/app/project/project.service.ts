import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Project } from './project.model';
import { UserListService } from '../user-list/user-list.service';
import { User } from '../user-list/user.model';

@Injectable()
export class ProjectService {
  projectsChanged = new Subject<Project[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Project 1',
  //     'Do stuff',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [new User('Pepe', 1)]
  //   )
  // ];
  private projects: Project[] = [];

  constructor(private usService: UserListService) {}

  setProjects(projects: Project[]) {
    this.projects = projects;
    this.projectsChanged.next(this.projects.slice());
  }

  getProjects() {
    return this.projects.slice();
  }

  getProject(index: number) {
    return this.projects[index];
  }

  addUsersToUserList(users: User[]) {
    this.usService.addUsers(users);
  }

  addProject(project: Project) {
    this.projects.push(project);
    this.projectsChanged.next(this.projects.slice());
  }

  updateProject(index: number, newProject: Project) {
    this.projects[index] = newProject;
    this.projectsChanged.next(this.projects.slice());
  }

  deleteProject(index: number) {
    this.projects.splice(index, 1);
    this.projectsChanged.next(this.projects.slice());
  }
}
