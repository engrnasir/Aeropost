<template>
    <div class="min-w-full transition-all duration-1000 bg-[#F5F5F5]">
      <HeroTitleVue :title="title"></HeroTitleVue>
      <div class="w-[95%] max-w-[940px] bg-white shadow-2xl rounded-xl p-10 mx-auto relative z-30 -mt-20 -mb-28 max-md:mt-0 max-md:mb-0 max-md:-translate-y-12">
        <div v-for="(item, i) in questions" :key="i" class="border-b-2 border-[#EBEBEB] py-3 " :class="i===questions.length-1? 'border-none':''">
            <div class="flex items-center justify-between cursor-pointer" @click="collapse(i, item.show)">
                <h3 class="font-bold text-2xl text-blue max-sm:text-lg">{{ item.question }}</h3>
                <img src="@/assets/images/plus.png" alt="" class="w-5 h-5" :class="item.show?'hidden':''">
                <img src="@/assets/images/close.png" alt="" class="w-5 h-5" :class="item.show?'':'hidden'">
            </div>
            <p class="text-base text-[#333333] transition-all duration-500 py-5 leading-8" :class="item.show?'':'bg-white max-h-0 hidden'"  >
                {{ item.answer }}
            </p>
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
    name: 'HomeView',
    components:{
      HeroTitleVue,
      SliderVue,
      FooterTitle,
    },
    data(){
      return{
        en_questions:[
            {question:'Save on Taxes', answer:`At checkout, use your FREE Aeropost U.S. address for your packages to be shipped to. For a simple and efficient shipping process, ensure that you input the correct name and address. Your Miami address is a physical address where Aeropost receives your packages and then sends them to your selected store or smart parcel locker in your destination country.   No customer address is exactly the same; each address is made up of your account number, your country code (3 letters), our physical address, and the postal code.  (See example below) Miami Address for PACKAGES (Billing and Shipping Address) Full Name: Name Address Line 1: 1 Aeropost Way Address Lines 2: Country Code + Account # City: Miami State: FL Zip Code: 33206- 3206 Phone Number: (786) 322-2032`, show:false},
            {question:'How to calculate the price?', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam nisi ad eligendi exercitationem nesciunt magnam enim nostrum molestiae similique sequi ullam error, quas obcaecati reprehenderit consequatur excepturi facere ipsam.', show:false},
            {question:'How to pre-alert?', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam nisi ad eligendi exercitationem nesciunt magnam enim nostrum molestiae similique sequi ullam error, quas obcaecati reprehenderit consequatur excepturi facere ipsam.', show:false},
            {question:'How to return a product?', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam nisi ad eligendi exercitationem nesciunt magnam enim nostrum molestiae similique sequi ullam error, quas obcaecati reprehenderit consequatur excepturi facere ipsam.', show:false},
            {question:'How to set up autopay?', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam nisi ad eligendi exercitationem nesciunt magnam enim nostrum molestiae similique sequi ullam error, quas obcaecati reprehenderit consequatur excepturi facere ipsam.', show:false},
        ],
        es_questions:[
            {question:'¿Cómo uso mi dirección de Miami?', answer:`Al finalizar la compra, usa tu dirección GRATUITA de Aeropost en EE. UU. para que se envíen tus paquetes. Para un proceso de envío simple y eficiente, asegúrate de ingresar el nombre y la dirección correctas. Tu dirección en Miami es una dirección física donde Aeropost recibe tus paquetes y luego los envía a tu tienda seleccionada o locker inteligente para paquetes en tu país de destino. Ninguna dirección de cliente es exactamente igual; cada dirección se compone de tu número de cuenta, tu código de país (3 letras), nuestra dirección física y el código postal. (Vea el ejemplo a continuación) Dirección en Miami para PAQUETES (Dirección de facturación y envío) Nombre completo: Nombre Dirección Línea 1: 1 Aeropost Way Dirección Líneas 2: Código de país + Número de cuenta Ciudad: Miami Estado: FL Código postal: 33206- 3206 Número de teléfono: (786) 322-2032`, show:false},
            {question:'¿Cómo calcular el precio?', answer:`Before buying, you can have an estimate of how much you will have to pay for the shipment and nationalization of your package, to do so you can enter the Aeropost calculator, include the product category, weight, price and your type of account. In order to get the category, you must type the name of the item you want to quote in the indicated space or the name most similar to the item (for example, for a stopwatch you can enter "clock").`, show:false},
            {question:'¿Cómo pre-alertar?', answer:`When you pre-alert your purchases, you let us know in advance that a package is on its way, which makes the process faster and more agile. To pre-alert you must enter "My Account" and select: +PRE-ALERT YOUR PACKAGE Then complete the package information and add the invoice. How can you pre-alert with the My Account plugin? This small application is installed in your browser and gives you access to various features, which will make the online shopping experience even easier. Once installed, you will be able to: Pre-alert with just two clicks, on Amazon, eBay and Rakuten. Quickly track your packages and pre-alerts. Complete your mailbox address with just one click.`, show:false},
            {question:'¿Cómo devolver un producto?', answer:`Para esto debes de contactar al proveedor o fabricante del producto y obtener una autorización de retorno (ni Aeropost ni sus afiliados pueden contactar al proveedor o fabricante para solicitar dicha autorización). Una vez expedida la misma, deberas contactar a Aeropost y un agente te brindará las instrucciones a seguir. Aeropost debe recibir toda la documentación correspondiente así como la mercancía para retorno a más tardar 15 días hábiles previos a la fecha de vencimiento de la autorización de retorno expedida por el proveedor.`, show:false},
            {question:'¿Cómo configurar el pago automático?', answer:`Para esto debes de contactar al proveedor o fabricante del producto y obtener una autorización de retorno (ni Aeropost ni sus afiliados pueden contactar al proveedor o fabricante para solicitar dicha autorización). Una vez expedida la misma, deberas contactar a Aeropost y un agente te brindará las instrucciones a seguir. Aeropost debe recibir toda la documentación correspondiente así como la mercancía para retorno a más tardar 15 días hábiles previos a la fecha de vencimiento de la autorización de retorno expedida por el proveedor.`, show:false},
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
  