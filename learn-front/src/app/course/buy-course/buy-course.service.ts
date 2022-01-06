import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BuyInterface} from "./buy.interface";

@Injectable({
  providedIn: 'root'
})

export class BuyCourseService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public buyCourse(data: BuyInterface) {

    const id = data.uuid;

    let options = {
      headers: {'Content-Type': 'application/json'},
    };

    const body = {
      name: data.name,
      email: data.email,
    }

    console.log(data)

    return this.http.post(`http://localhost:8080/api/${id}/buy`,
      body,
      options
    );
  }

}
