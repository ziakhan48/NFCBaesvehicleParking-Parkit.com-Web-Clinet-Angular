import { Component, OnInit } from '@angular/core';
import { SlotService } from '../shared/services/slot.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { switchMap } from 'rxjs/operators';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SlotreservationComponent } from '../slotreservation/slotreservation.component';
@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {

  constructor(public slotservice: SlotService
    ,         public router: Router,
              public route: ActivatedRoute,
              private dialog: MatDialog) { }

  ngOnInit() {
    const parking = this.route.snapshot.paramMap.get('parkingId');
    this.slotservice.getSlots(+parking);
  }


  reservation(slotId?: number) {


    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = {
     slotId
   };
    this.dialog.open(SlotreservationComponent, dialogConfig);

}

}
