import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '../components/Test'
import routeTest from "../components/RouteTest"
import article from "../components/Article/Article"
import articleDetail from '../components/Article/articleDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }, {
      path: '/test',
      name: 'test',
      component: Test
    }, {
      path: '/routeTest/:id',
      name: 'routeTest',
      component: routeTest
    }, {
      path: '/article',
      component: article,
      children: [
        {
          path: 'detail', 
          component: articleDetail
        },       
        {
          path:'',
          component:articleDetail
        }
      ]
    },{
      path:'/duoshitu',
      components:{
        default:Test,
        b:Test
      }
    }
  ]
})
