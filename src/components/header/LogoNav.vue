<template>
    <div class="w-full px-8 max-md:px-4" :class="showMenu || bgBlue? 'bg-blue':''">
        <div class="row py-2">
              <div class="flex justify-between items-center w-[100%]" >
                  <div class="flex items-center">
                      <img src="@/assets/images/menu.png" alt="menu" 
                          class="hidden max-md:block w-6 mr-4 cursor-pointer"
                          @click="setShowMenu(!showMenu)">
                      <router-link :to="`/${selectedCountry.gtw}/${lang}`">
                          <Logo colorVal="#fff" class="max-md:w-32 max-lg:w-50"/>
                      </router-link>
                  </div>
      
                  <a href="https://courier.aeropost.com/site/en/auth " class="btn loginBtn">{{lang==='en'?'Log in':'Iniciar Sesión'}}</a>
      
                  <div class="max-md:hidden ">
                      <CountryControlVue></CountryControlVue>
                  </div>
      
              </div>
          </div>
    </div>
</template>

<script>
import Logo from '@/components/header/Logo.vue';
import CountryControlVue from './CountryControl.vue';
import { mapMutations, mapState } from 'vuex';
export default {
    components:{
        Logo,
        CountryControlVue
    },
    data(){
        return{
            bgBlue:false,
        }
    },
    computed:{
        ...mapState(['lang','showMenu','selectedCountry'])
    },
    methods:{
        ...mapMutations(['setLang','setShowMenu'])
    },
    mounted(){
        window.addEventListener('scroll',(e)=>{
           this.bgBlue = window.scrollY>0 && window.innerWidth<840?true:false;
        })
    }
}
</script>

<style lang="scss" scoped>
.loginBtn{
    @apply px-9 py-2 hidden max-md:inline-block  max-md:px-5  max-md:text-sm   max-md:py-1 ;
}

</style>
