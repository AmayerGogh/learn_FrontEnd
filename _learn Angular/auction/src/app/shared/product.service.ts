import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor  () { }
  private products:Product[]=[
      new Product(1,"第一个商品",1.33,23,"这是我的第一个商品，",["电子产品","硬件"]),
      new Product(2,"第2个商品",1.33,23,"这是我的第一个商品，",["电子产品","硬件"]),
      new Product(3,"第3个商品",1.33,23,"这是我的第一个商品，",["电子产品","硬件"]),
      new Product(4,"第4个商品",1.33,23,"这是我的第一个商品，",["电子产品","硬件"]),
      new Product(5,"第5个商品",1.33,23,"这是我的第一个商品，",["电子产品","硬件"]),
      new Product(6,"第6个商品",1.33,23,"这是我的第一个商品，",["电子产品","硬件"]),
      new Product(7,"第7个商品",1.33,23,"这是我的第一个商品，",["电子产品","硬件"]),
    ];
  private comments:Comment[]=[
    new Comment(1,1,"2017-07-25 21:51:03","水岸东方",2,"垃asdfsadfsasdxcvfedfwerwerxcvdfg rger圾"),
    new Comment(2,1,"2017-07-2 5 21:51:03","阿斯顿浪费",5,"垃qwerqwsafasdf圾"),
    new Comment(3,1,"2017-07-25 21:51:03","哦怕惹他",4,"垃圾是发发是否阿飞"),
    new Comment(4,2,"2017-07-25 21:51:03","你后再",2,"垃圾"),
    new Comment(5,3,"2017-07-25 21:51:03","你后再",2,"垃圾"),
    new Comment(5,4,"2017-07-25 21:51:03","你后再",2,"垃圾"),
    new Comment(5,5,"2017-07-25 21:51:03","你后再",2,"垃圾"),
  ]  

  getProducts():Product[]{
    return this.products;
  }
  getProductById(id:number):Product{
      return this.products.find((product)=>product.id==id);
  }

  getCommentsForProductId(id:number):Comment[]{
      var temp = this.comments.filter((comment:Comment)=>
      comment.productIdId==id); 
      return temp;
  }


}




export class Product{
  constructor(
     public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string, 
    public categories:Array<string>){   
  }  
}
export  class Comment{
  constructor(
     public id:number,
     public productIdId:number,
     public timestamp:string,
     public user:string,
    public rating:number,
    public content:string
  ){}
}