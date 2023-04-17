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
    path: ':gwt/rates',
    name: 'Rates',
    component: RatesView,
      children: [
      {path:'/BZE/rates', component:BelizeRate},
      {path:'/SJO/rates', component:CostaRate},
      {path:'/SAL/rates', component:ElSavadorRate},
      {path:'/GUA/rates', component:GuatemalaRate},
      {path:'/SAP/rates', component:HondurasRate},
      {path:'/TEG/rates', component:HondurasRate},
      {path:'/MGA/rates', component:NicaraguaRate},
      {path:'/PTY/rates', component:PanamaRate},

      {path:'/AXA/rates', component:AnguillaRate},
      {path:'/ANU/rates', component:AntiguaRate},
      {path:'/AUA/rates', component:ArubaRate},
      {path:'/BGI/rates', component:BarbadosRate},
      {path:'/EIS/rates', component:BritishVirginRate},
      {path:'/GCM/rates', component:CaymanIslandRate},
      {path:'/CUR/rates', component:CuracaoRate},
      {path:'/DOM/rates', component:DominicaRate},
      {path:'/GND/rates', component:GrenadaRate},
      {path:'/PTP/rates', component:GuadeloupeRate},
      {path:'/PAP/rates', component:HaitiRate},
      {path:'/FDF/rates', component:MartiniqueRate},
      {path:'/MNI/rates', component:MontserratRate},
      {path:'/SLU/rates', component:SaintLuciaRate},
      {path:'/SXM/rates', component:SaintMartinRate},
      {path:'/SVD/rates', component:SaintVincentRate},
      {path:'/TCA/rates', component:TurksCaicosRate},

      {path:'/SCL/rates', component:ChileRate},
      {path:'/BOG/rates', component:ColombiaRate},
      {path:'/ECU/rates', component:EcuadorRate},
      {path:'/GEO/rates', component:GuyanaRate},
      {path:'/LIM/rates', component:PeruRate},
      {path:'/CCS/rates', component:VenezuelaRate},


    ],
  },
  {
    // will match everything
    path: '*',
    redirect:'/'
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
