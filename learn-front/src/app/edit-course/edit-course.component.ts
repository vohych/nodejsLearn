import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
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
    private http: HttpClient,
    private activeRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
    this.form = new EditForm({title: '', name: '', price: 0})
  }



  public ngOnInit(): void {
    this.service.getData().subscribe(data => {
      this.form = new EditForm(data)
    })
  }

  public onSubmit() {
    this.service.sendData(this.form.value).subscribe(data=>{
      console.log(data)
    });
  }


}

