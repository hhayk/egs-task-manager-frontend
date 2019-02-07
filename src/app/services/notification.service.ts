import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';
import { NotificationModel } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private http: HttpClient, private environmentService: EnvironmentService) { }

  public findByUserId(userId: number) {
    return this.http
      .get<Array<NotificationModel>>(
        this.environmentService.api + '/notifications/user/' + userId,
        { headers: this.environmentService.headers }
      );
  }

  public readByUserId(userId: number) {
    return this.http
      .get<Array<NotificationModel>>(
        this.environmentService.api + '/notifications/read/user/' + userId,
        { headers: this.environmentService.headers }
      );
  }

  public all() {
    return this.http
      .get<Array<NotificationModel>>(this.environmentService.api + '/notifications/', { headers: this.environmentService.headers });
  }
}
