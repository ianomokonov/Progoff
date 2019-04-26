import { Component, OnInit, HostListener } from '@angular/core';
import { Price } from '../services/models';
import { ClientService } from '../services/client.service';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.less']
})
export class PricesComponent implements OnInit {
  show = [false, false, false, false];
  prices:Price[];
  // @HostListener('document:scroll', [])
  //           onScroll(): void {
  //             let y = document.getElementsByClassName("price");
  //             if(y[1].getBoundingClientRect().top<window.innerHeight-100){
  //               this.show[1] = true;
  //             }
  //             if(y[2].getBoundingClientRect().top<window.innerHeight-100){
  //               this.show[2] = true;
  //             }
  //             if(y[3].getBoundingClientRect().top<window.innerHeight-100){
  //               this.show[3] = true;
  //             }
  //           }
  constructor(private cs:ClientService, private ls:LoadService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.cs.getPrices().subscribe(prices => {
      this.prices = prices;
      this.ls.showLoad = false;
      setTimeout(() => {
        this.show[0]=true;
      },1);
    }) 
  }

}
