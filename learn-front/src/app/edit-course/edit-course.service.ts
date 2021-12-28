import {Injectable} from '@angular/core';
import {UUIDInterface} from "./edit-course.interface";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CourseInterface} from "../common/service/course.service";

@Injectable({
  providedIn: 'root'
})

export class EditCourseService {

  constructor(
    private http: HttpClient,
  ) {
  }

  delete(uuid: UUIDInterface) {
    return this.http.delete(`http://localhost:8080/api/delete/${uuid}`)
  }

  public getData(uuid: UUIDInterface): Observable<CourseInterface> {
    return this.http.get<CourseInterface>(`http://localhost:8080/api/get-one/${uuid}`);
  }

}
