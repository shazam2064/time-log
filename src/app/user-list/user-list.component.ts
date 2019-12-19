import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { User } from './user.model';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[];
  private subscription: Subscription;

  constructor(private usService: UserListService) { }

  ngOnInit() {
    this.users = this.usService.getUsers();
    this.subscription = this.usService.usersChanged
      .subscribe(
        (ingredients: User[]) => {
          this.users = ingredients;
        }
      );
  }

  onEditItem(index: number) {
    this.usService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

