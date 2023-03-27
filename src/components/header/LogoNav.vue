<template>
    <div class="w-full px-8" :class="showMenu || bgBlue? 'bg-blue':''">
        <div class="row pt-4">
              <div class="flex justify-between items-center w-[100%]" >
                  <div class="flex items-center">
                      <img src="@/assets/images/menu.png" alt="" 
                          class="hidden max-md:block w-6 mr-5 cursor-pointer"
                          @click="setShowMenu(!showMenu)">
                      <router-link to="/">
                          <Logo colorVal="#fff" class="max-md:w-40 max-lg:w-50"/>
                      </router-link>
                  </div>
      
                  <router-link to="" class="btn loginBtn">Log in</router-link>
      
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
        ...mapState(['showMenu'])
    },
    methods:{
        ...mapMutations(['setShowMenu'])
    },
    mounted(){
        window.addEventListener('scroll',(e)=>{
           this.bgBlue = window.scrollY>10 && window.innerWidth<800?true:false;
        })
    }
}
</script>

<style lang="scss" scoped>
.loginBtn{
    @apply px-9 py-2 hidden max-md:inline-block  max-md:px-5  max-md:text-sm   max-md:py-1 ;
}

</style>