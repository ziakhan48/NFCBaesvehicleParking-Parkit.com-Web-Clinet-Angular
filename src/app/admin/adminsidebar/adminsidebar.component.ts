import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Subscription } from 'rxjs';
import { AdminprofileService } from '../shared/services/adminprofile.service';
import { Adminprofile } from '../shared/models/adminprofile.model';

@Component({
  selector: 'app-adminsidebar',
  templateUrl: './adminsidebar.component.html',
  styleUrls: ['./adminsidebar.component.css']
})
export class AdminsidebarComponent implements OnInit, OnDestroy {

  status: boolean;
 subscription: Subscription;
 adminProfile: Adminprofile;
  constructor(private userService: UserService, public adminprofileservice: AdminprofileService) { }

  logout() {
    this.userService.logout();
 }

 ngOnInit() {
  this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
  this.adminprofileservice.getAdminProfile()
  .subscribe((adminProfile: Adminprofile) => {
    this.adminProfile = adminProfile;
  },
  error => {
    // tslint:disable-next-line:comment-format
    //this.notificationService.printErrorMessage(error);
  });
}

UpdateUserprofile() {
  this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
  this.adminprofileservice.getAdminProfile()
  .subscribe((adminProfile: Adminprofile) => {
    this.adminProfile = adminProfile;
  },
  error => {
    // tslint:disable-next-line:comment-format
    //this.notificationService.printErrorMessage(error);
  });
}
 ngOnDestroy() {
  // prevent memory leak when component is destroyed
  this.subscription.unsubscribe();
}

}
