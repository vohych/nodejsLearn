import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CreateUserFormInterface} from "./create-user.form.interface";

@Injectable({
  providedIn: 'root'
})

export class CreateUserService {
  constructor(
    private http: HttpClient
  ) {
  }


  public createUser(data: CreateUserFormInterface){

      let options = {
        headers: {'Content-Type': 'application/json'}
      };

      const body = {
        name: data.name,
        email: data.email,
        password: data.password,
      }
      console.log(body)
      return this.http.post<any>(`http://localhost:8080/api/create-user`,
        body,
        options
      )
  }

}
