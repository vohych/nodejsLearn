import {Component, OnInit} from '@angular/core';
import {CheckTokenService} from "../check-token.service";
import {RoutingEnum} from "../routing.enum";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public tokenState: boolean = false;
  public links = RoutingEnum;

  constructor(
    private checkToken: CheckTokenService,
    private router: Router
  ) {}

  ngOnInit() {
    this.checkToken.stateEmitter.subscribe(data => {
      this.tokenState = data;
    })
  }

  public logout() {
    this.router.navigate([RoutingEnum.LOGIN_USER])
    this.checkToken.stateEmitter.emit(false);
    localStorage.setItem('auth_token', '');
    localStorage.setItem('refresh_token', '');
  }
}
