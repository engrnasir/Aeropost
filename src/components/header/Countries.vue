<template>
  <div class="countries" >
    
        <div class="country" 
            v-for="(country,index) in countries" :key="index" 
            @click="setSelectedCountry(country); setShowCountries(false)"
            :class="selectedCountry.name===country.name?'bg-slate-200':''"
            >
            <router-link :to="`/rates/${country.id}`">
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
            'showCountries',
            'selectedCountry',
        ]),
    },
    methods:{
        ...mapMutations([
            'setShowCountries',
            'setSelectedCountry',
        ])
    }
}
</script>

<style lang="scss" scoped>
.countries{
    @apply w-full max-w-[980px] grid grid-cols-3 gap-x-3 justify-items-center p-5 border-b-2 border-[#3333]
            max-md:grid-cols-1;

    .country a{
        @apply flex items-center px-8 py-3 rounded-xl hover:bg-slate-200 cursor-pointer;

        p{
            @apply text-lg font-medium mr-3 min-w-min max-md:text-base;
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
