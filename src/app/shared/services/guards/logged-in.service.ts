import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService implements CanActivate {

  constructor(
    private router: Router
  ) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.router.navigate(['user']);
    return false;
  }
}
