import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {CheckTokenService} from "./check-token.service";
import {RoutingEnum} from "./routing.enum";

@Injectable({
  providedIn: 'root'
})
export class UnAuthGuard implements CanActivate {

  constructor(
    private checkToken: CheckTokenService,
    private router: Router,
  ) {
  }

  canActivate(

    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!!localStorage.getItem('access_token')){
      this.router.navigate([RoutingEnum.HOME]).then();
    }
    this.checkToken.stateEmitter.emit(!!localStorage.getItem('access_token'))
    return !localStorage.getItem('access_token');

  }

}
