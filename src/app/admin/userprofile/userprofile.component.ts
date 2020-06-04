import { Userlist } from './../shared/models/userlist.model';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../shared/services/user.service';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userprofile: Userlist;
  constructor(public userservice: UserService
    ,         public router: Router,
              public route: ActivatedRoute) { }

  ngOnInit() {
    const user = this.route.snapshot.paramMap.get('userId');
    this.userservice.getuserProfile(user)
    .subscribe((userprofile: Userlist) => {
      this.userprofile = userprofile;
    },
    error => {
      // tslint:disable-next-line:comment-format
      //this.notificationService.printErrorMessage(error);
    });

  }

}
