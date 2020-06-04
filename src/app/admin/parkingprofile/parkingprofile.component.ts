
import { Observable } from 'rxjs';
import { Parkinglist } from './../shared/models/parkinglist.model';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { ParkingprofileService } from '../shared/services/parkingprofile.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-parkingprofile',
  templateUrl: './parkingprofile.component.html',
  styleUrls: ['./parkingprofile.component.css']
})
@Injectable()
export class ParkingprofileComponent implements OnInit {

  constructor(
     public parkingservice: ParkingprofileService,
     private router: Router,
     private route: ActivatedRoute
     ) {      }
     parkinglist: Parkinglist;
  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let parking = this.route.snapshot.paramMap.get('parkingId');
    // tslint:disable-next-line:member-ordering
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:member-ordering
    // const id = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     params.get('parkingId'))
    // );
       // tslint:disable-next-line:comment-format
       //const id = this.route.paramMap.get('parkingId');
    this.parkingservice.getParkingProfile(+parking).
      subscribe((parkinglist: Parkinglist) => {
      this.parkinglist = parkinglist;
  });

   // tslint:disable-next-line:typedef-whitespace
  //  ParkingProfile(parkingId?: number) {
  //   this.parkingservice.getParkingProfile(parkingId).
  //     subscribe((parkinglist: Parkinglist) => {
  //     this.parkinglist = parkinglist;

  //     // tslint:disable-next-line:object-literal-shorthand

  //     this.router.navigate(['/admin/parkingprofile', {id: parkingId}]);
  //   });
  }

}
