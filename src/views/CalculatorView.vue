<template>
    <div class=" min-w-full transition-all duration-1000 bg-[#F5F5F5]">
      <HeroTitleVue :title="hero.title" :description="hero.description"></HeroTitleVue>
      <div class="-translate-y-16">
          <div class="w-[96%] max-w-[600px] min-h-[500px] bg-white shadow-2xl rounded-xl  mx-auto relative z-20 mb-8">
            <iframe :src="cal_url" frameborder="0" width="600" height="500" class="bg-#000"></iframe>
          </div>
      </div>
      <FooterTitle :title="footerTitle" :bgBlue='true'></FooterTitle>
    </div>
  </template>
  
  <script>
  import HeroTitleVue from '@/components/header/HeroTitle.vue';
  import SliderVue from '@/components/homepage/Slider.vue';
  import FooterTitle from '@/components/footer/FooterTitle.vue';
  import { mapState } from 'vuex';
  export default {
    name: 'CalculatorView',
    components:{
      HeroTitleVue,
      SliderVue,
      FooterTitle,
    },
    data(){
      return{
        en_hero:{
          title:'Shipping Calculator',
          description:'Calculate your shipping costs including freight, customs duties, and taxes by utilizing our shipping calculator.',
        },
        es_hero:{
          title:'Calculadora de Envío',
          description:'Calcula tus costos de envío, incluidos el flete, los aranceles aduaneros y los impuestos, utilizando nuestra calculadora de envío.',
        },
      }
    },
    computed:{
      ...mapState(['lang','selectedCountry']),
      hero(){return this.lang==='en'?this.en_hero:this.es_hero},
      description(){
        return this.lang==='en'?`*The price indicated above is only an estimate of the freight and customs charges. We remind you that the final costs may vary depending on the actual customs declarations and/or other charges such as special handling on consumer commodities and a select number of import requirements on certain items (<a href="" class="text-blue">see restricted shipments for more information</a>) .`:`*El precio indicado arriba es solo una estimación de los gastos de flete y aduana. Te recordamos que los costos finales pueden variar según las declaraciones de aduana reales y/u otros cargos, como el manejo especial de productos de consumo y un número selecto de requisitos de importación de ciertos artículos (<a href="" class="text-blue">consulta Envíos restringidos para obtener más información</a>).`
      },
      footerTitle(){
        return this.lang==='en'?'We make shopping simple.':'Hacemos que tus compras sean simples.';
      },
      cal_url(){
        return `https://calculator.aeropost.com/Calculator.aspx?gateway=${this.selectedCountry.gtw}&userlanguage=${this.langCode}`
      },
      langCode(){
        return this.lang==='en'?'1':'0';
      }
    },   
  }
  </script>

<style lang="scss">
#tbCalculator{
  width: 100%;
  &>div{
    width: 100%;
  }
}
#tbMain{
  @media only  screen and (max-width:700px){
    width: 320px;    
  }
}
</style>
