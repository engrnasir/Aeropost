import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Home2 from '../views/Home2.vue'
import BenefitView from '../views/BenefitView.vue'
import FaqsView from '../views/FaqsView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import HowItWorksView from '../views/HowItWorks.vue'
import AboutUs from '../views/Aboutus.vue'
import TermsCondition from '../views/TermsCondition.vue'
import Contactus from '../views/Contactus.vue'
import Restricted from '../views/Restricted.vue'

import RatesView from '../views/Rates.vue'
import BelizeRate from '../views/components/BelizeRate.vue'
import CostaRate from '../views/components/CostaRate.vue'
import ElSavadorRate from '../views/components/ElSavadorRate.vue'
import GuatemalaRate from '../views/components/GuatemalaRate.vue'
import HondurasRate from '../views/components/HondurasRate.vue'
import NicaraguaRate from '../views/components/NicaraguaRate.vue'
import PanamaRate from '../views/components/PanamaRate.vue'
import AnguillaRate from '../views/components/AnguillaRate.vue'
import AntiguaRate from '../views/components/AntiguaRate.vue'
import ArubaRate from '../views/components/ArubaRate.vue'
import BarbadosRate from '../views/components/BarbadosRate.vue'
import BritishVirginRate from '../views/components/BritishVirginRate.vue'
import CaymanIslandRate from '../views/components/CaymanIslandRate.vue'
import CuracaoRate from '../views/components/CuracaoRate.vue'
import DominicaRate from '../views/components/DominicaRate.vue'
import GrenadaRate from '../views/components/GrenadaRate.vue'
import GuadeloupeRate from '../views/components/GuadeloupeRate.vue'
import HaitiRate from '../views/components/HaitiRate.vue'
import MartiniqueRate from '../views/components/MartiniqueRate.vue'
import MontserratRate from '../views/components/MontserratRate.vue'
import SaintLuciaRate from '../views/components/SaintLuciaRate.vue'
import SaintMartinRate from '../views/components/SaintMartinRate.vue'
import SaintVincentRate from '../views/components/SaintVincentRate.vue'
import TurksCaicosRate from '../views/components/TurksCaicosRate.vue'
import ChileRate from '../views/components/ChileRate.vue'
import ColombiaRate from '../views/components/ColombiaRate.vue'
import EcuadorRate from '../views/components/EcuadorRate.vue'
import GuyanaRate from '../views/components/GuyanaRate.vue'
import PeruRate from '../views/components/PeruRate.vue'
import VenezuelaRate from '../views/components/VenezuelaRate.vue'

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
    name: 'HowItWorks',
    component: HowItWorksView
  },
  {
    path: '/aboutus',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/terms',
    name: 'TermsCondition',
    component: TermsCondition
  },
  {
    path: '/contactus',
    name: 'Contactus',
    component: Contactus
  },
  {
    path: '/restricted',
    name: 'RestrictedView',
    component: Restricted
  },
  {
    path: '/rates',
    name: 'Rates',
    component: RatesView,
      children: [
      {path:`ca1`, component:BelizeRate},
      {path:'ca2', component:CostaRate},
      {path:'ca3', component:ElSavadorRate},
      {path:'ca4', component:GuatemalaRate},
      {path:'ca5', component:HondurasRate},
      {path:'ca6', component:HondurasRate},
      {path:'ca7', component:NicaraguaRate},
      {path:'ca8', component:PanamaRate},

      {path:'cb1', component:AnguillaRate},
      {path:'cb2', component:AntiguaRate},
      {path:'cb3', component:ArubaRate},
      {path:'cb4', component:Home2},  // Redirect to Home
      {path:'cb5', component:BarbadosRate},
      {path:'cb6', component:BritishVirginRate},
      {path:'cb7', component:CaymanIslandRate},
      {path:'cb8', component:CuracaoRate},
      {path:'cb9', component:DominicaRate},
      {path:'cb10', component:GrenadaRate},
      {path:'cb11', component:GuadeloupeRate},
      {path:'cb12', component:HaitiRate},
      {path:'cb13', component:Home2},  // Redirect to Home
      {path:'cb14', component:MartiniqueRate},
      {path:'cb15', component:MontserratRate},
      {path:'cb16', component:SaintLuciaRate},
      {path:'cb17', component:SaintMartinRate},
      {path:'cb18', component:SaintVincentRate},
      {path:'cb19', component:Home2},   // Redirect to Home
      {path:'cb20', component:TurksCaicosRate},

      {path:'sa1', component:ChileRate},
      {path:'sa2', component:ColombiaRate},
      {path:'sa3', component:EcuadorRate},
      {path:'sa4', component:GuyanaRate},
      {path:'sa5', component:PeruRate},
      {path:'sa6', component:VenezuelaRate},


    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
