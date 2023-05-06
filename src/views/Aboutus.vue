<template>
    <div class="min-w-full">
      <HeroTitleVue :title="hero.title"></HeroTitleVue>

      <div class="mcontainer">
        <p class="text-base text-center text-[#333333] mb-12" v-for="(p,i) in details" :key="i" v-html="p"></p>       
      </div>
      
      <FooterTitle :title="footerTitle" :bgBlue='true'></FooterTitle>
    </div>
  </template>

<script>

import HeroTitleVue from '@/components/header/HeroTitle.vue';
import FooterTitle from '@/components/footer/FooterTitle.vue';

import { mapState } from 'vuex';

  export default {
    name: 'AboutUs',
    components:{
        HeroTitleVue,
        FooterTitle,
    },
    data(){
      return{
        en_hero:{
          title:'About Us',
          description:'The easiest way to shop from your favourite online stores.',
        },
        es_hero:{
          title:'Sobre nosotros',
          description:'La forma más fácil de comprar en tus tiendas online favoritas.',
        },
        en_details:[
          "Our company was founded in 1988 as a shipping and logistics solution for US expats living in Costa Rica. Today, our company an asset-based vertically integrated e-commerce provider for Latin America, Central America and the Caribbean providing end-to-end services that facilitate cross border purchases, payments and deliveries in 38 countries. We employ more than 1,000 people from 45 countries and process tens of thousands of items each day for millions of consumers across the LATAM region.",
          "Aeropost has established itself as one of the most reputable and recognizable brand names in the entire region, yet the company still has a local touch.",
          "Aeropost has local business entities, staff, assets and infrastructure, local customer service, local branded retail shops an an innovative local payments platform that allows buyers to easily purchase from US sellers.",
          "Aeropost knows its customers and we are expert in the unique business demands of each of our markets. From duty calculation to customs clearance, international shipping to last mile delivery, and marketing to local payments, our expertise is unrivaled.",
          "Our corporate headquarters in Miami serves as our central operations center and includes our 177,000 square foot International Logistics Hub. As an Independent Air Carrier (IAC) and Commercial Mail Receiving Agency (CMRA), our Miami hub is in full compliance with US Department of Homeland Security, Transportation Safety Administration and USPS regulations.",
          "We are certified to handle parcels and cargo of all types including hazardous materials and dangerous goods. Our facility has a state-of-the-art security and monitoring system to protect against shrinkage.",
        ],
        es_details:[
          "Aeropost se fundó en 1988 como una solución de envío y logística para expatriados estadounidenses que viven en Costa Rica. Hoy, la compañía es un proveedor de comercio integrado verticalmente basado en activos para América Latina y el Caribe que brinda servicios de extremo a extremo que facilitan el cruce de fronteras. compras, pagos y entregas en 38 países. Empleamos a más de 1000 personas de 45 países y procesamos decenas de miles de artículos cada día para millones de consumidores en toda la región de LATAM",
          "Aeropost se ha convertido en una de las marcas más visibles y reconocibles de América Latina y es verdaderamente una empresa local en toda la región. Cuenta con entidades comerciales, personal, activos e infraestructura locales, servicio al cliente local, tiendas minoristas de marca y una plataforma de pagos local innovadora que permite a los compradores comprar fácilmente a vendedores estadounidenses.",
          "Aeropost conoce a sus clientes y es experta en las demandas comerciales únicas de cada uno de sus mercados. Desde el cálculo de aranceles hasta el despacho de aduanas, desde el envío internacional hasta la entrega en la última milla y desde el marketing hasta los pagos locales, la experiencia de Aeropost no tiene rival",
          "La sede corporativa de Aeropost en Miami sirve como nuestro centro de operaciones central e incluye nuestro Centro de Logística Internacional de 177,000 pies cuadrados. Como Transportista Aéreo Independiente (IAC) y Agencia de Recepción de Correo Comercial (CMRA), el centro de Miami cumple con las normas del Departamento de Regulaciones de Seguridad Nacional, Administración de Seguridad en el Transporte y USPS.",
          "Estamos certificados para manejar paquetes y carga de todo tipo, incluidos materiales peligrosos y mercancías peligrosas. La instalación cuenta con un sistema de seguridad y monitoreo de última generación para proteger contra la merma",
        ]
      }
    },
    computed:{
      ...mapState([
        'selectedCountry',
        'lang'
      ]),
      hero(){
        return this.lang==='en'?this.en_hero:this.es_hero;
      },
      footerTitle(){
        return this.lang==='en'?'We Make Shopping Simple!':'Hacemos fáciles tus compras.';
      },
      details(){
        return this.lang==='en'? this.en_details : this.es_details;
      }
    },    
  }
  </script>
  <style lang="scss" scoped>
  .mcontainer{
    @apply w-[96%] max-w-[980px] p-10 mx-auto;     
  }

    
  </style>
  