import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { Userdetail } from './shared/models/userdetail.model';
import { Observable } from 'rxjs';

@Injectable()
 export class Auth implements CanActivate  {

  userDataSubscription: any;
  userData = new Userdetail();

  constructor(private router: Router, private authService: UserService) {
    this.userDataSubscription = this.authService.userData.asObservable().subscribe(data => {
      this.userData = data;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.userData.role === 'Handler') {
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
