<template>
    <div class="popupWrapper">
        <div class="bg-lightYellow rounded-sm mx-auto relative w-[850px] min-h-[570px] max-md:w-[96%] overflow-x-hidden p-6">
            <!-- Bg Blue Images -->
            <img src="@/assets/images/popups/bgBlue.png" alt="bgBlue" class="w-full absolute top-0 left-0 z-0 md:h-[450px] max-md:hidden">
            <img src="@/assets/images/popups/autopaybg.png" alt="bgBlueMob" class="w-full absolute top-0 left-0 z-0 h-[770px] md:hidden">
            
            <div class="flex max-md:flex-col justify-between relative z-10">

                <!-- Left Section -->
                <div class="md:mr-6 max-md:mb-5">
                    <p class="text-4xl text-darkYellow mb-5" v-html="info.heading1"></p>
                    <h2 class="font-bold text-[43px] leading-[48px] mb-6 text-white" :class="lang==='es'? 'esText':''" v-html="info.heading2"></h2>
                    
                    <div class="flex  md:flex-col max-md:justify-between max-md:items-center">
                        <div>
                            <p class="font-bold text-base text-white mb-5" v-html="info.heading3"></p>
                            <ul class="list-disc ml-5 w-[220px] sm:w-[305px] text-sm font-poppins  text-white">
                                <li v-for="(item, i) in info.list" :key="i" v-html="item" class="leading-6"></li>
                            </ul>
                        </div>

                        <img src="@/assets/images/popups/circularImg.png" alt="circularImg1" class="w-40 md:mt-20 md:self-end md:mr-20">
                    </div>


                    <!-- Skip button -->
                    <div class="flex text-blue mt-5 leading-none max-md:hidden">
                        <button class="pr-3 border-r border-blue"> 
                            {{ lang==='en'?'I don’t want to see this again ':'no quiero volver a ver esto' }}
                        </button>
                        <button class="pl-3" @click="$emit('skip', true)"> 
                            {{ lang==='en'?'Skip':'Omitir' }}
                        </button>
                    </div>
                </div>

                <!-- Form -->
                <div class="">
                    <div class="forms ">

                        <!-- New Credit Card Form -->

                        <div class="flex items-center justify-between" @click="showCreditForm = !showCreditForm">
                            <p class="text-xl font-semibold mb-4">
                                {{ lang==='en'? 'New Credit Card':'Nueva Tarjeta de Crédito ' }}
                            </p>
                            <img src="@/assets/images/popups/minus.png" alt="" class="w-2.5 md:hidden" v-if="showCreditForm">
                            <img src="@/assets/images/popups/plus.png" alt="" class="w-2.5 md:hidden" v-else>
                        </div>
                        <div :class="showCreditForm?'':'hide'">
                            <input type="text" :placeholder="lang==='en'?'Name on Card':'Nombre en tarjeta '" v-model="form.credit.name">
                            <div class="md:flex">
                                <input type="text" :placeholder="lang==='en'?'Card Number':'Número de tarjeta '" v-model="form.credit.number">
                                <div class="flex">
                                    <input type="text" :placeholder="lang==='en'?'MM/YY':'MM/AA'" class="md:w-[95px] mr-2 md:mx-2" v-model="form.credit.expiryDate">
                                    <input type="text" placeholder="CCV" class="md:w-[72px]" v-model="form.credit.ccv">
                                </div>
                            </div>
                        </div>

                        <!-- Address Form -->

                        <div class="flex items-center justify-between" @click="showAddressForm = !showAddressForm" >
                            <p class="text-xl font-semibold mb-3">
                                {{ lang==='en'? 'Address':'Datos de facturación ' }}
                            </p>
                            <img src="@/assets/images/popups/minus.png" alt="" class="w-2.5 md:hidden" v-if="showAddressForm">
                            <img src="@/assets/images/popups/plus.png" alt="" class="w-2.5 md:hidden" v-else>
                        </div>
                        <div class="grid md:grid-cols-2 gap-2.5 mb-5" :class="showAddressForm?'':'hide'">
                            <div class="w-full">
                                <p class="label">{{ lang==='en'? 'Address':'Dirección' }}</p>
                                <input type="text" :placeholder="lang==='en'? 'Enter':'Ingresar'" v-model="form.address">
                            </div>
                            <div class="w-full">
                                <p class="label">{{ lang==='en'? 'Address':'Dirección 2' }}</p>
                                <input type="text" :placeholder="lang==='en'? 'Enter Address 2':'Ingresar Dirección 2' " v-model="form.address2">
                            </div>
                            <div class="w-full">
                                <p class="label">{{ lang==='en'? 'City':'Ciudad' }}</p>
                                <input type="text" :placeholder="lang==='en'? 'City':'Ciudad'" v-model="form.city">
                            </div>
                            <div class="w-full">
                                <p class="label">{{ lang==='en'? 'State/Providence':'Estado/Provincia ' }}</p>
                                <div class="select bg-white flex items-center md:mb-2 max-md:mr-2 ">
                                    <select name="state" id="" v-model="form.state" class="cursor-pointer w-full bg-white font-bold text-sm outline-none" >
                                        <option value="" selected disabled>{{ lang==='en'?'Select':'Seleccionar' }}</option>
                                    </select>
                                    <img src="@/assets/images/popups/blue-dropdown.png" alt="blue-dropdown" class="w-2.5">
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="label">{{ lang==='en'? 'Zipcode':'Código Postal ' }}</p>
                                <input type="text" :placeholder="lang==='en'? 'Enter':'Ingresar'" v-model="form.zipcode">
                            </div>
                            <div class="w-full">
                                <p class="label">{{ lang==='en'? 'Country':'Pais' }}</p>
                                <div class="select bg-white flex items-center md:mb-2 max-md:mr-2 ">
                                    <select name="country" id="" v-model="form.country" class="cursor-pointer w-full bg-white font-bold text-sm outline-none" >
                                        <option value="" selected disabled>{{ lang==='en'?'Select':'Seleccionar' }}</option>
                                    </select>
                                    <img src="@/assets/images/popups/blue-dropdown.png" alt="blue-dropdown" class="w-2.5">
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="label">{{ lang==='en'? 'Telephone':'Teléfono' }}</p>
                                <input type="text" :placeholder="lang==='en'? 'Number':'Número'" v-model="form.tel">
                            </div>
    
                        </div>
    
                        <div class="flex md:items-center cursor-pointer mb-10" @click="form.authorized = !form.authorized">
                            <div class="w-5 h-5 rounded-md border border-blue mr-1.5" :class="form.authorized?'bg-blue':''">
                                <img src="@/assets/images/popups/check.png" alt="check" class="w-full h-full">
                            </div>
                            <p class="text-[12px] text-blue">
                                {{  lang==='en'?'I authorized Aeropost and enable autopay for automatic billing.':'Autorizo a Aeropost y habilito el cargo automático.' }}
                            </p>
                        </div>
    
                        <div class="grid grid-cols-2 gap-2.5 font-bold text-base leading-5">
                            <button class="button">{{ lang==='en'?'Cancel':'Cancelar' }}</button>
                            <button class="button button-active"> {{ lang==='en'?'Accept':'Aceptar' }} </button>
                        </div>
    
                    </div>
                    <div class="sponsers">
                        <img src="@/assets/images/popups/sp1.png" alt="sp1">
                        <img src="@/assets/images/popups/sp2.png" alt="sp2">
                        <img src="@/assets/images/popups/sp3.png" alt="sp3">
                    </div>
                    <div class="flex items-center justify-center text-blue mt-5 leading-none md:hidden">
                        <button class="pr-3 border-r border-blue"> 
                            {{ lang==='en'?'I don’t want to see this again ':'no quiero volver a ver esto' }}
                        </button>
                        <button class="pl-3" @click="$emit('skip', true)"> 
                            {{ lang==='en'?'Skip':'Omitir' }}
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){        
        return {
            showCreditForm:true,
            showAddressForm:true,
            en_info:{
                heading1:'Want Faster Delivery?',
                heading2:'Sign Up for <span class="text-darkYellow">Autopay</span> Now!',
                heading3:'Discover the Benefits of <span class="text-darkYellow">Autopay</span>',
                list:[
                    'Get Your packages up to 24 hours faster',
                    'FREE Locker Delivery ',
                    'Secure payments with PCI Certification',
                    'No manual payments ',
                    'You will only be charged when your packages get to our Miami warehouse',
                ]
            },
            es_info:{
                heading1:'¿Quieres una entrega aún más rápida?',
                heading2:'¡Registrate ahora <span class="text-darkYellow">en cargo automático!</span>',
                heading3:'Descubre los beneficios del <span class="text-darkYellow">cargo automático</span>',
                list:[
                    'Recibe tus paquetes hasta 24 horas antes',
                    'Entrega gratuita en nuestros lockers inteligentes',
                    'Pagos seguros con certificación PCI',
                    'Sin pagos manuales',
                    'Se te cobrará solamente cuando tus paquetes lleguen al país de destino',
                ]
            },
            form:{
                credit:{
                    name:'',
                    number:'',
                    expiryDate:'',
                    ccv:''
                },
                address:'',
                address2:'',
                city:'',
                state:'',
                zipcode:'',
                country:'',
                tel:'',
                authorized:false
            }
        }
    },
    computed:{
        ...mapState(['lang']),
        info(){
            return this.lang==='en'? this.en_info : this.es_info;
        }
    },
    components:{
    },
    methods:{
        handleLockerSelection(){

        }
    }
}
</script>

<style lang="scss" scoped>
.popupWrapper{
    @apply w-full h-screen font-sofiaPro overflow-y-scroll  py-12 fixed left-0 top-0 bg-[#fff] z-[999];
}
.popupWrapper::-webkit-scrollbar{
    @apply hidden;
}

.esText{
    @apply text-3xl;
}

.forms{
    @apply w-full md:w-[440px] bg-white p-6;
    .label{
    @apply text-sm leading-4 mb-1 text-[#484647]
    }
    .select,
    input{
        @apply outline-none w-full bg-transparent font-sofiaPro font-normal   text-sm px-6 py-2 text-black border border-[#CBCBCB] rounded-[40px] mb-2.5;
    }
    select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        @apply pr-3;
    }
    .button{
        @apply w-full rounded-[35px] border border-[#808080] p-2.5 text-[#808080] cursor-pointer transition-all duration-200;
    }
    .button:hover,
    .button-active{
        @apply bg-blue text-white;
    }
}
.sponsers{
    @apply flex items-center justify-center md:justify-end mt-3;
    img{
        @apply w-8 mr-4;
    }
}
.hide{
    @apply max-md:hidden
}

</style>
