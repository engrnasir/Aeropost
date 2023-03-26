<template>
    <div class="container min-w-full bg-[#F5F5F5]">
      <HeroTitleVue :title="title" utext="" :description="description" :showSignUp="false"></HeroTitleVue>
      <!--  -->
      <div class="w-[95%] max-w-[940px] bg-white shadow-2xl rounded-xl p-10 mx-auto -translate-y-12 grid grid-cols-2 max-sm:grid-cols-1 gap-[80px] gap-y-10">
        <div v-for="(item, i) in cards" :key="i">
            <img :src="require(`@/assets/images/${item.img}`)" alt="" class="w-10 mb-4">
            <h3 class="font-bold text-2xl text-blue mb-4">{{ item.title }}</h3>
            <p class="text-sm text-[#333333]" >{{ item.description }}</p>
        </div>
      </div>


      <FooterTitle title="We make shopping simple." :bgBlue='true'></FooterTitle>
    </div>
  </template>
  
  <script>
  import HeroTitleVue from '@/components/header/HeroTitle.vue';
  import FooterTitle from '@/components/footer/FooterTitle.vue';
  export default {
    name: 'HomeView',
    components:{
      HeroTitleVue,
      FooterTitle,
    },
    data(){
      return{
        title:'Why Aeropost',
        description:'Aeropost has a proven track record spanning over three decades of providing efficient courier services and competitive shipping rates throughout the Caribbean, Latin, and Central American region.',
        cards:[
            {img:'save.png',title:'Save on Taxes', description:'Save 7% U.S. Sales Tax when using your Aeropost address.'},
            {img:'secure.png',title:'Secure Transactions', description:'We use the latest technology to ensure that your transactions are secure.'},
            {img:'return.png',title:'Easy Returns', description:'If you are not satisfied with your purchase, we make it simple to return it.'},
            {img:'track.png',title:'Track Your Packages ', description:'Receive up-to-date tracking updates for your packages.'},
            {img:'locker.png',title:'Free Locker Pick Up', description:'Our smart parcel lockers are conveniently placed and simple to use. In as little as 23 seconds, you can access your package from any of our smart parcel lockers.'},
            {img:'credit-card.png',title:'Multiple Payment Options', description:'We have multiple payment options: pay with a credit or debit card, Paypal or even with cash at our stores in select countries.'},
            {img:'hand.png',title:'Weight Based Shipping', description:'We charge based on weight, not volume.'},
            {img:'fast.png',title:'Speed & Reliability', description:'Last-mile delivery with the highest flight frequency in the region.'},
        ]
      }
    }
    
  }
  </script>
  <style lang="scss" scoped>
  .container{
  
  
  }
  </style>
  