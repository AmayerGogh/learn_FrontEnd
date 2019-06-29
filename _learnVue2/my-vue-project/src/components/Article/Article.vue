<template>
    <div>
        文章标题

        文章内容
        <div style ="border:2px solid red;min-height:300px">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: "article"
    }
</script>
