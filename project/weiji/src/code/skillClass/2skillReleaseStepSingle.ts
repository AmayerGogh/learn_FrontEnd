
//单步流程
class SkillReleaseStepSingle{

    constructor(skillState:skillReleaseState){
        this.skillReleaseState=skillState
    }
   
   public skillReleaseState:skillReleaseState;
   public SkillReleaseSelf:SkillReleaseSelf;
   

   //自身条件
   skillReleaseCreaterMust:skillReleaseCreaterMust;
   //其他条件
   skillReleaseOtherMust:skillReleaseOtherMust;
   canUse:Function; //技能是否已经激活
   是否可以脱离:Function; //中断输出

   //创建出一个技能 跟释放者不再有关系
   
   createSkillArea(){
    //加入到场景中
   }
   
   

}

enum skillReleaseState{
    等待,
    前摇,
    释放,
    后摇,
    
    脱离, //技能与释放者不再有关系
}


//demo