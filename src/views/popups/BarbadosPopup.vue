<template>
    <div class="popupWrapper">
        <div class="bg-lightYellow rounded-sm mx-auto relative w-[850px] min-h-[570px] max-md:w-[96%] p-6">
            <!-- Bg Blue Images -->
            <img src="@/assets/images/popups/bgBlue.png" alt="bgBlue" class="w-full absolute top-0 left-0 z-0 h-[450px] max-md:hidden">
            <img src="@/assets/images/popups/bgBlueMob.png" alt="bgBlueMob" class="w-full absolute top-0 left-0 z-0 h-[700px] sm:h-[650px] md:hidden">
            
            <!-- Main top heading  -->
            <div class="flex relative z-10">
                <img src="@/assets/images/popups/circularImg.png" alt="circularImg1" class="w-40 -translate-y-10 mr-5 max-md:hidden">
                <h2 class="text-lightYellow  text-2xl md:text-3xl leading-9 font-sofiaPro max-md:mb-5">
                    {{ lang==='en'?'Smart lockers now available for':'Lockers Inteligentes disponibles' }}
                    <br><span class="text-white font-bold">
                        {{ lang==='en'?'package collection.':'para retiro de paquetes' }}
                    </span>
                </h2>
            </div>

            <!-- Discover the Benefits -->
            <div class="flex max-md:flex-col-reverse items-start justify-between relative z-10">
                <div class=" text-white font-sofiaPro">
                    <p class="font-bold text-[12px] mb-4">
                        {{ lang==='en'?'Discover the Benefits of Our ':'Descubre los beneficios de nuestros ' }}
                        <br><span class="text-lightYellow"> 
                            {{ lang==='en'?'Smart Lockers ':'Lockers Inteligentes'}}
                        </span>
                    </p>
                    <ul class="list-disc pl-4 text-sm leading-8 font-poppins mb-4">
                        <li>
                            {{ lang==='en'?'FREE Locker Delivery':'Entrega gratuita'}}
                        </li>
                        <li>
                            {{ lang==='en'?'Convenient Pickup Locations':'Ubicaciones convenientes'}}
                        </li>
                        <li>
                            {{ lang==='en'?' Extended Hours':'Horarios extendidos'}}
                        </li>
                    </ul>
                    <p class="max-w-[240px] mb-16 md:mb-6" v-if="lang==='en'">Add locker <b>location as your primary pickup </b>option</p>
                    <p class="max-w-[200px] sm:max-w-[220px] mb-16 md:mb-6" v-else> Selecciona la ubicación que <br>prefieras como opción de retiro <br class="max-md:hidden">principal </p>
                    
                    <!-- Select Options -->

                    <div class="max-md:flex items-center">
                        <div class="w-[250px] max-md:w-full pr-3 rounded-[60px] overflow-hidden bg-white flex items-center md:mb-2 max-md:mr-2">
                            <select name="lockerVal" v-model="selectVal" id="" class="cursor-pointer w-full py-3 px-5 bg-white text-blue font-bold text-sm outline-none select">
                                <option value="" selected>
                                    {{ lang==='en'?'Choose your Locker Location':'Escoge la ubicación de tu locker' }}
                                </option>
                                <option :value="l" v-for="(l,i) in lockers" :key="i">{{ l }}</option>
                            </select>
                            <img src="@/assets/images/popups/blue-dropdown.png" alt="blue-dropdown" class="w-2.5">
                        </div>
                        <button class="rounded-[60px] py-3 px-5 font-bold text-sm text-white bg-blue leading-none h-10" @click="handleLockerSelection()">
                            {{ lang==='en'?'Save':'Guardar' }}    
                        </button>
                    </div>

                    <p class="text-3xl text-blue mt-6 md:hidden">
                        {{ lang==='en'?'it’s your package,':'Son tus paquetes,' }}
                        <br><b>{{ lang==='en'?'get it when you want it.':'retiralos cuando quieras.' }}</b>
                    </p>

                    <!-- Skip button -->
                    <div class="flex text-blue mt-5 md:mt-14 leading-none">
                        <button class="pr-3 border-r border-blue"> 
                            {{ lang==='en'?'I don’t want to see this again ':'no quiero volver a ver esto' }}
                        </button>
                        <button class="pl-3" @click="$emit('skip', true)"> 
                            {{ lang==='en'?'Skip':'Omitir' }}
                        </button>
                    </div>
                    
                </div>

                <!-- Right Map Section -->

                <div class="max-md:w-full flex flex-col max-md:items-center md:items-end font-sofiaPro md:-mt-8">
                    <p class="font-bold text-base text-darkYellow md:text-blue leading-6 px-4 md:ml-10 md:rounded-[84px] md:bg-darkYellow w-full max-md:text-center md:mb-3 self-start md:w-[184px]">
                        {{ lang==='en'?'Lockers In Your Area':'Lockers en tu área'}}
                    </p>
                    <BarbadosMap class="w-auto max-w-[340px] h-[250px] md:w-[480px]"/>
                    <p class="text-3xl text-blue max-md:hidden md:-mt-4">
                        {{ lang==='en'?'it’s your package,':'Son tus paquetes,' }}
                        <br><b>{{ lang==='en'?'get it when you want it.':'retiralos cuando quieras.' }}</b>
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  
</template>

