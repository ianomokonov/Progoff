import { Component, OnInit } from '@angular/core';
import { LoadService } from '../services/load.service';
import { ClientService } from '../services/client.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.less']
})
export class ExamplesComponent implements OnInit {
  makets = [];
  showp = false;
  constructor(private ls:LoadService, private cs:ClientService, public ms:ModalService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.cs.getMakets().subscribe(x => {
      this.makets = x;
      this.cs.makets = x;
      this.ls.showLoad = false;
      setTimeout(() => {
        this.showp = true;
      },1)
    })
  }

}
