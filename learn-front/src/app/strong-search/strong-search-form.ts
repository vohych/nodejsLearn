import {FormControl, FormGroup} from "@angular/forms";

export class StrongSearchForm extends FormGroup {
  constructor(data: { search: string; checkbox: string }) {
    super({
      search: new FormControl(data.search),
      checkbox: new FormControl(data.checkbox),
    });
  }

  get search(): FormControl {
    return this.get('search') as FormControl
  }

  get checkbox(): FormControl {
    return this.get('checkbox') as FormControl
  }
}
