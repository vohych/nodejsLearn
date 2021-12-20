import {Component, OnInit} from '@angular/core';
import {EditForm} from "./edit-form";
import {CourseService} from "../common/service/course.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})

export class EditCourseComponent implements OnInit {

  form: EditForm;
  uuid: string | undefined;

  constructor(
    private service: CourseService,
    private router: Router,
  ) {
    this.form = new EditForm({title: '', name: '', price: 0})
  }

  public ngOnInit(): void {
    this.uuid = this.router.routerState.snapshot.url.split('/')[2];
    this.service.getData(this.uuid).subscribe(data => {
      this.form = new EditForm(data)
    })
    console.log(this)
  }

  public onSubmit() {
    this.service.sendData(this.form.value, this.uuid).subscribe();
  }

  public deleteCourse() {
    this.service.delete(this.uuid).subscribe();
    this.router.navigate(['/']).then();
  }
}

