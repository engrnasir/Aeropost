<template>
    <div class="min-w-full">
      <HeroTitleVue :title="hero.title" :description="hero.description"></HeroTitleVue>

      <div class="container">
        <router-view></router-view>
      </div>

      <FooterTitle :title="footerTitle" :bgBlue='true'></FooterTitle>
    </div>
  </template>

  <script>
  import HeroTitleVue from '@/components/header/HeroTitle.vue';
  import FooterTitle from '@/components/footer/FooterTitle.vue';
import { mapState } from 'vuex';

  export default {
    name: 'HomeView',
    components:{
        HeroTitleVue,
        FooterTitle,
    },
    data(){
      return{
        en_hero:{
          title:'Rates',
          description:'Your Miami Address service allows you to shop from your favorite U.S.websites and receive or pick up your packages at a local store, locker or get it delivered right to your door..',
        },
        es_hero:{
          title:'Tarifas',
          description:'Nuestro servicio de dirección de Miami te permite comprar en tus sitios web favoritos de EE. UU. y recibir tus compras en tu hogar, en el trabajo o en una tienda local.',
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
  