<template>
    <div>

        <tableVue :list="info.table1" :hasHeader="false"/>
                
        <tableVue :list="info.packages" :hasHeader="true"/>

        <WarrantyVue/>

    </div>
  </template>

  <script>
  import tableVue from '@/components/rates/table.vue';
  import InformationVue from '@/components/rates/Information.vue';
  import WarrantyVue from '@/components/rates/Warranty.vue';
  import { mapState } from 'vuex';
  export default {
    name: 'BelizeRate',
    components:{
        tableVue,
        InformationVue,
        WarrantyVue
    },
    data(){
      return{
        en_info:{
            table1:[
                ['Annual Membership', 'FREE'],
                ['Monthly Minimum', 'None'],
                ['Documents', 'USD$2.75 (minimum 4 oz.)']
            ],
            packages:[
                ['Packages','Rates(USD)'],
                ['1 lb.','USD$8.00'],
                ['2 lb.','USD$11.50'],
                ['3 lb.','USD$14.00'],
                ['Additional','USD$3.00'],
                ['Other Charges (USD)','']
            ],
        },
        es_info:{
            table1:[
                ['Membresía Anual', 'GRATIS'],
                ['Mínimo mensual', 'Ninguno'],
                ['Documentos', 'USD$2.75 (mínimo 4 oz.)']
            ],
            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['1 libra', 'USD $ 8,00'],
                ['2 libras', 'USD$11,50'],
                ['3 lb.','USD$14.00'],
                ['Adicional','USD$3.00'],
                ['Otros cargos (USD)','']
            ],         
        },
      }
    },
    computed:{
        ...mapState(['lang']),
        info(){return this.lang==='en'? this.en_info:this.es_info}
    }
    
  }
  </script>
