import { Component, OnInit } from '@angular/core';
import { RegisterModel } from './register-model';

@Component({
  selector: 'form2',
  templateUrl: './form-binding.component.html',
 
})
export class FormBindingComponent implements OnInit {
  public regModel:RegisterModel=new RegisterModel();

  constructor() { }

  ngOnInit() {
  }
}