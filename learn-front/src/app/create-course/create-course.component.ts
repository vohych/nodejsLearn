import {Component} from '@angular/core';
import {FormCreateCourse} from "./form-create-course";
import {Router} from "@angular/router";
import {CreateCourseService} from "./create-course.service";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {

  constructor(
    private service: CreateCourseService,
    private router: Router
  ) {
    this.form = new FormCreateCourse({title: '', name: '', price: 0});
  }

  form: FormCreateCourse;

  public onSubmit() {
    this.service.createCourse(this.form.value).subscribe(() => {
      this.router.navigate(['/']).then();
    })
  }

}
