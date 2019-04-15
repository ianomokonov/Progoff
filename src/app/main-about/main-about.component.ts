import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'main-about',
  templateUrl: './main-about.component.html',
  styleUrls: ['./main-about.component.less']
})
export class MainAboutComponent implements OnInit {
  show = false;
  @HostListener('document:scroll', [])
            onScroll(): void {
              let y = document.getElementsByClassName("about")[0].getBoundingClientRect().top;
              console.log(y);
              if(Math.abs(y)<window.innerHeight-200){
                this.show=true;
              }else{
                this.show=false;
              }
              
              
              

            }

  constructor() { }

  ngOnInit() {
  }

}
