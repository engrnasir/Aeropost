<template>
    <div class="min-w-full">
    
      <HeroTitleVue :title="hero.title" :description="hero.description"></HeroTitleVue>

      <div class="contact-container">
        <p v-html="content"></p>
      </div>
      <mapVue/>

      <button id="custom-gladly-chat-button" onclick="Gladly.show()"  >
        hyyy 
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
    data(){
      return {
      }
    },
    components:{
        HeroTitleVue,
        FooterTitle,
        mapVue,
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
        'lang',
        'maps'
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

      let lang = this.lang;
      let userAccount = '';
      let userName = '';
      
      let ssoChat1 = {
        "CustomerInformation": { "Account": 9,

        "Email": "test@aeropost.com", "FirstName": "Test", "Gateway": {

        "WebCode": "BHS" },

        "LastName1": "test2",

        "LastName2": "test3"
          }
      }

      
      const mscript = document.createElement('script');
      mscript.type = "text/javascript"
      mscript.id = "salesforce"
      mscript.setAttribute('data-currentcountry',"gatewayCode")
      mscript.setAttribute('data-sso',JSON.stringify(ssoChat1))
      document.body.appendChild(mscript);

      const script1 = document.createElement('script');
      script1.type = "text/javascript"
      document.body.appendChild(script1);
      
      var userInfo;
      var currentUrl;
      var gladlyInit = false;
      var liveChatEnded = false;
      var first_name = "";
      var email = "";
      var sidekickId = "";
      var csatAnswerId = "";
      var noAgentAnswerId = "";
      var sidekickAppId = "";

      
  function setLastChatOpened(name) {
      sessionStorage.setItem('lastChatOpened', name);
  }

  function hideAda() {
      console.log("hide-ada")
      adaEmbed.getInfo().then(function (info) {
          if (info.isChatOpen === true) {
              adaEmbed.toggle();
              const adaButton = document.querySelector("#ada-button-frame");
              adaButton.classList.remove("show-button");
          }
      });
  }

  function displayAda() {
      adaEmbed.getInfo().then(function (info) {
          if (info.isChatOpen === closed) {
              const adaButton = document.querySelector("#ada-button-frame");
              adaEmbed.toggle();
              adaButton.classList.add("show-button");
              //setLastChatOpened('ada');
          }
      });
  }

  function checkLastChatOpened() {
      let lastChatOpened = sessionStorage.getItem('lastChatOpened');

      if (lastChatOpened === 'gladly') {
          startGladly();
      } else {
          const adaButton = document.querySelector("#ada-button-frame");
          adaButton.classList.add("show-button");
      }
  }

  function startGladly(first_name, email, sidekickId) {
      if (gladlyInit) {
          console.log("Gladly Session Already Open")

          var gladlyWidget = document.getElementById("gladlyChat_container hide-widget");
              if(gladlyWidget){
                  //alert("hidden widget")
                  console.log("hidden widget")
                  //alert(gladlyWidget)
                  gladlyWidget.id = "gladlyChat_container";
              }


          if (Gladly.getAvailability() == "AVAILABLE") {
              console.log("Gladly Session Already Open and Agent online")
              Gladly.show();
              setLastChatOpened('gladly');
              return;
          } else {
              // REOPEN - No Agents Avaliable
              console.log("Reopen Chat - NO AGENTS")
              //alert(csatAnswerId)
              window.adaEmbed.reset({
                  resetChatHistory: false,
                  greeting: csatAnswerId
              });

                setTimeout(() => {
                  displayAda();
              }, 1000);

              return
          }
      }

      function getCookie(sidekick) {
          var cookieArr = document.cookie.split(";");
          for (var i = 0; i < cookieArr.length; i++) {
              var cookiePair = cookieArr[i].split("=");
              if (sidekick == cookiePair[0].trim()) {
                  return decodeURIComponent(cookiePair[1]);
              }
          }
          return null;
      }


      function checkCookie() {
          if (getCookie("sidekickAppId") == null || getCookie("sidekickAppId") == "undefined") {
              document.cookie = `sidekickAppId=${sidekickId}`;
              document.cookie = `csatAnswerId=${csatAnswerId}`;
              return sidekickId

          } else {
              return getCookie("sidekickAppId")

          }
      }


      Gladly.init({
          appId: checkCookie(),
          autoShowButton: false
      }).then(function () {
          gladlyInit = true;

          console.log(Gladly.getAvailability())
          hideAda();
          if (Gladly.getAvailability() == "AVAILABLE") {

              let lastChatOpened = sessionStorage.getItem('lastChatOpened');
              if (lastChatOpened !== 'gladly') {
                  Gladly.clearUser().then(() => {
                      let user = {
                          //these are ada variable names - if Gladly asks for name and email confirm you have the correct values
                          name: first_name,
                          email: email
                      };
                      Gladly.setUser(user);
                  });
              }

              Gladly.show();
              setLastChatOpened('gladly');

          } else {
              console.log("NO AGENTS - new chat")

              console.log(noAgentAnswerId)
              window.adaEmbed.reset({
                  resetChatHistory: false,
                  greeting: noAgentAnswerId
              });

              setTimeout(() => {
                  displayAda();
              }, 1000);



          }

          Gladly.on('sidekick:closed', function () {
              const gladlyButton = document.getElementById('custom-gladly-chat-button');
              if (liveChatEnded) {
                  gladlyButton.classList.remove('show-button');
                  displayAda();
              } else {
                  gladlyButton.classList.add('show-button');
              }
          });

          Gladly.on('conversation:ended', function () {
              liveChatEnded = true;
              setLastChatOpened('ada');
              const gladlyButton = document.getElementById('custom-gladly-chat-button');
              gladlyButton.classList.remove('show-button');

              window.adaEmbed.reset({
                  resetChatHistory: false,
                  greeting: getCookie("csatAnswerId")
              });

              setTimeout(() => {
                  displayAda();

                const gladlyButton = document.querySelector("#gladlyChat_container");
                  gladlyButton.setAttribute('id', 'gladlyChat_container hide-widget')
                  liveChatEnded = true;
              }, 1000);



          });

          Gladly.on('conversation:started', function () {
              liveChatEnded = false;
          });

          Gladly.on('sidekick:opened', function () {
              hideAda();
          });

      }).catch(function (error) {
          displayAda();
          console.log('error:', error);

      });
  }

  try {

      currentUrl = window.location.pathname;

  } catch (ex) {

      currentUrl = 'empty';
  }


    try {

        userInfo = 'empty';
        var ssoChat = JSON.parse(document.getElementById('salesforce').getAttribute("data-sso"));
        if (ssoChat != null && ssoChat != '') {
            userInfo = ssoChat;
        }
    } catch (err) {
        userInfo = 'empty';
    }

    var userData;
    if (userInfo == 'empty') {
        var isLogged;
        if ('userName' != "")
            isLogged = "yes";
        else
            isLogged = "no";
        var countryCode = document.getElementById('salesforce').getAttribute("data-currentcountry");
        if (countryCode.length > 0) {
            countryCode = countryCode;
        } else {
            countryCode = '';
        }
        userData = {
            api: 'usrData',
            countryCode: countryCode,
            languageCode: 'en',
            environmentType: 'PRD',
            isLogged: isLogged,
            firstName: 'userName',
            lastName: '',
            email: '',
            accountNumber: userAccount
        };
    } else {
        userData = {
            api: 'usrData',
            countryCode: userInfo.CustomerInformation.Gateway.WebCode,
            languageCode: lang,
            environmentType: 'PRD',
            isLogged: 'yes',
            firstName: userInfo.CustomerInformation.FirstName,
            lastName: userInfo.CustomerInformation.LastName1 + " " + userInfo.CustomerInformation.LastName2,
            email: userInfo.CustomerInformation.Email,
            accountNumber: userInfo.CustomerInformation.Account.toString()
        };
    }
    console.log('Version 1.0 bot');
    console.log("Iniciando Variables");
    switch (userData.countryCode) {
        default:
            userData.languageCode = "en";
            break;

        case "ANU":
            userData.languageCode = "en";
            break;

        case "AUA":
            userData.languageCode = "en";
            break;

        case "AXA":
            userData.languageCode = "en";
            break;

        case "BBQ":
            userData.languageCode = "en";
            break;

        case "BGI":
            userData.languageCode = "en";
            break;

        case "BHS":
            userData.languageCode = "en";
            break;

        case "BOG":
            userData.languageCode = "es";
            break;

        case "BOL":
            userData.languageCode = "es";
            break;

        case "BZE":
            userData.languageCode = "en";
            break;

        case "CCS":
            userData.languageCode = "es";
            break;

        case "CRU":
            userData.languageCode = "en";
            break;

        case "CUR":
            userData.languageCode = "en";
            break;

        case "DOM":
            userData.languageCode = "en";
            break;

        case "ECU":
            userData.languageCode = "es";
            break;

        case "EIS":
            userData.languageCode = "en";
            break;

        case "FDF":
            userData.languageCode = "en";
            break;

        case "GCM":
            userData.languageCode = "en";
            break;

        case "GEO":
            userData.languageCode = "en";
            break;

        case "GND":
            userData.languageCode = "en";
            break;

        case "GUA":
            userData.languageCode = "es";
            break;

        case "KIN":
            userData.languageCode = "en";
            break;

        case "LIM":
            userData.languageCode = "es";
            break;

        case "MGA":
            userData.languageCode = "es";
            break;

        case "MNI":
            userData.languageCode = "en";
            break;

        case "NEV":
            userData.languageCode = "en";
            break;

        case "PAP":
            userData.languageCode = "en";
            break;

        case "POS":
            userData.languageCode = "en";
            break;

        case "PTP":
            userData.languageCode = "en";
            break;

        case "PTY":
            userData.languageCode = "es";
            break;

        case "SAL":
            userData.languageCode = "es";
            break;

        case "SAP":
            userData.languageCode = "es";
            break;

        case "SBH":
            userData.languageCode = "en";
            break;

        case "SCL":
            userData.languageCode = "es";
            break;

        case "SDQ":
            userData.languageCode = "es";
            break;

        case "SJO":
            userData.languageCode = "es";
            break;

        case "SKB":
            userData.languageCode = "en";
            break;

        case "SLU":
            userData.languageCode = "en";
            break;

        case "STT":
            userData.languageCode = "en";
            break;

        case "STX":
            userData.languageCode = "en";
            break;

        case "SVD":
            userData.languageCode = "en";
            break;

        case "SXM":
            userData.languageCode = "en";
            break;

        case "TCA":
            userData.languageCode = "en";
            break;

        case "TEG":
            userData.languageCode = "es";
            break;

    }

    //LOGS for testing purposes only
    console.log('Hidden country: ' + userData.countryCode);
    console.log('Hidden language: ' + userData.languageCode);
    console.log('Hidden environment: ' + userData.environmentType);

    window.adaSettings = {
        metaFields: {
            country: userData.countryCode,
        },
        language: userData.languageCode,
        embedStyles: '#ada-embed {height: 10px;}',

        adaReadyCallback: () => {
            !function (c, n, r, t) { if (!c[r]) { var i, d, p = []; d = "PROD" !== t && t ? "STAGING" === t ? "https://cdn.gladly.qa/gladly/chat-sdk/widget.js" : t : "https://cdn.gladly.com/chat-sdk/widget.js", c[r] = { init: function () { i = arguments; var e = { then: function (t) { return p.push({ type: "t", next: t }), e }, catch: function (t) { return p.push({ type: "c", next: t }), e } }; return e } }, c.__onHelpAppHostReady__ = function (t) { if (delete c.__onHelpAppHostReady__, (c[r] = t).loaderCdn = d, i) for (var e = t.init.apply(t, i), n = 0; n < p.length; n++) { var a = p[n]; e = "t" === a.type ? e.then(a.next) : e.catch(a.next) } }, function () { try { var t = n.getElementsByTagName("script")[0], e = n.createElement("script"); e.async = !0, e.src = d + "?q=" + (new Date).getTime(), t.parentNode.insertBefore(e, t) } catch (t) { } }() } }
                (window, document, 'Gladly', 'PROD')

            checkLastChatOpened();
        },
        eventCallbacks: {
            "custom_handoff": event => {
                first_name = event.user_data.global.name;
                email = event.user_data.global.email;
                sidekickId = event.user_data.global.Sidekick_id;
                csatAnswerId = event.user_data.global.CSAT_answerid;
                noAgentAnswerId = event.user_data.global.No_agent_answerId;
                startGladly(first_name, email, sidekickId);
            }
        }
    }

    var script = document.createElement('script');
    script.id = "__ada";
    script.src = "https://static.ada.support/embed2.js";
    script.setAttribute('data-handle', "aeropost"); //prod
    document.getElementsByTagName('head')[0].appendChild(script);
	
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
                  z-index: 999;
                  border-radius: 50%;
                  cursor: pointer;
                  border: 1px solid rgba(0, 0, 0, .05);
                  background-color: #BCE6F7;
                  height: 60px;
                  width: 60px;
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
  