<template>
    <div>

        <tableVue :list="info.packages" :hasHeader="true" :colspan="2"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>

        <p class="text-blue text-sm mb-4">
            {{ lang==='en'?'*Additional fees apply for packages that are 30 lb and up.':'*Se aplican tarifas adicionales para paquetes de 30 lb o más.' }}
        </p>

        <h2 class="main-heading">{{ lang==='en'?'Warranty Program and Return Service':'Programa de Garantía y Retornos' }}</h2>
        <newWarrantyTable/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <tableVue :list="info.customHandling.table1" :tfoot="info.customHandling.tfoot" :hasHeader="true"/>
        <tableVue :list="info.customHandling.formula"/>

        <InformationVue :list="info.list3" />

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import newWarrantyTable from '@/components/rates/newWarrantyTable.vue';
import { mapState } from 'vuex';
export default {
  name: 'GuatemalaRate',
  components:{
      tableVue,
      InformationVue,
      newWarrantyTable
  },
  data(){
    return{
        en_info:{

            packages:[
                ['Packages'],
                ['Packages 1 to 35 lbs ($4.50 minimum)','USD $3.70'],
                ['Packages 35 lbs and up','USD $2.60']
            ],
            OtherCharges:[
                ['Other charges'],
                ['Delivery to External Counters (Quetzaltenango, Antigua, Río Dulce, Pana, etc.)','USD $1.00 additional per lb'],
                ['Home Delivery (Metropolitan Area)','USD $4.50 per package'],
                ['Home Delivery (Provincial Area)','USD $5.50 per package*'],
                ['Customs Handling','See Custom Handling for details'],
            ],

            customHandling:{
                title:'Customs Handling',
                table1:[
                    ['PACKAGE CIF VALUE	','RATE'],
                    ['$0.01 to $15.00	','$3.00	 '],
                    ['$15.01 to $500	 ','$6.00'],
                    ['$500.01 to $999.99	','$12.00	 '],
                    ['More than $1000.01 (Customs Individual Policy) ',' $65.00 and up'],
                ],
                tfoot:'* Does not include sales tax. All rates are expressed in USD and will be converted to pesos at the exchange rate of the day.',
                formula:[['CIF value = Total invoice of the package + Transport cost + Insurance']]
            },

            list3:[
                'Aeropost automatically clears all your retained packages up to USD $1,000 CIF value. Taxes and customs handling costs will be charged to the package.',
                'Packages with CIF value over USD $1,000.00 will require an individual customs policy. Documents will be handed to the customer for him to do the procedure with the Customs Agency of his choice.',
            ],
        },
        es_info:{
        
            packages:[
                ['Paquetes'],
                ['Paquetes de 1 a 35 libras ($4.50 mínimo)','USD $3.70'],
                ['Paquetes de 35 libras en adelante','USD $2.60']
            ],
            OtherCharges:[
                ['Otros cargos'],
                ['Entrega en Mostradores Externos (Quetzaltenango, Antigua, Río Dulce, Pana, etc.)','USD $1.00 adicional por lb'],
                ['Envío a domicilio (Área Metropolitana)','USD $4.50 por paquete'],
                ['Envío a domicilio (Área Provincial)','USD $5.50 por paquete*'],
                ['Gestión aduanera','Ver Gestión personalizada para más detalles'],
            ],
            customHandling:{
                title:'Manejo Aduanal',
                table1:[
                    ["Valor CIF del Paquete", 'Tarifa'],
                    ['$0.01 to $15.00','$3.00	 '],
                    ['$15.01 to $500','$6.00'],
                    ['$500.01 to $999.99','$12.00	 '],
                    ['More than $1000.01 (Customs Individual Policy) ',' $65.00 and up'],
                ],
                tfoot:'*No incluye impuesto de ventas. Todas las tarifas están expresadas en USD y serán convertidas a pesos al tipo de cambio del día.',
                formula:[['Valor CIF = Factura total del paquete + Costo de transporte + Seguro']]
            },
            list3:[
                'Aeropost borra automáticamente todos sus paquetes retenidos hasta un valor CIF de USD $1,000. Los impuestos y los gastos de tramitación aduanera se cargarán al paquete.',
                'Paquetes con valor CIF superior a USD $1,000.00 requerirán una póliza de aduana individual. Se entregarán los documentos al cliente para que realice el trámite ante la Agencia de Aduanas de su elección.',
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
