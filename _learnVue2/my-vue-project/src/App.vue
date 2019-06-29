<template>
  <div id="app">
    <div>
      <router-link to="/">首页</router-link>
      <router-link to="/test">test</router-link>
      <router-link to="/routeTest/111">路由测试1</router-link>
      <!-- 没匹配 -->
      <router-link :to="{name:'routeTest',params:{id:123}}">路由测试参数</router-link>
      <router-link :to="{name:'test',query:{id:123}}">路由测试name</router-link>
      <router-link :to="{path:'/article',query:{}}">嵌套路由</router-link>
      <router-link to="/duoshitu">路由用bview</router-link>
      <router-link to="/bieming">路由别名(未完成)</router-link>
      <router-link to="/bieming">路由传参正确的方法</router-link>
    </div>
    <h3>frame</h3>
    <div class="router-out">
      <router-view />
    </div>
    <div class="router-out">
      <router-view name="b" />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
.router-out {
  border: 2px solid red;
  min-height: 1000px;
}
</style>
