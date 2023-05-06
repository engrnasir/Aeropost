import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang:'en', //default

    showthankyou:false,
    showCountries:false,
    selectedMapIndex:0,
    showMenu:false,
    maps:[
      {
        mapId:0,
        name:'Central America',
        imgUrl:'map1.png',
        countries:[
          { gtw:'BZE', name:'Belize', flagUrl:'belize.png', mapClass:'elfsight-app-0dc0f602-36c4-4db8-8b87-86688ae7c1ba', dataTag:'SelectedReview'},
          { gtw:'SJO', name:'Costa Rica', flagUrl:'costa-rica.png', mapClass:'elfsight-app-f11b3c17-7758-44c6-a95f-5aaa17f2593e', dataTag:'SJO'},
          { gtw:'SAL', name:'El Salvador', flagUrl:'salvador.png', mapClass:'elfsight-app-7f258fb8-a6f2-4631-9991-e5f70dccc182', dataTag:'SAL'},
          { gtw:'GUA', name:'Guatemala', flagUrl:'guatemala.png', mapClass:'elfsight-app-6bf451b9-afac-440e-b447-fc2abe4bca35', dataTag:'GUA'},
          { gtw:'SAP', name:'Honduras, San Pedro Sula', flagUrl:'honduras.png', mapClass:'elfsight-app-81500f71-5098-4b87-bb58-5f6fdc22ed83', dataTag:''},
          { gtw:'TEG', name:'Honduras, Tegucigalpa', flagUrl:'teguci.png', mapClass:'elfsight-app-00b09f77-fd5d-4a52-a769-15e5ae3530e0', dataTag:''},
          { gtw:'MGA', name:'Nicaragua', flagUrl:'nicaragua.png', mapClass:'elfsight-app-9ff8be14-71e0-46a4-bc10-5cddbf10d629', dataTag:''},
          { gtw:'PTY', name:'Panamá', flagUrl:'panama.png', mapClass:'elfsight-app-bdc45d78-adaf-4049-911b-66871cbdb3ea', dataTag:'PTY'},
        ]
      },
      {
        mapId:1,
        name:'Caribbean',
        imgUrl:'map2.png',
        countries:[
          { gtw:'AXA', name:'Anguilla', flagUrl:'anguilla.png', mapClass:'elfsight-app-a04402aa-eb62-4d5b-bc1a-76ef03e34f94', dataTag:''},
          { gtw:'ANU', name:'Antigua', flagUrl:'antigua.png', mapClass:'elfsight-app-56960727-96b3-48ef-973f-4dfb2ec127e3', dataTag:'SelectedReview'},
          { gtw:'AUA', name:'Aruba', flagUrl:'aruba.png', mapClass:'elfsight-app-17b19d19-9aff-4db3-858c-42b6d6a53c34', dataTag:'SelectedReview'},
          { gtw:'BHS', name:'Bahamas', flagUrl:'bahamas.png', mapClass:'elfsight-app-5cbb2034-9af6-4526-be6a-78d38bbe3936', dataTag:'BHS'},
          { gtw:'BGI', name:'Barbados', flagUrl:'barbados.png', mapClass:'elfsight-app-db1c4192-f501-4022-a1d1-1c7553297e4a', dataTag:'SelectedReview'},
          { gtw:'EIS', name:'British Virgin Islands', flagUrl:'virgin-island.png', mapClass:'elfsight-app-20c1b52e-3b0d-449b-b821-1885125daafb', dataTag:''},
          { gtw:'GCM', name:'Cayman Islands', flagUrl:'cayman.png', mapClass:'elfsight-app-0c6771e0-ae43-4913-875a-f90be846b589', dataTag:''},
          { gtw:'CUR', name:'Curacao', flagUrl:'curacao.png', mapClass:'elfsight-app-490eb6a0-5823-48fd-b53d-d9b787435741', dataTag:''},
          { gtw:'DOM', name:'Dominica', flagUrl:'dominica.png', mapClass:'elfsight-app-de62774c-4822-4cd3-8dea-c3eb2a548c75', dataTag:''},
          { gtw:'GND', name:'Grenada', flagUrl:'grenada.png', mapClass:'elfsight-app-e13963d2-99f6-4ce2-a24a-1f3cb48c4fe8', dataTag:''},
          { gtw:'PTP', name:'Guadeloupe', flagUrl:'guadeloupe.png', mapClass:'elfsight-app-9cfd6ab6-b0a3-4c09-8ebb-0401e2277d04', dataTag:''},
          { gtw:'PAP', name:'Haití', flagUrl:'haiti.png', mapClass:'elfsight-app-f204af06-7b67-4780-be13-021bc4264777', dataTag:''},
          { gtw:'KIN', name:'Jamaica', flagUrl:'jamaica.png', mapClass:'elfsight-app-d8fd84d8-e15a-480f-af72-7964f5ea7c7b', dataTag:'KIN'},
          { gtw:'FDF', name:'Martinique', flagUrl:'martinique.png', mapClass:'elfsight-app-f8ecc474-0da6-49ae-bf15-3b865d0e2848', dataTag:''},
          { gtw:'MNI', name:'Montserrat', flagUrl:'montserrat.png', mapClass:'elfsight-app-ca543e84-07af-481b-82a6-8f0766356fc1', dataTag:''},
          { gtw:'SLU', name:'Saint Lucia', flagUrl:'saint.png', mapClass:'elfsight-app-f357d17b-0073-4698-9d2d-64a35ef50dc5', dataTag:''},
          { gtw:'SXM', name:'Saint Martin', flagUrl:'saint-martin.png', mapClass:'elfsight-app-ea601d11-819c-4d70-8395-a241d6b2a973', dataTag:''},
          { gtw:'SVD', name:'Saint Vincent', flagUrl:'saint-vincent.png', mapClass:'elfsight-app-83e05cc5-8ac2-48de-9b89-93a557235273', dataTag:''},
          { gtw:'POS', name:'Trinidad & Tobago', flagUrl:'trinidad_toba.png', mapClass:'elfsight-app-0b926e5d-76d4-40ac-845a-3ce42e8a125c', dataTag:'POS'},
          { gtw:'TCA', name:'Turks & Caicos', flagUrl:'turks.png', mapClass:'elfsight-app-67e8bdc1-d2fa-4315-9e68-d988969a2c45', dataTag:''},
        ]
      },
      {
        mapId:2,
        name:'South America',
        imgUrl:'map3.png',
        countries:[
            {gtw:'SCL', name:'Chile', flagUrl:'chile.png', mapClass:'elfsight-app-8ed1e348-e778-40ca-b02e-8fb81885b9ff', dataTag:'SCL'},
            {gtw:'BOG', name:'Colombia', flagUrl:'colombia.png', mapClass:'elfsight-app-66f6da53-6fd2-45bf-9dac-a3132998c797', dataTag:'BOG'},
            {gtw:'ECU', name:'Ecuador', flagUrl:'ecuador.png', mapClass:'elfsight-app-39c026fc-7b3e-4289-8761-336aa5e60d34', dataTag:''},
            {gtw:'GEO', name:'Guyana', flagUrl:'guyana.png', mapClass:'elfsight-app-3e6c75bc-1dbc-468a-9565-e0d7e1965ba3', dataTag:''},
            {gtw:'LIM', name:'Perú', flagUrl:'peru.png', mapClass:'elfsight-app-deb2e522-90d0-4732-ab93-6ae4212c26e2', dataTag:'LIM'},
            {gtw:'CCS', name:'Venezuela', flagUrl:'venezuela.png', mapClass:'elfsight-app-e04af933-3937-49ac-9982-bd81fec633be', dataTag:'SelectedReview'},
        ]
      },
    ],
  selectedCountry:{ gtw:'BZE', name:'Belize', flagUrl:'belize.png', mapClass:'elfsight-app-0dc0f602-36c4-4db8-8b87-86688ae7c1ba', dataTag:'SelectedReview'},
  },
  getters: {
    selectedMap(state){
      return state.maps[state.selectedMapIndex]
    }
  },
  mutations: {
    setLang:(state, val)=>{
      window.scrollTo(0,0)
      state.lang = val
    },

    setSelectedCountry:(state,val)=>{
      window.scrollTo(0,0)
      state.showMenu = false,
      state.selectedCountry = val
    },
    setSelectedMapIndex:(state,val)=>{
      state.selectedMapIndex=val;
    },
    setShowMenu:(state,val)=>{
      if(val===false){
        window.scrollTo(0,0)
      }
      state.showMenu = val
    },
    setThankyou:(state,val)=>{
      state.showthankyou = val
    }
  },
  actions: {
  },
  modules: {
  }
})

