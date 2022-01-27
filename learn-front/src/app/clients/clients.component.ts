import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClientService} from "./client.service";
import {ClientInterface} from "./client.interface";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Array<ClientInterface> = []
  @Input() uuid: string = '';

  constructor(
    private service: ClientService,
  ) {
  }

  ngOnInit(): void {
    this.service.getClients().subscribe((data) => {
      this.clients = data;
      data.map((data)=>{
        data.modify = `${new Date(data.lastModifiedDate).getHours()}:${new Date(data.lastModifiedDate).getMinutes()}`
      })
      // console.log(data)
    })
  }

}
