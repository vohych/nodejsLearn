import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ViewCourseService} from "../common/service/view-course.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private service: ViewCourseService,
  ) {
  }

  uuid: string | undefined;
  name: ViewCourseService | undefined;
  title: ViewCourseService | undefined;
  price: ViewCourseService | undefined;

  public ngOnInit(): void {
    this.uuid = this.activeRoute.snapshot.url[1].path;
    this.service.getData(this.uuid).subscribe(data=>{
      this.viewOneCourse(data);
    })
  }

  public viewOneCourse(data: any): void {
    this.name = data.name;
    this.title = data.title;
    this.price = data.price;
  }

}
