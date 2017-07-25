import { Component, OnInit } from '@angular/core';
import { Product1, Product1Service } from "../shared/product1.service";
import { Product2Service } from "../shared/product2.service";

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  // providers:[{
  //   provide:Product1Service,useClass:Product2Service
  // }]
})
export class Product2Component implements OnInit {

   product:Product1;
  constructor(private productService:Product1Service) { }

  ngOnInit() {
    this.product =this.productService.getProduct1();
  }

}
