import { Changeusername } from './../models/changeusername';
import { BaseService } from './../../../shared/services/base.service';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { Observable, Subscription } from 'rxjs';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Changepassword } from '../models/changepassword.model';
@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService extends BaseService {

  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = '';
  slot: Changepassword = new Changepassword();

  constructor(private http: Http, private configService: ConfigService) {
     super();
     this.baseUrl = configService.getApiURI();
  }
  ChnageAdminPassword(form: Changepassword , id: string) {

    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.post(this.baseUrl + '/admin/api/AdminChangePassword/', form, {headers}).
    subscribe((response) => {
    //  this.getSlotDetail();
    }
    );

  }

  ChnageAdminUserName(form: Changeusername , id: string) {

    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.put(this.baseUrl + '/admin/api/ChangeUserName/' + id, form, {headers}).
    subscribe((response) => {
    //  this.getSlotDetail();
    }
    );

  }


  getAdminUserName(): Observable<Changeusername> {
    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.get(this.baseUrl + '/admin/api/ChangeUserName', {headers})
    .pipe(map(response => response.json()))
    .pipe(catchError(this.handleError));
  }


}
