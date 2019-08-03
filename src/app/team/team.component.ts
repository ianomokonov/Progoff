import { Component, OnInit } from '@angular/core';
import { Mate } from '../services/models';
import { ModalService } from '../services/modal.service';
import { LoadService } from '../services/load.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.less']
})
export class TeamComponent implements OnInit {
  showp = false;
  team = [];
  constructor( private ms:ModalService, private ls:LoadService, private cs:ClientService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.cs.getTeam().subscribe(data => {
      this.team = data;
      this.ls.showLoad=false;
      setTimeout(() => {
        this.showp = true;
      },1)
    })
    
  }

  show(m:Mate){
    this.ms.open('mate', m);
  }

}
