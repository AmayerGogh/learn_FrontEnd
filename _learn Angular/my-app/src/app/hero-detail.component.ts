import 'rxjs/add/operator/switchMap';
import { Component,Input,OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import {Location} from '@angular/common';

import { Hero } from './hero';
import { HeroService } from './hero.service';
//定义一个组件 先导入符号 Component
@Component({
    selector:'hero-detail',
    templateUrl:'./hero-detail.component.html',
    // template:`
    //     <div *ngIf="hero">
    //     <h2>{{hero.name}} 详细页!</h2>
    //     <div><label>id: </label>{{hero.id}}</div>
    //     <div>
    //         <label>name: </label>
    //         <input [(ngModel)]="hero.name" placeholder="name"/>
    //     </div>
    //     </div>
    //     `
})

export class HeroDetailComponent implements OnInit{

    // Input() 来表明它是一个输入属性
   hero: Hero;
    constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
    ) {};

   ngOnInit(): void {
     this.route.params
        .switchMap((params: Params) => this.heroService.getHero(+params['id']))
        .subscribe(hero => this.hero = hero);
    }
    goBack():void{
        this.location.back();
    }
    save():void {
        this.heroService.update(this.hero)
        .then(()=>this.goBack())
    }
  
}
