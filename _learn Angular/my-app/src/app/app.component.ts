import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink ="/dashboard">Dashboard</a>
        <a routerLink ="/heroes">Heroes</a>
        
    </nav>
    
    <router-outlet></router-outlet>   
  `
})
// <my-heroes></my-heroes>
export class AppComponent {
  title = '我是app.Component的标题';
}