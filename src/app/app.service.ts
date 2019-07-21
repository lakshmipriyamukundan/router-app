import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

interface ControllerForm {
  hostName: string;
  userName: string;
  password: string;
}

@Injectable()
export class ControllerService {
  constructor(private http: HttpClient) {}
  getResume() {
    return this.http.get('http://localhost:7000/v1/resume/get');
  }

  /** POST: add a new hero to the database */
  addResume(controllerForm: ControllerForm): Observable<ControllerForm> {
    return this.http.post<ControllerForm>(
      'http://localhost:7000/v1/resume/save',
      controllerForm,
      httpOptions,
    );
  }
}
