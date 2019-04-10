import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.less']
})
export class ApplicationFormComponent implements OnInit {
  userForm:FormGroup;
  submitted = false;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      //Phone: ['', [Validators.required, Validators.pattern]],
      Description: ['']
    });
  }

}
