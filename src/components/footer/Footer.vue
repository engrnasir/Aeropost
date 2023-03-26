<template>
    <div>
        <div class="py-8 flex flex-col items-center" :class="bgBlue===true?'bg-blue':'bg-[#F2FBFF]'">
            <router-link to="/">
                <Logo :colorVal="logoColor"  class="w-[230px] mb-6"></Logo>
            </router-link>
            <ul class="items">
                <li class="item" :class="bgBlue?'item-white':'item-blue'"><router-link to="/how-it-works">How It Works</router-link></li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'"><router-link to="">About Us</router-link></li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'"><router-link to="/rates">Rates</router-link></li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'"><router-link to="/calculator">Calculator</router-link></li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'"><router-link to="">Restricted Products</router-link></li>
                <li class="item" :class="bgBlue?'item-white':'item-blue'"><router-link to="">Contact</router-link></li>
                <li class="item mr-0" :class="bgBlue?'item-white':'item-blue'"><router-link to="">Terms and Conditions</router-link></li>
            </ul>
            <p class="text-sm" :class="bgBlue?'text-white':'text-[#33333]'">© 2023 Aeropost. All Rights Reserved.</p>
        </div>
    </div>

</template>

<script>
import Logo from '../header/Logo.vue';
export default {
    props:['bgBlue'],
    data(){
        return{
            logoColor:'blue'
        }
    },
    components:{
        Logo
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