import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";
import {publish} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

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
