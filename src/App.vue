<template>
  <div id="app">
    <div class="overlay" @click="setShowCountries(false)" v-show="showCountries "></div>
    <div class="menu-overlay" @click="setShowMenu(false)" v-show="showMenu"></div>

    <div class="bg-blue absolute max-md:fixed top-0 left-0 w-full h-[56px]"></div>
    <Mapsvg class="max-w-full -mt-12 min-w-full absolute top-0 left-0 z-0"/>
    <div class=" max-md:sticky top-0 left-0 z-50">
      <LogoNav class="relative z-40"></LogoNav>
    </div>
    <HeaderVue></HeaderVue>
    
    <router-view/>
    <footerVue :bgBlue="false"/>
  </div>
</template>
<script>
import LogoNav from "./components/header/LogoNav.vue";
import HeaderVue from "@/components/header/Header.vue"
import FooterVue from "@/components/footer/Footer.vue"
import Mapsvg from "./components/header/Mapsvg.vue";
import { mapMutations, mapState } from 'vuex';
export default{
  components:{
    LogoNav,
    HeaderVue,
    FooterVue,
    Mapsvg
  },
  computed:{
        ...mapState([
            'showCountries',
            'showMenu'
        ])
    },
    methods:{
        ...mapMutations([
            'setShowCountries',
            'setShowMenu'
        ])
    }
}
</script>
<style>

.overlay{
    @apply w-full min-h-screen fixed left-0 top-0 bg-black opacity-10 z-30;
}
.menu-overlay{
    @apply w-full min-h-screen fixed left-0 top-0 bg-black opacity-40 z-40;
}
</style>
