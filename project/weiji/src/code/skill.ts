interface Skill{
    do<T>(自身角色:T);
    isAlive:boolean
    description:String;
    current_step:number;
    //条件

    //自身状态
     canGO:Boolean
     //启用其他
     canUserOther:Boolean;
     steps:Array<SkillStepSingle>
}






class Skill1 implements Skill{
    isAlive: boolean;
    
    description:String;
    
    //释放
    do<T>(自身角色:T) {
      
       // 展现技能作用域
       //自身效果
    }

    current_step:number;
  

    //自身状态
    canGO:Boolean
    //启用其他
    canUserOther:Boolean

    steps:Array<SkillStepSingle> = [];
    stepsInit(){
        this.steps[0] = new SkillStepSingle(skillState.前摇);
        this.steps[0].SkillSelf.mp=-3;
        this.steps[0].SkillSelf.distance=-3;
        this.steps[0].SkillSelf.makeStatus(State.霸体,1)

    }
    
}
//单步流程
class SkillStepSingle{

    constructor(skillState:skillState){
        this.skillState=skillState
    }
    // 范围

   public skillState:skillState
   public SkillSelf:SkillSelf
   public SkillOther:SkillOther

    //new出来的新对象
   public  SkillNewRange:SkillNewRange
}

enum skillState{
    等待,
    前摇,
    释放,
    后摇,
    cd,    
}


//demo