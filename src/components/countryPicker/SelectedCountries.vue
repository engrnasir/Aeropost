<template>
    <div class="lg:w-1/2 relative z-30 lg:self-end text-white ">
        <p class="mb-8 3xl:mb-20 text-3xl 3xl:text-4xl">Choose the region where your country is located</p>
        <h2 class="capitalize text-2xl 3xl:text-3xl mb-8">{{ selectedMap.name }}</h2>
        <div class="grid lg:grid-cols-3 gap-3 3xl:gap-5">
            <div 
            class="flex item-center hover:text-darkYellow cursor-pointer" 
            :class="c===selectedCountry?'text-darkYellow':''"
            v-for="(c,i) in selectedMap.countries" :key="i"
            @click="handleSelection(c)" >
                <img :src="require(`@/assets/images/flags/${c.flagUrl}`)" :alt="c.name" class=" w-4 h-4 3xl:w-7 3xl:h-7 rounded-full mr-4">
                <p class="text-sm 3xl:text-xl">{{ c.name }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['selectedCountry','lang']),
        ...mapGetters(['selectedMap'])
    },
    methods:{
        ...mapMutations(['setSelectedMapIndex','setSelectedCountry']),
        handleSelection(c){
            this.setSelectedMapIndex(this.selectedMap.mapId)
            this.setSelectedCountry(c)
            this.$router.push(`/${this.selectedCountry.gtw}/${this.lang}/benefits`)
        },
    }
}
</script>
