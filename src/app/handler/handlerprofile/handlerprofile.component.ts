import { SidebarComponent } from './../sidebar/sidebar.component';
import { NgForm } from '@angular/forms';
import { HandlerprofileService } from './../shared/services/handlerprofile.service';
import { Handlerprofile } from './../shared/models/handlerprofile.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/utils/config.service';

@Component({
  selector: 'app-handlerprofile',
  templateUrl: './handlerprofile.component.html',
  styleUrls: ['./handlerprofile.component.css']
})
export class HandlerprofileComponent implements OnInit {

  handlerProfile: Handlerprofile;
  public progress: number;
  public message: string;
  baseUrl: string = null;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private handlerServices: HandlerprofileService ,
              private http2: HttpClient ,
              private sidebar: SidebarComponent ,
              private configService: ConfigService , ) {this.baseUrl = configService.getApiURI(); }

  ngOnInit() {

    this.handlerServices.getHandlerProfile()
    .subscribe((handlerProfile: Handlerprofile) => {
      this.handlerProfile = handlerProfile;
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
  this.http2.post(this.baseUrl + '/Handler/api/HandlerProfilePictureUpload/' + this.handlerProfile.id, formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);

        this.handlerServices.getHandlerProfile()
        .subscribe((handlerProfile: Handlerprofile) => {
          this.handlerProfile = handlerProfile;
        },
        error => {
          // tslint:disable-next-line:comment-format
          //this.notificationService.printErrorMessage(error);
        });
        this.sidebar.UpdateUserprofile();
      }
    });
}

UpdateUser(form: NgForm) {
this.handlerServices.UpdateUserprofile(form.value , this.handlerProfile.id);
alert('Parking Profile Updated Successfuly');
}

}
