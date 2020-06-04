import { SlotreservationComponent } from './../slotreservation/slotreservation.component';

import { Component, OnInit } from '@angular/core';
import { SlotService } from '../shared/services/slot.service';
import { MatDialogModule, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SlotcreateupdateComponent } from '../slotcreateupdate/slotcreateupdate.component';
import { Slot } from '../shared/models/slot.model';
@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {
  constructor(public slotservice: SlotService,

              private dialog: MatDialog,

    ) { }

reserve = false;
   slots: Slot[];

 result = false;


  ngOnInit() {

     this.slotservice.getSlotDetail();
    // .subscribe(
    // //   data => {
    // //     this.slots = data;
    // //   }
    // // );
  }

  // tslint:disable-next-line:typedef-whitespace
  addEditExpenseItem(slotId? : number) {
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
     this.dialog.open(SlotcreateupdateComponent, dialogConfig)

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


   DeleteItem(index) {
    if (confirm('Are you sure To Delete The Slot?')) {
     const slotresult = this.slotservice.Deleteslot(index);
    // tslint:disable-next-line:align

     if (slotresult != null ) {
      alert('Slot Deeleted Successfuly');
    } else {
      alert('Error Ocurred ....Slot deleted failed ');
    }


     this.result = true;
    }

    if (this.result === false) {
      alert('Slot delete failed ');
    }

    }



    // this.toastr.success('Expense successfully deleted', 'AEM', {
    //   timeOut: 2000
    // });
  }


