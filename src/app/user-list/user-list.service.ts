import { User } from './user.model';
import { Subject } from 'rxjs';

export class UserListService {
  usersChanged = new Subject<User[]>();
  startedEditing = new Subject<number>();
  private users: User[] = [
    new User('Steve Palchuck', 1),
    new User('Jim Lake', 2),
  ];

  getUsers() {
    return this.users.slice();
  }

  getUser(index: number) {
    return this.users[index];
  }

  addUser(user: User) {
    this.users.push(user);
    this.usersChanged.next(this.users.slice());
  }

  addUsers(users: User[]) {
    // for (let user of users) {
    //   this.addUser(user);
    // }
    this.users.push(...users);
    this.usersChanged.next(this.users.slice());
  }

  updateUser(index: number, newUser: User) {
    this.users[index] = newUser;
    this.usersChanged.next(this.users.slice());
  }

  deleteUser(index: number) {
    this.users.splice(index, 1);
    this.usersChanged.next(this.users.slice());
  }
}
