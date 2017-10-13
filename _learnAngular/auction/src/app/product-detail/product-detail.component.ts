import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Product,Comment, ProductService } from "../shared/product.service";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit,OnChanges {

  private productTitle: string;
  private product:Product;
  private comments:Comment[];
  newRating:number =5; 
  newComment:string ="";
  isCommentHidden =true;
  constructor(private routeInfo:ActivatedRoute,private productService:ProductService) { }

  ngOnInit() {
      let productId:number =this.routeInfo.snapshot.params["productId"] ;
 
      //this.productTitle=this.routeInfo.snapshot.params["productId"] ;
      this.product=this.productService.getProductById(productId);
      this.comments =this.productService.getCommentsForProductId(productId);
  } 
    ngOnChanges(changes: SimpleChanges): void {
 
  }
  addComment(){
    let comment =new Comment(0,this.product.id,new Date().toISOString(),"someone",this.newRating,this.newComment);
    this.comments.unshift(comment);
    let sum =this.comments.reduce((sum,comment)=>sum+comment.rating,0)
    this.product.rating =sum/this.comments.length;
    this.newComment="";
    this.newRating =5; 
    this.isCommentHidden=true;
  }

}
