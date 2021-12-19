import {Injectable} from '@angular/core';
// import {HttpClient} from "@angular/common/http";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";

export interface CourseInterface {
  title: string;
  name: string;
  price: number;
}

class RequestOptions {
  constructor(param: { headers: Headers }) {

  }

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

  public sendData(data: CourseInterface ) {

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    const body = new HttpParams({
      fromString: `uuid=${this.uuid}&name=${data.name}&title=${data.title}&price=${data.price}`
    });
    return this.http.post<any>(`http://localhost:8080/api/edit/${this.uuid}`,
      body,
      options
    )

  }

  delete(){
    return this.http.delete(`http://localhost:8080/api/delete/${this.uuid}`)
  }

}
