<template>
    <div class="min-w-full font-sofiaPro">
      <HeroTitleVue :title="hero.title" :description="hero.description"></HeroTitleVue>

      <OpenBusiness/>

      <ImportShipping/>

      <AllinOne/>

      <Shipping/>

      <MainAttributeVue/>

      <FormVue/>

      <ImportantVue/>

      

    </div>
  </template>

  <script>
  import HeroTitleVue from '@/components/header/HeroTitle.vue';
  import FooterTitle from '@/components/footer/FooterTitle.vue';
  import OpenBusiness from '@/components/business/OpenBusiness.vue'
  import ImportShipping from '@/components/business/ImportShipping.vue'
  import AllinOne from '@/components/business/AllinOne.vue'
  import Shipping from '@/components/business/Shipping.vue'
  import MainAttributeVue from '@/components/business/MainAttribute.vue';
  import FormVue from '@/components/business/Form.vue'
  import ImportantVue from '@/components/business/Important.vue'
  
  import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'RateView',
    components:{
        HeroTitleVue,
        FooterTitle,
        OpenBusiness,
        ImportShipping,
        AllinOne,
        Shipping, 
        MainAttributeVue,  
        FormVue,  
        ImportantVue   
    },
    data(){
      return{
        en_hero:{
          title:'Business Shipping Made Simple',
          description:'Import from the USA. Ship, Manage & Track with Confidence',
        },
        es_hero:{
          title:'Envío comercial simplificado',
          description:'Importación de los EE.UU. Envíe, administre y rastree con confianza',
        },
      }
    },
    computed:{
      ...mapState([
        'selectedCountry',
        'lang',
        'maps'
      ]),
      hero(){
        return this.lang==='en'?this.en_hero:this.es_hero;
      },
      footerTitle(){
        return this.lang==='en'?'We make shopping simple.':'Hacemos que tus compras sean simples.';
      }
    },
    methods:{
    },
    mounted(){
    }   
  }    
  </script>
 
  