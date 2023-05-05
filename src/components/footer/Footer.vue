<template>
    <div>
       
        <div class="py-8 flex flex-col items-center" :class="bgBlue===true?'bg-blue':'bg-[#F2FBFF]'">
            <router-link :to="`/${selectedCountry.gtw}/${lang}`">
                <footerLogo :colorVal="colorVal"/>
            </router-link>
            <ul class="items">
                <li class="item" :class="bgBlue?'item-white':'item-blue'">
                    <router-link :to="`/${selectedCountry.gtw}/${lang}/how-it-works`">
                        {{lang=='en'?'How It Works':'¿Cómo Funciona?'}}
                    </router-link>
                </li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'">
                    <router-link :to="`/${selectedCountry.gtw}/${lang}/aboutus`">
                        {{lang=='en'?'About Us':'¿Quiénes somos?'}}
                    </router-link>
                </li>
                <li v-if="!invalidRate" class="item" :class="bgBlue?'item-white':'item-blue'">
                    <router-link :to="`/${selectedCountry.gtw}/${lang}/rates`">
                        {{lang=='en'?'Rates':'Tarifas'}}
                    </router-link>
                </li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'">
                    <router-link :to="`/${selectedCountry.gtw}/${lang}/calculator`">
                        {{lang=='en'?'Calculator':'Cotiza tu envío'}}
                    </router-link>
                </li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'">
                    <router-link :to="`/${selectedCountry.gtw}/${lang}/contactus`">
                        {{lang=='en'?'Contact':'Contacto'}}
                    </router-link>
                </li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'" v-if="selectedCountry.gtw === 'SCL'">
                    <router-link :to="`/${selectedCountry.gtw}/${lang}/business`">
                        {{lang==='en'?'Business':'Negocio'}}
                    </router-link>
                </li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'" >
                    <router-link :to="`/${selectedCountry.gtw}/${lang}/benefits`">
                        {{lang==='en'?'Benefits':'Beneficios'}}
                    </router-link>
                </li>
                <li class="item mr-0" :class="bgBlue?'item-white':'item-blue'">
                    <router-link :to="`/${selectedCountry.gtw}/${lang}/terms`">
                        {{lang=='en'?'Terms and Conditions':'Términos y condiciones'}}
                    </router-link>
                </li>
            </ul>
            <p class="text-sm" :class="bgBlue?'text-white':'text-[#33333]'">
                {{this.lang==='en'?`© ${currentYear} Aeropost. All Rights Reserved.`:`© ${currentYear} Aeropost. Todos los derechos reservados.`}}
            </p>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex';
import footerLogo from './footerLogo.vue';
export default {
    props:['bgBlue'],
    components:{
        footerLogo
    },
    data(){
        return{
            colorVal:'#0B3E9D'
        }
    },
    computed:{
        ...mapState(['selectedCountry','lang']),
        invalidRate(){
            return this.selectedCountry.gtw==='BHS';
            },
        currentYear(){
            return new Date().getFullYear()
        }
    },
    mounted(){
       this.logoColor = this.bgBlue===true? 'white': 'blue';
    }

}
</script>

<style lang="scss" scoped>

.items{
    @apply flex justify-center items-center flex-wrap mb-6 max-sm:flex-col;
}
.item{
   @apply mr-12 text-base  font-medium transition-all duration-300  hover:font-bold
          max-md:mr-6 max-sm:mr-0 max-sm:mb-4
   ;
}
.item-blue{
    @apply text-blue hover:text-[#333333]
}
.item-white{
    @apply text-white hover:text-yellow;
}
</style>
