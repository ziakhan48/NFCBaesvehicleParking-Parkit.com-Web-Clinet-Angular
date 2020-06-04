import { Addparking } from './../models/addparking.model';
import { BaseService } from 'src/app/shared/services/base.service';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Http, Response, Headers } from '@angular/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AddparkingService extends BaseService {
  slots: Addparking[];
  slot: Addparking = new Addparking();
  baseUrl = '';
  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
 }

 AddParking(form: Addparking) {

  // tslint:disable-next-line:prefer-const
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const authToken = localStorage.getItem('auth_token');
  headers.append('Authorization', `Bearer ${authToken}`);

  return this.http.post(this.baseUrl + '/Admin/api/AddParking', form, {headers}).
  subscribe((response) => {
  //  this.getSlotDetail();
  }
  );

}
}
