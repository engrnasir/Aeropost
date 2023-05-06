<template>
    <div>
        
        <h2 class="main-heading">{{lang==='en'?'AIR':'AIRE'}}</h2>
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>

        <tableVue :list="info.table1" :colspan="2"/>

        <InformationVue :list="info.list2" />

        <p class="italic text-base mb-4 text-blue ">
            {{lang==='en'?'Local documentation charges from vessel company landing agent may apply.':'Es posible que se apliquen cargos por documentación local del agente de desembarque de la compañía naviera.'}}
        </p>

        <WarrantyVue/>
        
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'CuracaoRate',
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
                ['0.5 lb','$8.50'],
                ['1 lb','$11.00'],
                ['2 lb','$14.50'],
                ['3 lb','$18.50'],
                ['Addtional 10 lbs','$4.00'],
                ['10lbs+','$3.75'],	
            ],
            
            OtherCharges:[
                ['Other charges'],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['Home Delivery','$5.00'],
                ['Customs Handling (billed on a separate line)','$6.50/package'],
            ],
            table1:[
                ['Consolidation requests'],
                ['First Package: Regular fees apply (Handling fee)',''],
                ['Additional Packages within the Multiple Shipment','$3.00 per pkg.'],
            ],

            list2:[
                'Local taxes are not included.',
                'Storage first 5 Days Free; 5 USD$ per Day thereafter.',
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling, are subject to additional charges.',
            ],
        },
        es_info:{
            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0,5 libras', '$8,50'],
                ['1 libra', '$11.00'],
                ['2 libras', '$14.50'],
                ['3 libras', '$18.50'],
                ['10 libras adicionales', '$4.00'],
                ['10 libras+','$3.75'],
            ],
            
            OtherCharges:[
                ['Otros cargos'],
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
                ['Entrega a domicilio','$5.00'],
                ['Manejo de aduanas (facturado en una línea separada)','$6.50/paquete'],
            ],
            table1:[
                ['Solicitudes de consolidación'],
                ['Primer paquete: se aplican tarifas regulares (tarifa de manejo)',''],
                ['Paquetes Adicionales dentro del Envío Múltiple','$3.00 por paquete'],
            ],

            list2:[
                'Los impuestos locales no están incluidos.',
                'Almacenamiento primeros 5 Días Gratis; 5 USD$ por día a partir de entonces.',
                'Todos los documentos de seguridad con un número de seguimiento serán tratados como paquetes.',
                'Los envíos que requieren algún manejo especial están sujetos a cargos adicionales.',
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
