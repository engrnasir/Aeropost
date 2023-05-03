<template>
    <div class="min-w-full transition-all duration-1000 bg-[#F5F5F5]">
      <HeroTitleVue :title="title"></HeroTitleVue>
      <div class="w-[95%] max-w-[940px] bg-white shadow-2xl rounded-xl p-10 mx-auto relative z-30 -mt-20 -mb-28 max-md:mt-0 max-md:mb-0 max-md:-translate-y-12">
        <div v-for="(item, i) in questions" :key="i" class="border-b-2 border-[#EBEBEB] py-3 " :class="i===questions.length-1? 'border-none':''">
            <div class="flex items-center justify-between cursor-pointer" @click="collapse(i, item.show)">
                <h3 class="font-bold text-2xl text-blue max-sm:text-lg" v-html="item.question"></h3>
                <img src="@/assets/images/plus.png" alt="" class="w-5 h-5" :class="item.show?'hidden':''">
                <img src="@/assets/images/close.png" alt="" class="w-5 h-5" :class="item.show?'':'hidden'">
            </div>
            <p class="text-base text-[#333333] transition-all duration-500 py-5 leading-8" :class="item.show?'':'bg-white max-h-0 hidden'"  v-html="item.answer"></p>
        </div>
      </div>

      <div class="max-md:hidden">
        <SliderVue />
      </div>
      
      <div class="py-[60px] flex flex-col items-center bg-blue bg-bgImg bg-center bg-cover bg-no-repeat">
        <p class="font-light text-[32px] mb-8 text-white" >
          {{this.lang==='en'?'Need help?':'¿Necesitas ayuda?'}}
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
        en_questions:[
          {question:'How do I use my Miami address?', answer:`At checkout, use your FREE Aeropost U.S. address for your packages to be shipped to. For a simple and efficient shipping process, ensure that you input the correct name and address. Your Miami address is a physical address where Aeropost receives your packages and then sends them to your selected store or smart parcel locker in your destination country. No customer address is exactly the same; each address is made up of your account number, your country code (3 letters), our physical address, and the postal code. (See example below) Miami Address for PACKAGES (Billing and Shipping Address) Full Name: Name Address Line 1: 1 Aeropost Way Address Lines 2: Country Code + Account # City: Miami State: FL Zip Code: 33206- 3206 Phone Number: (786) 322-2032`, show:false},
          {question:'How to calculate the price?', answer:`Before buying, you can have an estimate of how much you will have to pay for the shipment and nationalization of your package, to do so you can enter the Aeropost calculator, include the product category, weight, price and your type of account. In order to get the category, you must type the name of the item you want to quote in the indicated space or the name most similar to the item (for example, for a stopwatch you can enter "clock").`, show:false},
          {question:'How to pre-alert?', answer:`When you pre-alert your purchases, you let us know in advance that a package is on its way, which makes the process faster and more agile. To pre-alert you must enter "My Account" and select: +PRE-ALERT YOUR PACKAGE Then complete the package information and add the invoice. How can you pre-alert with the My Account plugin? This small application is installed in your browser and gives you access to various features, which will make the online shopping experience even easier. Once installed, you will be able to: Pre-alert with just two clicks, on Amazon, eBay and Rakuten. Quickly track your packages and pre-alerts. Complete your mailbox address with just one click.`, show:false},
          {question:'How to return a product?', answer:`Para esto debes de contactar al proveedor o fabricante del producto y obtener una autorización de retorno (ni Aeropost ni sus afiliados pueden contactar al proveedor o fabricante para solicitar dicha autorización). Una vez expedida la misma, deberas contactar a Aeropost y un agente te brindará las instrucciones a seguir. Aeropost debe recibir toda la documentación correspondiente así como la mercancía para retorno a más tardar 15 días hábiles previos a la fecha de vencimiento de la autorización de retorno expedida por el proveedor.`, show:false},
          {question:'How to set up autopay?', answer:`Para esto debes de contactar al proveedor o fabricante del producto y obtener una autorización de retorno (ni Aeropost ni sus afiliados pueden contactar al proveedor o fabricante para solicitar dicha autorización). Una vez expedida la misma, deberas contactar a Aeropost y un agente te brindará las instrucciones a seguir. Aeropost debe recibir toda la documentación correspondiente así como la mercancía para retorno a más tardar 15 días hábiles previos a la fecha de vencimiento de la autorización de retorno expedida por el proveedor.`, show:false},
        ],
        es_questions:[
          {
            question:'¿Cómo compro con mi dirección en Miami?', 
            answer:`
            Sigue estos 3 pasos para usar tu dirección en Miami:<br>
            Ingresa a la tienda en línea de la que quieres comprar.Selecciona los productos que quieres comprar y agrégalos al carrito de compras.<br>
            En el proceso de pago, asegúrate de ingresar tu dirección en Miami como mostramos a continuación (no olvides incluir tu código país ni número de cuenta!):<br>
            Nombre: Nombre Completo<br>
            Dirección: 1 Aeropost Way [Código país] – [Número de cuenta Aeropost]<br>
            Ciudad: Miami<br>
            Estado: Florida <br>
            Código postal: 33206-3206<br>
            ¡Listo! Una vez el proveedor despache tus compras, pre-alerta tu envío para recibirlo más rápido. 
            `, 
            show:false},
          {
            question:'¿Cuánto voy a pagar por el envío y los impuestos?', 
            answer:`El costo de tu envío depende de 3 cosas: el peso, el valor declarado (valor comercial) y del tipo de mercadería (que determina el porcentaje de impuestos que pagará al ingresar al país).<br>Puedes cotizar el costo de un envío usando nuestra herramienta de cotización en línea.`, 
            show:false
          },
          {
            question:'¿Cómo Pre-alerto un envío?', 
            answer:`
              Para pre-alertar un envío, debes esperar a que la tienda despache tu compra. En ese correo de confirmación, la tienda te compartirá el número de rastreo del envío, así como los artículos que contiene. Una vez que tengas esa confirmación, existen dos formas de prealertar tus compras:<br>
              <ol class="list-decimal ml-10">
                <li>Inicia sesión a tu cuenta Aeropost <a href="https://aeropost.cloud-iam.com/auth/realms/myaccount/protocol/openid-connect/auth?response_type=code&client_id=myaccount&scope=openid&type=&gtw=SCL&login_hint=&redirect_uri=https%3a%2f%2flogin.aeropost.com%2fLogin%2fAuth%3fsrv%3dhttps%253a%252f%252fcourier.aeropost.com%252fsite%252fen%252fauth"> aquí</a> o haz clic en el botón “Iniciar Sesión” en la parte superior derecha del sitio.</li>
                <li>Haz clic en “Prealerta tu paquete”</li>
                <li>Llena el formulario en línea, adjunta la factura comercial de tu compra y listo.</li>
              </ol>
              Si tu compra es de Amazon, te ofrecemos una forma de pre-alertar mucho más fácil. Para esto, debes descargar nuestro plug-in <a href="https://aeropost.cloud-iam.com/auth/realms/myaccount/protocol/openid-connect/auth?response_type=code&client_id=myaccount&scope=openid&type=&gtw=SCL&login_hint=&redirect_uri=https%3a%2f%2flogin.aeropost.com%2fLogin%2fAuth%3fsrv%3dhttps%253a%252f%252fcourier.aeropost.com%252fsite%252fen%252fauth"> aquí</a>. Una vez lo instales, ingresa a la página de órdenes de Amazon y presiona el botón de pre-alertar.
            `, 
            show:false
          },
          {
            question:'¿Cómo devuelvo un producto?', 
            answer:`
            Retornar tus compras nunca había sido tan fácil. Lo único que debes hacer es:<br>
            <ol class="list-decimal ml-10">
              <li>Ingresa a la página donde compraste tu(s) producto(s) y solicítale al vendedor una autorización de retorno de mercadería (o “RMA” por sus siglas en inglés).</li>  
              <li>Entréganos tu compra junto al RMA en cualquiera de nuestras tiendas y nosotros nos encargaremos del resto. </li>  
            </ol>
            Toma en consideración que la fecha de vencimiento del RMA debe ser de 15 días hábiles posteriores a la fecha en que nos entregues la mercadería. Para más información acerca de nuestro programa de retornos, ingresa <a href="https://aeropost.cloud-iam.com/auth/realms/myaccount/protocol/openid-connect/auth?response_type=code&client_id=myaccount&scope=openid&type=&gtw=SCL&login_hint=&redirect_uri=https%3a%2f%2flogin.aeropost.com%2fLogin%2fAuth%3fsrv%3dhttps%253a%252f%252fcourier.aeropost.com%252fsite%252fen%252fauth"> aquí</a>.
            `, 
            show:false
          },
          {
            question:'¿Qué es Autopago y cómo me suscribo?', 
            answer:`
            AutoPago es nuestro servicio automático de cobros. Aeropost cobrará automáticamente los cargos de importación de todas tus compras a la tarjeta que nos facilitas en el proceso de suscripción al servicio, haciendo que tus paquetes nunca se detengan y te los podamos entregar más rápido. Para suscribirte, sigue estos pasos:<br>
            <ol class="list-decimal ml-10">
              <li>Inicia sesión a tu cuenta Aeropost <a href="https://aeropost.cloud-iam.com/auth/realms/myaccount/protocol/openid-connect/auth?response_type=code&client_id=myaccount&scope=openid&type=&gtw=SCL&login_hint=&redirect_uri=https%3a%2f%2flogin.aeropost.com%2fLogin%2fAuth%3fsrv%3dhttps%253a%252f%252fcourier.aeropost.com%252fsite%252fen%252fauth"> aquí</a>  o haz clic en el botón “Iniciar Sesión” en la parte superior derecha del sitio.</li>  
              <li>Haz clic en “Ver Perfil”</li>  
              <li>Haz clic en “Agregar” en la sección de Métodos de Pago, llena los datos de tu tarjeta y marca la opción “Seleccionar como método de pago principal”.</li>  
            </ol>

            `, 
            show:false
          },
        ],
      }
    },
    computed:{
      ...mapState(['lang']),
      title(){return this.lang==='en'?'FAQs':'Preguntas Frecuentes'},
      questions(){return this.lang==='en'?this.en_questions:this.es_questions},
    },
    methods:{
        collapse(index, currState){
            this.questions.forEach(el=>{
                el.show = false
            })
            this.questions[index].show = !currState
        }
    }
    
  }
  </script>

<style lang="scss" scoped>


</style>
  