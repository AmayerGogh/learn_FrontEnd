import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule }     from './app-routing.modules';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';


import {TestAnimationComponent} from  './test-animation/test-animation.component'
@NgModule({
  declarations: [
    AppComponent,
    TestAnimationComponent
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
