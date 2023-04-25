<template>
    <div class="countryPickerWrapper">

        <router-link :to="`/${selectedCountry.gtw}/${lang}`">
            <img src="@/assets/images/x.png" alt="x" class="w-12 h-12 cursor-pointer absolute right-1 top-1 3xl:right-3 3xl:top-3">
        </router-link>

        <bg-map class="w-[700px] h-screen fixed left-0 top-0 max-lg:hidden"/>

        <div class="flex items-center justify-center mb-14 md:mb-20">
            <router-link :to="`/${selectedCountry.gtw}/${lang}`">
                <LogoVue :colorVal="'#ffffff'"/>
            </router-link>
        </div>
        <div class="grid max-md:grid-cols-1 grid-cols-3 gap-8 relative z-50 text-white">
            <div v-for="(m, i) in maps" :key="i">
                <h2 class="capitalize text-2xl 3xl:text-3xl mb-6 flex items-center justify-between " @click="setSelectedMapIndex(i)">{{ m.name }}</h2>
                <div class="grid  max-md:grid-cols-1 max-lg:grid-cols-2 gap-5 font-light" :class="m.countries.length>8?'grid-cols-3':'grid-cols-2'">
                    <div 
                        class="flex item-center hover:text-darkYellow cursor-pointer" 
                        :class="c===selectedCountry?'text-darkYellow':''"
                        v-for="(c,i) in m.countries" :key="i"
                        @click="handleSelection(c)" >
                        <img :src="require(`@/assets/images/flags/${c.flagUrl}`)" :alt="c.name" class=" w-4 h-4 3xl:w-7 3xl:h-7 rounded-full mr-4">
                        <p class="text-sm 3xl:text-xl">{{ c.name }}</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
  
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import LogoVue from '@/components/header/Logo.vue'
import bgMap from '@/components/countryPicker/bgMap.vue'
export default {
    components:{
        LogoVue,
        bgMap
    },
    computed:{
        ...mapState(['selectedCountry','lang', 'maps']),
        ...mapGetters(['selectedMap'])
    },
    methods:{
        ...mapMutations(['setSelectedMapIndex','setSelectedCountry']),
        handleSelection(c){
            this.setSelectedMapIndex(this.selectedMap.mapId)
            this.setSelectedCountry(c)
            this.$router.push(`/${this.selectedCountry.gtw}/${this.lang}`)
        },
    }

}
</script>

<style lang="scss" scoped>
.countryPickerWrapper{
    @apply bg-gradient-to-b flex flex-col from-[#0047A3] to-[#00377E] w-full h-screen overflow-scroll fixed top-0 left-0 z-[999] p-8 3xl:p-16;
}
.countryPickerWrapper::-webkit-scrollbar{
    @apply hidden;
}

</style>
