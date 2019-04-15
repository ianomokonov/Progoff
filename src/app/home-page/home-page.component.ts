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
              if(y.height+(y.top-800)<0){
                this.show=true;
              }else{
                this.show=false;
              }
              
              
              

            }
  constructor(public ms:ModalService) { }

  ngOnInit() {
  }

}
