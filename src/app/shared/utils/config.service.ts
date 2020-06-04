import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  // tslint:disable-next-line:typedef-whitespace
  // tslint:disable-next-line:variable-name
  _apiURI: string;

  constructor() {
      this._apiURI = 'http://localhost:64654';
   }

   getApiURI() {
       return this._apiURI;
   }
}
