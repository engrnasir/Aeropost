<template>
    <div class="wrapper">
      <div class="sm-cards">
        <router-link :to="`/${selectedCountry.gtw}/${lang}/${card.url}`" class="card-item" v-for="(card, index) in cards" :key="index">
            <img :src="require(`@/assets/images/${card.img}`)" :alt="card.title" class="w-16 mb-2">
            <p class="text-blue text-base text-center px-2">{{card.title}}</p>
        </router-link>
      </div>
      
        <h2 class="main-heading">
         {{ this.lang==='en'? 'Why We’re The Total Package?':'¿Por qué comprar con nosotros?' }} 
        </h2>
      <div class="row cards">
          <div class="card" v-for="(item, i) in benefitItems" :key="i">
              <img :src="require(`@/assets/images/${item.img}`)" :alt="item.title" class="w-9 mb-5 max-md:mb-3">
              <p class="text-blue font-medium text-[26px] max-md:text-xl mb-4 max-md:mb-2 w-max">{{ item.title }}</p>
              <p class="text-base text-[#333333] leading-5">{{ item.description }}</p>
          </div>
      </div>
      <div class="flex justify-center">
          <router-link :to="`/${selectedCountry.gtw}/${lang}/benefits`" class="more-btn">
            {{ this.lang==='en'? 'More Reasons To Shop':'Más razones para comprar' }}  
           </router-link>
      </div>
    </div>
  </template>
  
  <script>
import { mapState } from 'vuex'
  export default {
      data(){
        return{
            en_cards:[
                {url:``, img:'prealert.png', title:'Submit Pre-Alert'},
                {url:'', img:'payment.png', title:'Make Payment'},
                {url:``, img:'track1.png', title:'Track Packages'},
            ],
            es_cards:[
                {url:``, img:'prealert.png', title:'Pre-Alertar'},
                {url:'', img:'payment.png', title:'Pagar'},
                {url:``, img:'track1.png', title:'Rastrear'},
            ],

            en_benefitItems:[
                {img:'fast.png',title:'Security & Reliability',description:'Last-mile delivery with the highest flight frequency in the region.'},
                {img:'secure.png',title:'Secure Transactions',description:'We use the latest technology to ensure that your transactions are secure.'},
                {img:'return.png',title:'Easy Returns',description:'If you are not satisfied with your purchase, we make it simple to return it.'},
                {img:'track.png',title:'Track Your Packages',description:'Receive up-to-date tracking updates for your packages.'},
            ],
            es_benefitItems:[
                {img:'fast.png',title:'Rápido y confiable',description:'Tenemos la mayor frecuencia de vuelos de la región.'},
                {img:'secure.png',title:'Pagos seguros',description:'Utilizamos la última tecnología para garantizar un ambiente de pagos seguro.'},
                {img:'return.png',title:'Devoluciones fáciles',description:'Si no estás satisfecho con tu compra, te facilitamos la devolución, sin costo adicional.'},
                {img:'track.png',title:'Ahorra en impuestos',description:'Ahorra el 7% de impuesto de ventas de Estados Unidos al usar tu dirección de Aeropost.'},
            ]
        }
      },
      computed:{
        ...mapState(['lang','selectedCountry']),
        cards(){
            return this.lang==='en'? this.en_cards : this.es_cards;
        },
        benefitItems(){
            return this.lang==='en'? this.en_benefitItems : this.es_benefitItems;
        }
      },
  }
  </script>
  
  
  <style lang="scss" scoped>
  .wrapper{
      @apply min-w-full bg-[#eaf8ff99] pb-8 relative z-20 mb-9 max-md:bg-[#EAF8FF];
  
      .sm-cards{
          @apply flex items-center justify-center -translate-y-14 relative z-20 max-sm:-translate-y-10;
  
          .card-item{
              @apply w-[200px] h-[140px] p-2 mx-6 flex flex-col justify-center items-center rounded-xl shadow-lg bg-gradient-to-t from-[#fff] to-[#EBF6FB] cursor-pointer
                     max-md:w-28 max-md:h-28 max-md:mx-[6px] max-md:p-1;
              img{
                  @apply max-md:w-8 max-md:mb-2;
              }
              p{
                  @apply max-md:text-[10px] max-md:leading-3;
              }
          }
      }
  
      .main-heading{
          @apply text-blue font-medium text-4xl mb-12 px-3 text-center;
      }
      .cards{
          @apply mb-14 px-5 grid grid-cols-4 justify-items-center gap-5
          max-2xl:grid-cols-2 
          max-[600px]:grid-cols-1
          ;
  
          .card{
              @apply max-w-[250px] w-full flex flex-col items-center text-center
                  max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center 
              ;
          }
      }
      .more-btn{
        @apply px-12 py-[10px] rounded-[40px] text-xl font-medium bg-yellow text-blue cursor-pointer transition-all duration-200 hover:bg-blue hover:text-white;
      }
  }
  
  
  </style>
