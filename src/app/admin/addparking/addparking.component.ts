import { Addparking } from './../shared/models/addparking.model';
import { AddparkingService } from './../shared/services/addparking.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addparking',
  templateUrl: './addparking.component.html',
  styleUrls: ['./addparking.component.css']
})
export class AddparkingComponent implements OnInit {
  formDataparking: Addparking = new Addparking();
  constructor(
    public addparkingservice: AddparkingService,
    public dialogRef: MatDialogRef<AddparkingComponent>,
    // tslint:disable-next-line:typedef-whitespace
    ) { }

  ngOnInit() {
  }

  closeModel() {
    this.dialogRef.close();
  }

  onSubmit(form: NgForm) {

    this.addparkingservice.AddParking(form.value);
    alert('New Slot Added Succesfuly');
    this.closeModel();

}



}
