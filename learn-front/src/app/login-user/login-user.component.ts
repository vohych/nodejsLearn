import {Component} from '@angular/core';
import {LoginUserFormService} from "./login-user.form.service";
import {LoginUserService} from "./login-user.service";
import {CheckTokenService} from "../check-token.service";
import {Router} from "@angular/router";
import {RoutingEnum} from "../routing.enum";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})

export class LoginUserComponent {

  public validation: boolean = true;
  public form: LoginUserFormService;

  constructor(
    private service: LoginUserService,
    private checkToken: CheckTokenService,
    private router: Router,
  ) {
    this.form = new LoginUserFormService({email: 'test', password: '1111'});
  }

  public onSubmit(): void {

    this.service.login(
      {
        email: this.form.value.email,
        password: this.form.value.password,
      }
    ).subscribe(data => {
      data.status.code === 200 ? this.validation = true : this.validation = false;
      localStorage.setItem('access_token', data.user.access_token);
      localStorage.setItem('refresh_token', data.user.refresh_token);
      this.checkToken.token.emit(data.user.access_token);
      this.checkToken.stateEmitter.emit(!!localStorage.getItem('access_token'));
      this.router.navigate([RoutingEnum.HOME]).then();
    })

  };

}

