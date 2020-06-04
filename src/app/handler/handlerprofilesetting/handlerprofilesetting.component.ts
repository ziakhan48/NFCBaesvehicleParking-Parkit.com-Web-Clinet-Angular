import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handlerprofilesetting',
  templateUrl: './handlerprofilesetting.component.html',
  styleUrls: ['./handlerprofilesetting.component.css']
})
export class HandlerprofilesettingComponent implements OnInit {

  constructor() { }

  ispasswordchange = true;
  isusernamechange = false;
  ngOnInit() {
  }


  onPasswordChange() {
    this.ispasswordchange = true;
    this.isusernamechange = false;
  }

  onUsernameChange() {
    this.isusernamechange = true;
    this.ispasswordchange = false;
  }
}
