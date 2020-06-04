import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() { }

  get innerHeight(): number{
    return window.innerHeight;
  }

  get document(): Document{
    return window.document;
  }

  public scrollTo(x,y): void{
    // window.scrollTo(x,y);
  }
}