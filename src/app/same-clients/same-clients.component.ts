import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Router } from '@angular/router';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'same-clients',
  templateUrl: './same-clients.component.html',
  styleUrls: ['./same-clients.component.less']
})
export class SameClientsComponent implements OnInit {
  clients: any = [[],[],[]];
  @Input() curClientId = 0;
  @Input() clis = [];
  constructor(private cs:ClientService,private ls:LoadService, private router:Router) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.cs.getClients().subscribe(clis => {
      this.clis = clis;
      if(this.curClientId>0){
        if(this.clis.length == 5){
          this.clients[0]= [this.clis[0], this.clis[3]];
          this.clients[1]= [this.clis[1]];
          this.clients[2]=[this.clis[2]];
        }else{
          this.clients = this.cut(Math.ceil((this.clis.length-1)/3), this.clis.filter(x => x.Id != this.curClientId));
        }
        
      }else{
        if(this.clis.length == 5){
          this.clients[0]= [this.clis[0], this.clis[3]];
          this.clients[1]= [this.clis[1]];
          this.clients[2]=[this.clis[2]];
        }else{
          this.clients = this.cut(Math.ceil((this.clis.length)/3), this.clis);
        }
      }
      this.ls.showLoad=false;
    })
    
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
