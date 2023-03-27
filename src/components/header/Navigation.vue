<template>
  <div class="row nav-wrapper" :class="showMenu?'showMenu':''">
    <div  class="hidden max-md:block control-wrapper">
      <CountryControl></CountryControl>
    </div>
    <nav class="w-full">
        <ul class="items">
            <li class="item" @click="setShowMenu(false)"><router-link to="/how-it-works">How It Works</router-link></li>
            <li class="item" @click="setShowMenu(false)"><router-link to="/rates">Rates</router-link></li>
            <li class="item" @click="setShowMenu(false)"><router-link to="/faqs">FAQs</router-link></li>
            <li class="item mr-0" @click="setShowMenu(false)"><router-link to="/">Contact</router-link></li>
        </ul>
    </nav>
    <div class="flex-items-center min-w-max">
        <router-link to="" class="btn mr-[14px] max-md:hidden">Log in</router-link>
        <router-link to="" class="btn">Sign Up For Free</router-link>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import CountryControl from './CountryControl.vue'; 
export default {
  components:{
    CountryControl
  },
  computed:{
    ...mapState(['showMenu'])
  },
  methods:{
    ...mapMutations(['setShowMenu'])
  }
}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  @apply flex justify-between items-center relative z-40 pt-6;
}

nav{
  .items{
    @apply flex items-center text-white;
  }
  .item{
    @apply mr-16 text-xl hover:text-yellow font-medium
           max-lg:mr-7;
  }
}


@media screen and (max-width:780px) {
  .nav-wrapper{
    @apply w-[240px] mx-0 fixed left-0 top-[56px] h-screen justify-start flex-col items-start bg-white shadow-2xl 
            px-3 py-5 pb-60 overflow-y-scroll
            transition-all duration-300
            -translate-x-full
            ;
  }
  .showMenu{
    @apply translate-x-0;
  }
  .nav-wrapper::-webkit-scrollbar{
    display: none
  }
  .control-wrapper{
    @apply w-full;
  }
  .items{
    @apply w-full border-b pl-3 mb-7 flex-col items-start text-blue;
  }
  .item{
    @apply w-full border-t py-5  mr-0 text-blue;
  }
  .btn{
    @apply w-full px-8 bg-yellow hover:bg-blue hover:text-white;
  }
}
</style>