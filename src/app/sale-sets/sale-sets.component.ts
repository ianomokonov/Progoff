import { Component, OnInit } from '@angular/core';
import { Sale } from '../services/models';

@Component({
  selector: 'sale-sets',
  templateUrl: './sale-sets.component.html',
  styleUrls: ['./sale-sets.component.less']
})
export class SaleSetsComponent implements OnInit {
  sales:Sale[] = [
    {
      Id:1,
      Name:"Интернет магазин",
      Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
      Image:"../../assets/images/e-shop.png"
    },
    {
      Id:1,
      Name:"Интернет магазин",
      Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
      Image:"../../assets/images/e-shop.png"
    },
    {
      Id:1,
      Name:"Интернет магазин",
      Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
      Image:"../../assets/images/e-shop.png"
    },
    {
      Id:1,
      Name:"Интернет магазин",
      Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
      Image:"../../assets/images/e-shop.png"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
