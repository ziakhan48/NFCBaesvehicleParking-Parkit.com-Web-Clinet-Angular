import { Admindashboardcount } from './../models/admindashboardcount.model';
import { AdmindashbaordComponent } from './../../admindashbaord/admindashbaord.component';
import { BaseService } from './../../../shared/services/base.service';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Http, Response, Headers } from '@angular/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdmindashbaordcountService extends BaseService {

  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = '';
  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
 }

 AdminDashbaordDetail(): Observable<Admindashboardcount> {
  // tslint:disable-next-line:prefer-const
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
// tslint:disable-next-line:prefer-const
// tslint:disable-next-line:align
const authToken = localStorage.getItem('auth_token');
  headers.append('Authorization', `Bearer ${authToken}`);

// tslint:disable-next-line:quotemark
  return this.http.get(this.baseUrl + "/admin/api/AdminDashbaordCount/AdminDCount", {headers})
  .pipe(map(response => response.json()))
  .pipe(catchError(this.handleError));
}
}
