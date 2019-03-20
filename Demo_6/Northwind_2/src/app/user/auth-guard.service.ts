import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanLoad, Router, Route } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthGuardService.canActivate ...');
    return true;
  }

  canLoad(route: Route): boolean {
    console.log('AuthGuardService.canLoad ...');
    return true;
  }
}
