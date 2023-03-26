<template>
  <div class="wrapper" :class="showCountries?'translate-y-0':'-translate-y-[140%]'">
    <img src="@/assets/images/close.png" alt="" class="close" @click="setShowCountries(false)">
    <div class="w-full max-w-[980px] flex justify-center pb-5 border-b-2 border-[#3333]">
        <div class="continentItem" :class="c===continents[selectedContinentIndex]?'border-yellow':''" v-for="(c,index) in continents" :key="index" @click="setSelectedContinentIndex(index)">
            <img src="@/assets/images/world.png" alt="">
            <p :class="c===continents[selectedContinentIndex]?'font-bold':''">{{c.name}}</p>
        </div>
    </div>
    <div class="countries" >
        <div class="country" 
            v-for="(country,index) in getCountries" :key="index" 
            @click="setSelectedCountry(country); setShowCountries(false)">
            <p>{{ country.name }}</p>
            <img :src="require(`@/assets/images/${country.flagUrl}`)" alt="">
        </div>
    </div>
    <p class="text-center text-blue text-lg pt-6"><a href="">Your country is not listed?</a></p>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    props:[],
    data(){
        return{
            continents:[
                {
                    name:'South America',
                    imgUrl:'world.png',
                    countries:[
                        {name:'Anguilla',flagUrl:'flag1.jpg'},
                        {name:'Canada',flagUrl:'flag1.jpg'},
                        {name:'Pakistan',flagUrl:'flag1.jpg'},
                        {name:'Anguilla',flagUrl:'flag1.jpg'},
                        {name:'Canada',flagUrl:'flag1.jpg'},
                    ]
                },
                {
                    name:'America',
                    imgUrl:'world.png',
                    countries:[
                        {name:'Anguilla1',flagUrl:'flag1.jpg'},
                        {name:'Canada1',flagUrl:'flag1.jpg'},
                        {name:'Pakistan1',flagUrl:'flag1.jpg'},
                    ]
                },
                {
                    name:'Africa',
                    imgUrl:'world.png',
                    countries:[
                        {name:'Anguilla2',flagUrl:'flag1.jpg'},
                        {name:'Canada2',flagUrl:'flag1.jpg'},
                        {name:'Pakistan2',flagUrl:'flag1.jpg'},
                    ]
                },
            ]
        }
    },
    computed:{
        ...mapState([
            'showCountries',
            'selectedContinentIndex'
        ]),
        getCountries(){
            return this.continents[this.selectedContinentIndex].countries
        }
    },
    methods:{
        ...mapMutations([
            'setShowCountries',
            'setSelectedCountry',
            'setSelectedContinentIndex'
        ])
    }

}
</script>

<style lang="scss" scoped>
.wrapper{
    @apply w-full min-h-[70vh] p-8 bg-white min-h-min z-50 absolute top-16 left-0 shadow-lg flex flex-col items-center transition-all duration-300 
       max-md:min-h-screen max-md:top-0 max-md:px-3
    ;
}
.continentItem{
    @apply flex flex-col items-center cursor-pointer p-3 mx-6  border-b-4 border-transparent hover:border-yellow
            max-md:mx-2;

    img{
        @apply w-32 mb-5 max-md:w-20 max-sm:w-12;
    }
    p{
        @apply text-xl text-center text-[#4e4e4e] max-sm:text-base;
    }
}
.countries{
    @apply w-full max-w-[980px] grid grid-cols-3 gap-3 justify-items-center p-5 border-b-2 border-[#3333]
            max-md:grid-cols-2;

    .country{
        @apply flex items-center px-8 py-3 rounded-xl hover:bg-slate-200 cursor-pointer;

        p{
            @apply text-lg font-medium mr-3;
        }
        img{
            @apply h-4;
        }

    }
}
.countries::-webkit-scrollbar{
    display: none;
}
.close{
    @apply w-6 absolute top-5 right-5 cursor-pointer
          max-md:w-4;
    ;
}
</style>