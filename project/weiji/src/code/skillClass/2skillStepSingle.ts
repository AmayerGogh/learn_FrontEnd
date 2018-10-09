
//单步流程
class SkillStepSingle{

    constructor(skillState:skillState){
        this.skillState=skillState
    }
   
  
   public skillArea:skillArea;
   public skillState:skillState;
   public SkillSelf:SkillSelf;
   

   //自身条件
   selfMust:skillSelfMust;
   otherMust:skillOtherMust;
   canUse:Function;
   是否可以脱离:Function;

   
   

}

enum skillState{
    等待,
    前摇,
    释放,
    后摇,
    
    脱离, //技能与释放者不再有关系
}


//demo