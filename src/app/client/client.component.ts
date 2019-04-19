import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../services/models';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit, AfterContentChecked {
  client:Client;
  constructor(private cs:ClientService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.client = this.cs.clients.find(x => x.Id==Number(this.route.snapshot.paramMap.get("id")));
  }

  ngAfterContentChecked(){
    if(this.client && this.client.Id !=Number(this.route.snapshot.paramMap.get("id"))){
      this.client = this.cs.clients.find(x => x.Id==Number(this.route.snapshot.paramMap.get("id")));
    }
  }

}
