<template>
    <div class="sticky top-0 left-0 md:relative z-[999] w-full h-[60px] flex  items-center justify-between bg-[#F6D000] text-sm text-blue max-md:p-2 md:pr-6" :class="show? 'flex':'hidden'">
        <div class="flex md:items-center max-md:flex-col max-md:justify-center text-[10px] leading-tight md:text-sm max-md:mr-2" >
            <div class=" left-0 top-0 md:w-[296px] md:h-[58px] md:bg-[#FF929233] clipPath  md:px-6 md:py-2">
                <p v-if="lang==='en'">Currently you’re in <br class="max-md:hidden"> <b>Aeropost Courier</b></p>
                <p v-else>Actualmente estás en<br class="max-md:hidden"> <b>Aeropost Courier</b></p>
            </div>
    
            <p class="md:mx-5" v-if="lang==='en'">You can also search by product, brand or paste a link on  <b>Aeropost Marketplace</b>.</p>
            <p class="md:mx-5" v-else>También puede buscar por producto, marca o pegar un enlace en <b>Aeropost Marketplace</b>.</p>
        </div>

        <a :href="`https://aeropost.com/${selectedCountry.gtw}_en/`" target="blank" class="mbtn">
           {{ lang==='en'? 'Go to Marketplace':'Ir al Mercado' }}
        </a>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['lang','selectedCountry']),
        show(){
            const validGateways = ['EIS','BGI','SAL','GUA','LIM','SJO','PTY'];
            return validGateways.includes(this.selectedCountry.gtw)
        }

    }


}
</script>

<style lang="scss" scoped>
.mbtn{
  @apply min-w-max px-3 md:px-6 py-1 md:py-[10px] rounded-[40px] text-[12px] md:text-sm font-medium bg-blue text-white cursor-pointer transition-all duration-200 hover:bg-white hover:text-blue; 
}
.clipPath{
    @media only screen and (min-width:840px){
        clip-path: polygon(0 0, 100% 0, 86% 100%, 0% 100%);
    }
}
</style>
