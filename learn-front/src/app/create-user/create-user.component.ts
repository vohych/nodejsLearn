import {Component, OnInit} from '@angular/core';
import {FormCreateCourse} from "../create-course/form-create-course";
import {FormCreateUser} from "./create-user.form.service";
import {CreateUserService} from "./create-user.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  public form: FormCreateUser

  constructor(
    private service: CreateUserService
  ) {
    this.form = new FormCreateUser({name: '', email: '', password: '1111'});
  }

  public onSubmit() {
    this.service.createUser(this.form.value).subscribe(data => {
      // console.log(data)
    })
  }

}
