import {Component, Input, OnInit} from '@angular/core';
import {AggregationService} from "../aggregation.service";
import {AggregationResult} from "../aggregation.interface";

@Component({
  selector: 'app-price-info',
  templateUrl: './price-info.component.html',
  styleUrls: ['./price-info.component.scss']
})
export class PriceInfoComponent implements OnInit {

  @Input() data: any

  results: Array<AggregationResult> = [];
  viewCourseStatus = false;

  constructor(
    private service: AggregationService
  ) {
  }

  public ngOnInit(): void {
    this.service.aggregation().subscribe((data) => {
      this.results = data;
    })
  }

  viewCourses() {
    this.viewCourseStatus = !this.viewCourseStatus;
  }

}
