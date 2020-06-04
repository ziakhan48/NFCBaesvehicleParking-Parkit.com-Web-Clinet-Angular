import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilesetting',
  templateUrl: './profilesetting.component.html',
  styleUrls: ['./profilesetting.component.css']
})
export class ProfilesettingComponent implements OnInit {

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
