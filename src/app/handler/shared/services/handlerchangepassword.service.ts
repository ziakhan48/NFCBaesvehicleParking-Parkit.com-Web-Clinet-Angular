import { Updateusername } from './../models/updateusername';
import { Changepassword } from './../models/changepassword.model';
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
export class HandlerchangepasswordService extends BaseService {

  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = '';
  slot: Changepassword = new Changepassword();

  constructor(private http: Http, private configService: ConfigService) {
     super();
     this.baseUrl = configService.getApiURI();
  }

  ChnageHandlerPassword(form: Changepassword) {

    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.post(this.baseUrl + '/handler/api/ChangePassword', form, {headers}).
    subscribe((response) => {
    //  this.getSlotDetail();
    }
    );
  }


  ChnageHandlerUserName(form: Updateusername , id: string) {

    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.put(this.baseUrl + '/Handler/api/UserNameUpdate/' + id, form, {headers}).
    subscribe((response) => {
    //  this.getSlotDetail();
    }
    );

  }


  getHandlerUserName(): Observable<Updateusername> {
    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);
    return this.http.get(this.baseUrl + '/Handler/api/UserNameUpdate', {headers})
    .pipe(map(response => response.json()))
    .pipe(catchError(this.handleError));
  }


}
