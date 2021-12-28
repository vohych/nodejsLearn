import {Component, OnInit} from '@angular/core';
import {AggregationService} from "./aggregation.service";
import {AggregationResult} from "./aggregation.interface";

@Component({
  selector: 'app-aggregation',
  templateUrl: './aggregation.component.html',
  styleUrls: ['./aggregation.component.scss']
})
export class AggregationComponent implements OnInit {

  results: Array<AggregationResult> = [];
  status = false;

  constructor(
    private service: AggregationService
  ) {
  }

  public ngOnInit(): void {
    this.service.aggregation().subscribe((data) => {
      this.results = data;
      this.results.map((data, index) => {
        data.index = index;
      })
    })
  }

}
