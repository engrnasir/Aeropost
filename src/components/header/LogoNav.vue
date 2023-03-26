<template>
    <div class="w-full px-8" :class="showMenu?'bg-blue':''">
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
    computed:{
        ...mapState(['showMenu'])
    },
    methods:{
        ...mapMutations(['setShowMenu'])
    }
}
</script>

<style lang="scss" scoped>
.loginBtn{
    @apply px-9 py-2 hidden max-md:inline-block  max-sm:px-5  max-sm:text-sm   max-sm:py-1 ;
}

</style>