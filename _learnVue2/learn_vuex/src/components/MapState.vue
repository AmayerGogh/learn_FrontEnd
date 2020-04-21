<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
     <h1>MapState  {{ count }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MapState',
  props: {
    msg: String
  },//用 mapState 辅助函数帮助我们生成计算属性
  computed:{
      local (){},
      ... mapState({
      count:state=>state.count
    })
  }
 
//   {
//     count(){
//       return this.$store.state.count
//     }
//   }
}
</script>
