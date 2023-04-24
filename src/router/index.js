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
import AntiguaRestricted from '@/views/restricted/caribbean/AntiguaRestricted.vue'
import ArubaRestricted from '@/views/restricted/caribbean/ArubaRestricted.vue'
import BahamasRestricted from '@/views/restricted/caribbean/BahamasRestricted.vue'
import BarbadosRestricted from '@/views/restricted/caribbean/BarbadosRestricted.vue'
import BritishRestricted from '@/views/restricted/caribbean/BritishRestricted.vue'
import CaymanRestricted from '@/views/restricted/caribbean/CaymanRestricted.vue'
import CuacaoRestricted from '@/views/restricted/caribbean/CuacaoRestricted.vue'
import DominicaRestricted from '@/views/restricted/caribbean/DominicaRestricted.vue'
import GrenadaRestricted from '@/views/restricted/caribbean/GrenadaRestricted.vue'
import GuadeloupeRestricted from '@/views/restricted/caribbean/GuadeloupeRestricted.vue'
import HaitiRestricted from '@/views/restricted/caribbean/HaitiRestricted.vue'
import JamaicaRestricted from '@/views/restricted/caribbean/JamaicaRestricted.vue'
import MartiniqueRestricted from '@/views/restricted/caribbean/MartiniqueRestricted.vue'
import SaintLuciaRestricted from '@/views/restricted/caribbean/SaintLuciaRestricted.vue'
import SaintMartinRestricted from '@/views/restricted/caribbean/SaintMartinRestricted.vue'
import SaintVincentRestricted from '@/views/restricted/caribbean/SaintVincentRestricted.vue'
import TrinidadRestricted from '@/views/restricted/caribbean/TrinidadRestricted.vue'
import TurksCaicosRestricted from '@/views/restricted/caribbean/TurksCaicosRestricted.vue'

import ChileRestricted from '@/views/restricted/southAmerica/ChileRestricted.vue'
import ColombiaRestricted from '@/views/restricted/southAmerica/ColombiaRestricted.vue'
import EcuadorRestricted from '@/views/restricted/southAmerica/EcuadorRestricted.vue'
import GuyanaRestricted from '@/views/restricted/southAmerica/GuyanaRestricted.vue'
import PeruRestricted from '@/views/restricted/southAmerica/PeruRestricted.vue'
import VenezuelaRestricted from '@/views/restricted/southAmerica/VenezuelaRestricted.vue'






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
      {path:'/ANU/:lg/restricted', component:AntiguaRestricted},
      {path:'/AUA/:lg/restricted', component:ArubaRestricted},
      {path:'/BHS/:lg/restricted', component:BahamasRestricted},
      {path:'/BGI/:lg/restricted', component:BarbadosRestricted},
      {path:'/EIS/:lg/restricted', component:BritishRestricted},
      {path:'/GCM/:lg/restricted', component:CaymanRestricted},
      {path:'/CUR/:lg/restricted', component:CuacaoRestricted},
      {path:'/DOM/:lg/restricted', component:DominicaRestricted},
      {path:'/GND/:lg/restricted', component:GrenadaRestricted},
      {path:'/PTP/:lg/restricted', component:GuadeloupeRestricted},
      {path:'/PAP/:lg/restricted', component:HaitiRestricted},
      {path:'/KIN/:lg/restricted', component:JamaicaRestricted},
      {path:'/FDF/:lg/restricted', component:MartiniqueRestricted},
      {path:'/MNI/:lg/restricted', component:MartiniqueRestricted}, //Same page of Martinique
      {path:'/SLU/:lg/restricted', component:SaintLuciaRestricted},
      {path:'/SXM/:lg/restricted', component:SaintMartinRestricted},
      {path:'/SVD/:lg/restricted', component:SaintVincentRestricted},
      {path:'/POS/:lg/restricted', component:TrinidadRestricted},
      {path:'/TCA/:lg/restricted', component:TurksCaicosRestricted},
      
      {path:'/SCL/:lg/restricted', component:ChileRestricted},
      {path:'/BOG/:lg/restricted', component:ColombiaRestricted},
      {path:'/ECU/:lg/restricted', component:EcuadorRestricted},
      {path:'/GEO/:lg/restricted', component:GuyanaRestricted },
      {path:'/LIM/:lg/restricted', component:PeruRestricted },
      {path:'/CCS/:lg/restricted', component:VenezuelaRestricted },



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
