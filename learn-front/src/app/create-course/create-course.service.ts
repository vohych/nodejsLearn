import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";

// import {CourseInterface} from "../edit-course/edit-form.service";

interface InterfaceCourse {
  name: string;
  title: string;
  price: number;
  url: string;
}

class RequestOptions {
  constructor(param: { headers: Headers }) {

  }

}

@Injectable({
  providedIn: 'root'
})

export class CreateCourseService {

  uuid: string;
  name: InterfaceCourse | undefined;
  title: InterfaceCourse | undefined;
  price: InterfaceCourse | undefined;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.uuid = this.router.routerState.snapshot.url.split('/')[2];
  }

  public createCourse(data: InterfaceCourse) {

    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers: headers});
    const body = new HttpParams({
      fromString: `name=${data.name}&title=${data.title}&price=${data.price}`
    });

    return this.http.post<any>(`http://localhost:8080/api/create`,
      body,
      options
    )
  }


}
