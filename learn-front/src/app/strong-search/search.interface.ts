import {ViewCourseInterface} from "../common/interface/view-course.interface";

export interface SearchInterface{
  results : Array<ViewCourseInterface>;
  name: string;
  title: string;
  price: number;
}
