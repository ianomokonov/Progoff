import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.less']
})
export class MainMenuComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  /**
   * Переход на другую страницу
   */
  go(target:string){
    this.router.navigate([target]);
  }

}
