import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCountry:{ id:'ca1', name:'Belize', flagUrl:'belize.png', longitude:0, latitude:0, },

    showCountries:false,
    selectedMapIndex:0,
    showMenu:false,
  },
  getters: {
  },
  mutations: {
    setShowCountries:(state,val)=>{
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

