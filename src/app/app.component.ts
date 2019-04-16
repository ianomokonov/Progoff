import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  constructor( private router:Router){
    
    window.scrollTo(0, 0)
  }
  title = 'Progoff';
  show = false;
  
  ngOnInit(){
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      this.hide();
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
