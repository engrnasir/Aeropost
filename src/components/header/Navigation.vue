<template>
  <div class="row nav-wrapper" :class="showMenu?'showMenu':''">
    <div  class="hidden max-md:block control-wrapper">
      <CountryControl></CountryControl>
    </div>
    <nav class="w-full">
        <ul class="items">
            <li class="item" @click="setShowMenu(false)"><router-link to="/how-it-works">{{lang==='en'?'How It Works':'Cómo Funciona'}}</router-link></li>
            <li class="item" v-if="!invalidRate" @click="setShowMenu(false)"><router-link :to="`/rates/${selectedCountry.id}`">{{lang==='en'?'Rates':'Tarifas'}}</router-link></li>
            <li class="item" @click="setShowMenu(false)"><router-link to="/calculator">{{lang==='en'?'Calculator':'Calculadora de Costos'}}</router-link></li>
            <li class="item" @click="setShowMenu(false)"><router-link to="/faqs">{{lang==='en'?'FAQs':'Preguntas Frecuentes'}}</router-link></li>
            <li class="item mr-0" @click="setShowMenu(false)"><router-link to="/contactus">{{lang==='en'?'Contact':'Contacto'}}</router-link></li>
            <li class="item mr-0" @click="setShowMenu(false)"><router-link to="/benefits">{{lang==='en'?'Benefits':'Beneficios'}}</router-link></li>
        </ul>
    </nav>
    <div class="flex items-center min-w-max max-md:min-w-full">
        <router-link to="" class="btn max-lg:text-sm mr-[14px] max-lg:mr-2 max-md:hidden">{{lang==='en'?'Log in':'Iniciar Sesión'}}</router-link>
        <router-link to="" class="btn max-lg:text-sm">{{lang==='en'?'Sign Up for Free':'Regístrate Gratis'}}</router-link>
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
    ...mapState([
      'lang',
      'showMenu',
      'selectedCountry'
    ]),
    invalidRate(){
      return this.selectedCountry.id==='cb4' 
              || this.selectedCountry.id ==='cb13' 
              || this.selectedCountry.id ==='cb19';
    }
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
    @apply mr-8 text-base hover:text-yellow font-medium
           max-lg:mr-4 max-lg:text-sm max-md:text-base;
  }
}


@media screen and (max-width:840px) {
  .nav-wrapper{
    @apply w-[260px] mx-0 fixed left-0 top-[56px] h-screen justify-start flex-col items-start bg-white shadow-2xl 
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
    @apply ml-3 min-w-full mb-7 flex-col items-start text-blue;
  }
  .item{
    @apply w-full border-t py-5 pl-3  mr-0 text-blue;
  }
  .item:last-child{
    @apply border-b;
  }
  .btn:last-child{
    @apply w-full flex justify-center items-center px-8 bg-yellow hover:bg-blue hover:text-white;
  }
}
</style>
