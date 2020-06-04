import { HttpClient, HttpEventType } from '@angular/common/http';

import { NgForm } from '@angular/forms';
import { Adminprofile } from './../shared/models/adminprofile.model';
import { AdminprofileService } from './../shared/services/adminprofile.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AdminprofilepicComponent } from '../adminprofilepic/adminprofilepic.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { AdminsidebarComponent } from '../adminsidebar/adminsidebar.component';
@Component({
  selector: 'app-adminprofile',
  templateUrl: './adminprofile.component.html',
  styleUrls: ['./adminprofile.component.css']
})
export class AdminprofileComponent implements OnInit {
  [x: string]: any;

  adminProfile: Adminprofile;
  public progress: number;
  public message: string;
  baseUrl: string = null;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() public onUploadFinished = new EventEmitter();
  constructor(
    public adminprofileservice: AdminprofileService,
    private http2: HttpClient,
    public router: Router,
    private route: ActivatedRoute,
    private configService: ConfigService ,
    private adminsidebar: AdminsidebarComponent,
    private dialog: MatDialog) {this.baseUrl = configService.getApiURI(); }

  ngOnInit() {

    this.adminprofileservice.getAdminProfile()
    .subscribe((adminProfile: Adminprofile) => {
      this.adminProfile = adminProfile;
    },
    error => {
      // tslint:disable-next-line:comment-format
      //this.notificationService.printErrorMessage(error);
    });
}
public uploadFile = (files) => {
  if (files.length === 0) {
    return;
  }

  const fileToUpload = files[0] as File;
  const formData = new FormData();
  formData.append('file', fileToUpload, fileToUpload.name);

  // tslint:disable-next-line:max-line-length
  this.http2.post(this.baseUrl + '/admin/api/AdminProfilePicUpload/' + this.adminProfile.id, formData, {reportProgress: true, observe: 'events'})
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
        this.adminsidebar.UpdateUserprofile();
      }
    });
}
AdminUpdate(form: NgForm) {
const result = this.adminprofileservice.UpdateAdminprofile(form.value, this.adminProfile.id);
if (result) {
  alert('Admin Profile Updated Successfuly');
} else {
  alert('Information is Incomplete/Icorrect Filed To Update');
}

}


}
