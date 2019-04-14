import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.less']
})
export class MainMenuComponent implements OnInit {

  constructor(public router:Router, public ms:ModalService) { }

  ngOnInit() {
  }

  /**
   * Переход на другую страницу
   */
  go(target:string){
    this.router.navigate([target]);
  }

}
