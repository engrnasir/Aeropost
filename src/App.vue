<template>
  <div id="app">
    <img src="@/assets/images/bg.png" alt="" class="min-w-full absolute top-0 left-0 z-0">  
    <div class="bg-blue max-md:sticky top-0 left-0 z-50">
      <LogoNav class="relative z-40"></LogoNav>
      <HeaderVue></HeaderVue>
    </div>
    
    <router-view/>
    <footerVue :bgBlue="false"/>
  </div>
</template>
<script>
import LogoNav from "./components/header/LogoNav.vue";
import HeaderVue from "@/components/header/Header.vue"
import FooterVue from "@/components/footer/Footer.vue"

export default{
  components:{
    LogoNav,
    HeaderVue,
    FooterVue
  }
}
</script>
<style>


</style>
