import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule }  from '@angular/forms';
import { HttpModule }    from '@angular/http';
//路由
import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
//导入组件
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { DashboardComponent} from   './dashboard.component';
import {HeroSearchComponent} from './hero-search.component';
import { HeroService }         from './hero.service';


@NgModule({
  
  imports: [
    BrowserModule,
    //用于动态绑定  传过去
    FormsModule,
     HttpModule,
     //这是一个辅助服务，负责与远程服务器对话
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    //路由
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [HeroService],  //服务
  bootstrap: [AppComponent]
})
export class AppModule { 
  //  title='Tour of Heroes';
  //  hero='Windstorm';
}
