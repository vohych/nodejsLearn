import {FormControl, FormGroup} from "@angular/forms";
import {EditCourseInterface} from "./edit-course.interface";

export class EditForm extends FormGroup {

  constructor(data: EditCourseInterface) {
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
