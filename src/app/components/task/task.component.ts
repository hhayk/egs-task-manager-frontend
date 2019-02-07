import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user';
import { Router } from '@angular/router';
import { TaskModel, TaskEditOrCreateState, TaskAction } from 'src/app/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.less']
})
export class TaskComponent implements OnInit {
  user: UserModel;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectUser(user: UserModel) {
    this.user = user;
  }

  createTask() {
    this.router.navigate(['/tasks/create'], { state: new TaskEditOrCreateState(TaskAction.CREATE, this.user.id) });
  }

  editTask(task: TaskModel) {
    this.router.navigate(['/tasks/create'], { state: new TaskEditOrCreateState(TaskAction.EDIT, this.user.id, task) });
  }

  get sortedTasks() {
    return this.user ? this.user.tasks.sort((a, b) => a.id - b.id) : null;
  }
}
