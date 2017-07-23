import { Component, OnInit } from '@angular/core';
import { Product1Service, Product1 } from "../shared/product1.service";

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
  product:Product1;
  constructor(private productService:Product1Service) { }

  ngOnInit() {
    this.product =this.productService.getProduct1();
  }

}

