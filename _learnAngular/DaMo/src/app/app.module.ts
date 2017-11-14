import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.modules';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';

import {ControlhtmlComponent} from './controlhtml/controlhtml.component'
import {TestAnimationComponent} from  './test-animation/test-animation.component'
import {Test3Component} from './test3/test3.component'
@NgModule({
  declarations: [
    AppComponent,
    ControlhtmlComponent,
    TestAnimationComponent,
    Test3Component
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
