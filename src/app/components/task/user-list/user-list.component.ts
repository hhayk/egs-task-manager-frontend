import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { NotificationService } from 'src/app/services/notification.service';
import { NotificationModel } from 'src/app/models/notification';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {
  @Output() selectUserEmitter = new EventEmitter<UserModel>();

  selectedUser?: UserModel;
  notifications: Array<NotificationModel> = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService
  ) {
    if (this.router.getCurrentNavigation() === undefined
      || this.router.getCurrentNavigation().extras === undefined
      || this.router.getCurrentNavigation().extras.state === undefined
    ) {
      this.router.navigate(['/']);
    } else {
      const state = this.router.getCurrentNavigation().extras.state;
      setTimeout(() => this.selectUserByListIndex(state.userId), 10);
    }
  }

  ngOnInit() {
  }

  selectUserByListIndex(id: string) {
    const userId = Number.parseInt(id, 10);
    const user = this.userService.users.find(u => u.id === userId);

    this.selectedUser = user;
    this.selectUserEmitter.emit(user);

    if (user) {
      this.notificationService.findByUserId(user.id)
        .subscribe((resp: Array<NotificationModel>) => this.notifications = resp);
    }
  }

  newNotifications() {
    this.router.navigate(['/notifications'], { state: { notifications: this.notifications, userId: this.selectedUser.id } });
  }

  get unreadNotificationsLength() {
    return this.notifications.filter(n => n.unread).length;
  }
}

