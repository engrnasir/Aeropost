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
    redirect:'/BZE/en'
  },
  {
    path: '/:gtw/:lg',
    name: 'Home',
    component: Home2
  },
  {
    path: '/:gtw/:lg/benefits',
    name: 'benefitsview',
    component: BenefitView
  },
  {
    path: '/:gtw/:lg/calculator',
    name: 'calculator',
    component: CalculatorView
  },
  {
    path: '/:gtw/:lg/faqs',
    name: 'faqs',
    component: FaqsView
  },
  {
    path: '/:gtw/:lg/how-it-works',
    name: 'HowItWorks',
    component: HowItWorksView
  },
  {
    path: '/:gtw/:lg/aboutus',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/:gtw/:lg/terms',
    name: 'TermsCondition',
    component: TermsCondition
  },
  {
    path: '/:gtw/:lg/contactus',
    name: 'Contactus',
    component: Contactus
  },
  {
    path: '/:gtw/:lg/restricted',
    name: 'RestrictedView',
    component: Restricted
  },
  {
    path: '/:gtw/:lg/rates',
    name: 'Rates',
    component: RatesView,
      children: [
        {path:'/BZE/:lg/rates', component:BelizeRate},
        {path:'/SJO/:lg/rates', component:CostaRate},
        {path:'/SAL/:lg/rates', component:ElSavadorRate},
        {path:'/GUA/:lg/rates', component:GuatemalaRate},
        {path:'/SAP/:lg/rates', component:HondurasRate},
        {path:'/TEG/:lg/rates', component:HondurasRate},
        {path:'/MGA/:lg/rates', component:NicaraguaRate},
        {path:'/PTY/:lg/rates', component:PanamaRate},

        {path:'/AXA/:lg/rates', component:AnguillaRate},
        {path:'/ANU/:lg/rates', component:AntiguaRate},
        {path:'/AUA/:lg/rates', component:ArubaRate},
        {path:'/BGI/:lg/rates', component:BarbadosRate},
        {path:'/EIS/:lg/rates', component:BritishVirginRate},
        {path:'/GCM/:lg/rates', component:CaymanIslandRate},
        {path:'/CUR/:lg/rates', component:CuracaoRate},
        {path:'/DOM/:lg/rates', component:DominicaRate},
        {path:'/GND/:lg/rates', component:GrenadaRate},
        {path:'/PTP/:lg/rates', component:GuadeloupeRate},
        {path:'/PAP/:lg/rates', component:HaitiRate},
        {path:'/FDF/:lg/rates', component:MartiniqueRate},
        {path:'/MNI/:lg/rates', component:MontserratRate},
        {path:'/SLU/:lg/rates', component:SaintLuciaRate},
        {path:'/SXM/:lg/rates', component:SaintMartinRate},
        {path:'/SVD/:lg/rates', component:SaintVincentRate},
        {path:'/TCA/:lg/rates', component:TurksCaicosRate},

        {path:'/SCL/:lg/rates', component:ChileRate},
        {path:'/BOG/:lg/rates', component:ColombiaRate},
        {path:'/ECU/:lg/rates', component:EcuadorRate},
        {path:'/GEO/:lg/rates', component:GuyanaRate},
        {path:'/LIM/:lg/rates', component:PeruRate},
        {path:'/CCS/:lg/rates', component:VenezuelaRate},
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
