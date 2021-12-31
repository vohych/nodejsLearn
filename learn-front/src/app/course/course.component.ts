import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ViewCourseService} from "../common/service/view-course.service";

enum EnumBuy {
  BUY = 'BUY',
  CLOSE = 'CLOSE'
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent implements OnInit {

  public uuid: string = '';
  public name: ViewCourseService | undefined;
  public title: ViewCourseService | undefined;
  public price: ViewCourseService | undefined;
  public buyState: boolean = false;
  public buyText: string = EnumBuy.BUY;

  constructor(
    private activeRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private service: ViewCourseService,
  ) {
  }


  public ngOnInit(): void {
    this.uuid = this.activeRoute.snapshot.url[1].path;
    this.service.getData(this.uuid).subscribe(data => {
      this.viewOneCourse(data);
    })
  }

  public viewOneCourse(data: any): void {
    this.name = data.name;
    this.title = data.title;
    this.price = data.price;
  }

  public buyForm() {
    this.buyState = !this.buyState;
    this.buyState ? this.buyText = EnumBuy.CLOSE : this.buyText = EnumBuy.BUY;
  }

}
