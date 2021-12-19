import {Component, OnInit} from '@angular/core';
import {CreateCourseService} from "./create-course.service";
import {EditForm} from "./edit-form";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  constructor(
    private service: CreateCourseService
  ) {
    this.form = new EditForm({title: '', name: '', price: 0});
  }

  form: EditForm;

  public ngOnInit(): void {
    // this.service
  }

  public onSubmit() {
    this.service.createCourse(this.form.value).subscribe(data => {
        console.log(data)
      })
  }

}
