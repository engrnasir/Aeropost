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
  import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'RateView',
    components:{
        HeroTitleVue,
        FooterTitle,
    },
    data(){
      return{
        en_hero:{
          title:'Rates',
          description:'Your FREE U.S. ADDRESS allows you to shop online from your favorite U.S. stores and pick up packages from either our local hub stores, smart parcel lockers, or right from your doorstep!',
        },
        es_hero:{
          title:'Tarifas',
          description:'Nuestro servicio de envíos te permite comprar en tus sitios favoritos de Estados Unidos y recibir tus compras en casa, trabajo, o retirar en una de nuestras tiendas.',
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
        return this.lang==='en'?'We Make Shopping Simple!':'Hacemos fáciles tus compras.';
      }
    },
    methods:{
      ...mapMutations(['setSelectedCountry'])
    },
    mounted(){
      const gtw = this.$route.params.gtw
      const that = this;
      console.log(gtw);
      this.maps.forEach(el=>{
        el.countries.forEach(c=> {
          if(c.gtw === gtw){
            that.setSelectedCountry(c)
          }
        })
      })
    }   
  }    
  </script>
  <style lang="scss" scoped>
  .container{
    @apply w-[96%] max-w-[980px] bg-white shadow-xl rounded-xl p-10 mx-auto relative z-20 -translate-y-20 
                   mb-40 max-md:-translate-y-12 max-md:px-4;     
  }

    
  </style>
  