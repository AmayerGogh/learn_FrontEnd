import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {
  private birthday:Date =new Date();
  constructor() { }

  ngOnInit() {
  }

  doOnInput(event:any){
    //拿到的是dom
    console.log(event.target.value);
    //拿到是HTML属性
    console.log(event.target.getAttribute('value'));
  }

}
