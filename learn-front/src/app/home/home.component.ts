import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CourseService} from "../common/service/course.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private service: CourseService
  ) {
  }

  courses: any | undefined;
  course: any | {};

  public ngOnInit() {

    this.service.getAllCourse().subscribe(data => {
      this.viewAllCourse(data);
    })

  }

  viewAllCourse(data: Object) {
    Object.keys(data).length ? this.courses = data : this.router.navigateByUrl('/create-course');
  }
}
