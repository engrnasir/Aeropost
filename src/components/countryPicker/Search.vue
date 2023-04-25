<template>
    <div class="w-full relative z-50">
        <div class="flex max-lg:flex-row-reverse items-center relative border-b border-white pb-3 lg:pb-5 mb-16 3xl:mb-24">
            <img src="@/assets/images/search.png" alt="search" 
                class="w-5 3xl:w-7 mr-3 transition-transform duration-200" 
                :class="searchKey?'':'lg:translate-x-36 3xl:translate-x-48 opacity-80'">
 
            <input type="text" name="countryKey" placeholder="Search Country" v-model="searchKey"
                class="text-white text-lg 3xl:text-2xl w-full bg-transparent outline-none transition-transform duration-200"
                :class="searchKey?'':'lg:-translate-x-7 3xl:-translate-x-10'"
                @focus="searchbarFocused=true" @blur="searchbarFocused=false"
            />
     
            <img src="@/assets/images/x.png" alt="x" class="w-4 h-4 lg:w-7 lg:h-7 opacity-90 cursor-pointer -translate-x-0 mr-5 lg:mr-0 lg:-translate-x-12 3xl:translate-x-0" 
            v-if="searchKey"
            @click="searchKey=''">
        </div>

        <div class="absolute left-0 top-10 lg:top-12  w-full  max-h-[450px] overflow-y-scroll bg-white shadow-md text-[#405570] px-3 lg:px-6 py-4 text-base 3xl:text-2xl capitalize" :class="searchbarFocused?'opacity-100':'opacity-0'">

            <p v-if="searchKey && filteredCountries.length<=0">No match found !</p>

            <p v-if="searchbarFocused && searchKey.length<=0">Start typing country name...</p>
            <div v-if="filteredCountries.length>0">
                <div class="cursor-pointer p-2 hover:bg-[#eeeeee50]" 
                    v-for="(item, i) in filteredCountries" :key="i"
                    @click.stop="handleSelection(item)"
                    >
                    <div class="text-[#3E454E] lowercase flex">
                        <p v-for="(t,i) in item.country.name" :key="i" 
                            :class="[
                                (searchKey.toLowerCase().includes(t.toLowerCase())?'font-bold ':''),
                                (i===0?'uppercase':'')] " v-html="t"></p>
                    </div>
                    <p class="text-[#67778B]">{{ maps[item.mapId].name }}</p>
                </div>
            </div>
        </div>
    </div>       
</template>

<script>

import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    data(){
        return {
            searchbarFocused:false,
            searchKey:''
        }
    },
    computed:{
        ...mapState(['lang', 'selectedCountry','maps']),
        ...mapGetters(['selectedMap']),

        allCountry(){
            let temp=[]
            this.maps.forEach((el,i)=>{
                el.countries.forEach(c=>{
                    temp.push({
                        mapId: i,
                        country: c
                    })
                })
            })
            return temp
        },
        filteredCountries(){
            return this.searchKey.trim()? this.allCountry.filter(el=>{
                return el.country.name.toLowerCase().trim().includes(this.searchKey.toLowerCase().trim())
            }) : []
        }
    },
    methods:{
        ...mapMutations(['setSelectedMapIndex','setSelectedCountry']),

        handleSelection(item){
            this.setSelectedMapIndex(item.mapId)
            this.setSelectedCountry(item.country)
            this.searchKey=''
            this.$router.push(`/${this.selectedCountry.gtw}/${this.lang}/benefits`)
        },
    }
}

</script>

<style>

</style>
