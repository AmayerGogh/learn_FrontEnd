<template>
  <div class="home">
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MapState msg="Welcome to Your Vue.js App"/>
    {{count}}
    <input type="button" @click="add" value="添加"/>
    <input type="button" @click="getter" value="Getter"/>
    <input type="button" @click="testIncrement" value="mapMutations"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MapState from '@/components/MapState.vue'
import store from  '@/store/index.js'
import { mapMutations } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      count: 0
    }
  },
  components: {
    HelloWorld,
    MapState
  },
  methods:{
    add(){
        console.log(store.state.count)
        this.count++;
        this.$store.commit('increment')
      },
    getter(){
      console.log(this.$store.getters.doneTodos);
    },
    ...mapMutations({
      testIncrement:'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
  
}
</script>
