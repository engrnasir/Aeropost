<template>
    <div>

        <h2 class="main-heading">
            {{ lang==='en'? 'Compare what account type is best for you':'Compara qué tipo de cuenta es mejor para ti' }}
        </h2>

        <tableVue :list="info.packages" :hasHeader="true" :colspan="2"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>
 
        <WarrantyVue/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <tableVue :list="info.customHandling.table1" :hasHeader="true" :tfoot="info.customHandling.tfoot"/>
        <tableVue :list="info.customHandling.formula" />

        <InformationVue :list="info.list3" />

        <h2 class="main-heading">
            {{ lang==='en'? 'Individual Policy':'Póliza Individual' }}
        </h2>
        <tableVue :list="info.individualTable" :hasHeader="true"/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'HondurusRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue
  },
  data(){
    return{
        en_info:{

            packages:[
                ['Packages'],
                ['Packages per pound (USD $4.50 minimum)','USD $3.50'],
                ['Packages per pound (Over 35 lb)', 'USD $2.45']
            ],
            OtherCharges:[
                ['Other charges'],
                ['Fuel Surcharge','15%'],
                ['Delivery within the Metropolitan Area', 'USD $1.00 per package'],
                ['Customs Handling', 'See Custom Handling for details'],
                ['Restricted Shipments','<a href="" class="text-blue">Click here</a>']
            ],

            customHandling:{
                title:'Customs Handling',
                table1:[
                    ["Package's CIF Value", 'Rate'],
                    ['Up to $50.00','$3.00'],
                    ['From $51 to $100','$7.00'],
                    ['From $101 to $300','$12.00'],
                    ['From $301 to $500','$15.00'],
                    ['From $501 to $1,000','$35.00'],
                ],
                tfoot:'* Does not include sales tax. All rates are expressed in USD and will be converted to pesos at the exchange rate of the day.',
                formula:[['CIF Value	=	Total package invoice	+	Transportation cost	+	Insurance']]
            },
            list3:[
                'Aeropost automatically clears all your retained packages up to USD $1,000 CIF value. Taxes and customs handling costs will be charged to the package.',
                'Packages with CIF value over USD $1,000.00 will require an individual customs policy. Documents will be handed to the customer for him to do the procedure with the Customs Agency of his choice.',
            ],

            individualTable:[
                ["Package's CIF value","RATE"],
                ['US$1,001-US$2,000','US$110.00'],
                ['US$2,001-US$5,000','US$145.00'],
                ['US$5,001-US$7,000','US$185.00'],
                ['US$7,001-US$10,000','US$250.00']
            ]
        },
        es_info:{

            packages:[
                ['Paquetes'],
                ['Paquetes por libra (USD $4.50 mínimo)','USD $3.50'],
                ['Paquetes por libra (más de 35 lb)', 'USD $2.45']
            ],
            OtherCharges:[
                ['Otros cargos'],
                ['Recargo por combustible','15%'],
                ['Entrega dentro del Área Metropolitana', 'USD $1.00 por paquete'],
                ['Gestión aduanera', 'Ver Gestión personalizada para más detalles'],
                ['Envíos restringidos','<a href="" class="text-blue">Haga clic aquí</a>']
            ],

            customHandling:{
                title:'Manejo Aduanal',
                table1:[
                    ["Valor CIF del paquete", 'Tarifa'],
                    ['Hasta $50,00','$3,00'],
                    ['De $51 a $100','$7.00'],
                    ['De $101 a $300','$12.00'],
                    ['De $301 a $500','$15.00'],
                    ['De $501 a $1,000','$35.00'],
                ],
                tfoot:'*No incluye impuesto de ventas. Todas las tarifas están expresadas en USD y serán convertidas a pesos al tipo de cambio del día.',
                formula:[['Valor CIF = Factura total del paquete + Costo de transporte + Seguro']]
            },
            list3:[
                'Aeropost borra automáticamente todos sus paquetes retenidos hasta un valor CIF de USD $1,000. Los impuestos y los gastos de tramitación aduanera se cargarán al paquete.',
                'Paquetes con valor CIF superior a USD $1,000.00 requerirán una póliza de aduana individual. Se entregarán los documentos al cliente para que realice el trámite ante la Agencia de Aduanas de su elección.',
            ],

            individualTable:[
                ["Valor CIF del paquete","TARIFA"],
                ['US$1,001-US$2,000','US$110.00'],
                ['US$2,001-US$5,000','US$145.00'],
                ['US$5,001-US$7,000','US$185.00'],
                ['US$7,001-US$10,000','US$250.00']
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
