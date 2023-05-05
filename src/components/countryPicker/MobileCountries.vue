<template>
    <div class="relative z-30 max-lg:font-light text-white ">
        <p class="mb-10 3xl:mb-20 max-lg:text-center text-2xl 3xl:text-4xl">Choose the region where your country is located</p>
        <div class="mb-5" v-for="(m, i) in maps" :key="i">
            <h2 class="capitalize text-2xl 3xl:text-3xl mb-3 flex items-center justify-between" @click="setSelectedMapIndex(i)">
                <span>{{ m.name }}</span>
                <img src="@/assets/images/down-arrow.png" alt="down-arrow" class="w-5" :class="selectedMap===m? 'rotate-180':''">                
            </h2>
            <div class="gap-3 px-5" :class="selectedMap===m? 'grid':'hidden'">
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
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
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
