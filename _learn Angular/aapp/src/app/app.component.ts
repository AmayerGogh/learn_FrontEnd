import { Component,OnInit } from '@angular/core';

import {LoggerService} from './logger.service'

//  import { LoginComponent } from './login/login.component'
// import {TodoComponent} from './todo/todo.component';
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  private greeting:string;
  private isShowMore:boolean;
  private msgToChild:string;
  private msgFromChild:string;
  //这是构造函数
  constructor(private logger:LoggerService){}
  ngOnInit(){
    this.greeting ='Angular 2';
    this.msgToChild ='message from parent';
    this.logger.debug('根组件已经初始化完毕');    
  }
  receive(msg:string){
    this.msgFromChild =msg;
  }
}
