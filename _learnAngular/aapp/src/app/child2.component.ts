import {Component,OnInit,Input,Output,EventEmitter} from  '@angular/core';
import { GuPiao } from "app/child.component";

@Component({
    selector:'child2',
    templateUrl:'child2.component.html'
})
export class Child2Component implements OnInit{
  
    @Input()
    private guPiao:GuPiao = new GuPiao(0);
    constructor(){
        
    } 

    ngOnInit(){

    }
  
}

