import { Component,OnInit } from '@angular/core';

import {LoggerService} from './logger.service'
import { GuPiao } from "app/child.component";

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
  stock ="";
  //接收来自子组件的信息
  aGuPiao:GuPiao =new GuPiao(0);
  bGuPiao:GuPiao =new GuPiao(0);
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
  receiveGuPiao(msg:GuPiao){
    this.aGuPiao =msg;
  }
  buyHandler(msg:GuPiao){
    this.bGuPiao =msg;
  }
}
