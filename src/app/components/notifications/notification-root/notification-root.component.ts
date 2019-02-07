import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import { NotificationModel } from 'src/app/models/notification';
import { TaskEditOrCreateState, TaskAction, TaskModel } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-notification-root',
  templateUrl: './notification-root.component.html',
  styleUrls: ['./notification-root.component.less']
})
export class NotificationRootComponent implements OnInit {
  notifications: Array<NotificationModel>;

  constructor(
    private router: Router,
    private taskService: TaskService,
    private notificationService: NotificationService
  ) {
    const state = this.router.getCurrentNavigation().extras.state;
    if (state === undefined) {
      this.router.navigate(['/']);
    } else {
      const notifications = state.notifications as Array<NotificationModel>;
      const userId = state.userId;

      this.notifications = [...notifications].sort((a, b) => (a.unread === b.unread) ? 0 : a.unread ? -1 : 1);
      this.notificationService.readByUserId(userId).subscribe(_ => { });
    }
  }

  ngOnInit() {
  }

  taskClick(taskId: number) {
    this.taskService.getTaskById(taskId)
      .subscribe((task: TaskModel) => {
        this.router.navigate(['/tasks/create'], { state: new TaskEditOrCreateState(TaskAction.BROWSE, -1, task) });
      });
  }

}
