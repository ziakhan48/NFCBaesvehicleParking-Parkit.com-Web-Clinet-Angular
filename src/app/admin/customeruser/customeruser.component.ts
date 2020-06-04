import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-customeruser',
  templateUrl: './customeruser.component.html',
  styleUrls: ['./customeruser.component.css']
})
export class CustomeruserComponent implements OnInit {

  constructor(public userlistservice: UserService) { }

  ngOnInit() {
    this.userlistservice.getcustomer();
  }

}
