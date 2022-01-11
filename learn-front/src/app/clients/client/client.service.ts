import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ClientInterface} from "../client.interface";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root'})

export class ClientService{

  constructor(
    private http: HttpClient
  ) {
  }

  public getClient(): Observable<Array<ClientInterface>>{
    return this.http.get<Array<ClientInterface>>('http://localhost:8080/api/aggregation')
  }

}
