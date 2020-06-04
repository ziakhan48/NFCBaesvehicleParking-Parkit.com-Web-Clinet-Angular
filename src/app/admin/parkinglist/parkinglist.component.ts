import { AddparkingComponent } from './../addparking/addparking.component';
import { Parkinglist } from './../shared/models/parkinglist.model';
import { ParkingprofileService } from './../shared/services/parkingprofile.service';
import { ParkingprofileComponent } from './../parkingprofile/parkingprofile.component';
import { ParkinglistService } from './../shared/services/parkinglist.service';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-parkinglist',
  templateUrl: './parkinglist.component.html',
  styleUrls: ['./parkinglist.component.css']
})
export class ParkinglistComponent implements OnInit {
  parking: Parkinglist = new Parkinglist();
  constructor(
    public parkinglistservice: ParkinglistService,
    public parkiprofileservice: ParkingprofileService,
    public router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog
    ) { }
    parkingprofile: ParkingprofileComponent = new ParkingprofileComponent(this.parkiprofileservice, this.router, this.route);

  ngOnInit() {
      this.parkinglistservice.Parkinglist();

  }

  addparking(slotId?: number) {
    console.log(slotId);

       // tslint:disable-next-line:align
       const dialogConfig = new MatDialogConfig();
       // tslint:disable-next-line:align
       dialogConfig.autoFocus = true;
       // tslint:disable-next-line:align
       dialogConfig.disableClose = true;
       // tslint:disable-next-line:quotemark
       // tslint:disable-next-line:align
       // tslint:disable-next-line:quotemark
    dialogConfig.width = "50%";
       // tslint:disable-next-line:align
       dialogConfig.data = {
         slotId
       };
       // tslint:disable-next-line:semicolon
       // tslint:disable-next-line:align
       // tslint:disable-next-line:semicolon
    this.dialog.open(AddparkingComponent, dialogConfig)

  }

//   getProfile(parkingId?: number) {
// this.parkingprofile.ParkingProfile(parkingId);
//   }

}
