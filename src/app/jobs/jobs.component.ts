import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Job } from '../services/models';
import { fillProperties } from '@angular/core/src/util/property';

@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.less']
})
export class JobsComponent implements OnInit {
  curJob = -1;
  jobs:Job[] = [
    {
      Id:1,
      Name:"SEO-специалист",
      Description:"lorem",
      Requirements:[
        "Понимание особенностей работы поисковых систем;",
        "Знание методов поисковой оптимизации и умение применять их на практике;",
        "Хорошие аналитические способности;",
        "Умение читать HTML и CSS;",
        "Знание и понимание основных CMS, функционала Google Analytics, Google Webmasters, Яндекс.Метрики, Яндекс.Вебмастера"
      ]
    },
    {
      Id:2,
      Name:"SEO-специалист",
      Description:"lorem",
      Requirements:[
        "Понимание особенностей работы поисковых систем;",
        "Знание методов поисковой оптимизации и умение применять их на практике;",
        "Хорошие аналитические способности;",
        "Умение читать HTML и CSS;",
        "Знание и понимание основных CMS, функционала Google Analytics, Google Webmasters, Яндекс.Метрики, Яндекс.Вебмастера"
      ]
    },
    {
      Id:3,
      Name:"SEO-специалист",
      Description:"lorem",
      Requirements:[
        "Понимание особенностей работы поисковых систем;",
        "Знание методов поисковой оптимизации и умение применять их на практике;",
        "Хорошие аналитические способности;",
        "Умение читать HTML и CSS;",
        "Знание и понимание основных CMS, функционала Google Analytics, Google Webmasters, Яндекс.Метрики, Яндекс.Вебмастера"
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.curJob = 0;
    },1)
  }
  show(i){
    console.log(11)
    this.curJob = i;
  }

}
