interface SkillRelease{
    do<T>(自身角色:T);
    //是否激活  
    isAlive:boolean
    //描述
    description:String;
    //当前步骤
    current_step:number;
   
    //全部步骤 
    steps:Array<SkillReleaseStepSingle>

    //两个自身条件是否达到
    
     canUse();
}


