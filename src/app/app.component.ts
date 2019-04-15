import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(){
    window.scrollTo(0, 0)
  }
  title = 'Progoff';
  show = false;
  

  showMenu(){
    
    this.show = !this.show;
  }
}
