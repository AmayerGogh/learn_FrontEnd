import { JsonPipe } from "@angular/common";

interface skillArea{
    creater:any;
    //hurt:number;


     /**
     * 触发起始位置 
     */
    startPosition:[0,0,0]
    oneOrMore:oneOrMore;

     /**
     * 范围
     */
    shape:Array<Shape>

     /**
     * 角度
     */
    angle:number;
    角度追踪:number;

     /**
     * 覆盖类型
     */
    areaType:AreaType
    //demageType:demageType;
    
    //affect
    //releasing

}

interface AreaType{
    全覆盖,
    渐进,
    子弹
}
interface Shape{
    //距离起始位置
    startP,
    //距离起始位置角度
    startL,
    
}


class 矩形 implements Shape{
    startP: any;
    startL: any;
   public  height:number;
   public   width:number;
}
class 扇形 implements Shape{
    startP: any;
    startL: any;
   public  半径:number;
   public  角度:number;
}

enum oneOrMore{
    单一目标,
    范围内,
    范围内限定
}

//案例 椭圆

var j1= new 矩形()
j1.height=10
j1.width=3
var s1= new 扇形()
s1.半径=1.5
s1.角度=360
var s1= new 扇形()
s1.半径=1.5
s1.角度=360