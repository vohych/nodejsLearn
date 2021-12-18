import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
  }
  courses: any | undefined;
  course: any | {};

  public ngOnInit(){

    this.http.get<any>('http://localhost:8080/api/get-all').subscribe(data => {
      this.viewAllCourse(data);
    })

  }

  viewAllCourse(data: Object){
    this.courses = data;
    // console.log(this.courses)
  }
}
