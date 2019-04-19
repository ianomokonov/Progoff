import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.less']
})
export class PricesComponent implements OnInit {
  show = [false, false, false, false];
  @HostListener('document:scroll', [])
            onScroll(): void {
              let y = document.getElementsByClassName("price");
              if(y[1].getBoundingClientRect().top<window.innerHeight-100){
                this.show[1] = true;
              }
              if(y[2].getBoundingClientRect().top<window.innerHeight-100){
                this.show[2] = true;
              }
              if(y[3].getBoundingClientRect().top<window.innerHeight-100){
                this.show[3] = true;
              }
            }
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.show[0]=true;
    },1);
  }

}
