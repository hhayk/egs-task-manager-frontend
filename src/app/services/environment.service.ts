import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  constructor() { }

  get api() {
    return environment.apiEndpoint;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('X-Access-Token', localStorage.getItem('jwt') || '');
  }
}
