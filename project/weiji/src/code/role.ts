interface  Role{ //这是父类
    max_hp:number;
    max_mp:number;
    normal_speed:number;


    position:Array<number>   //= [0,0,0,0] //x y z 角度
    status:Array<[State,number]>       
    name:string;
    hp:number;
    mp:number;
    speed:number;
    roleState:RoleState;    
    //skills:Array<Skill>;

   
    move(angle:Number);
        
    jump(angle:Number);
    skill<T>(skill:string,param:T);
        
}

class XiaKe implements Role{
    
    max_hp=100;   
    max_mp =20;
    normal_speed =100;

    position:[0,0,0,0];
    status: [[State.中毒, 10],[State.倒地,10]];
    name: "侠客";
    hp: 100;
    mp: 100;
    speed: 100;
    roleState: RoleState.生存;
    
    move(angle: Number) {
        
    }
    jump(angle: Number) {
        
    }
    skill<T>(skill: string,param :T) {
        //自身状态
        if(skill="1"){
            this.skill1.do(param);
        }
    }

    skill1:skill1= new skill1();

}
