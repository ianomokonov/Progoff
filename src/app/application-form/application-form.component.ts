import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Attachment, Application } from '../services/models';

@Component({
  selector: 'application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.less']
})
export class ApplicationFormComponent implements OnInit {
  userForm:FormGroup;
  submitted = false;
  @Input() attachment: Attachment;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      //Phone: ['', [Validators.required, Validators.pattern]],
      Description: ['']
    });
  }

  send(){
    this.submitted = true;
    if(this.userForm.invalid){
      return;
    }

    //то, что отправляется на сервер
    let app = {
      Name:this.userForm.value.Name,
      Description:this.userForm.value.Description,
      Email:this.userForm.value.Email,
      AttachmentId:this.attachment?this.attachment.Id:null,
      AttachmentType:this.attachment?this.attachment.Type:null
    }
    console.log(app);

  }

  get f(){return this.userForm.controls};

}
