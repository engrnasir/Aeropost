<template>
    <div class="min-w-full">
      <TrinidadPopupVue v-if="showTrinidadPopup && !skip" @skip="skip=true"/>
      <BVIPopupVue v-if="showBVIPopup && !skip" @skip="skip=true"/>
      <BarbadosPopupVue v-if="showBarbadosPopup && !skip" @skip="skip=true"/>
      <GuatemalaPopupVue v-if="showGuatemalaPopup && !skip" @skip="skip=true"/>
      <CostaRicaPopupVue v-if="showCostaPopup && !skip" @skip="skip=true"/>

      <HeroTitleVue :title="hero.title" :description="hero.description"></HeroTitleVue>

      <div class="contact-container">
        <p v-html="content"></p>
      </div>
      <mapVue/>

      <button id="custom-gladly-chat-button" onclick="Gladly.show()" style="display: none;" > 
        <svg viewBox="10 6 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="button__icon">
          <g id="DialogueNew" fill="currentColor">
            <path d="M29.9996 39.3369H29.9996C28.9494 39.3228 27.9027 39.2117 26.873 39.0048C26.3867 38.9217 25.8882 39.0509 25.5034 39.3597C23.5353 40.8057 21.2244 41.714 18.7985 41.9951C18.3992 42.037 18.0415 41.7472 17.9997 41.3478C17.9817 41.1769 18.0249 41.0053 18.1214 40.8632H18.1214C19.059 39.6954 19.7322 38.3381 20.0947 36.885C20.1678 36.4882 20.0128 36.0839 19.6931 35.8378C16.1547 33.2089 14.0485 29.0767 14 24.6684C14 16.5773 21.1633 10 29.9996 10C38.8359 10 45.9992 16.5773 45.9992 24.6684C45.9992 32.7596 38.8361 39.3369 29.9996 39.3369H29.9996Z"></path>
          </g>
        </svg>
      </button>

      <FooterTitle :title="footerTitle" :bgBlue='true'></FooterTitle>
    </div>
  </template>

<script>


import HeroTitleVue from '@/components/header/HeroTitle.vue';
import FooterTitle from '@/components/footer/FooterTitle.vue';
import mapVue from '@/components/contact/map.vue';
import { mapMutations, mapState } from 'vuex';

  export default {
    name: 'Contactus',
    components:{
        HeroTitleVue,
        FooterTitle,
        mapVue,

        TrinidadPopupVue: ()=> import('@/components/popups/trinidadPopup.vue'),
        BVIPopupVue: ()=> import('@/components/popups/BVIPopup.vue'),
        BarbadosPopupVue: ()=> import('@/components/popups/BarbadosPopup.vue'),
        GuatemalaPopupVue: ()=> import('@/components/popups/GuatemalaPopup.vue'),
        CostaRicaPopupVue: ()=> import('@/components/popups/CostaRicaPopup.vue'),
    },
    data(){
      return{
        skip:false,
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
        'lang',
        'maps'
      ]),
      
      showTrinidadPopup(){ return this.$route.path.includes('POS') && this.$route.path.includes('contactus') },
      showGuatemalaPopup(){ return this.$route.path.includes('GUA') && this.$route.path.includes('contactus') },
      showCostaPopup(){ return this.$route.path.includes('SJO') && this.$route.path.includes('contactus') },
      showBVIPopup(){ return this.$route.path.includes('BHS') && this.$route.path.includes('contactus') },
      showBarbadosPopup(){ return this.$route.path.includes('BGI') && this.$route.path.includes('contactus') },

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
    methods:{
      ...mapMutations(['setSelectedCountry'])
    },
    mounted(){
      const gtw = this.$route.params.gtw
      this.maps.forEach(el=>{
        el.countries.forEach(c=> {
          if(c.gtw == gtw){
            this.setSelectedCountry(c)
          }
        })
      })


      // const script = document.createElement('script')
      // script.type = "text/javascript";
      // script.id = "salesforce"
      // script.setAttribute('data-currentcountry',"gatewayCode");
      // script.innerHTML = `document.getElementById('salesforce').setAttribute("data-sso", JSON.stringify(${});`;
      // document.body.appendChild(script)

      // let script1 = document.createElement('script');
      // script1.defer = 1;
      // script1.src = ()=>import('@/assets/js/chatbot_sso.js')
      // document.body.appendChild(script)


    }   
  }
  </script>
  <style lang="scss">
  .contact-container{
    @apply w-[96%] max-w-[980px] bg-white shadow-xl rounded-xl p-10 mx-auto relative z-20 -translate-y-10 text-center text-[#333333]
                   mb-20 max-md:px-4;     
  }

  .show-button {
            display: block !important;
        }

      #hide-widget {
            display: none !important;
        }
      .hide-widget {
            display: none !important;
        }



        /*
      You can position the custom Gladly button in the lower right corner
      */
        #custom-gladly-chat-button {
                  position: fixed;
                  padding: 15px;
                  right: 25px;
                  bottom: 25px;
                  border-radius: 50%;
                  cursor: pointer;
                  border: 1px solid rgba(0, 0, 0, .05);
                  background-color: #BCE6F7;
                  height: 72px;
                  width: 72px;
                  color: #153F8E;
                  box-shadow: 0 4px 20px 4px rgb(0 0 0 / 12%);
              }

        /*
      By default we hide the Ada and Gladly buttons
    */
        #ada-button-frame {
            display: none;
        }

        #custom-gladly-chat-button {
            display: none;
        }

        #custom-gladly-chat-button #with-active-chat {
            display: none;
        }

        #gladlyChat_container .minimizedChatButton.minimizedChatButtonSelector {
            display: none !important;
        }

    
  </style>
  