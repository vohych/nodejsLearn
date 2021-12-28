import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

export interface CourseInterface {
  title: string;
  name: string;
  price: number;
  id: number;
}

@Injectable({
  providedIn: 'root'
})

export class  CourseService {

  uuid: string | undefined;
  name: CourseInterface | undefined;
  title: CourseInterface | undefined;
  price: CourseInterface | undefined;

  constructor(
    private http: HttpClient,
  ) {
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

  delete(uuid: string | undefined) {
    return this.http.delete(`http://localhost:8080/api/delete/${uuid}`)
  }

  public search(data: any, searchType: string) {

    const headers = {'Content-Type' : 'text/plain'};
    console.log(data, searchType)
    const params = new HttpParams({
      fromObject: {
        type: searchType,
        value: data.search,
      }
    });

    return this.http.get('http://localhost:8080/api/strong-search',
      {
        headers,
        params
      }
    )
  }

}
