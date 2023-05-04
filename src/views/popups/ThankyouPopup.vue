<template>
    <div class="masterWrapper" v-if="showthankyou">
        <div class="thankyouWrapper"> 
    
            <img src="@/assets/images/x.png" alt="x" class="absolute z-[999] right-6 top-6 w-7 h-7 z-50 cursor-pointer" @click="setThankyou(false)">
    
            <img src="@/assets/images/popups/bgBlue.png" alt="bgBlue" class="absolute left-0 top-0 w-full h-[340px] max-[740px]:hidden">
            <img src="@/assets/images/popups/bgBlueMob.png" alt="bgBluemob" class="absolute left-0 top-0 w-full h-[490px] min-[740px]:hidden">
            <img src="@/assets/images/popups/thank.png" alt="thank lady" class="absolute right-0 bottom-0 w-[400px] h-full max-h-[490px] ml-5 max-[540px]:w-[98%]">
            <img src="@/assets/images/popups/blue-shad.png" alt="blue shad" class="absolute right-0 bottom-0 w-full max-w-[500px] h-40 max-[740px]:hidden">
            <img src="@/assets/images/popups/yellow-shad.png" alt="blue shad" class="absolute right-0 bottom-0 w-full max-w-[500px] h-80 min-[740px]:hidden">
    
            <div class="h-[490px] max-[740px]:h-[770px] relative z-50 flex flex-col justify-between pt-16 sm:pt-24 pb-7">
                <div>
                    <p class="text-lightYellow max-w-[400px] text-[44px] leading-none mb-7">
                        {{ lang==='en'? 'Your locker has been selected.':'Tu casillero ha sido seleccionado.' }}
                    </p>
                    <p class="text-white capitalize text-[57px] font-bold leading-none min-w-max">
                        {{ lang==='en'? 'Thank You!':'¡Gracias!' }}
                    </p>
                </div>
                <p class=" text-[33px] leading-none text-blue" v-if="lang==='en'">it’s your package, <br><b>get it when you want.</b></p>
                <p class=" text-[33px] leading-none text-blue" v-else>Son tus paquetes, <br><b>retiralos cuando quieras.</b></p>
            </div>
    
        </div>

    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['showthankyou'])
    },
    methods:{
        ...mapMutations(['lang','setThankyou'])
    }
}
</script>
<style lang="scss" scoped>
.masterWrapper{
    @apply fixed left-0 top-0 z-[9999] w-full h-screen bg-[#00000070] overflow-y-scroll ;
}
.masterWrapper::-webkit-scrollbar{
    @apply hidden;  
}
.thankyouWrapper{
    @apply relative mx-auto my-10 w-[96%] max-w-[730px] h-[490px] max-[740px]:h-[770px] bg-lightYellow font-sofiaPro px-5 sm:px-10;
}
</style>
