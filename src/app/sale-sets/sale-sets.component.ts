import { Component, OnInit } from '@angular/core';
import { Sale, Attachment, AttachmentType } from '../services/models';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-sale-sets',
  templateUrl: './sale-sets.component.html',
  styleUrls: ['./sale-sets.component.less']
})
export class SaleSetsComponent implements OnInit {
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
      Id:2,
      Name:"Интернет магазин",
      Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In laboriosam, porro quisquam labore asperiores fuga consequatur nihil, eos nam ad, adipisci mollitia provident possimus sint soluta perspiciatis dignissimos facere delectus!",
      Image:"../../assets/images/e-shop.png",
      Discount:10,
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
      Id:3,
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
      Id:4,
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
  constructor(public ms:ModalService) { }

  ngOnInit() {
  }

  getPrice(s:Sale){
    var res = 0;
    s.Services.forEach(s => {
      res+=s.Price;
    })
    return res*(1-s.Discount/100);
  }

  getAttachment(s: Sale):Attachment{
    return {
      Id:s.Id,
      AppId:s.Id,
      Type:AttachmentType.SaleSet,
      Content:s
    }
  }

}
