import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserStateService } from '../auth/user-state.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService implements CanActivate {

  constructor(
    private router: Router,
    private userState: UserStateService
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userState.hasUser() && this.userState.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['user']);
    return false;
  }
}
