<template>
    <div class="row mwrapper max-md:flex-col mb-20">
          <img src="@/assets/images/business/business1.png" alt="business1" class="image">
          <div class="details-wrapper">
              <p class="text-blue mb-4 leading-none text-3xl ">{{ info.title }}</p>
              <h3 class="main-heading" v-html="info.heading "></h3>
              <p class="snippet" v-html="info.description"></p>
          </div>
      </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            en_info:{
                title:'Import Shipping',
                heading:'Simplify Your Import Shipping Process',
                description:'Importing products into your county can be a complex and challenging process. At Aeropost, we understand the intricacies and nuances of importing goods and can offer you custom shipping solutions that simplify and streamline the process including last mile delivery to your store front. Our reliable service ensures that your shipments arrive on time and in good condition.'
            },
            es_info:{
                title:'Envío de importación',
                heading:'Simplifique su proceso de envío de importación',
                description:'La importación de productos a su condado puede ser un proceso complejo y desafiante. En Aeropost, comprendemos las complejidades y los matices de la importación de productos y podemos ofrecerle soluciones de envío personalizadas que simplifican y agilizan el proceso, incluida la entrega de última milla en el frente de su tienda. Nuestro servicio confiable asegura que sus envíos lleguen a tiempo y en buenas condiciones.'
            }
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
