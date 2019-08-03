import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { LoadService } from '../services/load.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.less']
})
export class ExampleComponent implements OnInit {
  example = null;
  constructor(private cs:ClientService, private ls:LoadService, private route:ActivatedRoute) { }

  ngOnInit() {
    if(this.cs.makets.length == 0){
      this.ls.showLoad = true;
      this.cs.getMaket(this.route.snapshot.paramMap.get("id")).subscribe(cli => {
        this.example = cli;
        this.ls.showLoad = false;
      })
    }else{
      this.example = this.cs.makets.find(x => x.Id==this.route.snapshot.paramMap.get("id"));
    }
    
  }

}
