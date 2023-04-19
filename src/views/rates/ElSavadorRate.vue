<template>
    <div>
        <InformationVue title="You can track your packages on our site at www.aeropost.com." />

        <tableVue :list="info.table1"/>

        <tableVue :list="info.packages" :hasHeader="true"/>
        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <InformationVue :list="info.list1" />

        <h2 class="main-heading">{{ info.warrantyTable.title }}</h2>
        <tableVue :list="info.warrantyTable.rateList" :hasHeader="true"/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <p class="text-base text-blue mb-5 max-w-[80%]">{{ info.customHandling.description }}</p>
        <tableVue :list="info.customHandling.table1" :hasHeader="true"/>
        <tableVue :list="info.customHandling.cifVal"/>


        <InformationVue :list="info.list2" />


    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'ElSavador',
  components:{
      tableVue,
      InformationVue,
      
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
            list1:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling are subject to additional charges.',
                'For packages up to 50 lb, we charge based on the weight of your package, NOT the size.',
                'Other Customs charges subject to governmental dispositions.',
            ],
            warrantyTable:{
                title:'Warranty Program and Return Service',
                rateList:[
                        ['Rate Break (Declared Value)','Rate'],
                        ['US$1 - US$99.99','US$1.90'],
                        ['US$100 - US$159.99','US$3.90'],
                        ['US$160 - US$199.99','US$3.95'],
                        ['US$200 - US$299.99','US$5.95'],
                        ['US$300 - US$399.99','US$7.95'],
                        ['US$400 - US$499.99','US$9.75'],
                        ['US$500 - US$599.99','US$11.50'],
                        ['US$600 - US$699.99','US$13.25'],
                        ['US$700 - US$799.99','US$14.95'],
                        ['US$800 - US$899.99','US$16.75'],
                        ['US$900 - US$999.99','US$18.50'],
                        ['US$1000 - US$1099.99','US$20.25'],
                        ['US$1100 - US$1199.99','US$21.95'],
                        ['US$1200 - US$1299.99','US$23.75'],
                        ['US$1300 - US$1399.99','US$25.50'],
                        ['US$1400 - US$1499.99','US$27.25'],
                        ['Equal or greater than US$1500','2.5% of the Declared Value']
                    ]
            },
            customHandling:{
                title:'Customs Handling',
                description:'All packages that enter the country must go through customs and are subject to pay duties. Customs handling rates are set based on the package CIF value. To calculate duties for a package use our',
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
                cifVal:[
                    ["CIF Value  =  Package's invoice total  +  Transportation cost  +  Insurance"]
                ]
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
            list1:[
                'Todos los documentos de seguridad con un número de seguimiento serán tratados como paquetes.',
                'Los envíos que requieren un manejo especial están sujetos a cargos adicionales.',
                'Para paquetes de hasta 50 lb, cobramos según el peso de su paquete, NO el tamaño.',
                'Otras cargas aduaneras sujetas a disposiciones gubernamentales.',
            ],
            warrantyTable:{
                title:'Programa de Garantía y Servicio de Devolución',
                rateList:[
                    ['Ruptura de tasa (valor declarado)','Tasa'],
                    ['1 dólar estadounidense - 99,99 dólares estadounidenses', '1,90 dólares estadounidenses'],
                    ['100 USD - 159,99 USD', '3,90 USD'],
                    ['USD 160 - USD 199,99', 'USD 3,95'],
                    ['US$200 - US$299.99','US$5.95'],
                    ['US$300 - US$399.99','US$7.95'],
                    ['US$400 - US$499.99','US$9.75'],
                    ['500 USD - 599,99 USD', '11,50 USD'],
                    ['600 dólares estadounidenses - 699,99 dólares estadounidenses', '13,25 dólares estadounidenses'],
                    ['US$700 - US$799.99','US$14.95'],
                    ['US$800 - US$899.99','US$16.75'],
                    ['US$900 - US$999.99','US$18.50'],
                    ['US$1000 - US$1099.99','US$20.25'],
                    ['US$1100 - US$1199.99','US$21.95'],
                    ['US$1200 - US$1299.99','US$23.75'],
                    ['US$1300 - US$1399.99','US$25.50'],
                    ['US$1400 - US$1499.99','US$27.25'],
                    ['Igual o mayor a US$1500', '2.5% del Valor Declarado']
                ]
            },
            customHandling:{
                title:'Manejo de Aduana',
                description:'Todos los paquetes que ingresan al país deben pasar por la aduana y están sujetos al pago de impuestos. Las tarifas de manejo de aduanas se establecen en función del valor CIF del paquete. Para calcular los aranceles de un paquete, use nuestro',
                table1:[
                    ["Valor CIF del Paquete", 'Tarifa* + IVA'],
                    ['USD $0 - USD $25', 'USD $2.99 + IVA'],
                    ['USD $26 - USD $100','USD $5.99 + IVA'],
                    ['USD $101 - USD $300','USD $12.50 + IVA'],
                    ['USD $301 - USD $500','USD $17.99 + IVA'],
                    ['USD $501 - USD $1000','USD $34.99 + IVA'],
                    ["Más de USD $ 1000 (Política de Aduana Individual)", 'USD $ 54.99 + IVA'],
                    ['Trámites Permiso Sanitario','USD $15.00 + IVA'],
                    ['Trámites de permisos de la Junta de Productos Químicos y Farmacéuticos', 'USD $15.00 + IVA'],
                    ['Inspección de Paquete','USD $25.00 + IVA'],
                ],
                cifVal:[
                    ["Valor CIF = Total factura del paquete + Costo de transporte + Seguro"]
                ]
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
