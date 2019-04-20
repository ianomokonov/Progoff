import { Component, OnInit } from '@angular/core';
import { Sale, Attachment, AttachmentType } from '../services/models';
import { ModalService } from '../services/modal.service';
import { ClientService } from '../services/client.service';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'app-sale-sets',
  templateUrl: './sale-sets.component.html',
  styleUrls: ['./sale-sets.component.less']
})
export class SaleSetsComponent implements OnInit {
  sales:Sale[] ;
  constructor(public ms:ModalService, private cs:ClientService, private ls:LoadService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.cs.getSales().subscribe(data => {
      this.sales = data;
      this.ls.showLoad = false;
    })
  }

  getPrice(s:Sale){
    var res = 0;
    s.Services.forEach(s => {
      res+=s.Price;
    })
    return res*(1-s.Discount/100);
  }

  getAttachment(s: Sale):Attachment{
    return {
      Id:s.Id,
      AppId:s.Id,
      Type:AttachmentType.SaleSet,
      Content:s
    }
  }

}
