import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {
  CurrentYear = new Date().getFullYear();
  showMap = true;
  constructor() { }

  ngOnInit() {
  }

  closeMap(){
    this.showMap = !this.showMap;
  }

}
