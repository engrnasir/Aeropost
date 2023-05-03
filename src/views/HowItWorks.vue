<template>
    <div class="min-w-full">
      <HeroTitleVue :title="hero.title" :utext="hero.utext" :description="hero.description"></HeroTitleVue>
        <div class="w-[1020px] mx-auto pb-24 max-[1100px]:w-[780px] max-[880px]:w-full">
            <!-- Item 1 -->
            <div class="item max-[1100px]:mb-5">
                <img src="@/assets/images/line1.png" alt="line1" class="line1">
                <div class="details mr-5"> 
                    <p class="number">1</p>
                    <h3 class="title">{{ step1.title }}</h3>
                    <p class="description">{{ step1.description }}</p>
                </div>
                <img src="@/assets/images/img1.png" alt="img1" class="w-[454.56px] max-[1100px]:w-[350px] max-[880px]:m-0">
            </div>
            <!-- Item 2 -->
            <div class="item flex-row-reverse mb-28">
                <img src="@/assets/images/line2.png" alt="line2" class="line2">
                <div class="details"> 
                    <p class="number">2</p>
                    <h3 class="title">{{ step2.title }}</h3>
                    <p class="description">{{ step2.description }}</p>
                </div>
                <img src="@/assets/images/img2.png" alt="img2" class="w-[360px] mr-24 max-[1100px]:w-[280px] max-[880px]:m-0">
            </div>

            <!-- Item 3 -->
            <div class="item mb-28">
                <img src="@/assets/images/line3.png" alt="line3" class="line3">
                <div class="details"> 
                    <p class="number">3</p>
                    <h3 class="title">{{ step3.title }}</h3>
                    <p class="description">{{ step3.description }}</p>
                </div>
                <img src="@/assets/images/img3.png" alt="img3" class="w-[360px] ml-12 max-[1100px]:w-[280px] max-[880px]:m-0">
            </div>

            <!-- Item 4 -->
            <div class=" item flex-row-reverse relative">
                <div class="details"> 
                    <p class="number">4</p>
                    <h3 class="title">{{ step4.title }}</h3>
                    <p class="description">{{ step4.description }}</p>
                </div>
                <img src="@/assets/images/img4.png" alt="img4" class="w-[360px] mr-16 max-[1100px]:w-[280px] max-[880px]:m-0">
            </div>
        </div>
      <FooterTitle :title="footerTitle" :bgBlue='true'></FooterTitle>
    </div>
  </template>
  
  <script>
  import HeroTitleVue from '@/components/header/HeroTitle.vue';
  
  import FooterTitle from '@/components/footer/FooterTitle.vue';
import { mapState } from 'vuex';
  export default {
    name: 'HowItWorks',
    components:{
      HeroTitleVue,
      FooterTitle,
    },
    data(){
      return{
        en_hero:{
          title:'How It Works',
          utext:'',
          description:`Shopping from the U.S. has never been easier than with Aeropost. We’ve streamline our courier process to ensure that you have the simplest and smoothest online shopping experience.`,
        },
        es_hero:{
          title:'¿Cómo Funciona?',
          utext:'',
          description:'Comprar en Estados Unidos nunca había sido tan fácil. Hemos simplificado los procesos de envío de tus compras en línea para garantizar que tengas una experiencia fácil, rápida y confiable.'
        },

        en_step1:{
          title:'Register for a FREE U.S. Address',
          description:' Create an Aeropost account to get  a FREE U.S. address.'
        },
        es_step1:{
          title:'Regístrate GRATIS para obtener tu dirección de Aeropost.',
          description:'Crea una cuenta Aeropost para tener una dirección en Estados Unidos, gratis.'
        },

        en_step2:{
          title:'Shop Online',
          description:'Shop your favorite online stores using the FREE U.S. address provided.'
        },
        es_step2:{
          title:'Compra',
          description:'Ingresa a tu tienda en línea favorita de Estados Unidos y compra utilizando tu nueva dirección de Aeropost.'
        },
        
        en_step3:{
          title:'Submit a Pre-alert',
          description:'Let us know when your package is on its way to our Miami fulfillment center.'
        },
        es_step3:{
          title:'Pre-alerta',
          description:'Una vez el vendedor te envíe la confirmación de despacho, pre-alerta tus compras en nuestro sitio antes de que lleguen a nuestro almacén en Miami.'
        },

        en_step4:{
          title:'Receive or Pick Up Package',
          description:'Pick up packages from your selected Aeropost store, smart parcel locker, or right from your front door!'
        },
        es_step4:{
          title:'Recibe',
          description:'En nuestras tiendas, lockers o en la puerta de tu casa.'
        },

      }
    },
    computed:{
      ...mapState(['lang']),
      hero(){return this.lang==='en'?this.en_hero:this.es_hero;},
      step1(){return this.lang==='en'?this.en_step1:this.es_step1;},
      step2(){return this.lang==='en'?this.en_step2:this.es_step2;},
      step3(){return this.lang==='en'?this.en_step3:this.es_step3;},
      step4(){return this.lang==='en'?this.en_step4:this.es_step4;},
      footerTitle(){ return this.lang==='en'?'We make shopping simple.':'Hacemos que tus compras sean simples.'; }

    }
    
  }
  </script>
  
  <style lang="scss" scoped>
  .item{
    @apply flex  items-center justify-center relative max-[880px]:flex-col max-[880px]:mb-7;
    .details{
        @apply max-w-[420px] max-[1100px]:max-w-[350px] flex flex-col 
               max-[880px]:items-center max-[880px]:text-center max-[880px]:m-5 max-[880px]:max-w-[720px];
    }
    .number{
        @apply font-extrabold text-[130px] text-yellow leading-none max-[880px]:text-[80px];
    }
    .title{
        @apply font-semibold text-blue text-[30px] mb-5 leading-none
         max-[880px]:mb-3;
    }
    .description{
        @apply text-[#333333] text-xl;
    }
  }
  .line1{
    @apply h-[360px] w-[560px] absolute -left-6 top-[180px] 
    max-xl:-left-12 max-xl:top-[147px] max-xl:h-[282px] max-xl:w-[454px]
    max-[880px]:hidden
    ;
  }
  .line2{
    @apply w-[430px] h-[210px] absolute -bottom-[188px] left-[170px]
   max-xl:left-[150px]  max-xl:-bottom-[138px]  max-xl:h-[134px] max-xl:w-[337px]
   max-[880px]:hidden;
  }
  .line3{
    @apply w-[520px] h-[356px] absolute left-0 top-[137px]
           max-xl:-left-[11px] max-xl:top-[88px] max-xl:w-[400px]
           max-[880px]:hidden;
  }
  
  </style>
