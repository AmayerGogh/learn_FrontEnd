import { Component } from '@angular/core';
export class Hero{
  id:number;
  name:string;
}


@Component({
  selector: 'app-root',
  // template:`
  // <h1>{{title}}</h1>
  // <h2>{{hero.name}} details!</h2>
  // <div><label>id: </label>{{hero.id}}</div>
  // <div><label>name: </label>{{hero.name}}</div>
  // `,
  //templateUrl: './app.component.html',
  template:`<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tout of Heroes';
  hero : Hero={
    id:1,
    name:'德玛西亚-盖伦!'
  }
}
