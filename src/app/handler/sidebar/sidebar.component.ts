import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Subscription } from 'rxjs';
import { Handlerprofile } from '../shared/models/handlerprofile.model';
import { HandlerprofileService } from '../shared/services/handlerprofile.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  status: boolean;
 subscription: Subscription;
 handlerProfile: Handlerprofile;
  constructor(private userService: UserService , private handlerServices: HandlerprofileService) { }


  logout() {
    this.userService.logout();
 }

 ngOnInit() {
  this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
  this.handlerServices.getHandlerProfile()
  .subscribe((handlerProfile: Handlerprofile) => {
    this.handlerProfile = handlerProfile;
  },
  error => {
    // tslint:disable-next-line:comment-format
    //this.notificationService.printErrorMessage(error);
  });
}


UpdateUserprofile() {
  this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
  this.handlerServices.getHandlerProfile()
  .subscribe((handlerProfile: Handlerprofile) => {
    this.handlerProfile = handlerProfile;
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
