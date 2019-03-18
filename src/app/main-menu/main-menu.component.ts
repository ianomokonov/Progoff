import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.less']
})
export class MainMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  /**
   * Переход на другую страницу
   */
  go(target:string){
    console.log(target)
    this.router.navigate([target]);
  }

}
