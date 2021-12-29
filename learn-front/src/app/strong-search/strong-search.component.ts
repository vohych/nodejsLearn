import {Component, OnInit} from '@angular/core';
import {CourseService} from "../common/service/course.service";
import {StrongSearchForm} from "./strong-search-form";
import {SearchInterface} from "./search.interface";

enum SearchTypeEnum {
  STRICT='strict',
  FLEX= 'flex'
}

@Component({
  selector: 'app-strong-search',
  templateUrl: './strong-search.component.html',
  styleUrls: ['./strong-search.component.scss']
})

export class StrongSearchComponent implements OnInit {

  public results: Array<SearchInterface> = [];
  public searchType: SearchTypeEnum = SearchTypeEnum.FLEX;
  public form: StrongSearchForm;

  constructor(
    private service: CourseService,
  ) {
    this.form = new StrongSearchForm({search: '', checkbox: ''});
  }

  public ngOnInit(): void {
    this.searchEventChange();
}

  public searchEventChange() {
    this.service.search(this.form.value, this.searchType).subscribe(data => {
      this.results = data;
    })
  }

  public typeSearch() {
    if (this.form.value.checkbox) {
      this.searchType = SearchTypeEnum.STRICT;
    } else {
      this.searchType = SearchTypeEnum.FLEX;
    }
    this.searchEventChange();
  }
}
