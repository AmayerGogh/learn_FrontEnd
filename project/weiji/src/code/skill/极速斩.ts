



class 极速斩 implements SkillRelease{
    
    canUse() {
        //判断当前进行的技能
        //throw new Error("Method not implemented.");
    }
    isAlive: boolean;
    
    description:String;
    
    //释放
    do<T>(自身角色:T) {
       //this.steps
       // 展现技能作用域
       //自身效果
    }

    current_step:number;
    cd:number;

    //自身状态
    canGO:Boolean
    //启用其他
    canUserOther:Boolean

    steps:Array<SkillReleaseStepSingle> = [];
    stepsInit(){
        this.steps[0] = new SkillReleaseStepSingle(skillReleaseState.前摇);
        this.steps[0].SkillReleaseSelf.mp=-3;
        this.steps[0].SkillReleaseSelf.distance=-3;
        this.steps[0].SkillReleaseSelf.makeStatus(State.霸体,1);
        //this.steps[0]
        this.steps[0].skillReleaseState =skillReleaseState.前摇;
        //this.steps[0].skillArea
    }
    
}