
export class Hero{
    //攻击力
    Atk:number =0;
    //血量
    Hp:number = 0;
}
export class CardActive{
  //攻击力
  CurrentATK:number =0;
  //血量
  CurrnetHp:number = 0;
  MaxAtk:number =0;
  MaxHp:number =0;
  //倒计时
  
  //位置 前排1 后排2
  Row:number =0;
  //索引 左往右
  Index:number =0;

  HasWalk:boolean=false;
  HasFight:boolean=false;
}
//场景
export class Ground{
    //回合历史
    //RoundHistory
    //Action:Array<Function> = ;
}
//team
export class Team
{
    //法力值
    CurrentMana:number =0;
    MaxMana :number =0;
}



