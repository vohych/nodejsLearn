import {FormControl, FormGroup} from "@angular/forms";

export class StrongSearchForm extends FormGroup {

  constructor(data: { strongSearch: string }) {
    super({
      strongSearch: new FormControl(data.strongSearch),
    });
  }

  get strongSearch(): FormControl {
    return this.get('strongSearch') as FormControl
  }

}
