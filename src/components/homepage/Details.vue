<template>
    <div>
      <div class="row wrapper max-md:flex-col">
          <img src="@/assets/images/lady-prealert.png" alt="lady-prealert" class="image">
          <div class="details-wrapper">
              <p class="text-blue mb-4 leading-none text-3xl uppercase">{{ prealert.title }}</p>
              <h3 class="main-heading">{{ prealert.description }}</h3>
              <p class="snippet" v-html="prealert.details"></p>
          </div>
      </div>
  
      <div class="row wrapper flex-row-reverse max-md:flex-col">
          <img src="@/assets/images/autopay2.png" alt="autopay2" class="image1">
          <div class="details-wrapper">
              <p class="text-blue mb-4 leading-none text-3xl uppercase">{{autopay.title}}</p>
              <h3 class="main-heading">{{autopay.description}}</h3>
              <p class="snippet " v-html="autopay.details"></p>
          </div>
      </div>
    </div>
  </template>
  
  <script>
import { mapState } from 'vuex'
  export default {
    data(){
      return{
        en_prealert:{
          title:'PRE-ALERT',
          description:'Process your package much more smoothly',
          details:'After placing an order using your FREE U.S. address, <a href="" class="text-blue">Submit Pre-alert</a> to let us know that your package is on its way to our Miami fulfillment center. This step is crucial in ensuring that packages are processed as smoothly and efficiently as possible.'
        },
        es_prealert:{
          title:'PRE-ALERTA',
          description:'Recibe tus compras más rápido.',
          details:'Una vez el vendedor te envíe la confirmación de despacho, pre-alerta tus compras en nuestro sitio antes de que lleguen a nuestro almacén en Miami. Este paso nos ayudará a entregarte tus paquetes más rápido. Si ya tienes un envío en camino, prealerta <a href="" class="text-blue">aquí</a>.'
        },
        
        en_autopay:{
          title:'AUTOPAY',
          description:'Less time at checkout, more time shopping online.',
          details:'Streamline your online shopping experience even more when you <a href="" class="text-blue">ENROLL IN AUTOPAY</a> at aeropost.com. Enabling the AutoPay function will allow us to automatically charge the cost of your package to your saved  credit card or debit card when it arrives at our Miami fulfillment center.'
        },
        es_autopay:{
          title:'AUTOPAGO',
          description:'Menos tiempo pagando, más tiempo comprando en línea.',
          details:'A nadie le gusta pagar. Suscríbete a nuestro servicio de Autopago y olvídate de los pagos manuales. Los cargos de tus envíos serán cobrados automáticamente a la tarjeta que registres con nosotros. Tus envíos nunca se detienen.'
        },

      }
    },
    computed:{
      ...mapState(['lang']),
      prealert(){
        return this.lang==='en'?this.en_prealert:this.es_prealert;
      },
      autopay(){
        return this.lang==='en'?this.en_autopay:this.es_autopay;
      }
    }
  
  }
  </script>
  
  <style lang="scss" scoped>
  .wrapper{
    @apply flex justify-center items-center px-5 pt-12  relative mb-10
        max-md:py-6 max-md:mb-8
            ;
  }
  .main-heading{
    @apply font-bold text-[44px] max-md:text-3xl leading-[44px] text-blue mb-6;
  }
  .snippet{
    @apply text-[#737373] text-[22px] leading-8;
  }
  .bg-layer{
    @apply bg-[#F1F9FD] min-h-full w-[75%] rounded-l-2xl rounded-b-2xl absolute top-0 right-0 z-0
      max-md:hidden
    ;
  }
  .image{
    @apply w-[442px] mr-[128px] relative z-10
      max-lg:w-[300px] max-lg:mr-16
      max-md:mr-0 max-md:mb-10
      ;
  }
  .image1{
    @apply w-[542px] relative z-10
      max-lg:w-[300px] max-lg:mr-16
      max-md:mr-0 max-md:mb-10
      ;
  }
  .details-wrapper{
    @apply max-w-[530px] relative z-10
  
    ;
  }
  
  </style>
