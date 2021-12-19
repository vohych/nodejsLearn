import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {isEmpty} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  courses: any | undefined;
  course: any | {};

  public ngOnInit() {

    this.http.get<any>('http://localhost:8080/api/get-all').subscribe(data => {
      this.viewAllCourse(data);
    })

  }

  viewAllCourse(data: Object) {
    Object.keys(data).length ? this.courses = data : this.router.navigateByUrl('/create-course');
  }
}
