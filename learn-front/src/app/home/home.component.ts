import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {ViewCourseService} from '../common/service/view-course.service';
import {ViewCourseInterface} from "../common/interface/view-course.interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public courses: Array<ViewCourseInterface> = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private service: ViewCourseService
  ) {
  }

  public ngOnInit() {
    this.service.getAllCourse().subscribe(data => {
      this.viewAllCourse(data);
    })
  }

  viewAllCourse(data: Array<ViewCourseInterface>) {
    Object.keys(data).length ? this.courses = data : this.router.navigateByUrl('/create-course');
  }
}

