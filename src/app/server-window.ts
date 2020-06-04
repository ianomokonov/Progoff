  
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerWindowService {
  constructor() { }

  get innerHeight(): number{
    return 1000;
  }

  get document(): Document{
    return new Document();
  }

  public scrollTo(x,y): void{
  }
}