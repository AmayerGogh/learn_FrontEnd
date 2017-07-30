import {Component,OnInit,Input,Output,EventEmitter} from  '@angular/core';

@Component({
    selector:'child',
    templateUrl:'child.component.html'
})
export class ChildComponent implements OnInit{
    @Input() 
    private message:string;
    @Input()
    stockCode:string;
    @Input()
    amount:number;

    @Output()
     private outer =new EventEmitter<string>();
    @Output("one")
    aGuPiaoEE  =new EventEmitter<GuPiao>();
    //演示中间人模式 
    @Output()
    bGuPiaoEE =new EventEmitter<GuPiao>();
    private price:number;
    private guPiao2:GuPiao =new GuPiao(0);
    constructor(){
        setInterval(()=>{
            let guPiao:GuPiao =new GuPiao(100*Math.random());
            this.guPiao2 =new GuPiao(100*Math.random());
            this.price =guPiao.price;
            this.aGuPiaoEE.emit(guPiao);
           
        },1000)
    } 

    ngOnInit(){

    }
    sendToParent(){
        this.outer.emit('message from child');
    }
    //演示中间人模式 
    buyStock(event){
        this.bGuPiaoEE.emit(this.guPiao2);
    }

    //子组件向父组件传递数据是通过输出接口完成的
}

export class GuPiao{
    constructor(public price:number){
    }
}