import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

interface listCoursesInterface {
  _id: string;
  name: string;
}

export interface AggregationInterface {
  _id: listCoursesInterface;
  name: listCoursesInterface;
  index: number;
  price: number;
  count: number;
  courses: Array<listCoursesInterface>;
}

@Injectable({
  providedIn: 'root'
})

export class AggregationService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public aggregation(): Observable<Array<AggregationInterface>> {
    return this.http.get<Array<AggregationInterface>>('http://localhost:8080/api/aggregation');
  }

}
