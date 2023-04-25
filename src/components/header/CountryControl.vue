<template>
  <div class="wrapper">
        <router-link class="select" :to="`/${selectedCountry.gtw}/${lang}/country-picker`">
            <img src="@/assets/images/up.png" alt="up" class="w-4 z-50 absolute right-8 -bottom-2" v-show="showCountries">
            <p class="text-base mr-3">{{selectedCountry.name}}</p>
            <img src="@/assets/images/down.png" alt="down arrow" class="w-3">
        </router-link>
        <p>
            <span 
                :class="lang==='en'?'':'active-lang'" 
                class="border-r-2 border-sky-100 lang-item"
                @click="setLanguage('es')">
                Espanol
            </span> 
            <span 
                class="lang-item"
                :class="lang==='en'?'active-lang':''"
                @click="setLanguage('en')">English</span>
        </p>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
    computed:{
        ...mapState([
            'lang',
            'showCountries',
            'selectedCountry'
        ]),
    },
    methods:{
        ...mapMutations([
            'setLang',
            'setShowCountries',
            'setSelectedCountries',
        ]),
        setLanguage(lg){
            let path = this.$route.path
            this.setLang(lg)
            let gtw = this.$route.params.gtw
            if(path.includes('rates') || path.includes('restricted')){
                gtw = path.substring(1,4)
            }
            if(gtw && lg){
                let url = `/${gtw}/${lg}/${path.substring(8)}`
                if(this.$route.path !== url){
                    this.$router.push(url)
                }
            }
        },
    }

}
</script>

<style lang="scss" scoped>
.wrapper{
    @apply flex items-center text-white;
}
.select{
    @apply flex items-center justify-center px-3 py-[6px] border border-sky-100 rounded-[27px] cursor-pointer relative;
}
.lang-item{
    @apply px-[10px] cursor-pointer ;
}
.active-lang{
    @apply text-[#F6D000];
}

@media only screen and (max-width:840px){
    .wrapper{
        @apply flex-col mb-5 ;
    }
    .select{
        @apply w-full text-blue border-blue mb-3;
    }
    .lang-item{
        @apply text-[#737373] ;
    }
    .active-lang{
        @apply text-blue font-bold;
    }
    
}

</style>
