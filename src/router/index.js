import Vue from 'vue'
import Router from 'vue-router'

const App = () => import('@/layout/App')
const HelloWorld = () => import('@/pages/HelloWorld')
const Catalogue = () => import('@/pages/home/Catalogue')
const Home = () => import('@/pages/home/Home')
const UserCenter = () => import('@/pages/user/UserCenter')
const UserHonor = () => import('@/pages/user/UserHonor')
const loginwarn = () => import('@/pages/user/loginwarn')
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          redirect: {name: 'Catalogue'}
        }, {
          path: 'catalogue',
          name: 'Catalogue',
          component: Catalogue,
          meta: {
            title: '小康大学'
          }
        }, {
          path: 'home',
          name: 'Home',
          component: Home,
          meta: {
            title: '小康大学'
          }
        }, {
          path: 'user_center',
          name: 'UserCenter',
          component: UserCenter,
          meta: {
            title: '小康大学'
          }
        }, {
          path: 'user_honor',
          name: 'UserHonor',
          component: UserHonor,
          meta: {
            title: '小康大学'
          }
        }, {
          path: 'login-warn',
          name: 'loginwarn',
          component: loginwarn,
          meta: {
            title: '小康大学'
          }
        }
      ]
    }
  ]
})
router.afterEach((to, from) => {
  // 更新title
  document.title = to.meta.title
})
export default router
