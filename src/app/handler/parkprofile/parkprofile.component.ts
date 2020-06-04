
import { ParkingprofileService } from './../shared/services/parkingprofile.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Parkingprofile } from '../shared/models/parkingprofile.model';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/utils/config.service';

@Component({
  selector: 'app-parkprofile',
  templateUrl: './parkprofile.component.html',
  styleUrls: ['./parkprofile.component.css']
})
export class ParkprofileComponent implements OnInit {
   parkingprofile: Parkingprofile;
  public progress: number;
  public message: string;
  baseUrl: string = null;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private profileservice: ParkingprofileService,
              private http2: HttpClient ,
              private configService: ConfigService) {this.baseUrl = configService.getApiURI(); }

  ngOnInit() {

    this.profileservice.getParkingProfile()
    .subscribe((parkingprofile: Parkingprofile) => {
      this.parkingprofile = parkingprofile;
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
  this.http2.post(this.baseUrl + '/Handler/api/ParkingProfilePicUpload/' + this.parkingprofile.id, formData, {reportProgress: true, observe: 'events'})
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        this.onUploadFinished.emit(event.body);

        this.profileservice.getParkingProfile()
        .subscribe((parkingprofile: Parkingprofile) => {
          this.parkingprofile = parkingprofile;
        },
        error => {
          // tslint:disable-next-line:comment-format
          //this.notificationService.printErrorMessage(error);
        });
      }
    });
}
Update(form: NgForm) {
const result = this.profileservice.Updateprofile(form.value , this.parkingprofile.id);

if (result) {
  alert('Parking Profile Updated Successfuly');
} else {
  alert('SomeThing Wrong....Parking Updating failed');
}


}

}
