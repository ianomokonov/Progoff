import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.less']
})
export class ProcessComponent implements OnInit {
  firstOffset = 0;
  curLevel = 0;
  readyFill = 0;
  sizes = [0,0,0,0,0,0,0,0,0,0,0,0,0]
  ss = [150,206,150,206,150,206,150,206,150,206,150,206,150]
  @HostListener('document:scroll', [])
            onScroll(): void {
              let y = window.pageYOffset;
              console.log(y);
              console.log(this.firstOffset);
              if(y>5000 && y<5500){
                this.firstOffset = 5000;
              }
              if(this.firstOffset!=0){
                if(y-this.firstOffset-this.readyFill>0){
                  if(y-this.firstOffset>this.readyFill+this.ss[this.curLevel]){
                    this.readyFill+=this.ss[this.curLevel];
                    this.sizes[this.curLevel]=this.ss[this.curLevel];
                    this.curLevel+=this.curLevel+1<13?1:0;
                    console.log(111)
                  }else{
                    if(this.sizes[12]!=150){
                      this.sizes[this.curLevel]=y-this.firstOffset-this.readyFill;
                    }
                    
                  }
                  //console.log(this.sizes)
                  
                }else{
                  if(y-this.firstOffset<this.readyFill-this.ss[this.curLevel]){
                    this.readyFill-=this.ss[this.curLevel];
                    this.sizes[this.curLevel]=0;
                    this.curLevel-=this.curLevel-1>-1?1:0;
                  }else{
                    if(this.sizes[0]>-1){
                      this.sizes[this.curLevel]=y-this.firstOffset-(this.readyFill-this.ss[this.curLevel]);
                    }else{
                      console.log(this.sizes);
                      this.firstOffset = 0;
                    }
                  }
                  
                }
                
                
              }

            }
  constructor() { }

  ngOnInit() {
    console.log( document.getElementsByClassName("process")[0].getBoundingClientRect());
  }

}
