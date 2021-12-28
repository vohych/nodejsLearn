import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AggregationResult} from "./aggregation.interface";

@Injectable({
  providedIn: 'root'
})

export class AggregationService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public aggregation(): Observable<Array<AggregationResult>> {
    return this.http.get<Array<AggregationResult>>('http://localhost:8080/api/aggregation');
  }

}
