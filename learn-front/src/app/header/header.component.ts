import {Component, OnInit} from '@angular/core';
import {CheckTokenService} from "../check-token.service";
import {RoutingEnum} from "../routing.enum";
import {AuthService} from "../auth.service";

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
    private authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.checkToken.stateEmitter.subscribe(data => {
      this.tokenState = data;
    })
  }

  public logout() {
    this.authService.logout();
  }

}
