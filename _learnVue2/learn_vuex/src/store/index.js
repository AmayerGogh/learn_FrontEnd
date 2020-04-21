import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  mutations: { //触发方式 this.$store.commit('increment')
    increment (state) {
      state.count++
    }
  },
  getters:{//可以认为是 store 的计算属性
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }, 
    //作为一个方法对外暴漏
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  actions: {
  },
  modules: {
  }
})
