import {FormControl, FormGroup} from "@angular/forms";
import {CreateUserFormInterface} from "./create-user.form.interface";


export class FormCreateUser extends FormGroup {

  constructor(data: CreateUserFormInterface) {
    super({
      name: new FormControl(data.name),
      email: new FormControl(data.email),
      password: new FormControl(data.password),
    });
  }

  get email(): FormControl {
    return this.get('email') as FormControl
  }

  get name(): FormControl {
    return this.get('name') as FormControl
  }

  get password(): FormControl {
    return this.get('password') as FormControl
  }

}
