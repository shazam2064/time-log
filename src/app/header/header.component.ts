import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../auth/data-storage.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private memberSub: Subscription;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.memberSub = this.authService.member.subscribe(member => {
      this.isAuthenticated = !!member;
      console.log(!member);
      console.log(!!member);
    });
  }

  onSaveData() {
    this.dataStorageService.storeProjects();
  }

  onFetchData() {
    this.dataStorageService.fetchProjects().subscribe();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.memberSub.unsubscribe();
  }
}
