<template>
  <div class="bg-[#EAF8FF99] py-14 flex flex-col items-center">
    <h2 class="text-center text-blue text-3xl mb-8 sm:mb-16 lg:mb-24">Our Main Attributes</h2>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-x-5 sm:gap-y-16 lg:gap-y-24 max-w-[1080px] mx-auto mb-14">
        <div class="w-full flex flex-col items-center p-3" v-for="(item, i) in list" :key="i">
            <img :src="require(`@/assets/images/business/${item.img}`)" :alt="item.title" class="mb-5 h-14">
            <p class="text-center font-medium text-blue text-xl lg:text-[22px] leading-6 max-w-[260px]">{{ item.title }}</p>
        </div>
    </div>
    <button class="get-btn">Get Started</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                { img:'gaurantee.png', title:'Guarantee Program' },
                { img:'flame.png', title:'We Transport Dangerous Cargo' },
                { img:'preload.png', title:'Pre Load Alert' },
                { img:'hand.png', title:'Changes Per Kilogram & Route' },
                { img:'headphone.png', title:'Personal Executive' },
                { img:'flight.png', title:'Daily Flights' },
            ]
        }
    }

}
</script>

<style>
.get-btn{
        @apply px-12 py-[10px] rounded-[40px] text-xl font-medium bg-yellow text-blue cursor-pointer transition-all duration-200 hover:bg-blue hover:text-white;
      }   
</style>
