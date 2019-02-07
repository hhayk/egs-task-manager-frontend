import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array<UserModel>;

  constructor(private http: HttpClient, private environmentService: EnvironmentService) {
    this.fetchUser();
  }

  public fetchUser() {
    this.http
      .get<Array<UserModel>>(this.environmentService.api + '/users/', { headers: this.environmentService.headers })
      .subscribe(resp => this.users = resp);
  }
}
