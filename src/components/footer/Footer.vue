<template>
    <div>
        <div class="py-8 flex flex-col items-center" :class="bgBlue===true?'bg-blue':'bg-[#F2FBFF]'">
            <router-link to="/">
                <Logo :colorVal="logoColor"  class="w-[230px] mb-6"></Logo>
            </router-link>
            <ul class="items">
                <li class="item" :class="bgBlue?'item-white':'item-blue'"><router-link to="/how-it-works">{{lang=='en'?'How It Works':'Cómo funciona'}}</router-link></li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'"><router-link to="/aboutus">{{lang=='en'?'About Us':'Sobre nosotras'}}</router-link></li>
                <li v-if="!invalidRate" class="item" :class="bgBlue?'item-white':'item-blue'"><router-link :to="`/rates/${selectedCountry.id}`">{{lang=='en'?'Rates':'Tarifas'}}</router-link></li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'"><router-link to="/calculator">{{lang=='en'?'Calculator':'Calculadora'}}</router-link></li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'"><router-link to="/restricted">{{lang=='en'?'Restricted Products':'Productos restringidos'}}</router-link></li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'"><router-link to="/contactus">{{lang=='en'?'Contact':'Contacto'}}</router-link></li>
                <li class="item mr-0" :class="bgBlue?'item-white':'item-blue'"><router-link to="/terms">{{lang=='en'?'Terms and Conditions':'Términos y condiciones'}}</router-link></li>
            </ul>
            <p class="text-sm" :class="bgBlue?'text-white':'text-[#33333]'">
                {{this.lang==='en'?'© 2023 Aeropost. All Rights Reserved.':'© 2023 Aeropost. Reservados todos los derechos.'}}
            </p>
        </div>
    </div>

</template>

<script>
import { mapState } from 'vuex';
import Logo from '../header/Logo.vue';
export default {
    props:['bgBlue'],
    data(){
        return{
            logoColor:'#0B3E9D'
        }
    },
    components:{
        Logo
    },
    computed:{
        ...mapState(['selectedCountry','lang']),
        invalidRate(){
            return this.selectedCountry.id==='cb4' 
                    || this.selectedCountry.id ==='cb13' 
                    || this.selectedCountry.id ==='cb19';
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
