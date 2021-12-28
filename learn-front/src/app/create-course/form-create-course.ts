import {FormControl, FormGroup} from "@angular/forms";
import {CreateCourseInterface} from "./create-course.interface";

export class FormCreateCourse extends FormGroup {

  constructor(data: CreateCourseInterface) {
    super({
      title: new FormControl(data.title),
      name: new FormControl(data.name),
      price: new FormControl(data.price),
    });
  }

  get title(): FormControl {
    return this.get('title') as FormControl
  }

  get name(): FormControl {
    return this.get('name') as FormControl
  }

  get price(): FormControl {
    return this.get('price') as FormControl
  }

}
