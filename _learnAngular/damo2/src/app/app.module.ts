import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,PreloadAllModules  } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { appRoutes } from './app.routes';
import {MyPreloadingStrategy } from './common/my-proloading-strategy'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //{preloadingStrategy:PreloadAllModules} 预先加载
    RouterModule.forRoot(appRoutes,{preloadingStrategy:MyPreloadingStrategy})
  ],
  providers: [MyPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
