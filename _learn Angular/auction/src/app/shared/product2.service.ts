import { Injectable } from '@angular/core';
import { Product1Service, Product1 } from "./product1.service";

@Injectable()
export class Product2Service implements Product1Service {
  getProduct1(): Product1 {
    return new Product1(1,"三星",5434,"三桑")
  }

  constructor() { }

}