<script>
import BarbadosMap from '@/assets/images/popups/BarbadosMap.vue'
import { mapState } from 'vuex'
export default {
    data(){
        
        return {
            selectVal:'',
            en_lockers:[
                'Massy Stores Maraval Aeropost Locker',
                'MASSY STORES WESTMOORINGS Aeropost Locker',
                'MASSY STORES MANDALAY Aeropost Locker',
                'MASSY STORES TRINCITY Aeropost Locker',
                'MASSY STORES ST AUGUSTINE Aeropost Locker',
                'MASSY STORES GULF VIEW Aeropost Locker',
                'MASSY STORES MARABELLA Aeropost Locker',
                'UNIPET- LADY HAILES Aeropost Locker',
                'MASSY STORES ST ANNs Aeropost Locker',
                'MASSY STORES ALYCE GLEN Aeropost Locker',
                'UNIPET ST AUGUSTINE Aeropost Lockers',
                'UNIPET BRENTWOOD Aeropost Locker',
                'AEROPOST- FERNANDES COMPOUND'
            ],
            es_lockers:[
                'Massy Stores Maraval Aeropost Locker',
                'MASSY TIENDAS WESTMOORINGS Aeropost Locker',
                'MASSY TIENDAS MANDALAY Aeropost Locker',
                'MASSY TIENDAS TRINCITY Aeropost Locker',
                'MASSY TIENDAS SAN AGUSTÍN Aeropost Locker',
                'MASSY TIENDAS VISTA DEL GOLFO Aeropost Locker',
                'MASSY TIENDAS MARABELLA Aeropost Locker',
                'UNIPET- LADY HAILES Aeropost Locker',
                "MASSY TIENDAS ST ANN's Aeropost Locker",
                'MASSY TIENDAS ALYCE GLEN Aeropost Locker',
                'UNIPET ST AUGUSTINE Taquillas Aeropost',
                'UNIPET BRENTWOOD Aeropost Locker',
                'COMPLEJO AEROPOST- FERNANDES'
            ],
        }
    },
    computed:{
        ...mapState(['lang']),
        lockers(){
            return this.lang==='en'? this.en_lockers:this.es_lockers;
        }
    },
    components:{
        BarbadosMap
    },
    methods:{
        handleLockerSelection(){

        }
    }
}
</script>

<style lang="scss" scoped>
.popupWrapper{
    @apply w-full h-screen  overflow-y-scroll py-12 fixed left-0 top-0 bg-[#fff] z-[999];
}
.popupWrapper::-webkit-scrollbar{
    @apply hidden;
}
.select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

</style>
