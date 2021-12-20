import {Component} from '@angular/core';
// import {FormCreateCourseService} from "./form-create-course.service";
import {FormCreateCourse} from "./form-create-course";
import {CourseService} from "../common/service/course.service";
import {Router} from "@angular/router";

// import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent {

  constructor(
    private service: CourseService,
    private router: Router
  ) {
    this.form = new FormCreateCourse({title: '', name: '', price: 0});
  }

  form: FormCreateCourse;

  public onSubmit() {
    this.service.createCourse(this.form.value).subscribe((data: any) => {
      console.log(data)
      this.router.navigate(['/']).then();
    })
  }

}
