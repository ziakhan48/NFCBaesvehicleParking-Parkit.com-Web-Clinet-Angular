import { SlotreservationService } from './../shared/services/slotreservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slotreservationlist',
  templateUrl: './slotreservationlist.component.html',
  styleUrls: ['./slotreservationlist.component.css']
})
export class SlotreservationlistComponent implements OnInit {

  constructor(public slotreservationservice: SlotreservationService) { }

  ngOnInit() {
    this.slotreservationservice.getReservationList();
  }

}
