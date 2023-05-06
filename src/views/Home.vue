<template>
    <div class="min-w-full">
      <HeroTitleVue :title="title" :utext="utext" :description="description" :showSignUp="true"></HeroTitleVue>
      <Benefits></Benefits>
      <DetailsVue></DetailsVue>
      <SliderVue :key="componentKey"></SliderVue>
      <FooterTitle :title="footerTitle" :bgBlue='true'></FooterTitle>
    </div>
  </template>
  
  <script>
  import HeroTitleVue from '@/components/header/HeroTitle.vue';
  import Benefits from '@/components/homepage/Benefits.vue';
  import DetailsVue from '@/components/homepage/Details.vue';
  import SliderVue from '@/components/homepage/Slider.vue';
  import FooterTitle from '@/components/footer/FooterTitle.vue';
  import { mapState } from 'vuex';
  export default {
    name: 'HomeView2',
    data(){
      return {
        skip:false
      }
    },
    components:{
      HeroTitleVue,
      Benefits,
      DetailsVue,
      SliderVue,
      FooterTitle,
    },    
    computed:{
      ...mapState(['lang','selectedCountry']),
      title(){
        return this.lang==='en'?'Buy Anything from the U.S.':'Compra cualquier cosa desde USA'
      },
      utext(){
        return this.lang==='en'?' with Aeropost':' con Aeropost';
      },
      description(){
        return this.lang==='en'?'The easiest way to shop from your favorite U.S. online stores':'La forma más fácil de comprar en tus tiendas online favoritas.';
      },
      footerTitle(){
        return this.lang==='en'?'We Make Shopping Simple!':'Hacemos fáciles tus compras.';
      },
      componentKey(){
        return `testimonial${this.selectedCountry.name}`
      }
    }
    
  }
  </script>
  