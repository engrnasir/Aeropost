import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedCountry:{name:'America',flagUrl:''},

    showCountries:true,
    selectedContinentIndex:0,
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
    setSelectedContinentIndex:(state,val)=>{
      state.selectedContinentIndex=val;
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
