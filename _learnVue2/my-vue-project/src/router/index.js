import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '../components/Test'
import routeTest from "../components/RouteTest"
import article from "../components/Article/Article"
import articleDetail from '../components/Article/articleDetail'
Vue.use(Router)




const router = new Router({
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
          path: '',
          component: articleDetail
        }
      ]
    }, {
      path: '/duoshitu',
      components: {
        default: Test,
        b: Test
      }
    }, {
      path: '/zujianchuanchan',
      component: Test,
      props:{p:'fale'},
      //路由守卫
      beforeEnter:(to,from,next)=>{

      }
    }
  ]
})
// 即将进入目标的路由对象
//要离开的路由
// //
// router.beforeEach((to,from,next)=>{

// })
// router.afterEach((to,from)=>{

// })

export default router;