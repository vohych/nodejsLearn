import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LoginUserFormInterface} from "./login-user.form.interface";
import {LoginUserInterface} from "./login-user.interface";

@Injectable({
  providedIn: 'root'
})

export class LoginUserService {

  constructor(
    private http: HttpClient
  ) {
  }

  public login(data: LoginUserFormInterface) {

    const options = {
      headers: {'Content-Type': 'application/json'}
    };
    const body = {
      email: data.email,
      password: data.password,
    }

    return this.http.post<LoginUserInterface>('http://localhost:8080/api/login-user',
      body,
      options)
  }

}
