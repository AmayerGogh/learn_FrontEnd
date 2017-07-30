//浏览器启动
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
//路由
import {LoggerService} from './logger.service';
import { AppComponent } from './app.component';
 import {LoginComponent} from './login/login.component';
 import { TodoComponent} from './todo/todo.component';
import {ChildComponent} from './child.component';
import {Child2Component} from './child2.component';
//引入自定义指令
import { HighlightDirective} from './highlight.directive';
//引入服务类


import { AuthService } from './core/auth.service';
import { routing } from './app.routes';

//引入内存服务器
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryTodoDbService } from './todo/todo-data';

@NgModule({
  //元数据
  declarations: [
    AppComponent,
    HighlightDirective,
    ChildComponent,
    Child2Component,
     LoginComponent,
     TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService), //内存服务器
    routing
  ],
  providers: [
    LoggerService, {provide: 'auth',  useClass: AuthService}],

  bootstrap: [AppComponent]
})
export class AppModule { }
