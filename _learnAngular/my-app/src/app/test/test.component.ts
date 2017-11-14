import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';




// export class Hero{
//   id:number;
//   name:string;
// }

@Component({
  selector: 'test',
  // template:`
  // <h1>{{title}}</h1>
  // <h2>{{hero.name}} details!</h2>
  // <div><label>id: </label>{{hero.id}}</div>
  // <div><label>name: </label>{{hero.name}}</div>
  // `,
  //templateUrl: './app.component.html',
     templateUrl: './test.component.html',
      styleUrls: [ './test.component.css' ]
   //注册一个HeroService提供商，来告诉注入器如何创建HeroService
   // providers:[HeroService]
})
export class TestComponent implements OnInit { //初始钩子
  title : 'Tout of Heroes';
 // heroes = Hero[];
  
  
  //构造函数 定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点
  // constructor(private router:Router,
  //   private heroService: HeroService) { }

  //初始函数
   ngOnInit(): void {
   
  }
  getHeroes():void{

  }

   
    getDetail():void{
      // this.router.navigate(['/detail', this.selectedHero.id]);
    }
    add(name: string): void {
        
      }
    delete(hero: Hero): void {
     
    }

}
