import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home2 from '../views/Home2.vue'
import BenefitView from '../views/BenefitView.vue'
import FaqsView from '../views/FaqsView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import HowItWorksView from '../views/HowItWorks.vue'
import RatesView from '../views/Rates.vue'

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
    component: RatesView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
