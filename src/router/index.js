import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login&Register/Login'
import AllProducts from '../components/AllProducts/AllProducts'
import Register from '../components/Login&Register/Register'
import Index from '../components/Index/Index'
import ShoppingCart from '../components/ShoppingCart/ShoppingCart'
import PersonalCenter from '../components/PersonalCenter/PersonalCenter'
import UserInfo from '../components/PersonalCenter/UserInfo'
import AllOrders from '../components/AllOrders/AllOrders'
import PaymentSuccessful from '../components/AllOrders/PaymentSuccessful'
import ToBePaid from '../components/AllOrders/ToBePaid'
import PaymentFailed from '../components/AllOrders/PaymentFailed'
import CreateOrder from '../components/AllOrders/CreateOrder'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/AllProducts',
      name: 'AllProducts',
      component: AllProducts
    },
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: PersonalCenter,
      children: [
        {
          path: 'UserInfo',
          name: 'UserInfo',
          component: UserInfo
        },
        {
          path: 'AllOrders',
          name: 'AllOrders',
          component: AllOrders
        },{
          path: 'ToBePaid',
          name: 'ToBePaid',
          component: ToBePaid
        }, {
          path: 'PaymentSuccessful',
          name: 'PaymentSuccessful',
          component: PaymentSuccessful
        },{
          path: 'PaymentFailed',
          name: 'PaymentFailed',
          component: PaymentFailed
        }
      ],
      redirect: '/PersonalCenter/UserInfo'
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/CreateOrder',
      name: 'CreateOrder',
      component: CreateOrder
    },
    {
      path: '/',
      redirect: '/Login'
    }
  ]
})
