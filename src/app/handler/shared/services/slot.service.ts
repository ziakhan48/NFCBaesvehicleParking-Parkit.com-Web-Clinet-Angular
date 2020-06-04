import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Headers, Http } from '@angular/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { Slot } from '../models/slot.model';

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


  AddNewSlot(form: Slot) {

    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.post(this.baseUrl + '/handler/api/slots', form, {headers}).
    subscribe((response) => {
     this.getSlotDetail();
    }
    );

  }

  UpdateSlot(form: Slot , slotId: string) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.put(this.baseUrl + '/handler/api/slots/' + slotId, form , {headers})
              .subscribe((response) => {
                this.getSlotDetail();
              });
  }


  getSlotDetail() {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);



    return this.http.get(this.baseUrl + '/Handler/api/slots', {headers})
     .subscribe(response =>
      this.slots = response.json() as Slot[]);
    //  .pipe(catchError(this.handleError));
}

Deleteslot(id: number) {


  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const authToken = localStorage.getItem('auth_token');
  headers.append('Authorization', `Bearer ${authToken}`);

  this.http.delete(this.baseUrl  + '/handler/api/slots/' + id , {headers}).
    subscribe((response) => {
     this.getSlotDetail();
     console.log('submit was completed');
    }
    );
  }

}
