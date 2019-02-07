import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskEditOrCreateState, TaskAction, TaskStatus, TaskSeverity, TaskModel } from 'src/app/models/task';
import { PopupService } from 'src/app/services/popup.service';
import { CommentModel } from 'src/app/models/comment';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-task',
  templateUrl: './user-task.component.html',
  styleUrls: ['./user-task.component.less']
})
export class UserTaskComponent implements OnInit {
  state: TaskEditOrCreateState;

  constructor(
    private router: Router,
    private userService: UserService,
    private taskService: TaskService,
    private popupService: PopupService
  ) {
    const state = this.router.getCurrentNavigation().extras.state as TaskEditOrCreateState;
    if (state === undefined) {
      this.router.navigate(['/']);
    } else {
      this.state = state;
    }
  }

  ngOnInit() {
  }

  saveTask(name: string, assigneeId: string, severity: string, status: string) {
    const userId = Number.parseInt(assigneeId, 10);
    const task = new TaskModel();
    task.id = this.state.task ? this.state.task.id : null;
    task.name = name;
    task.status = TaskStatus[status];
    task.severity = TaskSeverity[severity];

    this.taskService.saveTask(userId, task)
      .subscribe((savedTask: TaskModel) => {
        this.userService.users.find(u => u.id === userId).tasks.push(savedTask);
        if (this.state.action === TaskAction.EDIT) {
          const oldOwner = this.userService.users.find(u => u.id === this.state.userId);
          oldOwner.tasks.splice(oldOwner.tasks.indexOf(this.state.task), 1);
        }
        this.router.navigate(['/'], { state: { userId } });
      });
  }

  addComment() {
    const okHandler = (comment: CommentModel) => this.taskService.addCommment(this.state.userId, this.state.task, comment);
    const cancelHandler = () => { };

    this.popupService.addComment(okHandler, cancelHandler);
  }

  get statuses() {
    const values = Object.keys(TaskStatus);
    return values.slice(values.length / 2);
  }

  get severityes() {
    const values = Object.keys(TaskSeverity);
    return values.slice(values.length / 2);
  }

  get isOnEditMode() {
    return this.state.action === TaskAction.EDIT;
  }

  get isOnBrowseMode() {
    return this.state.action === TaskAction.BROWSE;
  }

  get title() {
    switch (this.state.action) {
      case TaskAction.CREATE: return 'Create New Task';
      case TaskAction.EDIT: return 'Edit Task';
      case TaskAction.BROWSE: return 'Browse Task';
      default: throw new Error('Task Unknown State');
    }
  }
}
