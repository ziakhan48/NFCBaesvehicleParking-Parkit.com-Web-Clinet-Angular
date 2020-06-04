import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-handleruser',
  templateUrl: './handleruser.component.html',
  styleUrls: ['./handleruser.component.css']
})
export class HandleruserComponent implements OnInit {

  constructor(public userlistservice: UserService) { }

  ngOnInit() {
    this.userlistservice.gethandlers();
  }

}
