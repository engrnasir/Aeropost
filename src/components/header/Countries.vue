<template>
  <div class="countries" >
    
        <div class="country" 
            v-for="(country,index) in countries" :key="index" 
            @click="setCountry(country)"
            :class="selectedCountry.name===country.name?'bg-slate-200':''"
            >
            <router-link :to="`/?lang=${lang}`" tag="a">
                <p>{{ country.name }}</p>
                <img :src="require(`@/assets/images/flags/${country.flagUrl}`)" :alt="country.name">
            </router-link>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
    props:['countries'],
    computed:{
        ...mapState([
            'lang',
            'showCountries',
            'selectedCountry',
        ]),
    },
    methods:{
        ...mapMutations([
            'setShowCountries',
            'setSelectedCountry',
        ]),
        setCountry(country){
            this.setSelectedCountry(country)
            this.setShowCountries(false)
        }
    }
}
</script>

<style lang="scss" scoped>
.countries{
    @apply min-w-full  grid grid-cols-3 gap-x-3 gap-y-1 justify-items-center py-5 border-b-2 border-[#3333]
            max-md:grid-cols-1 max-md:px-2;

    .country{
        @apply flex justify-center items-center w-full rounded-md;
    }
    .country a{
        @apply min-w-full flex justify-center items-center px-8 py-3 rounded-xl hover:bg-slate-200 cursor-pointer;

        p{
            @apply text-lg font-medium mr-3 min-w-min max-lg:text-base min-w-min;
        }
        img{
            @apply h-4;
        }

    }
}
.countries::-webkit-scrollbar{
    display: none;
}

</style>
