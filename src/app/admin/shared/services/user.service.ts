import { Userlist } from './../models/userlist.model';
import { BaseService } from './../../../shared/services/base.service';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { Observable, Subscription } from 'rxjs';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {
    [x: string]: any;

  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = '';

  users: Userlist[];
  user: Userlist = new Userlist();

  constructor(private http: Http, private configService: ConfigService) {
     super();
     this.baseUrl = configService.getApiURI();
  }

  getallUsers() {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + '/Admin/api/UserList/AllUsers', {headers})
     .subscribe(response =>
      this.users = response.json() as Userlist[]);
    //  .pipe(catchError(this.handleError));
}

gethandlers() {

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const authToken = localStorage.getItem('auth_token');
  headers.append('Authorization', `Bearer ${authToken}`);

  return this.http.get(this.baseUrl + '/Admin/api/UserList/Handler', {headers})
   .subscribe(response =>
    this.users = response.json() as Userlist[]);
  //  .pipe(catchError(this.handleError));
}

getcustomer() {

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const authToken = localStorage.getItem('auth_token');
  headers.append('Authorization', `Bearer ${authToken}`);

  return this.http.get(this.baseUrl + '/Admin/api/UserList/Customer', {headers})
   .subscribe(response =>
    this.users = response.json() as Userlist[]);
  //  .pipe(catchError(this.handleError));
}

getuserProfile(userId?: string): Observable<Userlist> {

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const authToken = localStorage.getItem('auth_token');
  headers.append('Authorization', `Bearer ${authToken}`);

  return this.http.get(this.baseUrl + '/Admin/api/UserList/' + userId, {headers})
  .pipe(map(response => response.json()))
  .pipe(catchError(this.handleError));
  //  .pipe(catchError(this.handleError));
}
}
