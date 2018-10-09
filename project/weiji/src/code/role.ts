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
