import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Attachment, Application } from '../services/models';
import { ClientService } from '../services/client.service';
import { ModalService } from '../services/modal.service';
import { LoadService } from '../services/load.service';

@Component({
  selector: 'application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.less']
})
export class ApplicationFormComponent implements OnInit {
  userForm:FormGroup;
  submitted = false;
  @Input() attachment: Attachment;
  @Input() show: boolean = true;
  constructor(private fb:FormBuilder, private cs:ClientService, public ms:ModalService, private ls:LoadService) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      //Phone: ['', [Validators.required, Validators.pattern]],
      Description: [''],
      Privacy: ['', Validators.requiredTrue]
    });
  }

  send(){
    this.submitted = true;
    if(this.userForm.invalid){
      return;
    }

    //то, что отправляется на сервер
    let app = {
      App: {
        Name:this.userForm.value.Name,
        Description:this.userForm.value.Description,
        Email:this.userForm.value.Email
      },
      Attachment: {
        Id:this.attachment?this.attachment.Id:null,
        AppId: 0,
        Type: this.attachment?this.attachment.Type:null
      }
    }
    this.ls.showLoad = true;
    this.cs.addApp(app).subscribe(()=> {
      this.ms.close();
      this.ls.showLoad = false;
    })

  }

  get f(){return this.userForm.controls};

}
