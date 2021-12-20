import { Component, OnInit } from '@angular/core';
import {CourseService} from "../common/service/course.service";
import {StrongSearchForm} from "./strong-search-form";

@Component({
  selector: 'app-strong-search',
  templateUrl: './strong-search.component.html',
  styleUrls: ['./strong-search.component.scss']
})
export class StrongSearchComponent implements OnInit {

  result: string = 'empty';
  search: string | undefined;
  constructor(
    private service: CourseService,
  ) {
    this.form = new StrongSearchForm({strongSearch: ''});
  }

  form: StrongSearchForm;
  ngOnInit(): void {

  }

  searchEventChange(e: any){
    this.service.strongSearch(this.form.value).subscribe(data=>{
      console.log(data)
    })
  }

}
