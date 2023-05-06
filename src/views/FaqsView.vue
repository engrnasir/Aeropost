<template>
    <div class="min-w-full transition-all duration-1000 bg-[#F5F5F5]">
      <HeroTitleVue :title="title"></HeroTitleVue>
      <div class="w-[95%] max-w-[940px] bg-white shadow-2xl rounded-xl p-10 mx-auto relative z-30 -mt-20 -mb-28 max-md:mt-0 max-md:mb-0 max-md:-translate-y-12">
        <div v-for="(item, i) in questions" :key="i" class="border-b-2 border-[#EBEBEB] py-3" :class="i===questions.length-1? 'border-none':''">
            <div class="flex items-center justify-between cursor-pointer" @click="collapse(i)">
              <h3 class="font-bold text-2xl text-blue max-sm:text-lg uppercase" v-html="item.question"></h3>
              <img src="@/assets/images/plus.png" alt="" class="w-5 h-5 showbtn">
              <img src="@/assets/images/close.png" alt="" class="w-5 h-5 hidebtn hide">
            </div>
            <div class="overflow-hidden">
              <div class="text-base text-[#333333] transition-all duration-500 py-5 px-3 leading-8 questionItem hide animate-slidedown " v-html="item.answer"></div>
            </div>
        </div>
      </div>

      <div class="max-md:hidden">
        <SliderVue />
      </div>
      
      <div class="py-[60px] flex flex-col items-center bg-blue bg-bgImg bg-center bg-cover bg-no-repeat">
        <p class="font-light text-[32px] text-white" >
          {{this.lang==='en'?'Got A Question?':'¿Necesitas ayuda?'}}
        </p>
        <p class="font-light text-[22px] mb-8 text-white" >
          {{this.lang==='en'?"We'd Love To Hear From You.":"Nos encantaría saber de usted."}}
        </p>
        <router-link to="" class="btn-yellow">
          {{this.lang==='en'?'Contact Us':'Contáctanos'}}
        </router-link>
    </div>

    </div>
  </template>
  
  <script>
  import HeroTitleVue from '@/components/header/HeroTitle.vue';
  import SliderVue from '@/components/homepage/Slider.vue';
  import FooterTitle from '@/components/footer/FooterTitle.vue';
  import { mapState } from 'vuex';
  export default {
    name: 'FaqsView',
    components:{
      HeroTitleVue,
      SliderVue,
      FooterTitle,
    },
    data(){
      return{
 
      }
    },
    computed:{
      ...mapState(['lang','selectedCountry']),
      title(){return this.lang==='en'?'Frequently Asked Questions':'Preguntas Frecuentes'},
      enQuestions(){
        return [
          {
            question:'How do I use my Miami address?', 
            answer:`
              At checkout, list your FREE U.S. ADDRESS as the address for the order to be shipped to.<br>
              To prevent delays in receiving your package(s), please ensure that you input the correct name and address.<br><br>
              Your Miami address is a physical address where Aeropost receives and processes your packages and then sends them to your selected store or smart parcel locker in your destination country.<br><br>
              No customer address is exactly the same; each address is made up of your account number, your country code (3 letters), our physical address, and the postal code.<br><br>
              (Example below)<br><br>
              Miami Address for PACKAGES (Billing and Shipping   Address)<br>
              Full Name: John Smith<br>
              Address Line 1: 1 Aeropost Way<br>
              Address Line 2: Country Code + Account #12345 City: Miami State: FL Zip Code: 33206- 3206    <br>
              Phone Number: (786) 322-2032<br>
            `
            },
          {
            question:'How to calculate the price?', 
            answer:`
            Before placing an order with your FREE U.S. ADDRESS, you can view an estimate of how much you will have to pay for the shipment and nationalization of the package.<br><br>
            To do so, simply enter the following details into the Aeropost Cost Calculator: product category, product weight, listed price, and your account type.<br><br>
            In order to generate the most accurate estimated cost, be sure to list the correct product category by either typing the name of the item you want to quote or the name most similar to the item. (for example, for a stopwatch you can enter "clock").<br><br>
            `
          },
          {
            question:'How to pre-alert?', 
            answer:`
            After making a purchase, you should submit an Aeropost pre-alert to let us know in advance that a package is on its way to our Miami fulfillment center.  This step is crucial in ensuring that package processing is faster and smoother.<br><br>
            To submit a pre-alert for an incoming package, go to 'My Account' and select + PRE-ALERT YOUR PACKAGE. Fill-in the pre-alert form with the package details and upload the invoice.<br><br>
            How can you pre-alert with the 'My Account' plugin? This small application is installed in your browser and gives you access to various features, which will make the online shopping experience even simpler. Once installed, you will be able to pre-alert with just two clicks, on Amazon, eBay and Rakuten.  
            `
          },
          {
            question:'How to return a product?', 
            answer:`
            To return a package you must contact the supplier or manufacturer of the product and obtain a return authorization (neither Aeropost nor its affiliates can contact the supplier or manufacturer to request such authorization).  Once it has been issued, you must contact Aeropost and an agent will give you the instructions to follow. Aeropost must receive all the corresponding documentation as well as the merchandise to be returned no later than 15 business days prior to the expiration date of the return authorization issued by the supplier.
            `
          },
          {
            question:'How to set up autopay?', 
            answer:`
              After you enter your card information, click the Auto-Pay option.<Br><Br>
              Your card data will then be securely encrypted and linked to your account for future billings.<Br><Br>
              OR<Br><Br>
              Go to My Account >> Profile >>Payment Methods, and select AutoPay to save your card information in advance for future purchases.
            `
          },
        ]
      },
      esQuestions(){
        return [
          {
            question:'¿Cómo compro con mi dirección en Miami?', 
            answer:`
            Sigue estos 3 pasos para usar tu dirección en Miami:<br>
            <ul class="list-disc ml-8">
              <li>Ingresa a la tienda en línea de la que quieres comprar.</li>
              <li>Selecciona los productos que quieres comprar y agrégalos al carrito de compras.</li>
              <li>En el proceso de pago, asegúrate de ingresar tu dirección en Miami como mostramos a continuación (no olvides incluir tu código país ni número de cuenta!):</li>
            </ul>
            <div class="ml-14">
              Nombre: Nombre Completo<br>
              Dirección: 1 Aeropost Way [Código país] – [Número de cuenta Aeropost]<br>
              Ciudad: Miami<br>
              Estado: Florida <br>
              Código postal: 33206-3206<br>
            </div>
            ¡Listo! Una vez el proveedor despache tus compras, pre-alerta tu envío para recibirlo más rápido. 
            `
          },
          {
            question:'¿Cuánto voy a pagar por el envío y los impuestos?', 
            answer:`Antes de comprar, puedes tener un estimado de cuánto vas a tener que pagar por el envío y la nacionalización de tu paquete. Para hacerlo debes de entrar a la calculadora de Aeropost, seleccionar la categoría, incluir peso, precio del artículo y tu tipo de cuanta. Para obtener la categoría debes de escribir el nombre del artículo en el espacio indicado o el nombre del artículo más similar (por ejemplo, para un cronómetro ingresar "reloj")`
          },
          {
            question:'¿Cómo Pre-alerto un envío?', 
            answer:`
              Para pre-alertar un envío, debes esperar a que la tienda despache tu compra. En ese correo de confirmación, la tienda te compartirá el número de rastreo del envío, así como los artículos que contiene. Una vez que tengas esa confirmación, existen dos formas de prealertar tus compras:<br>
              <ol class="list-decimal ml-10">
                <li>Inicia sesión a tu cuenta Aeropost <a href="https://aeropost.cloud-iam.com/auth/realms/myaccount/protocol/openid-connect/auth?response_type=code&client_id=myaccount&scope=openid&type=&gtw=SCL&login_hint=&redirect_uri=https%3a%2f%2flogin.aeropost.com%2fLogin%2fAuth%3fsrv%3dhttps%253a%252f%252fcourier.aeropost.com%252fsite%252fen%252fauth" class="text-blue">aqui</a> o haz clic en el botón “Iniciar Sesión” en la parte superior derecha del sitio.</li>
                <li>Haz clic en “Prealerta tu paquete”</li>
                <li>Llena el formulario en línea, adjunta la factura comercial de tu compra y listo.</li>
              </ol>
              Si tu compra es de Amazon, te ofrecemos una forma de pre-alertar mucho más fácil. Para esto, debes descargar nuestro plug-in <a href="https://aeropost.com/site/es/plugins" class="text-blue">aqui</a>. Una vez lo instales, ingresa a la página de órdenes de Amazon y presiona el botón de pre-alertar.
            `
          },
          {
            question:'¿Cómo devuelvo un producto?', 
            answer:`
            Retornar tus compras nunca había sido tan fácil. Lo único que debes hacer es:<br>
            <ol class="list-decimal ml-10">
              <li>Ingresa a la página donde compraste tu(s) producto(s) y solicítale al vendedor una autorización de retorno de mercadería (o “RMA” por sus siglas en inglés).</li>  
              <li>Entréganos tu compra junto al RMA en cualquiera de nuestras tiendas y nosotros nos encargaremos del resto. </li>  
            </ol>
            Toma en consideración que la fecha de vencimiento del RMA debe ser de 15 días hábiles posteriores a la fecha en que nos entregues la mercadería. Para más información acerca de nuestro programa de retornos, ingresa <a href="/${this.selectedCountry.gtw}/${this.lang}/terms" class="text-blue">aqui</a>.
            `
          },
          {
            question:'¿Qué es Autopago y cómo me suscribo?', 
            answer:`
            AutoPago es nuestro servicio automático de cobros. Aeropost cobrará automáticamente los cargos de importación de todas tus compras a la tarjeta que nos facilitas en el proceso de suscripción al servicio, haciendo que tus paquetes nunca se detengan y te los podamos entregar más rápido. Para suscribirte, sigue estos pasos:<br>
            <ol class="list-decimal ml-10">
              <li>Inicia sesión a tu cuenta Aeropost <a href="https://aeropost.cloud-iam.com/auth/realms/myaccount/protocol/openid-connect/auth?response_type=code&client_id=myaccount&scope=openid&type=&gtw=SCL&login_hint=&redirect_uri=https%3a%2f%2flogin.aeropost.com%2fLogin%2fAuth%3fsrv%3dhttps%253a%252f%252fcourier.aeropost.com%252fsite%252fen%252fauth" class="text-blue font-bold"> aquí</a>  o haz clic en el botón “Iniciar Sesión” en la parte superior derecha del sitio.</li>  
              <li>Haz clic en “Ver Perfil”</li>  
              <li>Haz clic en “Agregar” en la sección de Métodos de Pago, llena los datos de tu tarjeta y marca la opción “Seleccionar como método de pago principal”.</li>  
            </ol>

            `
          },
        ]
      },
      questions(){return this.lang==='en'?this.enQuestions:this.esQuestions},
      getShowStatus(){
        return this.showStatus
      }
    },
    methods:{

        collapse(index){
          const items =  document.querySelectorAll('.questionItem')
          const plusbtns =  document.querySelectorAll('.showbtn')
          const closebtns =  document.querySelectorAll('.hidebtn')
          items.forEach((el,i)=>{
            if(i!==index){
              el.classList.add('hide')
              closebtns[i].classList.add('hide')
              plusbtns[i].classList.remove('hide')
            }
          })
          closebtns[index].classList.toggle('hide')
          plusbtns[index].classList.toggle('hide')
          items[index].classList.toggle('hide')
      }
    },

    
  }
  </script>

<style lang="scss" scoped>


.hide{
  @apply hidden;
}
.show{
  @apply block;
}
</style>
  