<template>
    <div class="min-w-full">
      <HeroTitleVue :title="hero.title" :description="hero.description"></HeroTitleVue>

      <div class="container">
        <p v-html="content"></p>
      </div>
      <mapVue/>

      <FooterTitle :title="footerTitle" :bgBlue='true'></FooterTitle>
    </div>
  </template>

<script>
import HeroTitleVue from '@/components/header/HeroTitle.vue';
import FooterTitle from '@/components/footer/FooterTitle.vue';
import mapVue from '@/components/contact/map.vue';
import { mapState } from 'vuex';

  export default {
    name: 'Contactus',
    components:{
        HeroTitleVue,
        FooterTitle,
        mapVue
    },
    data(){
      return{
        en_hero:{
          title:'Contact Us',
          description:'Looking for our store locations or hours?',
        },
        es_hero:{
          title:'Contacta con nosotros',
          description:'¿Busca las ubicaciones u horarios de nuestras tiendas?',
        },
        en_content:`
            Read on for the best ways to find what you need. <br><br>
            <b>Need to track an order or package? </b><br>
            Log in to your account here to check order/package status. <br><br>
            <b>Are you looking for a product in aeropost.com?</b><br>
            Use our search bar located at the center of our website. You can either copy and paste the link of the item you want to buy on our search bar or type the name of the product you want to buy. Still not convinced? Click here and we’ll show you how to shop! And remember, if you don’t like it, just return it!<br><br>
            <b>Looking for our store locations and/or hours?</b><br>
            Pick the store you want to visit in the drop down menu below.<br><br>
            <b>Need a little more help?</b><br>
            Contact us through our online chatbot by clicking on the chat icon , located on the bottom right corner of this page.<br><br>
        `,
        es_content:`
            Siga leyendo para conocer las mejores maneras de encontrar lo que necesita. <br><br>
            <b>¿Necesita rastrear un pedido o paquete? </b><br>
            Inicie sesión en su cuenta aquí para verificar el estado del pedido/paquete. <br><br>
            <b>¿Está buscando un producto en aeropost.com?</b><br>
            Utilice nuestra barra de búsqueda ubicada en el centro de nuestro sitio web. Puede copiar y pegar el enlace del artículo que desea comprar en nuestra barra de búsqueda o escribir el nombre del producto que desea comprar. ¿Todavía no está convencido? ¡Haz clic aquí y te mostraremos cómo comprar! Y recuerda, si no te gusta, ¡devuélvelo!<br><br>
            <b>¿Busca las ubicaciones y/u horarios de nuestras tiendas?</b><br>
            Elija la tienda que desea visitar en el menú desplegable a continuación.<br><br>
            <b>¿Necesitas un poco más de ayuda?</b><br>
            Comuníquese con nosotros a través de nuestro chatbot en línea haciendo clic en el ícono de chat , ubicado en la esquina inferior derecha de esta página.<br><br>
        `,
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
        return this.lang==='en'?'We make shopping simple.':'Hacemos que tus compras sean simples.';
      },
      content(){
        return this.lang==='en'? this.en_content:this.es_content;
      }
    },    
  }
  </script>
  <style lang="scss" scoped>
  .container{
    @apply w-[96%] max-w-[980px] bg-white shadow-xl rounded-xl p-10 mx-auto relative z-20 -translate-y-10 text-center text-[#333333]
                   mb-20 max-md:px-4;     
  }

    
  </style>
  