import { Component, OnInit } from '@angular/core';
import { Client } from '../services/models';
import { ClientService } from '../services/client.service';
import { csLocale } from 'ngx-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {
  clients:Client[];
  constructor(private cs:ClientService, private router:Router) { 
    this.clients = cs.clients;
  }

  ngOnInit() {
    this.cs.clients = this.clients;
  }
  go(target:string){
    this.router.navigate([target]);
  }

}
