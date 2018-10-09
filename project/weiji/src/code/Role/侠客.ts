
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
            //this.skill1.do(param);
        }
    }

    //skill1:Skill1= new Skill1();

}
