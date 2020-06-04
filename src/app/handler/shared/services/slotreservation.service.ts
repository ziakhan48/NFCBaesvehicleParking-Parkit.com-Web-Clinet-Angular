import { BaseService } from './../../../shared/services/base.service';
import { Slotreservation } from './../models/slotreservation.model';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { Observable, Subscription } from 'rxjs';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Slot } from '../models/slot.model';
@Injectable({
  providedIn: 'root'
})
export class SlotreservationService extends BaseService {
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = '';

  slotReservations: Slotreservation[];
  reservation: Slotreservation = new Slotreservation();

  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
 }


  Slotreservation(form: Slotreservation) {

    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.post(this.baseUrl + '/handler/api/SlotReservations', form, {headers}).
    subscribe((response) => {
      // this.getSlotDetail();
    }
    );

  }

//   getSlotDetail() {

//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     const authToken = localStorage.getItem('auth_token');
//     headers.append('Authorization', `Bearer ${authToken}`);



//     return this.http.get(this.baseUrl + '/Handler/api/slots', {headers})
//      .subscribe(response =>
//       this.slotReservations = response.json() as Slotreservation[]);
//     //  .pipe(catchError(this.handleError));
// }


getReservationList() {

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const authToken = localStorage.getItem('auth_token');
  headers.append('Authorization', `Bearer ${authToken}`);



  return this.http.get(this.baseUrl + '/Handler/api/SlotReservations', {headers})
   .subscribe(response =>
    this.slotReservations = response.json() as Slotreservation[]);
  //  .pipe(catchError(this.handleError));
}
}
