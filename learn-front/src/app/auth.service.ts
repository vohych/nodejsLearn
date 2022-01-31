import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CheckTokenService} from "./check-token.service";
import {Router} from "@angular/router";
import {RoutingEnum} from "./routing.enum";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: string | null = localStorage.getItem('access_token');

  constructor(
    private http: HttpClient,
    private checkToken: CheckTokenService,
    private router: Router
  ) {
  }

  public logout() {

    return this.http.post('http://localhost:8080/api/logout', '').subscribe(
      ()=>{
        localStorage.setItem('access_token', '');
        localStorage.setItem('refresh_token', '');
        this.router.navigate([RoutingEnum.LOGIN_USER]).then();
        this.checkToken.stateEmitter.emit(false);
      }
    );

  }

}
