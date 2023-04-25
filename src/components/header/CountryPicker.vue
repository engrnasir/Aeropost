<template>
  <div class="wrapper" :class="showCountries?'translate-y-0':'-translate-y-[140%]'">
    <img src="@/assets/images/close.png" alt="close" class="close" @click="setShowCountries(false)">
    <div class="map-wrapper">
        <div class="mapItem" 
            v-for="(c,index) in maps" :key="index" 
            @click="setSelectedMapIndex(index)">
                <img :src="require(`@/assets/images/${c.imgUrl}`)" alt="map" class="mapImg" >
                <div class="text-center flex  items-center justify-between max-md:border-b max-md:py-2">
                    <p :class="c===maps[selectedMapIndex]?'font-bold border-b-4 border-yellow':''">{{c.name}}</p>
                    <img src="@/assets/images/icon-arrow-blue.png" alt="icon-arrow-blue" class="w-4 md:hidden">
                </div>
                <div class="mob-countries" :class="c===maps[selectedMapIndex]?'showCountries':'hidden'">
                    <CountriesVue :countries="c.countries" />
                </div>
        </div>
    </div>
    <div class="max-md:hidden w-full max-w-[980px]">
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
           
        }
    },
    computed:{
        ...mapState([
            'maps',
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
    },
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
