import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  CurrentYear = new Date().getFullYear();
  showMap = false;
  @HostListener('document:scroll', [])
  onScroll(): void {
    let y = document.getElementsByClassName("map")[0].getBoundingClientRect().top;
    if(y<window.innerHeight-200){
      this.showMap=true;
    }
    
    
    

  }
  constructor() { }

  ngOnInit() {
  }

  closeMap(){
    this.showMap = !this.showMap;
  }

}
