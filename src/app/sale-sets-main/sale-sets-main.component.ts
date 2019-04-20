import { Component, OnInit } from '@angular/core';
import { Sale } from '../services/models';
import { LoadService } from '../services/load.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'sale-sets',
  templateUrl: './sale-sets-main.component.html',
  styleUrls: ['./sale-sets-main.component.less']
})
export class SaleSetsMainComponent implements OnInit {
  sales:Sale[];
  constructor(private ls:LoadService, private cs:ClientService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.cs.getSales().subscribe(data => {
      this.sales = data;
      this.ls.showLoad = false;
    })
  }

}
