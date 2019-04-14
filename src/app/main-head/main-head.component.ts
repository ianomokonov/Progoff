import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'main-head',
  templateUrl: './main-head.component.html',
  styleUrls: ['./main-head.component.less']
})
export class MainHeadComponent implements OnInit {

  constructor(public ms:ModalService) { }

  ngOnInit() {
  }

}
