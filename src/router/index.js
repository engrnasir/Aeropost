import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home2 from '../views/Home2.vue'
import BenefitView from '../views/BenefitView.vue'
import FaqsView from '../views/FaqsView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import HowItWorksView from '../views/HowItWorks.vue'

import RatesView from '../views/Rates.vue'
import BelizeRate from '../views/components/BelizeRate.vue'
import CostaRate from '../views/components/CostaRate.vue'
import ElSavadorRate from '../views/components/ElSavadorRate.vue'
import GuatemalaRate from '../views/components/GuatemalaRate.vue'
import HondurasRate from '../views/components/HondurasRate.vue'
import NicaraguaRate from '../views/components/NicaraguaRate.vue'
import PanamaRate from '../views/components/PanamaRate.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home2
  },
  {
    path: '/benefits',
    name: 'benefitsview',
    component: BenefitView
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: CalculatorView
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: FaqsView
  },
  {
    path: '/how-it-works',
    name: 'how it works',
    component: HowItWorksView
  },
  {
    path: '/rates',
    name: 'Rates',
    component:RatesView,
    children: [
      {path:'', component:PanamaRate},
      {path:'ca1', component:BelizeRate},
      {path:'ca2', component:CostaRate},
      {path:'ca3', component:ElSavadorRate},
      {path:'ca4', component:GuatemalaRate},
      {path:'ca5', component:HondurasRate},
      {path:'ca6', component:HondurasRate},
      {path:'ca7', component:NicaraguaRate},
      {path:'ca8', component:PanamaRate},
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
