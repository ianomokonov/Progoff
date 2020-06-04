import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Job, AttachmentType, Attachment } from '../services/models';
import { ModalService } from '../services/modal.service';
import { ClientService } from '../services/client.service';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.less']
})
export class JobsComponent implements OnInit {
  curJob = -1;
  jobs:Job[];
  
  constructor(public ms:ModalService, private cs:ClientService, private ls:LoadService) { }

  ngOnInit() {
    this.ls.showLoad = true;
    this.cs.getJobs().subscribe(data => {
      this.jobs = data;
      this.ls.showLoad = false;
      setTimeout(() => {
        this.curJob = 0;
      },1)
    })
    
  }
  show(i){
    this.curJob = i;
  }

  getAttachment(s: Job):Attachment{
    return {
      Id:s.Id,
      AppId:s.Id,
      Type:AttachmentType.Job,
      Content:s
    }
  }

}
