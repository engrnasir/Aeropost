<template>
  <div class="row mwrapper max-md:flex-col mb-20">
    <div class="max-md:mb-5">
      <p class="text-blue mb-4 leading-none text-3xl uppercase">{{ info.title }}</p>
      <h3 class="main-heading" v-html="info.heading "></h3>
      <p class="snippet" v-html="info.description"></p>
    </div>
    <img src="@/assets/images/business/business2.png" alt="business1" class="image image1">
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            en_info:{
                title:'Shipping',
                heading:'Comprehensive Shipping Solutions for Your Business',
                description:'We specialize in providing comprehensive import shipping solutions to businesses in the country. Our services include customs clearance, drayage, freight forwarding, and logistics management. Whether you need to import raw materials, equipment, or finished products, we can tailor our services to match your business needs.'
            },
            es_info:{
                title:'Envío',
                heading:'Soluciones integrales de envío para su empresa',
                description:'Nos especializamos en brindar soluciones integrales de envío de importación a empresas en el país. Nuestros servicios incluyen despacho de aduana, acarreo, transporte de carga y gestión logística. Ya sea que necesite importar materias primas, equipos o productos terminados, podemos adaptar nuestros servicios para satisfacer sus necesidades comerciales.'
            },
        }
    },
    computed:{
      ...mapState(['lang']),
      info(){
        return this.lang==='en'? this.en_info:this.es_info
      }
    }
}
</script>
<style lang="scss" scoped>
.mwrapper{
    @apply flex justify-center items-center px-5  relative mb-10
        max-md:py-6 max-md:mb-8
            ;
  }
  .main-heading{
    @apply font-bold text-[44px] max-md:text-3xl leading-[44px] text-blue mb-6 md:max-w-[550px];
  }
  .snippet{
    @apply text-[#737373] text-[22px] leading-8 md:max-w-[550px];
  }
  .image{
    @apply w-[410px] mr-[90px] relative z-10
      max-lg:w-[300px] max-lg:mr-16
      max-md:mr-0 max-md:mb-10
      ;
  }
  .image1{
    @apply m-0 ml-[90px] relative z-10
      max-lg:w-[300px] max-lg:ml-16
      max-md:ml-0 max-md:mb-10
      ;
  }

</style>
