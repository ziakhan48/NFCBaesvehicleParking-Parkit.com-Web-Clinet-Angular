import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SlotreservationService } from '../shared/services/slotreservation.service';

@Component({
  selector: 'app-slotreservationlist',
  templateUrl: './slotreservationlist.component.html',
  styleUrls: ['./slotreservationlist.component.css']
})
export class SlotreservationlistComponent implements OnInit {

  constructor( public router: Router,
               public route: ActivatedRoute,
               public slotreservationhistory: SlotreservationService) { }

ngOnInit() {
const slot = this.route.snapshot.paramMap.get('slotId');
this.slotreservationhistory.SlotReservationHistory(+slot);
}

}
