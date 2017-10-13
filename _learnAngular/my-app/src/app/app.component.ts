import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
   <nav>
      <a routerLink="/dashboard" routerLinkActive="active">仪表板</a>
      <a routerLink="/heroes" routerLinkActive="">英雄们</a>
    </nav>
    <router-outlet></router-outlet>   
  `,
  styleUrls: ['./app.component.css'],
})
// <my-heroes></my-heroes>
export class AppComponent {
  title = '我是app.Component的标题';
}