import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {routingComponent} from "../app-routing.module";

// const router = Router.
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private http: HttpClient, private router: Router) {
  }
  uuid: string | undefined;
  name: string | undefined;
  title: string | undefined;
  price: number | undefined;

  ngOnInit(): void {
    this.uuid = this.activeRoute.snapshot.url[1].path;
    this.http.get<any>(`http://localhost:8080/api/get-one/${this.uuid}`).subscribe(data => {
      this.viewOneCourse(data);
    })
  }

  viewOneCourse(data: any) {
    this.name = data.name;
    this.title = data.title;
    this.price = data.price;
  }

}
