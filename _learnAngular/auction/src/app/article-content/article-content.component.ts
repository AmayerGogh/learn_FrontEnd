import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-article-content',
  templateUrl: './article-content.component.html',
  styleUrls: ['./article-content.component.css']
})
export class ArticleContentComponent implements OnInit {
  private contentId:number;
  constructor(private routeInfo:ActivatedRoute) {

   }

  ngOnInit() {
    this.contentId =this.routeInfo.snapshot.params["id"];
  }

}
