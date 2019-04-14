import { Component, OnInit, Input } from '@angular/core';
import { Mate } from '../services/models';

@Component({
  selector: 'mate-info',
  templateUrl: './mate-info.component.html',
  styleUrls: ['./mate-info.component.less']
})
export class MateInfoComponent implements OnInit {
  @Input() mate:Mate
  constructor() { }

  ngOnInit() {
  }

}
