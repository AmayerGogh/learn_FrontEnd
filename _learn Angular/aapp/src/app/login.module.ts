//浏览器启动
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
//引入自定义指令
import { HighlightDirective} from './highlight.directive';
//引入服务类
import {LoggerService} from './logger.service';
import {ChildComponent} from './child.component';
import {AuthService} from './core/auth.service';


@NgModule({
  //元数据
  declarations: [
    //AppComponent,
    HighlightDirective,
    ChildComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LoggerService,
   {provide: 'auth',  useClass: AuthService}
  ],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
