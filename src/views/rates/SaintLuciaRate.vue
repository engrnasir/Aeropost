<template>
    <div>
        
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.OtherCharges"/>        
 
        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'SaintLuciaRate',
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
                ['0.50 lb','$5.95'],
                ['1 lb','$7.95'],
                ['2 lb','$11.95'],
                ['3 lb','$15.95'],
                ['Additional lb','$4.00'],
            ],
            
            OtherCharges:[
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
            ],
            
        },
        es_info:{
            
            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0,50 libras', '$5,95'],
                ['1 libra', '$7.95'],
                ['2 libras', '$11.95'],
                ['3 libras', '$15.95'],
                ['libras adicionales','$4,00'],
            ],
            
            OtherCharges:[
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
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
