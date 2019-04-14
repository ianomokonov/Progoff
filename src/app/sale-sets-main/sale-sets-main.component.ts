import { Component, OnInit } from '@angular/core';
import { Sale } from '../services/models';

@Component({
  selector: 'sale-sets',
  templateUrl: './sale-sets-main.component.html',
  styleUrls: ['./sale-sets-main.component.less']
})
export class SaleSetsMainComponent implements OnInit {
  sales:Sale[] = [
    {
      Id:1,
      Name:"Интернет магазин",
      Discount:10,
      Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
      Image:"../../assets/images/e-shop.png",
      Services:[
        {
          Id:1,
          Name:"Создание интернет магазина",
          Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
          Price: 30000
        },
        {
          Id:2,
          Name:"Графический дизайн",
          Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
          Price: 15000
        },
        {
          Id:3,
          Name:"SEO-продвижение",
          Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
          Price: 10000
        }
      ]
    },
    {
      Id:1,
      Name:"Интернет магазин",
      Discount:10,
      Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
      Image:"../../assets/images/e-shop.png",
      Services:[
        {
          Id:1,
          Name:"Создание интернет магазина",
          Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
          Price: 30000
        },
        {
          Id:2,
          Name:"Графический дизайн",
          Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
          Price: 15000
        },
        {
          Id:3,
          Name:"SEO-продвижение",
          Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
          Price: 10000
        }
      ]
    },
    {
      Id:1,
      Name:"Интернет магазин",
      Discount:10,
      Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
      Image:"../../assets/images/e-shop.png",
      Services:[
        {
          Id:1,
          Name:"Создание интернет магазина",
          Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
          Price: 30000
        },
        {
          Id:2,
          Name:"Графический дизайн",
          Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
          Price: 15000
        },
        {
          Id:3,
          Name:"SEO-продвижение",
          Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
          Price: 10000
        }
      ]
    },
    {
      Id:1,
      Name:"Интернет магазин",
      Discount:10,
      Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
      Image:"../../assets/images/e-shop.png",
      Services:[
        {
          Id:1,
          Name:"Создание интернет магазина",
          Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
          Price: 30000
        },
        {
          Id:2,
          Name:"Графический дизайн",
          Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
          Price: 15000
        },
        {
          Id:3,
          Name:"SEO-продвижение",
          Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
          Price: 10000
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
