<template>
    <div>

        <InformationVue :list="info.list1" />

        <h2 class="main-heading">
            {{ lang==='en'? 'Compare what account type is best for you':'Compara qué tipo de cuenta es mejor para ti' }}
        </h2>

        <tableVue :list="info.table1" :hasHeader="true"/>

        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <InformationVue :list="info.list2" />

        <h2 class="main-heading">{{ info.warrantyTable.title }}</h2>
        <tableVue :list="info.warrantyTable.rateList" :hasHeader="true"/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <p class="text-base text-blue mb-5 max-w-[80%]">{{ info.customHandling.description }}</p>
        <tableVue :list="info.customHandling.table1" :hasHeader="true" :tfoot="info.customHandling.table1Footer"/>
        <tableVue :list="info.customHandling.cifVal"/>

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
import { mapState } from 'vuex';
export default {
  name: 'HondurusRate',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            list1:[
                'We charge on weight NOT on size of your package.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com.',
            ],

            table1:[
                ['','Basics'],
                ['Annual Membership','None'],
                ['Monthly Membership','None']
            ],
            packages:[
                ['Packages',''],
                ['Packages per pound (USD $4.50 minimum)','USD $3.50'],
                ['Packages per pound (Over 35 lb)', 'USD $2.45']
            ],
            OtherCharges:[
                ['Other charges',''],
                ['Fuel Surcharge','15%'],
                ['Delivery within the Metropolitan Area', 'USD $1.00 per package'],
                ['Customs Handling', 'See Custom Handling for details'],
                ['Restricted Shipments','<a href="" class="text-blue">Click here</a>']
            ],
            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling are subject to addional charges.',
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
                description:'All packages that enter the country must go through customs and are subject to pay duties. Customs handling rates are set based on the package CIF value. To calculate duties for a package use our Online Calculator or ask Customer Service for help.',
                table1:[
                    ["Package's CIF Value", 'Rate'],
                    ['Up to $50.00','$3.00'],
                    ['From $51 to $100','$7.00'],
                    ['From $101 to $300','$12.00'],
                    ['From $301 to $500','$15.00'],
                    ['From $501 to $1,000','$35.00'],
                ],
                table1Footer:'* Does not include ISV',
                cifVal:[
                    ["CIF Value  =  Package's invoice total  +  Transportation cost  +  Insurance"]
                ],
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
            list1:[
                'Cobramos por el peso, NO por el tamaño de su paquete.',
                'Puede devolver su correo no deseado y le acreditaremos su cuenta.',
                'Puede rastrear sus paquetes en nuestro sitio en www.aeropost.com.',
            ],

            table1:[
                ['','Lo esencial'],
                ['Membresía anual','Ninguna'],
                ['Membresía mensual','Ninguna']
            ],
            packages:[
                ['Paquetes',''],
                ['Paquetes por libra (USD $4.50 mínimo)','USD $3.50'],
                ['Paquetes por libra (más de 35 lb)', 'USD $2.45']
            ],
            OtherCharges:[
                ['Otros cargos',''],
                ['Recargo por combustible','15%'],
                ['Entrega dentro del Área Metropolitana', 'USD $1.00 por paquete'],
                ['Gestión aduanera', 'Ver Gestión personalizada para más detalles'],
                ['Envíos restringidos','<a href="" class="text-blue">Haga clic aquí</a>']
            ],
            list2:[
                'Todos los documentos de seguridad con un número de seguimiento serán tratados como paquetes.',
                'Los envíos que requieren un manejo especial están sujetos a cargos adicionales.',
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
                description:'Todos los paquetes que ingresan al país deben pasar por la aduana y están sujetos al pago de impuestos. Las tarifas de manejo de aduanas se establecen en función del valor CIF del paquete. Para calcular los aranceles de un paquete, use nuestra Calculadora en línea o solicite ayuda al Servicio de atención al cliente.',
                table1:[
                    ["Valor CIF del paquete", 'Tarifa'],
                    ['Hasta $50,00','$3,00'],
                    ['De $51 a $100','$7.00'],
                    ['De $101 a $300','$12.00'],
                    ['De $301 a $500','$15.00'],
                    ['De $501 a $1,000','$35.00'],
                ],
                table1Footer:'* No incluye ISV',
                cifVal:[
                    ["Valor CIF = Total factura del paquete + Costo de transporte + Seguro"]
                ],
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
