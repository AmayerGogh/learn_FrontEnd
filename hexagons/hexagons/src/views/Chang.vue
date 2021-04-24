<template>

  <div  class="container">
    <h1>场景</h1>
    <div class="row">
      <table class="table">
        <tr>
          <td class="td4">
             
                <div v-for="card in list"  :key="card.Id" class="card col-md-1" @click="click_卡牌()">
                  <div> <h4 class="card-name">标题</h4></div>
                  <div class="car-cust"></div>
                  <div class="card-hp">{{card.CurrnetHp}}</div>
                  <div class="card-atk">{{card.CurrentATK}}</div>
                </div>
              
          </td>
        </tr>
         <tr>
          <td class="td3"></td>
        </tr>
         <tr>
          <td class="td2"></td>
        </tr>
         <tr>
          <td class="td1"></td>
        </tr>
      </table>
     
    </div>
    <div class="row">
       <div v-for="card in list"  :key="card.Id" class="card col-md-1"  @click="click_候选卡牌()">
        <div> <h4 class="card-name">标题</h4></div>
        <div class="car-cust"></div>
        <div class="card-hp">{{card.CurrnetHp}}</div>
        <div class="card-atk">{{card.CurrentATK}}</div>
      </div>
    </div>
    
    <div class="row">
      <div class="buttons">
        <button>前进</button>
        <button>攻击</button>
      </div>
    </div>
      
  </div>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Hex } from "../core/hexagons"
import { Hero,CardActive} from "../core/hero"

@Component
export default class ChangJing extends Vue {
  @Prop() private msg!: string;
  list:Array<CardActive> =new Array();
    
  hexHashList: {[index:string]: Hex} = {}
 
  mounted(){
    for (var i=0;i< 8;i++)
    { 
      var h1 = new CardActive();
      h1.Id =i;
      h1.CurrentATK = Math.floor(Math.random()*10) +1;
      h1.CurrnetHp =Math.floor(Math.random()*30) +1;
      this.list.push(h1);
    }
     
 
  }
  click(hash:string){    
   
  }
  getHex(q:number,r:number,s:number){
     
  }
  click_卡牌(){
    this.list[0].CurrentATK ++;
  }
  click_候选卡牌(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.card{
    height: 130px;
    width: 90px;    
    margin: 0 10px;
    padding:0;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: rgb(0 0 0 0);
    cursor: pointer;
 
    z-index: 1;
    
}
.card:hover{
    
    box-shadow:0px 0px 10px #000;
}
.card-hp{
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: red;
    font-size: 20px;
    border-radius: 8px;
}
.card-atk{
  position:absolute;left:0;bottom:0;
  background-color: #db6800;
  font-size: 20px;
  border-radius: 8px;
}
.card-name{
  text-align: center;
}


.table , .table>tr ,.table>td  {
  border: 1px solid #000;
}
 .td1,.td2,.td3,.td4  {
  height:150px;
}
</style>
