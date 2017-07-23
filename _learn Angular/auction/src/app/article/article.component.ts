import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  private articleId:number;
  private articleName:string;
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    //接参数 第一种方式（快照）
   // this.articleId =this.routeInfo.snapshot.queryParams["id"]; 
    //接参数 第二种方式 (订阅)
    this.routeInfo.params.subscribe((params:Params)=>this.articleId =params["id"])
    //接参数 第二种方式 (快照)
   //  this.articleId =thi s.routeInfo.snapshot.params["id"]; 

   this.routeInfo.data.subscribe((data:{article:Article})=>{
     this.articleId =data.article.id;
     this.articleName =data.article.name;
   })
  }

}


export class Article{
  constructor(public  id:number,public name:string){

  }
}
