import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ClientService } from '../services/client.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../services/models';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.less']
})
export class ClientComponent implements OnInit, AfterContentChecked {
  client:Client;
  constructor(private cs:ClientService, private ls:LoadService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.cs.getClient(this.route.snapshot.paramMap.get("id")).subscribe(cli => {
      this.client = cli;
      this.ls.showLoad = false;
    })
  }

  ngAfterContentChecked(){
    if(this.client && this.client.Id !=Number(this.route.snapshot.paramMap.get("id"))){
      this.ls.showLoad = true;
      this.cs.getClient(this.route.snapshot.paramMap.get("id")).subscribe(cli => {
        this.client = cli;
        this.ls.showLoad = false;
      })
    }
  }

}
