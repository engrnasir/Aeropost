<template>
    <div class="w-full min-h-screen py-12 fixed left-0 top-0 overflow-scroll bg-[#00000025] z-[999] shadow-2xl ">
        <div class="bg-lightYellow mx-auto relative w-[850px] min-h-[570px] max-md:w-[96%] px-8 py-6">
            <img src="@/assets/images/popups/bgBlue.png" alt="bgBlue" class="w-full absolute top-0 left-0 z-0 max-md:h-[700px] max-md:hidden">
            <img src="@/assets/images/popups/bgBlueMob.png" alt="bgBlueMob" class="w-full absolute top-0 left-0 z-0 h-[700px] md:hidden">
            <div class="flex relative z-10">
                <img src="@/assets/images/popups/circularImg.png" alt="circularImg1" class="w-40 -translate-y-10 mr-5 max-md:hidden">
                <h2 class="text-lightYellow text-4xl md:text-[43px] leading-tight font-sofiaPro max-md:mb-5">Smart lockers now available for <br><span class="text-white font-bold">package collection.</span></h2>
            </div>
            <div class="flex max-md:flex-col-reverse items-start justify-between relative z-10">
                <div class=" text-white font-sofiaPro">
                    <p class="font-bold text-[12px] mb-4">Discover the Benefits of Our <br><span class="text-lightYellow"> Smart Lockers </span></p>
                    <ul class="list-disc pl-4 text-sm leading-5 font-poppins mb-6">
                        <li>FREE Locker Delivery</li>
                        <li>Convenient Pickup Locations</li>
                        <li>Extended Hours</li>
                    </ul>
                    <p class="max-w-[250px] mb-4">Add locker <b>location as your primary pickup </b> option</p>
                    
    
                    <div class="max-md:flex item-center">
                        <div class="w-[250px] pr-3 rounded-[60px] overflow-hidden bg-white flex items-center mb-2 max-md:mr-2">
                            <select name="lockerVal" v-model="selectVal" id="" class="cursor-pointer w-full py-3 px-5 text-blue font-bold text-sm outline-none select">
                                <option value="" selected>Choose your Locker Location</option>
                                <option :value="l" v-for="(l,i) in lockers" :key="i">{{ l }}</option>
                            </select>
                            <img src="@/assets/images/popups/blue-dropdown.png" alt="blue-dropdown" class="w-2.5">
                        </div>
                        <button class="rounded-[60px] py-3 px-5 font-bold text-sm text-white bg-blue leading-none h-10" @click="handleLockerSelection()">Save</button>
                    </div>
                    <p class="text-3xl text-blue mt-6 md:hidden">it’s your package, <br><b>get it when you want it.</b></p>
                    <div class="flex text-blue mt-5 md:mt-14 leading-none">
                        <button class="pr-3 border-r border-blue"> I don’t want to see this again </button>
                        <button class="pl-3" @click="$emit('skip', true)"> Skip </button>
                    </div>
                    
                </div>
                <div class="max-md:w-full flex flex-col max-md:items-center md:items-end font-sofiaPro md:-mt-8">
                    <p class="font-bold text-base text-darkYellow md:text-blue leading-6 px-4 md:ml-10 md:rounded-[84px] md:bg-darkYellow w-full max-md:text-center md:mb-3 self-start md:w-[184px]">Lockers In Your Area</p>
                    <trinidadMap class="w-[350px] md:w-[380px]"/>
                    <p class="text-3xl text-blue max-md:hidden">it’s your package, <br class=""><b>get it when you want it.</b></p>
                </div>
            </div>
            
        </div>
    </div>
  
</template>

<script>
import bgBlue from '@/assets/images/popups/bgBlue.vue'
import trinidadMap from '@/assets/images/popups/trinidadMap.vue'
export default {
    data(){
        
        return {
            selectVal:'',
            lockers:[
                'Massy Stores Maraval Aeropost Locker',
                'MASSY STORES WESTMOORINGS Aeropost Locker',
                'MASSY STORES MANDALAY Aeropost Locker',
                'MASSY STORES TRINCITY Aeropost Locker',
                'MASSY STORES ST AUGUSTINE Aeropost Locker',
                'MASSY STORES GULF VIEW Aeropost Locker',
                'MASSY STORES MARABELLA Aeropost Locker',
                'UNIPET- LADY HAILES Aeropost Locker',
                'MASSY STORES ST ANNs Aeropost Locker',
                'MASSY STORES ALYCE GLEN Aeropost Locker',
                'UNIPET ST AUGUSTINE Aeropost Lockers',
                'UNIPET BRENTWOOD Aeropost Locker',
                'AEROPOST- FERNANDES COMPOUND'
            ]
        }
    },
    components:{
        bgBlue,
        trinidadMap
    },
    methods:{
        handleLockerSelection(){

        }
    }
}
</script>

<style lang="scss" scoped>
.select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

</style>
