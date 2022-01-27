import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {ClientService} from "./client.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  uuid: string = '';

  constructor(
    private router: Router,
    private service: ClientService
  ) {
    this.uuid = this.router.routerState.snapshot.url.split('/')[2];
  }

  ngOnInit(): void {
    this.service.getClient().subscribe(data=>{
      console.log(data)
    })
  }

}
