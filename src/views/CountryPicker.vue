<template>
    <div class="countryPickerWrapper">

        <img src="@/assets/images/x.png" alt="x" @click="goBack()" class="w-12 h-12 cursor-pointer absolute right-1 top-1 3xl:right-3 3xl:top-3">

        <div class="flex items-center justify-center mb-14 md:mb-20 lg:hidden">
            <router-link :to="`/${selectedCountry.gtw}/${lang}`">
                <LogoVue :colorVal="'#ffffff'"/>
            </router-link>
        </div>


         <SearchVue/>

        <SelectedCountries class="max-lg:hidden"/>
        <MobileCountriesVue class="lg:hidden" />
        

        <EarthMapVue class="fixed left-0 bottom-0 max-h-[85vh] 
            w-[650px] h-[800px]  3xl:w-[1000px] 3xl:h-[900px]
            max-lg:hidden
            " />
        
        <router-link :to="`/${selectedCountry.gtw}/${lang}/country-picker/all`" class="text-white font-bold text-2xl block text-center max-lg:mt-20 lg:fixed bottom-10 right-10 hover:text-darkYellow" >View All</router-link>
    </div>
  
</template>

<script>
import EarthMapVue from '@/components/countryPicker/EarthMap.vue'
import SearchVue from '@/components/countryPicker/Search.vue'
import SelectedCountries from '@/components/countryPicker/SelectedCountries.vue'
import MobileCountriesVue from '@/components/countryPicker/MobileCountries.vue'
import LogoVue from '@/components/header/Logo.vue'
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {
    data(){
        return {
        }
    },
    components:{
        LogoVue,
        EarthMapVue,
        SearchVue,
        SelectedCountries,
        MobileCountriesVue,
    },
    computed:{
        ...mapState(['lang', 'selectedCountry','maps']),
        ...mapGetters(['selectedMap']),

        
        
    },
    methods:{
        ...mapMutations(['setSelectedMapIndex','setSelectedCountry']),
        goBack(){
            history.back()
        }
    }
}

</script>

<style lang="scss" scoped>
.countryPickerWrapper{
    @apply bg-gradient-to-b flex flex-col from-[#0047A3] to-[#00377E] w-full h-screen overflow-scroll fixed top-0 left-0 z-[999] p-8 3xl:p-16 pb-14;
}
.countryPickerWrapper::-webkit-scrollbar{
    @apply hidden;
}

</style>
