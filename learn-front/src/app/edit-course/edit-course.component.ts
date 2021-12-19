import {Component, OnInit} from '@angular/core';
import {EditForm} from "./edit-form";
import {EditFormService} from "./edit-form.service";

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})

export class EditCourseComponent implements OnInit {

  form: EditForm;
  uuid: any;

  constructor(
    private service: EditFormService,
  ) {
    this.form = new EditForm({title: '', name: '', price: 0})
  }

  public ngOnInit(): void {
    this.service.getData().subscribe(data => {
      this.form = new EditForm(data)
    })
  }

  public onSubmit() {
    this.service.sendData(this.form.value).subscribe();
  }

  public deleteCourse() {
    this.service.delete().subscribe();
  }
}

