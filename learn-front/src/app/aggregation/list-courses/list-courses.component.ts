import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../aggregation.interface";

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent implements OnInit {

  @Input() data: Array<Course> = [];

  courses: Array<Course> = [];

  public ngOnInit(): void {
    this.courses = this.data;
    this.data.map(data=>{
      console.log(data.name, data._id)
    })
  }

}
