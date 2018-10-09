//技能传入对象
class SkillDemand{
    //角度
}
/// 目的是设置这些属性
class Skill影响父类{
    distance:number = 10
    hp: number;
    mp:number;
    private status:Array<[State,number]> ;//= [[State.中毒, 0],[State.倒地,0]];    
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
    makeHurt(num:number,min:number,max:number){
        this.hp =-10;    
    }
    //最后都要执行这个 执行
    
}

//对自己的影响
class SkillSelf extends Skill影响父类{


   

   
    
 }
// //对对方的影响 不判断对方是否存在
// class SkillOther extends Skill影响父类{
//     makeHurt(num:number,min:number,max:number){
//         this.hp -=num;
//         //RandomSource.
//      }
//     //makeHurt:Function
    
// }