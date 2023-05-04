<template>
    <div class="container min-w-full bg-[#F5F5F5]">
      
      <HeroTitleVue :title="hero.title" utext="" :description="hero.description" :showSignUp="false"></HeroTitleVue>
      <!--  -->
      <div class="w-[95%] max-w-[940px] bg-white shadow-2xl rounded-xl p-10 mx-auto -translate-y-12 grid grid-cols-2 max-sm:grid-cols-1 gap-[80px] gap-y-10">
        <div v-for="(item, i) in cards" :key="i">
            <img :src="require(`@/assets/images/${item.img}`)" :alt="item.title" class="h-10 mb-4">
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
          description:'Aeropost tiene una tiene más de tres décadas de experiencia en envíos a más de 30 países en el Caribe, Centro y Suramérica.',
        },
        simple_en_cards:[
            {img:'save.png',title:'Save on Taxes', description:'Save 7% U.S. Sales Tax when using your Aeropost address.'},
            {img:'secure.png',title:'Secure Transactions', description:'We use the latest technology to ensure that your transactions are secure.'},
            {img:'return.png',title:'Easy Returns', description:'If you are not satisfied with your purchase, we make it simple to return it.'},
            {img:'track.png',title:'Track Your Packages ', description:'Receive up-to-date tracking updates for your packages.'},
            {img:'locker.png', title: 'Free Locker Pick Up', description:'Our smart parcel lockers are conveniently placed and simple to use. In as little as 23 seconds, you can access your package from any of our smart parcel lockers.'},
            {img:'credit-card.png',title:'Multiple Payment Options', description:'We have multiple payment options: pay with a credit or debit card, Paypal or even with cash at our stores in select countries.'},
            {img:'hand.png',title:'Weight Based Shipping', description:'We charge based on weight, not volume.'},
            {img:'fast.png',title:'Speed & Reliability', description:'Last-mile delivery with the highest flight frequency in the region.'},
        ],
        specific_en_cards:[
            {img:'save.png',title:'Save on Taxes', description:'Save 7% U.S. Sales Tax when using your Aeropost address.'},
            {img:'secure.png',title:'Secure Transactions', description:'We use the latest technology to ensure that your transactions are secure.'},
            {img:'return.png',title:'Easy Returns', description:'If you are not satisfied with your purchase, we make it simple to return it.'},
            {img:'track.png',title:'Track Your Packages ', description:'Receive up-to-date tracking updates for your packages.'},
            {img:'hub.png', title: 'Hub Pick Up ', description:'Instead of having a package delivered to your home or business address, you can select an Aeropost Hub location. Then, you can pick up your package at a time that suits you.'},
            {img:'credit-card.png',title:'Multiple Payment Options', description:'We have multiple payment options: pay with a credit or debit card, Paypal or even with cash at our stores in select countries.'},
            {img:'hand.png',title:'Weight Based Shipping', description:'We charge based on weight, not volume.'},
            {img:'fast.png',title:'Speed & Reliability', description:'Last-mile delivery with the highest flight frequency in the region.'},
        ],
        simple_es_cards:[
            {img:'save.png', title:'Ahorra en impuestos',  description:'Ahorra el 7% de impuesto de ventas de Estados Unidos al usar tu dirección de Aeropost.'},
            {img:'secure.png',title:'Pagos seguros', description:'Utilizamos la última tecnología para garantizar un ambiente de pago seguro.'},
            {img:'return.png',title:'Devoluciones fáciles', description:'Si no estás satisfecho con tu compra, te facilitamos la devolución, sin costo adicional.'},{img:'track.png',title:'Rastreo de paquetes',description:'Rastrea tus paquetes desde nuestra página web. Recibe actualizaciones automáticas a tu correo electrónico.'},
            {img:'locker.png',title:'Retiro gratis en lockers', description:'Nuestros lockers inteligentes para paquetes están convenientemente ubicados y son fáciles de usar. En tan solo 23 segundos, puedes acceder a tu paquete desde cualquiera de nuestros lockers inteligentes.'},
            {img:'credit-card.png',title:'Opciones de pago', description:'Paga como quieras. Ofrecemos pago con tarjeta de débito, crédito o PayPal; o paga en efectivo en nuestras tiendas.'},
            {img:'hand.png',title:'Cobramos por el peso real de tu paquete, no su tamaño', description:'¿No te importa el tamaño de la caja con la que el proveedor empaca lo que compraste? A nosotros tampoco. Te cobramos por el peso real, no por volumen.'},
            {img:'fast.png',title:'Rápido y confiable', description:'Tenemos la mayor frecuencia de vuelos de la región.'},
        ],
        specific_es_cards:[
            {img:'save.png', title:'Ahorra en impuestos',  description:'Ahorra el 7% de impuesto de ventas de Estados Unidos al usar tu dirección de Aeropost.'},
            {img:'secure.png',title:'Pagos seguros', description:'Utilizamos la última tecnología para garantizar un ambiente de pago seguro.'},
            {img:'return.png',title:'Devoluciones fáciles', description:'Si no estás satisfecho con tu compra, te facilitamos la devolución, sin costo adicional.'},{img:'track.png',title:'Rastreo de paquetes',description:'Rastrea tus paquetes desde nuestra página web. Recibe actualizaciones automáticas a tu correo electrónico.'},
            {img:'hub.png',title:'Recogida del cubo', description:'En lugar de recibir un paquete en la dirección de su casa o negocio, puede seleccionar una ubicación de Aeropost Hub. Luego, puede recoger su paquete en el momento que más le convenga.'},
            {img:'credit-card.png',title:'Opciones de pago', description:'Paga como quieras. Ofrecemos pago con tarjeta de débito, crédito o PayPal; o paga en efectivo en nuestras tiendas.'},
            {img:'hand.png',title:'Cobramos por el peso real de tu paquete, no su tamaño', description:'¿No te importa el tamaño de la caja con la que el proveedor empaca lo que compraste? A nosotros tampoco. Te cobramos por el peso real, no por volumen.'},
            {img:'fast.png',title:'Rápido y confiable', description:'Tenemos la mayor frecuencia de vuelos de la región.'},
        ]
      }
    },
    computed:{
      ...mapState(['lang', 'selectedCountry']),
      hero(){return this.lang==='en'? this.en_hero:this.es_hero},
      invalidLocker(){
        return this.selectedCountry.gtw ==='SCL'|| this.selectedCountry.gtw ==='BOG'|| this.selectedCountry.gtw ==='LIM';
      },
      en_cards(){
        return this.invalidLocker?  this.specific_en_cards : this.simple_en_cards
      },
      es_cards(){
        return this.invalidLocker?  this.specific_es_cards : this.simple_es_cards
      },
      cards(){return this.lang==='en'? this.en_cards:this.es_cards},
      footerTitle(){
        return this.lang==='en'?'We make shopping simple.':'Hacemos que tus compras sean simples.';
      },
      
    }
    
  }
  </script>
  <style lang="scss" scoped>
  .container{
  
  
  }
  </style>
  