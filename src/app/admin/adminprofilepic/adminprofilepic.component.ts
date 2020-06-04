import { Adminprofilepic } from './../shared/models/adminprofilepic.model';
import { AdminprofileService } from './../shared/services/adminprofile.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { Adminprofile } from '../shared/models/adminprofile.model';

@Component({
  selector: 'app-adminprofilepic',
  templateUrl: './adminprofilepic.component.html',
  styleUrls: ['./adminprofilepic.component.css']
})
export class AdminprofilepicComponent implements OnInit {
  adminProfile: Adminprofile;
  public progress: number;
  public message: string;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() public onUploadFinished = new EventEmitter();
baseUrl: string = null;
  constructor(private http: HttpClient,
              private configService: ConfigService ,
              public adminprofileservice: AdminprofileService, ) {
    this.baseUrl = configService.getApiURI();
   }

  ngOnInit() {
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }

    const fileToUpload = files[0] as File;
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post(this.baseUrl + '/admin/api/AdminProfilePicUpload/', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
          this.adminprofileservice.getAdminProfile()
          .subscribe((adminProfile: Adminprofile) => {
            this.adminProfile = adminProfile;
          },
          error => {
            // tslint:disable-next-line:comment-format
            //this.notificationService.printErrorMessage(error);
          });
        }
      });
  }

}
