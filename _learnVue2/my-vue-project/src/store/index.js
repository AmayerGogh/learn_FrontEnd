import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
//用来存放数据
export default new Vuex.Store({
    state:{
        global_info:'我是global_info_msg'
    }
})
