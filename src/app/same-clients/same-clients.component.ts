import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'same-clients',
  templateUrl: './same-clients.component.html',
  styleUrls: ['./same-clients.component.less']
})
export class SameClientsComponent implements OnInit {
  clients: any = [[],[],[]];
  @Input() curClientId = 0;
  constructor(private cs:ClientService, private router:Router) { }

  ngOnInit() {
    
    if(this.curClientId>0){
      if(this.cs.clients.length == 5){
        this.clients[0]= [this.cs.clients[0], this.cs.clients[3]];
        this.clients[1]= [this.cs.clients[1]];
        this.clients[2]=[this.cs.clients[2]];
      }else{
        this.clients = this.cut(Math.ceil((this.cs.clients.length-1)/3), this.cs.clients.filter(x => x.Id != this.curClientId));
      }
      
    }else{
      if(this.cs.clients.length == 5){
        this.clients[0]= [this.cs.clients[0], this.cs.clients[3]];
        this.clients[1]= [this.cs.clients[1]];
        this.clients[2]=[this.cs.clients[2]];
      }else{
        this.clients = this.cut(Math.ceil((this.cs.clients.length)/3), this.cs.clients);
      }
    }
  }

  cut(s:number, array:any){
    let sub = [];
    for(let i = 0; i<Math.ceil(array.length/s); i++){
      sub[i] = array.slice((i*s), (i*s)+s);
    }
    return sub;
  }
  go(target:string){
    this.router.navigate([target]);
  }
}
