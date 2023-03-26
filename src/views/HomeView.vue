<template>
  <div class="container min-w-full">
    <HeroTitleVue :title="title" utext="" :description="description" :showSignUp="true"></HeroTitleVue>
    <Benefits></Benefits>
    <DetailsVue></DetailsVue>
    <SliderVue></SliderVue>
    <FooterTitle title="We make shopping simple." :bgBlue='true'></FooterTitle>
  </div>
</template>

<script>
import HeroTitleVue from '@/components/header/HeroTitle.vue';
import Benefits from '@/components/homepage/Benefits.vue';
import DetailsVue from '@/components/homepage/Details.vue';
import SliderVue from '@/components/homepage/Slider.vue';
import FooterTitle from '@/components/footer/FooterTitle.vue';

export default {
  name: 'HomeView',
  components:{
    HeroTitleVue,
    Benefits,
    DetailsVue,
    SliderVue,
    FooterTitle,
  },
  data(){
    return{
      title:'Buy Anything from the U.S.',
      description:'The best way to buy from your favorite stores in the U.S.'
    }
  }
  
}
</script>