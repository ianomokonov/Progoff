import { Component, OnInit } from '@angular/core';
import { Client } from '../services/models';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {
  clients:Client[];
  constructor(private cs:ClientService, private ls:LoadService, private router:Router) { 
    this.ls.showLoad = true;
    this.cs.getClients().subscribe(clis => {
      this.clients = clis;
      this.ls.showLoad = false;
    })
    
  }

  ngOnInit() {
  }
  go(target:string){
    this.router.navigate([target]);
  }

}
