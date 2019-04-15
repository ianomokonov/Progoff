import { Component, OnInit, AfterViewChecked, AfterViewInit, AfterContentChecked } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'main-head',
  templateUrl: './main-head.component.html',
  styleUrls: ['./main-head.component.less']
})
export class MainHeadComponent implements OnInit {
  show = false;
  constructor(public ms:ModalService) { }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    },1)
  }


}
