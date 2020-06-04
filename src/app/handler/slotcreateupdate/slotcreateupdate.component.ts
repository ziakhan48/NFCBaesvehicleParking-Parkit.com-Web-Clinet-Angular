import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SlotService } from '../shared/services/slot.service';
import { isNullOrUndefined } from 'util';
import { NgForm } from '@angular/forms';
import { Slot } from '../shared/models/slot.model';

@Component({
  selector: 'app-slotcreateupdate',
  templateUrl: './slotcreateupdate.component.html',
  styleUrls: ['./slotcreateupdate.component.css']
})
export class SlotcreateupdateComponent implements OnInit {
  // tslint:disable-next-line:typedef-whitespace
  formDataslot : Slot = new Slot();
  slots: Slot[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    // tslint:disable-next-line:typedef-whitespace
    public dialogRef : MatDialogRef<SlotcreateupdateComponent>,
    // tslint:disable-next-line:typedef-whitespace
    private slotservice : SlotService,
    // tslint:disable-next-line:typedef-whitespace

  ) { }


  ngOnInit() {

    if (!isNullOrUndefined( this.data.slotId)) {
      console.log(this.slotservice.slots[this.data.slotId]);
      this.formDataslot = Object.assign({}, this.slotservice.slots[this.data.slotId]);
    }

  }
  closeModel() {
    this.dialogRef.close();
  }


  onSubmit(form: NgForm) {
    console.log(form.value);

    if (!isNullOrUndefined( this.data.slotId)) {
        this.slotservice.UpdateSlot(form.value , this.data.slotId);
        alert('Slot Updated Successfuly');
    }
    // tslint:disable-next-line:one-line
    else{
    this.slotservice .AddNewSlot(form.value);
    alert('New Slot Added Succesfuly');
    // tslint:disable-next-line:no-trailing-whitespace
    } 
    // tslint:disable-next-line:quotemark
    console.log("After Save");
    console.log(this.slotservice.getSlotDetail);

    this.closeModel();

}




}
