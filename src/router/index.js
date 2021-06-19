import Vue from 'vue'
import Router from 'vue-router'

// main page
import MainComponent from '@/components/MainComponent'
import Shop from '@/components/Shop'

// sub page
import OurStory from '@/components/OurStory'
import HappyFormula from '@/components/HappyFormula'
import HealthyCare from '@/components/HealthyCare'
import HonestReview from '@/components/HonestReview'
import FunEvents from '@/components/FunEvents'
import WishList from '@/components/WishList'
import MyPage from '@/components/MyPage'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'main-component',
      component: MainComponent
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/ourstory',
      name: 'ourstory',
      component: OurStory
    },
    {
      path: '/happyformula',
      name: 'happyformula',
      component: HappyFormula
    },
    {
      path: '/healthycare',
      name: 'healthycare',
      component: HealthyCare
    },
    {
      path: '/honestreview',
      name: 'honestreview',
      component: HonestReview
    },
    {
      path: '/funevents',
      name: 'funevents',
      component: FunEvents
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishList
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
