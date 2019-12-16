import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { User } from '../../user-list/user.model';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: User;

  constructor(private usService: UserListService) { }

  ngOnInit() {
    this.subscription = this.usService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.usService.getUser(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.project
          });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newUser = new User(value.name, value.amount);
    if (this.editMode) {
      this.usService.updateUser(this.editedItemIndex, newUser);
    } else {
      this.usService.addUser(newUser);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.usService.deleteUser(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
