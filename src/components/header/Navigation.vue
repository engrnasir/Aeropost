<template>
  <div class="row nav-wrapper" :class="[(showMenu?'showMenu':''),(banner?'nav-banner':'')]">
    <div  class="hidden max-md:block control-wrapper">
      <CountryControl></CountryControl>
    </div>
    <nav class="w-full">
        <ul class="items">
            <li class="item" @click="setRoute('how-it-works')">
              {{lang==='en'?'How It Works':'¿Cómo Funciona?'}}
            </li>
            <li class="item" v-if="!invalidRate" @click="setRoute('rates')">
                {{lang==='en'?'Rates':'Tarifas'}}
            </li>
            <li class="item" @click="setRoute('calculator')">
              {{lang==='en'?'Calculator':'Cotiza tu envío'}}
            </li>
            <li class="item" @click="setRoute('faqs')">
              {{lang==='en'?'FAQs':'Preguntas Frecuentes'}}
            </li>
            <li class="item" @click="setRoute('restricted')">
              {{lang=='en'?'Restricted Products':'Productos Restringidos'}}
            </li>
            <li class="item mr-0" @click="setRoute('contactus')">
                {{lang==='en'?'Contact':'Contacto'}}
            </li>
            <li class="item mr-0" @click="setRoute('business')" v-if="selectedCountry.gtw === 'SCL' || selectedCountry.gtw === 'SJO'">
              {{lang==='en'?'Business':'Negocio'}}
            </li>
            <li class="item mr-0" @click="setRoute('benefits')">
              {{lang==='en'?'Benefits':'Beneficios'}}
            </li>
        </ul>
    </nav>
    <div class="flex items-center min-w-max max-md:min-w-full">
        <a href="https://courier.aeropost.com/site/en/auth" class="btn max-lg:text-sm mr-[14px] max-lg:mr-2 max-md:hidden">{{lang==='en'?'Log in':'Iniciar Sesión'}}</a>
        <a href="https://courier.aeropost.com/site/en/auth?a=signup" class="btn max-lg:text-sm">{{lang==='en'?'Sign Up for Free':'Regístrate Gratis'}}</a>
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
      return this.selectedCountry.gtw==='BHS';
    },
    banner(){
      const validGateways = ['EIS','BGI','SAL','GUA','LIM','SJO','PTY'];
      return validGateways.includes(this.selectedCountry.gtw)
    }
  },
  methods:{
    ...mapMutations(['setShowMenu']),
    setRoute(page){
      this.$router.push(`/${this.selectedCountry.gtw}/${this.lang}/${page}`)
      this.setShowMenu(false)
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-wrapper{
  @apply flex justify-between items-center relative z-40;
}

nav{
  .items{
    @apply flex items-start text-white;
  }
  .item{
    @apply mr-4 text-base md:text-sm hover:text-yellow font-medium cursor-pointer;
  }
}


@media screen and (max-width:840px) {
  .nav-wrapper{
    @apply w-[260px] mx-0 fixed left-0 top-[56px] h-screen justify-start flex-col items-start bg-white shadow-2xl 
            px-3 py-5 pb-[600px] overflow-y-scroll
            transition-all duration-300
            -translate-x-full
            ;
  }
  .nav-banner{
    @apply top-[114px]
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
