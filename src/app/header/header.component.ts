import { AdminGuard } from './../admin.guard';
import { Userdetail } from './../shared/models/userdetail.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy  {


  role: string;
  status: boolean;
 subscription: Subscription;
 isExpanded = false;
 userDataSubscription: any;
 userData = new Userdetail();
  // tslint:disable-next-line:typedef-whitespace
  constructor(
    private userService: UserService,
    ) {
      this.userDataSubscription = this.userService.userData.asObservable().subscribe(data => {
        this.userData = data;
      });
   }



logout() {
     this.userService.logout();
  }

ngOnInit() {
    this.subscription = this.userService.authNavStatus$.subscribe(status => this.status = status);
    this.role = AdminGuard.adminrole;
  }

ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
  }

}
