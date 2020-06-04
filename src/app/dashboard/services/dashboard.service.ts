import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Http, Response, Headers } from '@angular/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { Observable } from 'rxjs';
import { Homedetails } from '../models/homedetails.interface';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = '';

  constructor(private http: Http, private configService: ConfigService) {
     super();
     this.baseUrl = configService.getApiURI();
  }

  getHomeDetails(): Observable<Homedetails> {
      // tslint:disable-next-line:prefer-const
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:align
    const authToken = localStorage.getItem('auth_token');
      headers.append('Authorization', `Bearer ${authToken}`);

    // tslint:disable-next-line:quotemark
      return this.http.get(this.baseUrl + "/api/dashboard/home", {headers})
      .pipe(map(response => response.json()))
      .pipe(catchError(this.handleError));
  }
}
