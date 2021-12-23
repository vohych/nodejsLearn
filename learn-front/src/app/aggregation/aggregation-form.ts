import {FormControl, FormGroup} from "@angular/forms";

export class AggregationForm extends FormGroup {
  constructor(data: { number : number }) {
    super({
      number: new FormControl(data.number),
    });
  }

  get number(): FormControl {
    return this.get('number') as FormControl
  }
}
