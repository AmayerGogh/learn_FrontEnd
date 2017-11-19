import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductDetailComponent} from './product-detail/product-detail.component'
import{ArticleComponent} from './article/article.component'
import {Code404Component} from './code404/code404.component'
import {ArticleMsgComponent} from './article-msg/article-msg.component';
import  {ArticleContentComponent} from './article-content/article-content.component';
import {ChatComponent} from "./chat/chat.component";
import {LoginGuard} from "./guard/login.guard";
import {UnsaveGuard} from "./guard/unsave.guard";
import { ArticleResolve } from "./guard/article.resolve";

import {TemplateFormComponent} from "./demo/template-form/template-form.component"
const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'chat',component:ChatComponent,outlet:'aux'},
    {path:'home',component:HomeComponent},
    {path:'product/:productId',component:ProductDetailComponent},
    {path:'article/:id',component:ArticleComponent,children:[
        {path:'',component:ArticleMsgComponent},
        {path:'content/:id',component:ArticleContentComponent}
    ],//canActivate:[LoginGuard],
     // canDeactivate:[UnsaveGuard],
      resolve:{
          article:ArticleResolve
      }
    },//第一种传值方式  ?id=1&
     {path:'article',component:ArticleComponent}, //第二种传值方式  /detail/1
     {path:'tempform',component:TemplateFormComponent}
    // {path:'**',component:Code404Component}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[LoginGuard,
        UnsaveGuard,
        ArticleResolve
    ]
})
export class AppRoutingModule{
    
}
//LoginGuard UnsaveGuard 的作用 相当于一个权限过滤器 进入时 离开时