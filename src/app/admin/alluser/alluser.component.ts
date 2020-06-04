
import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-alluser',
  templateUrl: './alluser.component.html',
  styleUrls: ['./alluser.component.css']
})
export class AlluserComponent implements OnInit {

  constructor(public userlistservice: UserService) { }

  ngOnInit() {
    this.userlistservice.getallUsers();
  }

}
