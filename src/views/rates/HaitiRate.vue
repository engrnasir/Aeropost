<template>
    <div>
            
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>

        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'HaitiRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue
  },
  data(){
    return{
        en_info:{

            packages:[
                ['Packages','Rates(USD)'],
                ['0.50 lb','$7.50'],
                ['1lb','$9.50'],
                ['2 lb','$14.00'],
                ['3 lb','$17.00'],
                ['Addtional lb','$3.30'],
            ],
            
            OtherCharges:[
                ['Other charges'],
                ['Home Delivery','$5.00 por lb'],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['Documents','$4.00 por lb minimun $1.00'],
            ],
            
        },
        es_info:{

            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0,50 libras', '$7,50'],
                ['1lb','$9.50'],
                ['2 libras', '$14.00'],
                ['3 libras', '$17.00'],
                ['libras adicionales','$3,30'],
            ],
            
            OtherCharges:[
                ['Otros cargos'],
                ['Entrega a domicilio','$5.00 por lb'],
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
                ['Documentos','$4.00 por lb mínimo $1.00'],
            ],
            
        },
    }
  },
  computed:{
    ...mapState(['lang']),
    info(){
        return this.lang==='en'?this.en_info:this.es_info;
    }
  }
  
}
</script>
