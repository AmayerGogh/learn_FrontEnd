import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../hero';
import { HeroService } from '../hero-service';



// export class Hero{
//   id:number;
//   name:string;
// }

@Component({
  selector: 'my-heroes',
  // template:`
  // <h1>{{title}}</h1>
  // <h2>{{hero.name}} details!</h2>
  // <div><label>id: </label>{{hero.id}}</div>
  // <div><label>name: </label>{{hero.name}}</div>
  // `,
  //templateUrl: './app.component.html',
     templateUrl: './heroes.component.html',
      styleUrls: [ './heroes.component.css' ]
   //注册一个HeroService提供商，来告诉注入器如何创建HeroService
   // providers:[HeroService]
})
export class HeroesComponent implements OnInit { //初始钩子
  title : 'Tout of Heroes';
 // heroes = Hero[];
   hero : Hero={
    id:1,
    name:'德玛西亚-盖伦!'
  };
  heroes: Hero[];
  selectedHero:Hero;

  //构造函数 定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点
  // constructor(private router:Router,
  //   private heroService: HeroService) { }

  //初始函数
   ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes():void{
    // this.heroes=this.heroService.getHeroes();
    //回调函数作为参数传给承诺对象的then方法
      // this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

   onSelect(hero:Hero): void{
    this.selectedHero =hero;
  };
    getDetail():void{
      // this.router.navigate(['/detail', this.selectedHero.id]);
    }
    add(name: string): void {
        // name = name.trim();
        // if (!name) { return; }
        // this.heroService.create(name)
        //   .then(hero => {
        //     this.heroes.push(hero);
        //     this.selectedHero = null;
        //   });
      }
    delete(hero: Hero): void {
      // this.heroService
      //     .delete(hero.id)
      //     .then(() => {
      //       this.heroes = this.heroes.filter(h => h !== hero);
      //       if (this.selectedHero === hero) { this.selectedHero = null; }
      //     });
    }

}
