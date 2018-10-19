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
        this.currentStep++;

        //this.A_Step[0];
        //this.A_Step[0];
        //同步
    }

    //skillArea list
    order:Array<string>;
    doA_completed:boolean
    dbB_completed:boolean
    do(){
        if(this.order[0]=="a" && !this.doA_completed){
            //doa
            this.doA_completed = true;
        }
        else{
            this.do();
        }
        if(this.order[0]=="b" && !this.dbB_completed){
            //doa
            this.dbB_completed = true;
        }
        else{
            this.do();
        }
    }
}