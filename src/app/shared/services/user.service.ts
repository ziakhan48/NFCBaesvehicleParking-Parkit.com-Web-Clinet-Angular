import { AdminGuard } from 'src/app/admin.guard';
import { Userdetail } from './../models/userdetail.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigService } from '../utils/config.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BaseService } from './base.service';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserService extends BaseService {

  userData = new BehaviorSubject<Userdetail>(new Userdetail());
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = '';

  // Observable navItem source
  // tslint:disable-next-line:variable-name
  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  // Observable navItem stream
  authNavStatus$ = this._authNavStatusSource.asObservable();

  private loggedIn = false;
  some  = null;
  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.loggedIn = !!localStorage.getItem('auth_token');
    // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
    // header component resulting in authed user nav links disappearing despite the fact user is still logged in
    this._authNavStatusSource.next(this.loggedIn);
    this.baseUrl = configService.getApiURI();
  }

    register(email: string, password: string, firstName: string, lastName: string) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify({ email, password, firstName, lastName, location });
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({ 'Content-Type': 'application/json' });


    // tslint:disable-next-line:object-literal-shorthand
    const options = new RequestOptions({ headers: headers });



    return this.http.post(this.baseUrl + '/api/Account', body, options)
      .pipe(map(() => true))
      .pipe(catchError(this.handleError));
  }

   login(userName, password) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
      this.baseUrl + '/api/auth/login',
      JSON.stringify({ userName, password }), { headers }
      )
      .pipe(map(res => res.json()))
      .pipe(map(res => {
        localStorage.setItem('auth_token', res.auth_token);
        this.loggedIn = true;
        this._authNavStatusSource.next(true);
        this.setUserDetails();
        return res;
      }))
      .pipe(catchError(this.handleError));
  }




  setUserDetails() {
    if (localStorage.getItem('auth_token')) {
      const userDetails = new Userdetail();
      const decodeUserDetails = JSON.parse(window.atob(localStorage.getItem('auth_token').split('.')[1]));

      userDetails.userName = decodeUserDetails.sub;
      userDetails.firstName = decodeUserDetails.firstName;
      userDetails.isLoggedIn = true;
      userDetails.role = decodeUserDetails.typ;

      this.userData.next(userDetails);
    }
  }
  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
    this.userData.next(new Userdetail());
    this._authNavStatusSource.next(false);
  }

  isLoggedIn() {
    this.setUserDetails();
    return this.loggedIn;
  }

  // facebookLogin(accessToken: string) {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   const body = JSON.stringify({ accessToken });
  //   return this.http
  //     .post(
  //     this.baseUrl + '/externalauth/facebook', body, { headers })
  //     .pipe(map(res => res.json()))
  //     .pipe(map(res => {
  //       localStorage.setItem('auth_token', res.auth_token);
  //       this.loggedIn = true;
  //       this._authNavStatusSource.next(true);
  //       return true;
  //     }))
  //     .pipe(catchError(this.handleError));
  // }


  // roleMatch(allowedRoles): boolean {
  //   let isMatch = false;
  //   const payLoad = JSON.parse(window.atob(localStorage.getItem('token').split('.')[1]));
  //   const userRole = payLoad.role;
  //   allowedRoles.forEach(element => {
  //     if (userRole === element) {
  //       isMatch = true;
  //       return false;
  //     }
  //   });
  //   return isMatch;
  // }
}
