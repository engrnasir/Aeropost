import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang:'en', //default
    selectedCountry:{ id:'ca1', name:'Belize', flagUrl:'belize.png', longitude:0, latitude:0, },

    showCountries:false,
    selectedMapIndex:0,
    showMenu:false,
  },
  getters: {
  },
  mutations: {
    setLang:(state, val)=>{
      state.lang = val
      console.log(router.getRoutes());
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

