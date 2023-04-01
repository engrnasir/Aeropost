<template>
    <div class="min-w-full">
      <HeroTitleVue :title="title" :description="description"></HeroTitleVue>

      <div class="container">
        <router-view></router-view>
      </div>

      <FooterTitle title="We make shopping simple." :bgBlue='true'></FooterTitle>
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
        title:'Rates',
        description:'Your Miami Address service allows you to shop from your favorite U.S.websites and receive or pick up your packages at a local store, locker or get it delivered right to your door..',
      }
    },
    computed:{
      ...mapState([
        'selectedCountry'
      ])
    },
    mounted(){
      this.$router.push(`/rates/${this.selectedCountry.id}`)
    }
    
  }
  </script>
  <style lang="scss" scoped>
  .container{
    @apply w-[96%] max-w-[980px] bg-white shadow-xl rounded-xl p-10 mx-auto relative z-20 -translate-y-20 
                   mb-40 max-md:-translate-y-12 max-md:px-4;     
  }

    
  </style>
  