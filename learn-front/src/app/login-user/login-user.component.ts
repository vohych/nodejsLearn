import {Component, OnInit} from '@angular/core';
import {LoginUserFormService} from "./login-user.form.service";
import {LoginUserService} from "./login-user.service";
import {CheckTokenService} from "../check-token.service";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})

export class LoginUserComponent implements OnInit {

  public validation: boolean = true;
  public form: LoginUserFormService;

  constructor(
    private service: LoginUserService,
    private checkToken: CheckTokenService,
  ) {
    this.form = new LoginUserFormService({email: 'test', password: '1111'});
  }

  public ngOnInit(): void {

  }

  public onSubmit(): void {
    this.service.login(
      {
        email: this.form.value.email,
        password: this.form.value.password,
      }
    ).subscribe(data=>{
      data.status.code === 200 ? this.validation = true : this.validation = false;
      localStorage.setItem('auth_token', data.user.token);
      this.checkToken.token.emit(data.user.token)
      this.checkToken.token.subscribe(data=>{
        console.log(data, '\n', data.user.token)
      })

      this.checkToken.stateEmitter.emit(!!localStorage.getItem('auth_token'))
    })
  };

}

