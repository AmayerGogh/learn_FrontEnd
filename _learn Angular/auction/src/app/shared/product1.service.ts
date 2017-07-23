import { Injectable } from '@angular/core';



@Injectable() 
export class Product1Service {

  constructor() { }
    getProduct1():Product1{
    return new Product1(0,"iphone7",5888,"手机");
  }
}


export class Product1{
  constructor(
    public  id:number,
    public title:string,
    public price:number,
    public desc:string
  ){

  }
}
