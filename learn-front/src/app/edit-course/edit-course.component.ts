import {Component, OnInit} from '@angular/core';
import {EditForm} from "./edit-form";
import {CourseService} from "../common/service/course.service";
import {ViewCourseService} from "../common/service/view-course.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})

export class EditCourseComponent implements OnInit {

  public form: EditForm;
  private uuid: string | undefined;

  constructor(
    private service: CourseService,
    private router: Router,
    private viewService: ViewCourseService,
  ) {
    this.form = new EditForm({title: '', name: '', price: 0})
  }

  public ngOnInit(): void {
    this.uuid = this.router.routerState.snapshot.url.split('/')[2];
    this.viewService.getData(this.uuid).subscribe(data => {
      this.form = new EditForm(data)
    })
  }

  public onSubmit() {
    this.service.sendData(this.form.value, this.uuid).subscribe();
  }

  public deleteCourse() {
    this.service.delete(this.uuid).subscribe();
    this.router.navigate(['/']).then();
  }
}

