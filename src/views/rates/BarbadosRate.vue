<template>
    <div>

        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <WarrantyVue/>
        
        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <tableVue :list="info.customHandling.table" :hasHeader="false" :tfoot="info.customHandling.tableFooter"/>
        <tableVue :list="[['(*) Rates do not include VAT']]" />

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'BarbadosRate',
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
                ['2 lb','USD $14.00'],
                ['3 lb','USD $19.00'],
                ['Additional lb','USD $5.00'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['Customs Handling','See Custom Handling for details'],
                ['Counter Storage Fee if package is not collected within the next 5 business days after ‘Ready At Counter’','USD $5.00 per day'],            	
	        ],

            customHandling:{
                title:'Customs Handling',
                table:[
                    ['Customs Handling Fee on Personal Entries','USD  $10.00'],
                    ['Customs Handling Fee on Commercial Entries','USD  $20.00'],
                    ['Barbados Goverment Fee per Entry','USD  $5.00'],
                ],
                tableFooter:'Warehouse storage for package not having a proper invoice will apply 5 business days after receiving status alert “In-Customs Needs Documentation” - USD$10.00 + VAT per day'
            },
        },
        es_info:{
            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0.5 lb','USD $6.95'],
                ['1 libra','USD $9.00'],
                ['2 libras','USD $14.00'],
                ['3 libras','USD $19.00'],
                ['libras adicionales','USD $5.00'],
            ],
            
            OtherCharges:[
                ['Otros cargos',''],
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
                ['Gestión aduanera','Ver Gestión personalizada para más detalles'],
                ["Tarifa de almacenamiento en mostrador si el paquete no se recoge dentro de los próximos 5 días hábiles después de 'Listo en mostrador", "USD $5.00 por día"],
	        ],

            customHandling:{
                title:'Manejo Aduanal',
                table:[
                    ['Tarifa de gestión aduanera sobre entradas personales','USD $10,00'],
                    ['Tarifa de gestión aduanera sobre entradas comerciales','USD $20,00'],
                    ['Tarifa del gobierno de Barbados por entrada','USD $5.00'],
                ],
                tableFooter:'El almacenamiento en almacén para el paquete que no tenga una factura adecuada se aplicará 5 días hábiles después de recibir la alerta de estado "Documentación de necesidades en aduana" - USD $ 10.00 + IVA por día'
            },
        },
    }
  },
  computed:{
    ...mapState(['lang']),
    info(){return this.lang==='en'? this.en_info:this.es_info}
  }
  
}
</script>
