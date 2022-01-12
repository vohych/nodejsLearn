import { Injectable } from '@angular/core';
import {CreateCourseInterface} from "./create-course.interface";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class CreateCourseService {

  constructor(
    private http: HttpClient,
  ) { }

  public createCourse(data: CreateCourseInterface) {

    let options = {
      headers: {'Content-Type': 'application/json'}
    };

    const body = {
      name: data.name,
      title: data.title,
      price: data.price,
    }

    return this.http.post<any>(`http://localhost:8080/api/create-course`,
      body,
      options
    )
  }

}
