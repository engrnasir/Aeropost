<template>
    <div>
        <InformationVue title="You can track your packages on our site at www.aeropost.com." />

        <tableVue :list="info.table1"/>

        <tableVue :list="info.packages" :hasHeader="true"/>
        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <h2 class="main-heading">{{ lang==='en'?'Warranty Program and Return Service':'Programa de Garantía y Retornos' }}</h2>
        <newWarrantyTableVue/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <tableVue :list="info.customHandling.table1" :tfoot="info.customHandling.tfoot" :hasHeader="true"/>
        <tableVue :list="info.customHandling.formula"/>

        <InformationVue :list="info.list2" />


    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import newWarrantyTableVue from '@/components/rates/newWarrantyTable.vue';
import { mapState } from 'vuex';
export default {
  name: 'ElSavador',
  components:{
      tableVue,
      InformationVue,
      newWarrantyTableVue
  },
  data(){
    return{
        en_info:{
            table1:[
                ['Annual Membership', '<b>FREE</b>'],
                ['Monthly Minimum', '<b>None</b>']
            ],
            packages:[
                ['Packages',''],
                ['Packages up to 1 lb. (USD $4.75 minimum)', 'USD $3.65 + IVA'],
                ['Packages froms 2lb to 35lb.', 'USD $3.65 per lb + IVA'],
                ['more than 35 lb.', 'USD $2.95 per lb + IVA']
            ],
            OtherCharges:[
                ['Other charges',''],
                ['Fuel Surcharge', 'USD $0.85 per lb. + IVA'],
                ['Delivery in Metropolitan Area', 'USD $2.25 per package (IVA included)'],
                ['Customs Handling', 'See Custom Handling for details'],
                ['Restricted Shipments', '<a href="" class="text-blue">Click here</a>']
            ],
            customHandling:{
                title:'Customs Handling',
                table1:[
                    ["Package's CIF Value", 'Rate* + IVA'],
                    ['USD $0 - USD $25', 'USD $2.99 + IVA'],
                    ['USD $26 - USD $100','USD $5.99 + IVA'],
                    ['USD $101 - USD $300','USD $12.50 + IVA'],
                    ['USD $301 - USD $500','USD $17.99 + IVA'],
                    ['USD $501 - USD $1000','USD $34.99 + IVA'],
                    ["More than USD$1000 (Individual Custom's Policy)",'USD $54.99 + IVA'],
                    ['Sanitary Permit Paperwork','USD $15.00 + IVA'],
                    ['Chemicals and Pharmaceuticals Board Permit Paperwork','USD $15.00 + IVA'],
                    ['Package Inspection','USD $25.00 + IVA'],
                ],
                tfoot:'* Does not include sales tax. All rates are expressed in USD and will be converted to pesos at the exchange rate of the day.',
                formula:[['CIF value = Total invoice of the package + Transport cost + Insurance']]
            },
            list2:[
                'Aerocasillas automatically clears all your retained packages up to USD $1,000 CIF value. Taxes and customs handling costs will be charged to the package.',
                'Packages with CIF value over USD $1,000.00 will require an individual customs policy.'
            ]
        },
        es_info:{
            table1:[
                ['Membresía anual', '<b>GRATIS</b>'],
                ['Mínimo mensual', '<b>Ninguno</b>']
            ],
            packages:[
                ['Paquetes',''],
                ['Paquetes hasta 1 lb. (mínimo USD $4.75)', 'USD $3.65 + IVA'],
                ['Paquetes desde 2lb hasta 35lb.', 'USD $3.65 por lb + IVA'],
                ['más de 35 lb.', 'USD $2.95 por lb + IVA']
            ],
            OtherCharges:[
                ['Otros cargos',''],
                ['Recargo por combustible', 'USD $0.85 por libra + IVA'],
                ['Entrega en Área Metropolitana', 'USD $2.25 por paquete (IVA incluido)'],
                ['Gestión aduanera', 'Ver Gestión personalizada para más detalles'],
                ['Envíos restringidos', '<a href="" class="text-blue">Haga clic aquí</a>']
            ],
            
            customHandling:{
                title:'Manejo Aduanal',
                table1:[
                    ["Valor CIF del Paquete", 'Tarifa* + IVA'],
                    ['$0 - $25', '$2.99 + IVA'],
                    ['$26 - $100','$5.99 + IVA'],
                    ['$101 - $300','$12.50 + IVA'],
                    ['$301 - $500','$17.99 + IVA'],
                    ['$501 - $1000','$34.99 + IVA'],
                    ["Más de $1000 (Política de Aduana Individual)", '$54.99 + IVA'],
                    ['Trámites Permiso Sanitario','$15.00 + IVA'],
                    ['Trámites de permisos de la Junta de Productos Químicos y Farmacéuticos', '$15.00 + IVA'],
                    ['Inspección de Paquete','$25.00 + IVA'],
                ],
                tfoot:'*No incluye impuesto de ventas. Todas las tarifas están expresadas en USD y serán convertidas a pesos al tipo de cambio del día.',
                formula:[['Valor CIF = Factura total del paquete + Costo de transporte + Seguro']]
            },
            list2:[
                'Aerocasillas limpia automáticamente todos sus paquetes retenidos hasta un valor CIF de USD $ 1,000. Los impuestos y los gastos de tramitación aduanera se cargarán al paquete.',
                'Paquetes con valor CIF superior a USD $1,000.00 requerirán póliza de aduana individual.'
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
