//技能传入对象
class SkillDemand{
    //角度
}
class Skill影响父类{
    status:Array<[State,number]> ;//= [[State.中毒, 0],[State.倒地,0]];    
    makeStatus(state:State,num:number){        
        let isChanged=false;
        this.status.forEach(element => {
            if(element[0]==state){
                if (isChanged){
                    element=null;                  
                }
                element[1] +=num ;
                isChanged=true;
            }
            if(!isChanged){
                this.status.push([state,num])
            }
        });
    }
}

//对自己的影响
class SkillSelf extends Skill影响父类{


    distance:number = 10
   
    hp: -10;
    mp: -3;

   
    
}
//对对方的影响 不判断对方是否存在
class SkillOther extends Skill影响父类{

}
interface SkillNewRange{
    SkillNewRangeType:SkillNewRangeType
}

//位置效果
enum PositionEffect{
    绝对移动,
    相对移动,
    
}

//new出来的新对象的类型
enum SkillNewRangeType{
    //移动对象,
    //绝对静止
    //生命周期

    子弹类,
    榴弹类,
    火焰类    
}


