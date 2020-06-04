import { Component, OnInit, HostListener } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  show = false;
  @HostListener('document:scroll', [])
            onScroll(): void {
              let y = document.getElementsByClassName("section-container")[0].getBoundingClientRect();
              if(window){
                if(y.height+(y.top-window.innerHeight*1.2)<0){
                  this.show=true;
                }else{
                  this.show=false;
                }
              } else {
                this.show=true;
              }
              
              
              
              

            }
  constructor(public ms:ModalService) { }

  ngOnInit() {
  }

}
