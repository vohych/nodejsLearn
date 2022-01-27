import {Injectable} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {CheckTokenService} from "./check-token.service";

@Injectable({
  providedIn: 'root'
})
export class CheckTokenGuard implements CanActivate {

  constructor(
    private checkToken: CheckTokenService,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.checkToken.stateEmitter.emit(!!localStorage.getItem('auth_token'))
    const token = localStorage.getItem('auth_token');
    if (!token) {
      return !localStorage.getItem('auth_token');
    } else {
      return !!localStorage.getItem('auth_token');
    }

  }

}
