import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

export interface CourseInterface {
  title: string;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class CourseService {

  uuid: string | undefined;
  name: CourseInterface | undefined;
  title: CourseInterface | undefined;
  price: CourseInterface | undefined;

  constructor(
    private http: HttpClient,
  ) {
  }

  public ngOnInit() {

  }

  public getAllCourse(): Observable<CourseInterface> {
    return this.http.get<CourseInterface>('http://localhost:8080/api/get-all')
  }

  public getData(uuid: string): Observable<CourseInterface> {
    return this.http.get<CourseInterface>(`http://localhost:8080/api/get-one/${uuid}`);
  }


  public sendData(data: CourseInterface, uuid: string | undefined) {

    let options = {headers: {'Content-Type': 'application/json'}};
    const body = {
      uuid: uuid,
      name: data.name,
      title: data.title,
      price: data.price,
    }
    return this.http.post<CourseInterface>(`http://localhost:8080/api/edit/${uuid}`,
      body,
      options
    )

  }

  public createCourse(data: CourseInterface) {

    let options = {
      headers: {'Content-Type': 'application/json'}
    };

    const body = {
      name: data.name,
      title: data.title,
      price: data.price,
    }

    return this.http.post<any>(`http://localhost:8080/api/create`,
      body,
      options
    )
  }

  delete(uuid: string | undefined) {
    return this.http.delete(`http://localhost:8080/api/delete/${uuid}`)
  }

  public strongSearch(data: any) {

    const headers = {'Content-Type' : 'text/plain'};
    const params = new HttpParams().set("strongSearch", JSON.stringify(data.strongSearch))

    return this.http.get('http://localhost:8080/api/strong-search',
      {
        headers,
        params
      }
    )
  }
}
