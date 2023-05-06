<template>
    <div>      
                
        <h2 class="main-heading">{{ lang==='en'?'AIR':'AIRE' }}</h2>
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.otherCharges" :hasHeader="true" :colspan="2"/>

         <p class="text-blue mb-4" v-if="lang==='en'">*This handling fee charge applies to all transactions, both when customs clearance is provided by Aeropost or the customer elects to pick up Customs document.</p>
         <p class="text-blue mb-4" v-else>*Este cargo por tarifa de manejo se aplica a todas las transacciones, tanto cuando Aeropost proporciona el despacho de aduana como cuando el cliente elige recoger el documento de Aduana.</p>

        <tableVue :list="info.maritime" :hasHeader="true" :colspan="2"/>     
        
        <p class="text-blue mb-4" v-if="lang==='en'"><u>Local documentation charges</u> from vessel company landing agent may apply.</p>        
        <p class="text-blue mb-4" v-else>Se pueden aplicar <u>cargos por documentación local</u> del agente de desembarque de la compañía naviera.</p>        

        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'SaintVincentRate',
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
                ['1/2 lb','USD $5.50'],
                ['1 lb','USD $6.60'],
                ['2 lb','USD $11.00'],
                ['Additional lb (up to 200 lb)','USD $3.85'],
                ['200+ lb','USD $3.05 '],
            ],            
            otherCharges:[
                ['Other charges'],
                ['Customs Handling','USD $3.50*'],	
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
            ],
            
 
            maritime:[
                ['MARITIME'],
                ['<b>Individuals and Corporations</b>',''],
                ['Freight','USD $7.25 per cubic ft. '],
                ['Minimum invoice charge:','USD $25.00'],
                ['Handling Fee',''],
                ['From 1 to 40 cubic ft.','USD $10.00'],
                ['From 41 cubic ft. and up','USD $25.00'],

                ['<b>Corporate - 40 qubic feet and higher</b>',''],
                ['This rate discount is upon request, it has a minimum invoice charge per month',''],
                ['Freight','USD $6.53'],
                ['Minimum charge - 40 cubic ft.','USD $260.00'],
                ['Handling Fee',''],
                ['From 1 to 40 cubic ft.','USD $25.00'],
                ['From 40 cubic ft. and up','USD $50.00'],
                ['Customs Brokerage (when required)','USD $50.00'],	

                ['<b>Corporate - 80 Cubit Ft. and Up</b>',''],
                ['This rate discount is upon request, minimum invoice charge per month required',''],
                ['Freight','USD $5.80 per cubic ft.'],
                ['Minimum charge - 80 cubic ft.','USD $410.00'],
                ['Handling Fee','80 cubic feet and up	USD $50.00'],
                ['Customs Brokerage (when required)','USD $100.00'],
                ['Other charges:',''],
                ['Insurance ',''],
                ['For every USD $100 of declared value','USD $1.50'],
                ['USD $5.00 min. when there is no declared value. Covers a max. of USD $350.00',''],
                ['SED for declared value of USD $2500 and up','USD $25.00'],
                ['HAZ','USD $100.00 per UN'],
                ['Delivery',''],
                ["For small cargo to client's location",'USD $65.00'],
                ["For large cargo to client's location",'USD $200.00'],
                ['Other type of cargo','Request quote'],
            ]
        },
        es_info:{

            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['1/2 libra','USD $5.50'],
                ['1 libra', 'USD $6.60'],
                ['2 libras','USD $11.00'],
                ['lb adicional (hasta 200 lb)','USD $3,85'],
                ['200+ lb','USD $3.05 '],
            ],            
            otherCharges:[
                ['Otros cargos'],
                ['Manejo de Aduanas','USD $3.50*'],
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
            ],
 
            maritime:[
                 ['MARÍTIMO'],
                 ['<b>Personas físicas y jurídicas</b>',''],
                 ['Flete','USD $7.25 por pie cúbico'],
                 ['Cobro mínimo de factura:','USD $25.00'],
                 ['Tasa de tramitación',''],
                 ['De 1 a 40 pies cúbicos','USD $10.00'],
                 ['Desde 41 pies cúbicos en adelante','USD $25.00'],

                 ['<b>Corporativo: 40 pies cúbicos y más</b>',''],
                 ['Este descuento de tarifa es bajo pedido, tiene un cargo mínimo en factura por mes',''],
                 ['Flete','USD $6.53'],
                 ['Cargo mínimo - 40 pies cúbicos','USD $260.00'],
                 ['Tasa de tramitación',''],
                 ['De 1 a 40 pies cúbicos','USD $25.00'],
                 ['Desde 40 pies cúbicos en adelante','USD $50.00'],
                 ['Agencia Aduanal (cuando se requiera)','USD $50.00'],

                 ['<b>Corporativo - 80 pies cúbicos. y arriba</b>',''],
                 ['Este descuento en la tarifa es a pedido, se requiere un cargo mínimo de factura por mes',''],
                 ['Flete','USD $5.80 por pie cúbico'],
                 ['Cargo mínimo - 80 pies cúbicos','USD $410.00'],
                 ['Tarifa de manejo', '80 pies cúbicos en adelante USD $50.00'],
                 ['Agencia aduanal (cuando se requiera)','USD $100.00'],
                 ['Otros cargos:',''],
                 ['Seguro ',''],
                 ['Por cada USD $100 de valor declarado','USD $1.50'],
                 ['USD $5.00 mín. cuando no hay valor declarado. Cubre un máx. de USD $350.00',''],
                 ['SED por valor declarado de USD $2500 y más','USD $25.00'],
                 ['HAZ','USD $100.00 por ONU'],
                 ['Entrega',''],
                 ["Para carga pequeña a domicilio del cliente",'USD $65.00'],
                 ["Para carga grande a la ubicación del cliente", 'USD $ 200.00'],
                 ['Otro tipo de carga','Solicitar cotización'],
             ]
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
