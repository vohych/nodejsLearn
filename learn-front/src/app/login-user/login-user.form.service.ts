import {FormControl, FormGroup} from "@angular/forms";

export class LoginUserFormService extends FormGroup {

  constructor(data: { email: string; password: string }) {
    super({
      email: new FormControl(data.email),
      password: new FormControl(data.password),
    });
  }

  get email(): FormControl {
    return this.get('email') as FormControl
  }

  get password(): FormControl {
    return this.get('password') as FormControl
  }

}
