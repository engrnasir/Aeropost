<template>
  <div id="app">
    <ThankyouPopup/>
    <MarketplaceBannerVue/>
    <div class="overlay" @click="setShowCountries(false)" v-show="showCountries "></div>
    <div class="menu-overlay" @click="setShowMenu(false)" v-show="showMenu"></div>

    <div class="bg-blue absolute z-[-1] top-0 left-0 w-full h-[358px]"></div>
    <div class="bg-blue absolute max-md:fixed top-0 left-0 w-full h-[58px] mb-0"></div>
    <Mapsvg class="w-full h-min overflow-x-hidden absolute top-0 left-0 z-0"/>
    <div class="max-md:sticky top-0 left-0 z-50">
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
import MarketplaceBannerVue from './components/header/MarketplaceBanner.vue';
import ThankyouPopup from '@/views/popups/ThankyouPopup.vue';
import { mapMutations, mapState } from 'vuex';



export default{
  metaInfo: {
      title: 'Shipping & Courier Services | Aeropost',
      meta: [
        {
          name: 'description',
          content: 'We offer the fastest shipping experience to make your shopping easier. As a global shipping company, we deliver courier services to nearly 38 countries worldwide.'
        },
        {
          name: 'keywords',
          content:'Shipping and courier services, courier delivery services, courier pickup from home, courier services near me, global shipping services '
        }
      ]
  },
  data(){
    return{
      
    }
  },
  components:{
    LogoNav,
    HeaderVue,
    FooterVue,
    Mapsvg,
    MarketplaceBannerVue,
    ThankyouPopup
  },
  computed:{
      ...mapState([
          'showCountries',
          'showMenu',
          'maps',
      ]),
    },
  methods:{
      ...mapMutations([
          'setShowCountries',
          'setShowMenu',
          'setLang',
          'setSelectedCountry',
          'setSelectedMapIndex'
      ]),
      goTop(){
        window.scrollTo(0,0)
      }
  },


  mounted() {
    const that = this;
    let lg = this.$route.params.lg
    if(lg){ this.setLang(lg) }
    let gtw = this.$route.params.gtw? this.$route.params.gtw : this.$route.path.substring(1,4)
    this.maps.forEach((el,i)=>{
      el.countries.forEach(c=> {
        if(c.gtw === gtw){
          that.setSelectedMapIndex(i)
          that.setSelectedCountry(c)
        }
      })
    })

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
