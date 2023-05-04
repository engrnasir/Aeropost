<template>
    <div class="sticky top-0 left-0 md:relative z-[999] w-full min-h-[58px] flex max-md:flex-col items-center justify-between max-md:text-center bg-[#F6D000] text-sm text-blue max-md:pb-3 md:pr-6" :class="show? 'flex':'hidden'">
        <div class=" left-0 top-0 w-[296px] md:h-[58px] md:bg-[#FF929233] clipPath px-6 py-2">
            <p>Currently you’re in <br class="max-md:hidden"> <b>Aeropost Courier</b></p>
        </div>

        <p class="mx-5 max-md:pb-3">You can also search by product, brand or paste a link on  <b>Aeropost Marketplace</b>.</p>

        <a :href="`https://aeropost.com/${selectedCountry.gtw}_en/`" target="blank" class="mbtn">Go to Marketplace</a>
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
  @apply min-w-max px-6 py-[10px] rounded-[40px] text-sm font-medium bg-blue text-white cursor-pointer transition-all duration-200 hover:bg-white hover:text-blue; 
}
.clipPath{
    @media only screen and (min-width:840px){
        clip-path: polygon(0 0, 100% 0, 86% 100%, 0% 100%);
    }
}
</style>
