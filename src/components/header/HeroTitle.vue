<template>
  <div class="wrapper">
      <h1 class="text-center min-w-max relative z-30" v-html="getTitle"></h1>
      <p class="description relative z-30" v-if="description">{{ description }}</p>
      <a href="https://courier.aeropost.com/site/en/auth?a=signup" class="btn-yellow relative z-30" v-show="showSignUp">{{lang==='en'?'Sign Up for Free':'Regístrate Gratis'}}</a>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props:['title','utext', 'description', 'showSignUp'],
  computed:{
    ...mapState(['lang']),
    getTitle(){
      return this.utext? this.title + '&nbsp; <br class="2xl:hidden">' + `<span class="border-b-2 border-[#A8EEFF]">${this.utext}</span>` : this.title;
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  @apply w-full bg-blue px-5 pt-[80px] pb-[140px] text-center text-white flex flex-col items-center
          max-md:pt-8 max-md:pb-20
  ;
  h1{
    @apply font-medium text-[53px] leading-[105%] mb-4 max-w-[950px]
            max-md:text-2xl
    ;
  }
  .description{
    @apply text-2xl font-light max-w-[740px]  max-md:w-10/12 max-md:text-xl;
  }
  .btn-yellow{
    @apply mt-5 hidden max-md:inline-block z-30;
  }
}

</style>
