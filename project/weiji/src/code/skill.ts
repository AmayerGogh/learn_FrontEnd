interface Skill{
    //cd:number;//冷却
    //前摇:number;
    //后摇:number;
    //do();
    IsAlive:boolean
}

class skill1 implements Skill{
    IsAlive: boolean;
    
    流程=[skillState.前摇,skillState.释放,skillState.cd,skillState.cd];
    //释放
    do(自身角色:Role) {
       // 展现技能作用域
       //自身效果
    }
    //条件检测
    //释放
    //目标选择
    //效果

    current_step:number;
    
}


enum skillState{
    等待,
    前摇,
    释放,
    后摇,
    cd,
    
}