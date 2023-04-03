<template>
    <div class="min-w-full">
      <HeroTitleVue :title="title" :utext="utext" :description="description" :showSignUp="true"></HeroTitleVue>
      <Benefits></Benefits>
      <DetailsVue></DetailsVue>
      <SliderVue></SliderVue>
      <FooterTitle title="We make shopping simple." :bgBlue='true'></FooterTitle>
    </div>
  </template>
  
  <script>
  import HeroTitleVue from '@/components/header/HeroTitle.vue';
  import Benefits from '@/components/homepage2/Benefits2.vue';
  import DetailsVue from '@/components/homepage2/Details2.vue';
  import SliderVue from '@/components/homepage/Slider.vue';
  import FooterTitle from '@/components/footer/FooterTitle.vue';
import { mapState } from 'vuex';
  export default {
    name: 'HomeView',
    components:{
      HeroTitleVue,
      Benefits,
      DetailsVue,
      SliderVue,
      FooterTitle,
    },    
    computed:{
      ...mapState(['lang']),
      title(){
        return this.lang==='en'?'Buy Anything from the U.S.':'Compra cualquier cosa desde USA'
      },
      utext(){
        return this.lang==='en'?' with Aeropost':' con Aeropost';
      },
      description(){
        return this.lang==='en'?'The easiest way to shop from your favorite online stores.':'La forma más fácil de comprar en tus tiendas online favoritas.';
      },
    }
    
  }
  </script>
  