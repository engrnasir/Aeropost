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
  name: 'MartiniqueRate',
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
                ['0.50 lb','USD $6.95'],
                ['1 lb','USD $9.00'],
                ['Addtional lb','USD $4.00'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Handling Fee (local charge)','Quote with local agent'],
                ['Duties & Taxes','Applicable Duties & Taxes'],
                ['Home Delivery (local charge)','Quote with local agent'],	
            ],

            table1:[
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['SED Shipment','USD $25.00'],
                ['Local clearance fees (for shipment brokerage with applied duties and taxes fees)','USD $30.00 (approx.)'],
            ],
            
        },
        es_info:{

            packages:[
                ['Paquetes','Tarifas(USD)'], 
                ['0.50 lb','USD $6.95'], 
                ['1 lb','USD $9.00'], 
                ['Adicional lb','USD $4.00'],
            ],
            
            OtherCharges:[
                ['Otros cargos',''],
                ['Tarifa de manejo (cargo local)','Cotización con agente local'],
                ['Derechos e impuestos','Derechos e impuestos aplicables'],
                ['Entrega a domicilio (cargo local)','Cotización con agente local'],	
            ],
            table1:[
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
                ['Envío SED','USD $25.00'],
                ['Tarifas de despacho local (para el corretaje de envíos con aranceles e impuestos aplicados)','USD $30.00 (aprox.)'],
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
