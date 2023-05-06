<template>
    <div class="relative z-30 max-lg:font-light text-white ">
        <p class="mb-10 3xl:mb-20 max-lg:text-center text-2xl 3xl:text-4xl">Choose the region where your country is located</p>
        <div class="mb-5" v-for="(m, i) in maps" :key="i">
            <h2 class="capitalize text-2xl 3xl:text-3xl mb-3 flex items-center justify-between cursor-pointer" @click="toggleCountry(i)">
                <span>{{ m.name }}</span>
                <img src="@/assets/images/down-arrow.png" alt="down-arrow" class="w-5 downArr">                
            </h2>
            <div class="overflow-hidden">
                <!-- selectedMap===m   :class="showStatus[i]? 'grid':'hidden'"-->
                <div class="grid gap-3 px-5 animate-slidedown mobile-countries hidden">
                    <div 
                        class="flex item-center hover:text-darkYellow cursor-pointer" 
                        :class="c===selectedCountry?'text-darkYellow':''"
                        v-for="(c,j) in m.countries" :key="j"
                        @click="handleSelection(c,i)" >
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
export default {
    data(){
        return{
            showStatus:[false, false, false]
        }
    },
    computed:{
        ...mapState(['selectedCountry','lang', 'maps','selectedMapIndex']),
        ...mapGetters(['selectedMap']),
        mcountries(){ return document.querySelectorAll('.mobile-countries'); },
        marrows(){ return document.querySelectorAll('.downArr') }
    },
    methods:{
        ...mapMutations(['setSelectedMapIndex','setSelectedCountry']),
        handleSelection(c,i){
            this.setSelectedMapIndex(i)
            this.setSelectedCountry(c)
            this.$router.push(`/${this.selectedCountry.gtw}/${this.lang}`)
        },
        toggleCountry(i){
            const that = this
            this.mcountries.forEach((el,j)=>{
                if(i!==j){
                    that.marrows[j].classList.remove('rotate-180')
                    el.classList.add('hidden')
                }
            })
            this.marrows[i].classList.toggle('rotate-180')
            this.mcountries[i].classList.toggle('hidden')            
        }
    },
    mounted(){
        this.marrows[this.selectedMapIndex].classList.toggle('rotate-180')
        this.mcountries[this.selectedMapIndex].classList.toggle('hidden')
    }
}
</script>
