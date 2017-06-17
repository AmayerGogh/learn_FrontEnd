import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule }  from '@angular/forms';

//导入组件
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent} from   './dashboard.component'
//路由
import { AppRoutingModule }     from './app-routing.module';
@NgModule({
  
  imports: [
    BrowserModule,
    //用于动态绑定  传过去
    FormsModule,
    //路由
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [HeroService],  //服务
  bootstrap: [AppComponent]
})
export class AppModule { 
  //  title='Tour of Heroes';
  //  hero='Windstorm';
}
