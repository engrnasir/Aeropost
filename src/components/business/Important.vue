<template>
    <div class="py-[60px] flex flex-col items-center bg-bgImg bg-center bg-cover bg-no-repeat px-5 bg-blue">
          <p class="font-light text-[32px] mb-2 text-center text-white" >{{info.title}}</p>
          <p class="font-light text-base mb-8 text-center text-white max-w-[660px]" v-html="info.description" ></p>
          <a href="" class="mbtn text-center">
              {{this.lang==='en'?'Download attached billing request':'Descargar solicitud de facturación adjunta'}}
          </a>
      </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  export default {
    data(){
        return{
            en_info:{
                title:'Important',
                description:`Download your billing request form here and send it to <a href="mailto:infoempresas@aeropost.com" class="font-bold">infoempresas@aeropost.com</a>, along with your company's Internal Revenue Service E-Rut`
            },
            es_info:{
                title:'Importante',
                description:`Descarga aquí tu formulario de solicitud de facturación y envíalo a <a href="mailto:infoempresas@aeropost.com" class="font-bold">infoempresas@aeropost.com</a>, junto con el E-Rut del Servicio de Rentas Internas de su empresa`
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
  
  <style>
.mbtn{
  @apply px-12 py-[10px] rounded-[40px] text-sm sm:text-lg font-medium bg-yellow text-blue cursor-pointer transition-all duration-200 hover:bg-white; 
}
</style>
