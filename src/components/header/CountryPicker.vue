<template>
  <div class="wrapper" :class="showCountries?'translate-y-0':'-translate-y-[140%]'">
    <img src="@/assets/images/close.png" alt="" class="close" @click="setShowCountries(false)">
    <div class="map-wrapper">
        <div class="mapItem" 
            v-for="(c,index) in maps" :key="index" 
            @click="setSelectedMapIndex(index)">
                <img :src="require(`@/assets/images/${c.imgUrl}`)" alt="" class="mapImg" >
                <div class="text-center flex  items-center justify-between max-md:border-b max-md:py-2">
                    <p :class="c===maps[selectedMapIndex]?'font-bold border-b-4 border-yellow':''">{{c.name}}</p>
                    <img src="@/assets/images/icon-arrow-blue.png" alt="" class="w-4 md:hidden">
                </div>
                <div class="mob-countries" :class="c===maps[selectedMapIndex]?'showCountries':'hidden'">
                    <CountriesVue :countries="c.countries" />
                </div>
        </div>
    </div>
    <div class="max-md:hidden">
        <CountriesVue :countries="maps[selectedMapIndex].countries"/>
    </div>
    <p class="text-center text-blue text-lg pt-6"><a href="">Your country is not listed?</a></p>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import CountriesVue from './Countries.vue'
export default {
    props:[],
    components:{
        CountriesVue
    },
    data(){
        return{
            maps:[
                {
                    name:'Central America',
                    imgUrl:'map1.png',
                    countries:[
                        { id:'ca1', name:'Belize', flagUrl:'belize.png', longitude:0, latitude:0, },
                        { id:'ca2', name:'Costa Rica', flagUrl:'costa-rica.png', longitude:0, latitude:0, },
                        { id:'ca3', name:'El Salvador', flagUrl:'salvador.png', longitude:0, latitude:0, },
                        { id:'ca4', name:'Guatemala', flagUrl:'guatemala.png', longitude:0, latitude:0, },
                        { id:'ca5', name:'Honduras, San Pedro Sula', flagUrl:'honduras.png', longitude:0, latitude:0, },
                        { id:'ca6', name:'Honduras, Tegucigalpa', flagUrl:'teguci.png', longitude:0, latitude:0, },
                        { id:'ca7', name:'Nicaragua', flagUrl:'nicaragua.png', longitude:0, latitude:0, },
                        { id:'ca8', name:'Panamá', flagUrl:'panama.png', longitude:0, latitude:0, },
                    ]
                },
                {
                    name:'Caribbean',
                    imgUrl:'map2.png',
                    countries:[
                        { id:'cb1', name:'Anguilla', flagUrl:'anguilla.png', longitude:0, latitude:0, },
                        { id:'cb2', name:'Aruba', flagUrl:'aruba.png', longitude:0, latitude:0, },
                        { id:'cb3', name:'Bahamas', flagUrl:'bahamas.png', longitude:0, latitude:0, },
                        { id:'cb4', name:'Barbados', flagUrl:'barbados.png', longitude:0, latitude:0, },
                        { id:'cb5', name:'British Virgin Islands', flagUrl:'virgin-island.png', longitude:0, latitude:0, },
                        { id:'cb6', name:'Cayman Islands', flagUrl:'cayman.png', longitude:0, latitude:0, },
                        { id:'cb7', name:'Curacao', flagUrl:'curacao.png', longitude:0, latitude:0, },
                        { id:'cb8', name:'Dominica', flagUrl:'dominica.png', longitude:0, latitude:0, },
                        { id:'cb9', name:'Grenada', flagUrl:'grenada.png', longitude:0, latitude:0, },
                        { id:'cb10', name:'Guadeloupe', flagUrl:'guadeloupe.png', longitude:0, latitude:0, },
                        { id:'cb11', name:'Haití', flagUrl:'haiti.png', longitude:0, latitude:0, },
                        { id:'cb12', name:'Jamaica', flagUrl:'jamaica.png', longitude:0, latitude:0, },
                        { id:'cb13', name:'Martinique', flagUrl:'martinique.png', longitude:0, latitude:0, },
                        { id:'cb14', name:'Montserrat', flagUrl:'montserrat.png', longitude:0, latitude:0, },
                        { id:'cb15', name:'Saint Lucia', flagUrl:'saint.png', longitude:0, latitude:0, },
                        { id:'cb16', name:'Saint Martin', flagUrl:'saint-martin.png', longitude:0, latitude:0, },
                        { id:'cb17', name:'Saint Vincent', flagUrl:'saint-vincent.png', longitude:0, latitude:0, },
                        { id:'cb18', name:'Trinidad and Tobago', flagUrl:'trinidad_toba.png', longitude:0, latitude:0, },
                        { id:'cb19', name:'Turks & Caicos', flagUrl:'turks.png', longitude:0, latitude:0, },
                    ]
                },
                {
                    name:'South America',
                    imgUrl:'map3.png',
                    countries:[
                        {id:'sa1', name:'Chile', flagUrl:'chile.png', longitude:0, latitude:0, },
                        {id:'sa2', name:'Colombia', flagUrl:'colombia.png', longitude:0, latitude:0, },
                        {id:'sa3', name:'Ecuador', flagUrl:'ecuador.png', longitude:0, latitude:0, },
                        {id:'sa4', name:'Guyana', flagUrl:'guyana.png', longitude:0, latitude:0, },
                        {id:'sa5', name:'Perú', flagUrl:'peru.png', longitude:0, latitude:0, },
                        {id:'sa6', name:'Venezuela', flagUrl:'venezuela.png', longitude:0, latitude:0, },
                    ]
                },
            ]
        }
    },
    computed:{
        ...mapState([
            'showCountries',
            'selectedCountry',
            'selectedMapIndex'
        ]),
        getCountries(){
            return this.maps[this.selectedMapIndex].countries
        }
    },
    methods:{
        ...mapMutations([
            'setShowCountries',
            'setSelectedCountry',
            'setSelectedMapIndex'
        ])
    }

}
</script>

<style lang="scss" scoped>
.wrapper{
    @apply w-full min-h-[80vh]  p-8 bg-white z-50 absolute top-16 left-0 shadow-lg flex flex-col items-center transition-all duration-300 
      max-md:max-h-[100vh]  max-md:min-h-screen max-md:absolute max-md:top-0 max-md:px-3 max-md:pb-20 max-md:overflow-y-scroll
    ;
}
.wrapper::-webkit-scrollbar{
    display: none;
}
.map-wrapper{
    @apply w-full max-w-[980px] flex justify-center pt-4 pb-5 md:border-b-2 border-[#3333]
           max-md:flex-col max-md:pb-0
    ;
}
.mapItem{
    @apply flex flex-col items-center cursor-pointer md:p-3 mx-6  
            max-md:mx-0  max-md:block max-md:items-start;

    .mapImg{
        @apply w-32 mb-5 max-md:w-20 max-sm:w-12 max-md:hidden ;
    }
    p{
        @apply text-xl text-center text-[#4e4e4e] pb-4 px-2 max-md:border-none max-md:pb-0;
    }
}

.close{
    @apply w-8 absolute top-5 right-3  cursor-pointer
          max-md:w-4;
    ;
}
.showCountries{
    @apply flex md:hidden;
}
.mob-countries{
    animation: slidefromLeft;
    animation-duration: .5s;
}
@keyframes slidefromLeft{
    0%{transform:translateX(-100%)}
    100%{transform:translateX(0)}
}
</style>
