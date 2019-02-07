import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { HttpClient } from '@angular/common/http';
import { TaskModel } from '../models/task';
import { CommentModel } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) { }

  getTaskById(taskId: number) {
    return this.http
      .get<TaskModel>(
        this.environmentService.api + '/tasks/' + taskId,
        { headers: this.environmentService.headers }
      );
  }

  saveTask(userId: number, task: TaskModel) {
    return this.http
      .post<TaskModel>(
        this.environmentService.api + '/tasks/' + userId, task,
        { headers: this.environmentService.headers }
      );
  }

  addCommment(userId: number, task: TaskModel, comment: CommentModel) {
    this.http
      .put<CommentModel>(
        this.environmentService.api + '/tasks/user/' + userId + '/task/' + task.id + '/comments', comment,
        { headers: this.environmentService.headers }
      )
      .subscribe((resp: CommentModel) => task.comments.push(resp));
  }
}
