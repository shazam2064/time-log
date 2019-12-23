import {User} from '../user-list/user.model';

export class Project {
  public name: string;
  public description: string;
  public imagePath: string;
  public users: User[];

  constructor(name: string, desc: string, imagePath: string, users: User[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.users = users;
  }
}
