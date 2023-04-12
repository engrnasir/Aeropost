<template>
  <div id="app">
    <div class="overlay" @click="setShowCountries(false)" v-show="showCountries "></div>
    <div class="menu-overlay" @click="setShowMenu(false)" v-show="showMenu"></div>

    <div class="bg-blue absolute max-md:fixed top-0 left-0 w-full h-[56px]"></div>
    <Mapsvg class="w-full h-min overflow-x-hidden absolute top-0 left-0 z-0"/>
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
  },
  mounted() {
    window.onUsersnapLoad = function(api) {
        api.init();
      }
    let script = document.createElement('script');
    script.defer = 1;
    script.src = 'https://widget.usersnap.com/global/load/ea450baa-f4ca-4b2e-a32e-85a6865337b9?onload=onUsersnapLoad';
    document.getElementsByTagName('head')[0].appendChild(script);

    let mapScript = document.createElement('script')
    mapScript.defer = 1;
    mapScript.setAttribute('src', 'https://apps.elfsight.com/p/platform.js')
    document.body.appendChild(mapScript)
  },
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
