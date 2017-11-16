import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.modules';

//动画
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {MyHighLightDirective} from './test3/directives/myHighLight.directive'
import {DelayDirective} from './test3/directives/delay.directive'

import { AppComponent } from './app.component';
import {ControlhtmlComponent} from './controlhtml/controlhtml.component'
import {TestAnimationComponent} from  './test-animation/test-animation.component'
import {Test3Component} from './test3/test3.component'
import  {CardComponent} from "./card/card.component"
@NgModule({
  declarations: [
    MyHighLightDirective,
    DelayDirective,
    AppComponent,
    ControlhtmlComponent,
    TestAnimationComponent,
    Test3Component,
    CardComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
