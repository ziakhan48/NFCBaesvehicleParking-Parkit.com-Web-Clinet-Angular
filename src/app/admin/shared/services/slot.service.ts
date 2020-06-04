import { BaseService } from './../../../shared/services/base.service';
import { Injectable } from '@angular/core';
import { Slot } from '../models/slot.model';
import { Headers, Http } from '@angular/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { Observable, Subscription } from 'rxjs';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SlotService extends BaseService {

  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = '';

  slots: Slot[];
  slot: Slot = new Slot();

  constructor(private http: Http, private configService: ConfigService) {
     super();
     this.baseUrl = configService.getApiURI();
  }

  getSlots(parkingId?: number) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(this.baseUrl + '/Admin/api/Slot/' + parkingId, {headers})
     .subscribe(response =>
      this.slots = response.json() as Slot[]);
    //  .pipe(catchError(this.handleError));
}

}
