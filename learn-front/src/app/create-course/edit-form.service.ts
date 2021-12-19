import {Injectable} from '@angular/core';
// import {HttpClient} from "@angular/common/http";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";

export interface CourseInterface {
  title: string;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class EditFormService {

  uuid: string;
  name: CourseInterface | undefined;
  title: CourseInterface | undefined;
  price: CourseInterface | undefined;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.uuid = this.router.routerState.snapshot.url.split('/')[2];
  }

  public getData(): Observable<CourseInterface> {
    return this.http.get<CourseInterface>(`http://localhost:8080/api/get-one/${this.uuid}`);
  }

  public sendData(data: CourseInterface) {

    const headers = {'content-type': 'application/json'};
    const body = {
      name: data.name,
      title: data.title,
      price: data.price,
    }
    console.log(body)
    return this.http.post<CourseInterface>(`http://localhost:8080/api/edit/${this.uuid}`,
      body,
      {
        headers: headers
      }
    )
  }

}
