import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-body',
  templateUrl: './about-body.component.html',
  styleUrls: ['./about-body.component.less']
})
export class AboutBodyComponent implements OnInit {
  curSection = 0;
  constructor() { }

  ngOnInit() {
  }

  showSection(s:number){
    this.curSection = s;
  }

}
