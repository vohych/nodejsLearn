import {Component, OnInit} from '@angular/core';
import {CourseService} from "../common/service/course.service";
import {StrongSearchForm} from "./strong-search-form";
import {THIS_EXPR} from "@angular/compiler/src/output/output_ast";

@Component({
  selector: 'app-strong-search',
  templateUrl: './strong-search.component.html',
  styleUrls: ['./strong-search.component.scss']
})

export class StrongSearchComponent implements OnInit {

  results: any = [];
  searchType: string = 'flex';

  constructor(
    private service: CourseService,
  ) {
    this.form = new StrongSearchForm({search: '', checkbox: ''});
  }

  form: StrongSearchForm;

  public ngOnInit(): void {
    this.results = []
    this.searchEventChange();
  }

  public searchEventChange() {
    this.service.search(this.form.value, this.searchType).subscribe(data => {
      this.results = data;
      // console.log(this.form)
    })
  }

  public typeSearch() {
    if (this.form.value.checkbox) {
      this.searchType = 'Strict';
    } else {
      this.searchType = 'Flex';
    }
    this.searchEventChange();
  }
}
