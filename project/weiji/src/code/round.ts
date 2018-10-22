class Round{

  currentStep:number;  
  public  A:Role     
  public  B:Role
  //前5回合动作
  aboveTempA:Array<any>
  aboveTempB:Array<any>
    Begin(){
        //Reflect.getPrototypeOf();
    }
    
    
    r(){
        //当前回合事件

        //场景技能影响后续
        //ab移动 预测走位
        this.do(); //ab同步技能
        //场景影响
        //ab收到的影响
        //ab 位移 状态影响
        //this.currentStep++;
        //技能缓存
        //同步ab状态 
        //同步可用技能
        }

    //skillArea list
    order:Array<string>;
    doA_completed:boolean
    dbB_completed:boolean
    do(){
        this.order.forEach(element => {
            if(element=="a"){
                this.doA();
            }else if(element=="b"){
                this.dbB();
            }
       });
    }
    doA(){
        //
        this.doA_completed=true;
    }
    dbB(){
        //
        this.dbB_completed=true;
    }
    stepEvent(){
        if(this.currentStep==0){
            this.init();
        }
        if(this.currentStep==100){
            this.gameOver();
        }
    }
    /**
      * 初始化    
      */
    init(){

    }
    gameOver(){
        
    }
}