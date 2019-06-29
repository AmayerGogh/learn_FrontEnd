<template>
    <div class="hello">
        我是hello组件a 
    </div>
</template>

<script>
export default {
    name:'test',
    data(){
        return {
            msg:'this is my msg'
        }
    },
    created:function(){
        console.log('load hello')
    }
}
</script>
<style scoped>

  .hello{
      color:red
  }
</style>

