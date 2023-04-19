import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home2.vue'
import benefitsview from '@/views/BenefitView.vue'
import CalculatorView from '@/views/CalculatorView.vue'
import FaqsView from '@/views/FaqsView.vue'
import HowItWorks from '@/views/HowItWorks.vue'
import Aboutus from '@/views/Aboutus.vue'
import TermsCondition from '@/views/TermsCondition.vue'
import Contactus from '@/views/Contactus.vue'
import RatesView from '@/views/RatesView.vue'

import BelizeRate from '@/views/rates/BelizeRate.vue'
import CostaRate from '@/views/rates/CostaRate.vue'
import ElSavadorRate from '@/views/rates/ElSavadorRate.vue'
import GuatemalaRate from '@/views/rates/GuatemalaRate.vue'
import HondurasRate from '@/views/rates/HondurasRate.vue'
import NicaraguaRate from '@/views/rates/NicaraguaRate.vue'
import PanamaRate from '@/views/rates/PanamaRate.vue'

import AnguillaRate from '@/views/rates/AnguillaRate.vue'
import AntiguaRate from '@/views/rates/AntiguaRate.vue'
import ArubaRate from '@/views/rates/ArubaRate.vue'
import BarbadosRate from '@/views/rates/BarbadosRate.vue'
import BritishVirginRate from '@/views/rates/BritishVirginRate.vue'
import CaymanIslandRate from '@/views/rates/CaymanIslandRate.vue'
import CuracaoRate from '@/views/rates/CuracaoRate.vue'
import DominicaRate from '@/views/rates/DominicaRate.vue'
import GrenadaRate from '@/views/rates/GrenadaRate.vue'
import GuadeloupeRate from '@/views/rates/GuadeloupeRate.vue'
import HaitiRate from '@/views/rates/HaitiRate.vue'
import JamaicaRate from '@/views/rates/JamaicaRate.vue'
import MartiniqueRate from '@/views/rates/MartiniqueRate.vue'
import MontserratRate from '@/views/rates/MontserratRate.vue'
import SaintLuciaRate from '@/views/rates/SaintLuciaRate.vue'
import SaintMartinRate from '@/views/rates/SaintMartinRate.vue'
import SaintVincentRate from '@/views/rates/SaintVincentRate.vue'
import TrinidadRate from '@/views/rates/TrinidadRate.vue'
import TurksCaicosRate from '@/views/rates/TurksCaicosRate.vue'

import ChileRate from '@/views/rates/ChileRate.vue'
import ColombiaRate from '@/views/rates/ColombiaRate.vue'
import EcuadorRate from '@/views/rates/EcuadorRate.vue'
import GuyanaRate from '@/views/rates/GuyanaRate.vue'
import PeruRate from '@/views/rates/PeruRate.vue'
import VenezuelaRate from '@/views/rates/VenezuelaRate.vue'

// Restricted
import Restricted from '@/views/Restricted.vue'
import BelizeRestricted from '@/views/restricted/centralAmerica/BelizeRestricted.vue'
import CostaRestricted from '@/views/restricted/centralAmerica/CostaRestricted.vue'
import ElSalvadorRestricted from '@/views/restricted/centralAmerica/ElSalvadorRestricted.vue'
import GuatemalaRestricted from '@/views/restricted/centralAmerica/GuatemalaRestricted.vue'
import HondurasRestricted from '@/views/restricted/centralAmerica/HondurasRestricted.vue'
import NicaraguaRestricted from '@/views/restricted/centralAmerica/NicaraguaRestricted.vue'
import PanamaRestricted from '@/views/restricted/centralAmerica/PanamaRestricted.vue'

import AnguillaRestricted from '@/views/restricted/caribbean/AnguillaRestricted.vue'






Vue.use(VueRouter)

const routes = [  
  {
    path: '/',
    redirect:'/BZE/en'
  },
  {
    path: '/:gtw/:lg',
    name: 'Home',
    component: Home
  },
  {
    path: '/:gtw/:lg/benefits',
    name: 'benefitsview',
    component: benefitsview
  },
  {
    path: '/:gtw/:lg/calculator',
    name: 'calculator',
    component:CalculatorView
  },
  {
    path: '/:gtw/:lg/faqs',
    name: 'faqs',
    component: FaqsView
  },
  {
    path: '/:gtw/:lg/how-it-works',
    name: 'HowItWorks',
    component: HowItWorks
  },
  {
    path: '/:gtw/:lg/aboutus',
    name: 'AboutUs',
    component: Aboutus
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
    component: Restricted,
    children:[
      {path:'/BZE/:lg/restricted', component:BelizeRestricted},
      {path:'/SJO/:lg/restricted', component:CostaRestricted},
      {path:'/SAL/:lg/restricted', component:ElSalvadorRestricted},
      {path:'/GUA/:lg/restricted', component:GuatemalaRestricted},
      {path:'/SAP/:lg/restricted', component:HondurasRestricted},
      {path:'/TEG/:lg/restricted', component:HondurasRestricted},
      {path:'/MGA/:lg/restricted', component:NicaraguaRestricted},
      {path:'/PTY/:lg/restricted', component:PanamaRestricted},

      {path:'/AXA/:lg/restricted', component:AnguillaRestricted},
    ]
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
        {path:'/KIN/:lg/rates', component:JamaicaRate},
        {path:'/FDF/:lg/rates', component:MartiniqueRate},
        {path:'/MNI/:lg/rates', component:MontserratRate},
        {path:'/SLU/:lg/rates', component:SaintLuciaRate},
        {path:'/SXM/:lg/rates', component:SaintMartinRate},
        {path:'/SVD/:lg/rates', component:SaintVincentRate},
        {path:'/POS/:lg/rates', component:TrinidadRate},
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
