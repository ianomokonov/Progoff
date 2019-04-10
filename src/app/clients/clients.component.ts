import { Component, OnInit } from '@angular/core';
import { Client } from '../services/models';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.less']
})
export class ClientsComponent implements OnInit {
  clients:Client[] = [
    {
      Id:1,
      Name:"Тракторы",
      Description:"Тракторы правят миром",
      MainImage:"../../assets/images/traktor.jpg",
      LeftImage:"../../assets/images/maket1.jpg",
      RightImage:"../../assets/images/maket2.jpg",
    },
    {
      Id:1,
      Name:"Тракторы",
      Description:"Тракторы правят миром",
      MainImage:"../../assets/images/traktor.jpg",
      LeftImage:"../../assets/images/maket1.jpg",
      RightImage:"../../assets/images/maket2.jpg",
    },
    {
      Id:1,
      Name:"Тракторы",
      Description:"Тракторы правят миром",
      MainImage:"../../assets/images/traktor.jpg",
      LeftImage:"../../assets/images/maket1.jpg",
      RightImage:"../../assets/images/maket2.jpg",
    },
    {
      Id:1,
      Name:"Тракторы",
      Description:"Тракторы правят миром",
      MainImage:"../../assets/images/traktor.jpg",
      LeftImage:"../../assets/images/maket1.jpg",
      RightImage:"../../assets/images/maket2.jpg",
    },
    {
      Id:1,
      Name:"Тракторы",
      Description:"Тракторы правят миром",
      MainImage:"../../assets/images/traktor.jpg",
      LeftImage:"../../assets/images/maket1.jpg",
      RightImage:"../../assets/images/maket2.jpg",
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
