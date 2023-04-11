<template>
    <div class="container min-w-full bg-[#F5F5F5]">
      <HeroTitleVue :title="hero.title" utext="" :description="hero.description" :showSignUp="false"></HeroTitleVue>
      <!--  -->
      <div class="w-[95%] max-w-[940px] bg-white shadow-2xl rounded-xl p-10 mx-auto -translate-y-12 grid grid-cols-2 max-sm:grid-cols-1 gap-[80px] gap-y-10">
        <div v-for="(item, i) in cards" :key="i">
            <img :src="require(`@/assets/images/${item.img}`)" alt="" class="w-10 mb-4">
            <h3 class="font-bold text-2xl text-blue mb-4">{{ item.title }}</h3>
            <p class="text-sm text-[#333333]" >{{ item.description }}</p>
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
    name: 'BenefitsView',
    components:{
      HeroTitleVue,
      FooterTitle,
    },
    data(){
      return{
        en_hero:{
          title:'Why Aeropost',
          description:'Aeropost has a proven track record spanning over three decades of providing efficient courier services and competitive shipping rates throughout the Caribbean, Latin, and Central American region.',
        },
        es_hero:{
          title:'¿Por qué Aeropost?',
          description:'Aeropost tiene una trayectoria comprobada que abarca más de tres décadas brindando servicios de mensajería eficientes y tarifas de envío competitivas en toda la región del Caribe, América Latina y América Central.',
        },
        en_cards:[
            {img:'save.png',title:'Save on Taxes', description:'Save 7% U.S. Sales Tax when using your Aeropost address.'},
            {img:'secure.png',title:'Secure Transactions', description:'We use the latest technology to ensure that your transactions are secure.'},
            {img:'return.png',title:'Easy Returns', description:'If you are not satisfied with your purchase, we make it simple to return it.'},
            {img:'track.png',title:'Track Your Packages ', description:'Receive up-to-date tracking updates for your packages.'},
            {img:'locker.png',title:'Free Locker Pick Up', description:'Our smart parcel lockers are conveniently placed and simple to use. In as little as 23 seconds, you can access your package from any of our smart parcel lockers.'},
            {img:'credit-card.png',title:'Multiple Payment Options', description:'We have multiple payment options: pay with a credit or debit card, Paypal or even with cash at our stores in select countries.'},
            {img:'hand.png',title:'Weight Based Shipping', description:'We charge based on weight, not volume.'},
            {img:'fast.png',title:'Speed & Reliability', description:'Last-mile delivery with the highest flight frequency in the region.'},
        ],
        es_cards:[
            {img:'save.png',title:'Ahorra en impuestos', description:'Ahorra un 7 % en el impuesto sobre las ventas de EE. UU. al usar tu dirección de Aeropost.'},
            {img:'secure.png',title:'Transacciones seguras', description:'Utilizamos la última tecnología para garantizar que tus transacciones sean seguras.'},
            {img:'return.png',title:'Devoluciones fáciles', description:'Si no estás satisfecho con tu compra, te facilitamos la devolución.'},
            {img:'track.png',title:'Seguimiento de tus paquetes ', description:'Recibe actualizaciones de seguimiento actualizadas para tus paquetes.'},
            {img:'locker.png',title:'Retiro gratis en lockers', description:'Nuestros lockers inteligentes para paquetes están convenientemente ubicados y son fáciles de usar. En tan solo 23 segundos, puedes acceder a tu paquete desde cualquiera de nuestros lockers inteligentes.'},
            {img:'credit-card.png',title:'Múltiples opciones de pago', description:'Al finalizar la compra, puedes pagar con una de las múltiples opciones de pago, incluida una tarjeta de crédito o débito, PayPal o incluso en efectivo en tiendas seleccionadas.'},
            {img:'hand.png',title:'Envío basado en el peso, no en el volumen', description:'Cobramos por peso, no por volumen.'},
            {img:'fast.png',title:'Rápido y confiable', description:'Entrega de última milla con la mayor frecuencia de vuelos de la región.'},
        ]
      }
    },
    computed:{
      ...mapState(['lang']),
      hero(){return this.lang==='en'? this.en_hero:this.es_hero},
      cards(){return this.lang==='en'? this.en_cards:this.es_cards},
      footerTitle(){
        return this.lang==='en'?'We make shopping simple.':'Hacemos que tus compras sean simples.';
      }
    }
    
  }
  </script>
  <style lang="scss" scoped>
  .container{
  
  
  }
  </style>
  