import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-quick-start',
  templateUrl: './form-quick-start.component.html',

})
export class FormQuickStartComponent implements OnInit {
  public userName:string;

  constructor() { }

  ngOnInit() {
  }

  public userNameChange(event):void{
    this.userName=event.target.value;
  }
}
