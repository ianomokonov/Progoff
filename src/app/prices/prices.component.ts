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
  show = [];
  prices:Price[];
  @HostListener('document:scroll', [])
            onScroll(): void {
              let y = document.getElementsByClassName("price");
              for(let i = 1; i<y.length; i++){
                if(y[i].getBoundingClientRect().top<window.innerHeight-100){
                  this.show[i] = true;
                }
              }
              
            }
  constructor(private cs:ClientService, private ls:LoadService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.cs.getPrices().subscribe(prices => {
      this.prices = prices;
      this.ls.showLoad = false;
      prices.forEach(x => {
        this.show.push(false);
      })
      setTimeout(() => {
        this.show[0]=true;
      },1);
      let y = document.getElementsByClassName("price");
      for(let i = 1; i<y.length; i++){
        if(y[i].getBoundingClientRect().top<window.innerHeight-100){
          this.show[i] = true;
        }
      }
    }) 
  }

}
