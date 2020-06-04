import { SlotService } from './../shared/services/slot.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Slotreservation } from '../shared/models/slotreservation.model';
import { SlotreservationService } from '../shared/services/slotreservation.service';
import { isNullOrUndefined } from 'util';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-slotreservation',
  templateUrl: './slotreservation.component.html',
  styleUrls: ['./slotreservation.component.css']
})
export class SlotreservationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    // tslint:disable-next-line:typedef-whitespace
    public dialogRef : MatDialogRef<SlotreservationComponent>,
    // tslint:disable-next-line:typedef-whitespace
    // private slotservice : SlotService,
    // tslint:disable-next-line:typedef-whitespace
    private reservationservice: SlotreservationService,
    private slotservice: SlotService
  ) { }

  formDatareservation: Slotreservation = new Slotreservation();
  closeModel() {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (!isNullOrUndefined( this.data.slotId)) {
      // console.log(this.reservationservice.slotReservation[this.data.slotId]);
      this.formDatareservation.slotId = this.data.slotId;
      this.slotservice.getSlots();
      // this.formDatareservation =  this.reservationservice.slotReservation[this.data.slotId];
  }




 }

 onsubmit(form: NgForm) {
this.reservationservice.Slotreservation(form.value);
alert('Slot Reservation Done Successfuly');
this.closeModel();

 }


}
