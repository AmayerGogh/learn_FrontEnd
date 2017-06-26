import {Component,OnInit,Input,Output,EventEmitter} from  '@angular/core';

@Component({
    selector:'child',
    templateUrl:'child.component.html'
})
export class ChildComponent implements OnInit{
    @Input() private message:string;
    @Output() private outer =new EventEmitter<string>();
    constructor(){} 

    ngOnInit(){

    }
    sendToParent(){
        this.outer.emit('message from child');
    }

    //子组件向父组件传递数据是通过输出接口完成的
}