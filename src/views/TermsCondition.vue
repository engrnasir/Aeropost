
<template>
    <div class="min-w-full">
      <HeroTitleVue :title="hero.title"></HeroTitleVue>

        <enTermsVue v-if="lang==='en'"/>
        <esTermsVue v-else />

      <FooterTitle :title="footerTitle" :bgBlue='true'></FooterTitle>
    </div>
  </template>

  <script>
  import HeroTitleVue from '@/components/header/HeroTitle.vue';
  import FooterTitle from '@/components/footer/FooterTitle.vue';
  import enTermsVue from '@/components/termsCondition/enTerms.vue';
  import esTermsVue from '@/components/termsCondition/esTerms.vue';

  import { mapState } from 'vuex';

  export default {
    name: 'RateView',
    components:{
        HeroTitleVue,
        FooterTitle,
        enTermsVue,
        esTermsVue,
    },
    data(){
      return{
        en_hero:{
          title:'Aeropost Terms & Condition',
        },
        es_hero:{
          title:'Términos y condiciones <br class="lg:hidden"> de Aeropost',
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
  
  .snippet{
    @apply text-blue text-base font-light mb-4
  }

    
  </style>
