import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.less']
})
export class ProcessComponent implements OnInit {
  firstOffset = 700;
  curLevel = 0;
  readyFill = 0;
  sizes = [0,0,0,0,0,0,0,0,0,0,0,0,0]
  ss = [150,206,150,206,150,206,150,206,150,206,150,206,150]
  sum:number;
  // @HostListener('document:scroll', [])
  //           onScroll(): void {
  //             let y = document.getElementsByClassName("process")[0].getBoundingClientRect().top;
  //             if(y<this.firstOffset){
  //               if(this.firstOffset-y>this.ss[this.curLevel]+this.readyFill){
  //                 this.sizes[this.curLevel]=this.ss[this.curLevel];
  //                 this.readyFill+=this.ss[this.curLevel];
  //                 this.curLevel++;
  //               }
  //               if(this.firstOffset-y>this.sum){
  //                 this.sizes[this.curLevel]=this.firstOffset-y-this.readyFill;
  //               }
                
  //             }
  //             else{
  //               this.sizes=[0,0,0,0,0,0,0,0,0,0,0,0,0];
  //               this.readyFill = 0;
  //               this.curLevel = 0;
  //             }
              
              

  //           }
  constructor() { }

  ngOnInit() {
    // this.firstOffset = window.innerHeight-300;
    // window.scrollTo(0, 0)
    this.sum = 0;
    this.sizes.forEach(s => {
      this.sum+=s;
    })
  }

}
