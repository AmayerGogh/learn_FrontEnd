import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule }  from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.modules';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { Code404Component } from './code404/code404.component';
import { ArticleContentComponent } from './article-content/article-content.component';
import { ArticleMsgComponent } from './article-msg/article-msg.component';

import { ChatComponent } from './chat/chat.component';
import { Product1Component } from './product1/product1.component';
import { Product1Service } from "./shared/product1.service";
import { Product2Component } from './product2/product2.component';
import { Product2Service } from "./shared/product2.service";






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    FooterComponent,
    ProductDetailComponent,
    HomeComponent,
    ArticleComponent,
    Code404Component,
    ArticleContentComponent,
    ArticleMsgComponent,

    ChatComponent,

    Product1Component,

    Product2Component
  ],
  imports: [
    BrowserModule,
   FormsModule,
    HttpModule,
  AppRoutingModule
  ],
  providers: [Product1Service,Product2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
