import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.less']
})
export class AdvantagesComponent implements OnInit{
  show = false;
  advs:string[] = [
    "Предоставляем высокое качество по низким ценам",
    "Проводим исследования, чтобы лучше понять Ваш бизнес",
    "Используем передовые технологии",
    "Собственные решения в области управления контента",
    "Поддержка и продвижение сайтов"
  ]
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.show = true;
    },1)
  }

}
