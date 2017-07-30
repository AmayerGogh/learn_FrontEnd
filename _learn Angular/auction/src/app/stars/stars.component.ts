import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {

  @Input()
  private rating:number=0
  private stars:boolean[];
  @Input()
  private readonly:boolean =true;
  //是必须要写成xxchange 调用是才会直接可以[()]
  @Output()
  private ratingChange=new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  
  }
    ngOnChanges(changes: SimpleChanges): void {
      this.stars=[];
    for (var i = 1; i <= 5;i++) {
       this.stars.push(i>this.rating);
    }
  }
  clickStar(c:number){
    if (!this.readonly){
       this.rating=c+1;
      
       this.ratingChange.emit(this.rating);
    }
  
  }

}
