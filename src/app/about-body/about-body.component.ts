import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'about-body',
  templateUrl: './about-body.component.html',
  styleUrls: ['./about-body.component.less']
})
export class AboutBodyComponent implements OnInit {
  curSection = 0;
  constructor(public router:Router) { }

  ngOnInit() {
  }

  showSection(s:number){
    this.curSection = s;
  }

  go(target:string){
    this.router.navigate([target]);
  }

}
