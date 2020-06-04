

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SlotreservationService } from '../shared/services/slotreservation.service';

@Component({
  selector: 'app-slotreservationhistory',
  templateUrl: './slotreservationhistory.component.html',
  styleUrls: ['./slotreservationhistory.component.css']
})
export class SlotreservationhistoryComponent implements OnInit {

  constructor( public router: Router,
               public route: ActivatedRoute,
               public slotreservationhistory: SlotreservationService) { }

  ngOnInit() {
    const slot = this.route.snapshot.paramMap.get('slotId');
    this.slotreservationhistory.SlotReservationHistory(+slot);
  }

}
