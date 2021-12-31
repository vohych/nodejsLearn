import {Injectable} from '@angular/core';
import {ViewCourseInterface} from "../interface/view-course.interface";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ViewCourseService {
  constructor(
    private http: HttpClient,
  ) {
  }


  public getAllCourse(): Observable<Array<ViewCourseInterface>> {
    return this.http.get<Array<ViewCourseInterface>>('http://localhost:8080/api/get-all')
  }

  public getData(uuid: string): Observable<ViewCourseInterface> {
    return this.http.get<ViewCourseInterface>(`http://localhost:8080/api/get-one/${uuid}`);
  }

}
