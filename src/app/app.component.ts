import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/internal/operators';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  constructor( private router:Router, private route: ActivatedRoute, private title: Title, private meta: Meta){
    
  }
  show = false;
  
  ngOnInit() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        tap(() => {this.hide();}),
        map(() => this.route),
        map((route: ActivatedRoute) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        // так же мы выбираем только первичные аутлеты (тоже опционально)
        filter((route: ActivatedRoute) => route.outlet === 'primary'),
        // выбираем title
        mergeMap((route) => route.data)
      )
      // задаем
      .subscribe((data) => {
        if(!data){
          return;
        }
        this.title.setTitle(data.title ? data.title : 'Progoff | разработка сайтов');
        if (this.meta.getTag('name=description')) {
          this.meta.updateTag({
            name: 'description',
            content: data.description,
          });
        } else {
          this.meta.addTag({
            name: 'description',
            content: data.description,
          });
        }
      });
  }
  showMenu(e?){
    if(e){
      this.show = e.deltaX>0;
    }else{
      this.show = !this.show;
    }
    
  }
  hide(){
    this.show = false;
  }
}
