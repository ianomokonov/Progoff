import { Component, OnInit, Input } from '@angular/core';
import { Mate } from '../services/models';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'mate-info',
  templateUrl: './mate-info.component.html',
  styleUrls: ['./mate-info.component.less']
})
export class MateInfoComponent implements OnInit {
  @Input() mate:Mate
  constructor(public ms:ModalService) { }

  ngOnInit() {
  }

}
