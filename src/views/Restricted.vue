<template>
    <div class="min-w-full">
      <HeroTitleVue :title="hero.title"></HeroTitleVue>

      <div class="container">
        <RestrictedContents/>
      </div>

      <FooterTitle :title="footerTitle" :bgBlue='true'></FooterTitle>
    </div>
  </template>

<script>
import HeroTitleVue from '@/components/header/HeroTitle.vue';
import FooterTitle from '@/components/footer/FooterTitle.vue';
import RestrictedContents from '@/components/restricted/RestrictedContents.vue'
import { mapState } from 'vuex';

  export default {
    name: 'RateView',
    components:{
        HeroTitleVue,
        FooterTitle,
        RestrictedContents
    },
    data(){
      return{
        en_hero:{
          title:'Restricted Shipping',
        },
        es_hero:{
          title:'Envío restringido',
        },
      }
    },
    computed:{
      ...mapState([
        'selectedCountry',
        'lang'
      ]),
      hero(){
        return this.lang==='en'?this.en_hero:this.es_hero;
      },
      footerTitle(){
        return this.lang==='en'?'We make shopping simple.':'Hacemos que tus compras sean simples.';
      }
    },    
  }
  </script>
  <style lang="scss" scoped>
  .container{
    @apply w-[96%] max-w-[980px] bg-white shadow-xl rounded-xl p-10 mx-auto relative z-20 -translate-y-20 
                   mb-40 max-md:-translate-y-12 max-md:px-4;     
  }

    
  </style>
  