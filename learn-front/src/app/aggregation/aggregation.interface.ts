export interface Course {
  _id: string;
  name: string;
}

export interface AggregationResult {
  index: number;
  price: number;
  count: number;
  courses: Array<Course>;
}
