import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './shared/services/user.service';
import { Userdetail } from './shared/models/userdetail.model';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  static adminrole: string;
  userDataSubscription: any;
  userData = new Userdetail();
  constructor(private router: Router, private authService: UserService) {
    this.userDataSubscription = this.authService.userData.asObservable().subscribe(data => {
      this.userData = data;
    });

    AdminGuard.adminrole = null;
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (AdminGuard.adminrole == null) {
         AdminGuard.adminrole = this.userData.role;
      }

      if (AdminGuard.adminrole === 'Admin') {
      return true;
    }

      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
  }

}
