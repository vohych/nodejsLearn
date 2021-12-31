import { Component, OnInit } from '@angular/core';
import {BuyCourseService} from "./buy-course.service";
import {BuyForm} from "./buy-form";
import { Router} from "@angular/router";

@Component({
  selector: 'app-buy-course',
  templateUrl: './buy-course.component.html',
  styleUrls: ['./buy-course.component.scss']
})
export class BuyCourseComponent implements OnInit {

  form: BuyForm;
  uuid: string = '';
  constructor(
    private service: BuyCourseService,
    private router: Router,
  ) {
    this.form = new BuyForm({name : '', email : ''})
  }

  public ngOnInit(): void {
    this.uuid = this.router.routerState.snapshot.url.split('/')[2];
  }

  public onSubmit() {
    this.form.value.uuid = this.uuid;
    this.service.buyCourse(this.form.value).subscribe(data=>{
      console.log(data);
    })
  }
}
