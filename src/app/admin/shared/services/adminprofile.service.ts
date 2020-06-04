import { Adminprofilepic } from './../models/adminprofilepic.model';
import { Adminprofile } from './../models/adminprofile.model';
import { BaseService } from './../../../shared/services/base.service';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Http, Response, Headers } from '@angular/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminprofileService extends BaseService {

  baseUrl = '';
  constructor(private http: Http, private configService: ConfigService) {
    super();
    this.baseUrl = configService.getApiURI();
 }

 getAdminProfile(): Observable<Adminprofile> {
  // tslint:disable-next-line:prefer-const
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
// tslint:disable-next-line:prefer-const
// tslint:disable-next-line:align
const authToken = localStorage.getItem('auth_token');
  headers.append('Authorization', `Bearer ${authToken}`);

// tslint:disable-next-line:quotemark
  return this.http.get(this.baseUrl + "/admin/api/AdminProfile/Profile", {headers})
  .pipe(map(response => response.json()))
  .pipe(catchError(this.handleError));
}

AddProfilepic(form: Adminprofilepic) {

  // tslint:disable-next-line:prefer-const
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const authToken = localStorage.getItem('auth_token');
  headers.append('Authorization', `Bearer ${authToken}`);

  return this.http.post(this.baseUrl + '/admin/api/UploadProfile', form, {headers}).
  subscribe((response) => {
  //  this.getSlotDetail();
  }
  );

}

UpdateAdminprofile(form: Adminprofile , id: string) {

  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  // tslint:disable-next-line:prefer-const
  // tslint:disable-next-line:align
  const authToken = localStorage.getItem('auth_token');
  headers.append('Authorization', `Bearer ${authToken}`);

  return this.http.put(this.baseUrl + '/admin/api/AdminProfile/' + id, form, { headers })
    .subscribe((response) => {
      this.getAdminProfile();
    });
}

}
