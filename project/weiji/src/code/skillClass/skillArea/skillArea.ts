interface skillArea{
    creater:any;
    hurt:number;

    初始位置:[0,0]
    角度:number;
    角度追踪:number;

    范围:Array<AreaType>
    范围负:Array<AreaType>

    demageType:demageType;
    
    

}

interface AreaType{

}

class 矩形{
    height:number;
    width:number;
}
class 扇形{
    半径:number;
    角度:number;
}
enum demageType{
    单一目标,
    全部范围

}
