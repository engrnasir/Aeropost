<template>
    <div>
                
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <tableVue :list="info.table1"/>
 
        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'GrenadaRate',
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
                ['0.5 lb','USD $6.95'],
                ['1 lb','USD $9.00'],
                ['Addtional lb','$4.00'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Handling Fee','USD $5.00'],
                ['Duties and taxes','Applicable duties and taxes'],
                ['Customs warehousing (local charge at customs)','$3.00ECD'],
                ['Home Delivery (local charge)','Quote with local agent'],
            ],
            table1:[
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['SED','USD $25.00'],
            ],
            
        },
        es_info:{
            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0.5 lb','USD $6.95'],
                ['1 libra','USD $9.00'],
                ['libras adicionales','$4,00'],
            ],
            
            OtherCharges:[
                ['Otros cargos',''],
                ['Tarifa de manejo','USD $5.00'],
                ['Derechos e impuestos','Derechos e impuestos aplicables'],
                ['Almacenamiento aduanero (cargo local en la aduana)','$3.00ECD'],
                ['Entrega a domicilio (cargo local)','Cotización con agente local'],
            ],
            table1:[
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
                ['SED','USD $25.00'],
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
