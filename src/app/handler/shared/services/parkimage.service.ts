
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { Headers, Http } from '@angular/http';
import { Parkingimage } from '../models/parkingimage';

@Injectable({
  providedIn: 'root'
})
export class ParkimageService {
  baseUrl = '';

  parkingimages: Parkingimage[];
  constructor(private http: Http,
              private configService: ConfigService) {
      this.baseUrl = configService.getApiURI(); }


  getParkimages() {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);



    return this.http.get(this.baseUrl + '/Handler/api/ParkingImages', {headers})
     .subscribe(response =>
      this.parkingimages = response.json() as Parkingimage[]);
    //  .pipe(catchError(this.handleError));
}
}
