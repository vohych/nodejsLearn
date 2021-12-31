import {FormControl, FormGroup} from "@angular/forms";
import {FormBuyInterface} from "./buy.interface";

export class BuyForm extends FormGroup {

  constructor(data: FormBuyInterface) {
    super(
      {
        name: new FormControl(data.name),
        email: new FormControl(data.email),
      }
    )
  }


  get name(): FormControl {
    return this.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.get('email') as FormControl;
  }

}
