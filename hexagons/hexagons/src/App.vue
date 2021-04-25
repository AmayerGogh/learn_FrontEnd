<template>
  <div id="app">    
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <h1>heh</h1>
    <ChangJing></ChangJing>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import ChangJing from './views/Chang.vue';
@Component({
  components: {
    HelloWorld,
    ChangJing
  },
})
export default class App extends Vue {}
</script>

<style lang="less">

</style>
