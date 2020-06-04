import { ParkimageService } from './../shared/services/parkimage.service';
import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ConfigService } from 'src/app/shared/utils/config.service';
import { Parkingprofile } from '../shared/models/parkingprofile.model';
import { ParkingprofileService } from '../shared/services/parkingprofile.service';

@Component({
  selector: 'app-parkingimage',
  templateUrl: './parkingimage.component.html',
  styleUrls: ['./parkingimage.component.css']
})
export class ParkingimageComponent implements OnInit {
  public progress: number;
  public message: string;
  baseUrl: string = null;
  parkingprofile: Parkingprofile;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() public onUploadFinished = new EventEmitter();
  constructor(private http: HttpClient,
              private profileservice: ParkingprofileService,
              private configService: ConfigService,
              public parkimageservice: ParkimageService) { this.baseUrl = configService.getApiURI(); }

  ngOnInit() {
    this.parkimageservice.getParkimages();
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
    this.http.post(this.baseUrl + '/Handler/api/ParkingImages/' + this.parkingprofile.id, formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);

          this.parkimageservice.getParkimages();
        }
      });
  }

}
