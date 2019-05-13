import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.less']
})
export class PolicyComponent implements OnInit {

  constructor(private ms:ModalService, public router:Router) {
   }

  ngOnInit() {
    this.ms.close()
  }

}
