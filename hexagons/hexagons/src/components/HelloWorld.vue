<template>
  <ul id="hexGrid">
        <li class="hex" v-for="(item) in list" :key="item.index" @click="click(item.q+'-'+ item.r +'-' + item.s)">
          <div class="hexIn">
            <div class="hexLink" href="#">
              <div class="img" style="" v-bind:class="{ img_active: item.active }">
                <!-- <h4 style="margin-top: 50px;margin-left: 35px;">{{Math.floor(index/18) }} ,{{(index%18) }}</h4> -->
                <h4 style="margin-top: 50px;margin-left: 35px;">{{item.q }},{{item.r}},{{item.s}}</h4>
              </div>
            </div>
          </div>
        </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Hex } from "../core/hexagons"
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  list:Array<number> =new Array(18*10);
  listRow:Array<number> =new Array(18);
  
  hexHashList: {[index:string]: Hex} = {}
  mounted(){
    var now =0;
    var i =0;
    for (let row = 0; row < 16; row++) {
      for (let index = 0; index < 18; index++) {
          var q =index;
          var r =0-now;
          var s =0 -(0 - now + index);
          var hex = new Hex(q,r,s);
          hex.index =i;
          this.hexHashList[q+"-"+ r +"-" + s] =hex;
          i++;
      }  
       now ++;    
    }
  }
  click(hash:string){    
    var thisHex = this.hexHashList[hash];
    console.log(thisHex.q,thisHex.r,thisHex.s);
    //激活
    thisHex.active =!thisHex.active;

  }
  getHex(q:number,r:number,s:number){
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

#hexGrid {
  display: flex;
  flex-wrap: wrap; 
  margin: 0 auto;
  overflow: hidden;
  font-size: 15px;
  list-style-type: none;
  padding-bottom: 25px;
  padding-right: 21px;
  width: 1850px;
}

.hex {
position: relative;
outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hex::after{
content:'';
display:block;
padding-bottom: 86.602%;  /* =  100 / tan(60) * 1.5 */
}
.hexIn{
position: absolute;
width:96%;
padding-bottom: 110.851%; /* =  width / sin(60) */
margin:0 2%;
overflow: hidden;
outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
-webkit-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
    -ms-transform: rotate3d(0,0,1,-60deg) skewY(30deg);
        transform: rotate3d(0,0,1,-60deg) skewY(30deg);
}
.hexIn * {
position: absolute;
outline:1px solid transparent; /* fix for jagged edges in FF on hover transition */
}
.hexLink {
  display:block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  overflow: hidden;
  -webkit-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
      -ms-transform: skewY(-30deg) rotate3d(0,0,1,60deg);
          transform: skewY(-30deg) rotate3d(0,0,1,60deg);
}

/*** HEX CONTENT **********************************************************************/
.hex .img {
  left: 0%;
  right: 0%;
width: auto;
height: 100%;
margin: 0 auto;
-webkit-transform: rotate3d(0,0,0,0deg);
    -ms-transform: rotate3d(0,0,0,0deg);
        transform: rotate3d(0,0,0,0deg);
}




#hexGrid{
  padding-bottom: 4.4%
}
.hex {
  width: 100px; /* = 100 / 5 */
}

.hex:nth-child(36n +1){ /* first hexagon of even rows */
  margin-left:50px;  /* = width of .hex / 2  to indent even rows */
}

.img{
  background-color: rgb(173 168 168);
  cursor: pointer;
}
.img_active{
   background-color: red;
}
.img:hover{
  background-color: red;
}


</style>
