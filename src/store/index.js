import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang:'en', //default
    selectedCountry:{ gtw:'BZE', name:'Belize', flagUrl:'belize.png'},

    showCountries:false,
    selectedMapIndex:0,
    showMenu:false,
    maps:[
      {
          name:'Central America',
          imgUrl:'map1.png',
          countries:[
              { gtw:'BZE', name:'Belize', flagUrl:'belize.png'},
              { gtw:'SJO', name:'Costa Rica', flagUrl:'costa-rica.png'},
              { gtw:'SAL', name:'El Salvador', flagUrl:'salvador.png'},
              { gtw:'GUA', name:'Guatemala', flagUrl:'guatemala.png'},
              { gtw:'SAP', name:'Honduras, San Pedro Sula', flagUrl:'honduras.png'},
              { gtw:'TEG', name:'Honduras, Tegucigalpa', flagUrl:'teguci.png'},
              { gtw:'MGA', name:'Nicaragua', flagUrl:'nicaragua.png'},
              { gtw:'PTY', name:'Panamá', flagUrl:'panama.png'},
          ]
      },
      {
          name:'Caribbean',
          imgUrl:'map2.png',
          countries:[
              { gtw:'AXA', name:'Anguilla', flagUrl:'anguilla.png'},
              { gtw:'ANU', name:'Antigua', flagUrl:'aruba.png'},
              { gtw:'AUA', name:'Aruba', flagUrl:'aruba.png'},
              { gtw:'BHS', name:'Bahamas', flagUrl:'bahamas.png'},
              { gtw:'BGI', name:'Barbados', flagUrl:'barbados.png'},
              { gtw:'EIS', name:'British Virgin Islands', flagUrl:'virgin-island.png'},
              { gtw:'GCM', name:'Cayman Islands', flagUrl:'cayman.png'},
              { gtw:'CUR', name:'Curacao', flagUrl:'curacao.png'},
              { gtw:'DOM', name:'Dominica', flagUrl:'dominica.png'},
              { gtw:'GND', name:'Grenada', flagUrl:'grenada.png'},
              { gtw:'PTP', name:'Guadeloupe', flagUrl:'guadeloupe.png'},
              { gtw:'PAP', name:'Haití', flagUrl:'haiti.png'},
              { gtw:'JAM', name:'Jamaica', flagUrl:'jamaica.png'},
              { gtw:'FDF', name:'Martinique', flagUrl:'martinique.png'},
              { gtw:'MNI', name:'Montserrat', flagUrl:'montserrat.png'},
              { gtw:'SLU', name:'Saint Lucia', flagUrl:'saint.png'},
              { gtw:'SXM', name:'Saint Martin', flagUrl:'saint-martin.png'},
              { gtw:'SVD', name:'Saint Vincent', flagUrl:'saint-vincent.png'},
              { gtw:'POS', name:'Trinidad and Tobago', flagUrl:'trinidad_toba.png'},
              { gtw:'TCA', name:'Turks & Caicos', flagUrl:'turks.png'},
          ]
      },
      {
          name:'South America',
          imgUrl:'map3.png',
          countries:[
              {gtw:'SCL', name:'Chile', flagUrl:'chile.png'},
              {gtw:'BOG', name:'Colombia', flagUrl:'colombia.png'},
              {gtw:'ECU', name:'Ecuador', flagUrl:'ecuador.png'},
              {gtw:'GEO', name:'Guyana', flagUrl:'guyana.png'},
              {gtw:'LIM', name:'Perú', flagUrl:'peru.png'},
              {gtw:'CCS', name:'Venezuela', flagUrl:'venezuela.png'},
          ]
      },
  ]
  },
  getters: {
  },
  mutations: {
    setLang:(state, val)=>{
      state.lang = val
    },

    setShowCountries:(state,val)=>{
      window.scrollTo(0,0)
      state.showMenu = false,
      state.showCountries = val
    },
    setSelectedCountry:(state,val)=>{
      state.selectedCountry = val
    },
    setSelectedMapIndex:(state,val)=>{
      state.selectedMapIndex=val;
    },
    setShowMenu:(state,val)=>{
      state.showMenu = val
    }
  },
  actions: {
  },
  modules: {
  }
})

