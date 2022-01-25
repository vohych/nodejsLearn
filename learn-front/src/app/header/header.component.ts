import {Component, OnInit} from '@angular/core';
import {CheckTokenService} from "../check-token.service";
import {RoutingEnum} from "../routing.enum";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public tokenState: boolean = false;
  public links = RoutingEnum;

  constructor(
    private checkToken: CheckTokenService
  ) {
    console.log(!!this.tokenState)
  }

  ngOnInit() {
    this.checkToken.stateEmitter.subscribe((data) => {
      this.tokenState = data;
      console.log('asdsadas', data)
    })
  }

  public logout() {
    console.log(this.tokenState)
    this.checkToken.stateEmitter.emit(false);
    localStorage.setItem('auth_token', '');
    localStorage.setItem('refresh_token', '');
  }
}
