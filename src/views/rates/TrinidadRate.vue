<template>
    <div>
        <p class="snippet">
            {{ 
                lang==='en'?
                'Our Miami Address service allow you to shop your favorite USA websites and receive your purchases at your home, work or our local store.'
                :'Nuestro servicio de dirección de Miami le permite comprar en sus sitios web favoritos de EE. UU. y recibir sus compras en su hogar, trabajo o nuestra tienda local.' 
            }}
        </p>
        
        <InformationVue :list="info.list1" />

        <tableVue :list="info.basics" :hasHeader="true"/>

        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.otherCharges" :hasHeader="true"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Warranty and Returns':'Garantía y Devoluciones' }}
        </h2>
        
        <tableVue :list="info.warrantyTable" :hasHeader="true"/>

        <h2 class="main-heading">
            {{ lang==='en'? 'Brokerage Fees':'Honorarios de corretaje' }}
        </h2>
        <p class="snippet">
            {{ 
                lang==='en'?'Brokerage Fees are only applicable to commercial shipments for those a formal entry is required.':'Las tarifas de corretaje solo se aplican a los envíos comerciales para los que se requiere una entrada formal.'
            }}
        </p>
        <tableVue :list="info.brokerageList"/>
        
        <InformationVue :list="info.list2" />
        
        <tableVue :list="info.table1"/>
                

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'TrinidadRate',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            list1:[
                "We charge on weight NOT on size of your package.",
                "You can return your junk mail and we will credit your account.",
                "You can track your packages on our site at www.aeropost.com",
                "We don't charge for fuel.",
            ],
            basics:[
                ['','BASIC'],
                ['Annual Membership','None'],
                ['Monthly Minimum','None'],
                ['Documents per lb','USD$3.00'],
            ],

            packages:[
                ['0.5 lb','USD$5.65'],
                ['1lb','USD$6.20'],
                ['2 lb','USD$10.90'],
                ['3 lb','USD$13.60'],
                ['Additional lb','USD$3.50'],
                ['Packages over 35 lbs (US$ per lb)','USD$3.15'],
            ],


            otherCharges:[
                ['Other Charges',''],
                ['Local Delivery','FREE (some exceptions apply)'],
                ['Service Charge','$2.99 + VAT per shipment'],
                ['Restricted Shipments','<a href="" class="text-blue">Click here</a>']
            ],

            warrantyTable:[
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
            ],

            brokerageList:[
                ['PACKAGE CIF VALUE','RATE*'],
                ['USD $0.01 to USD $1,000.00','USD$22.50'],
                ['USD $1,001.00 to USD $3,000.00','USD$42.50'],
                ['More than USD $3,000.00','Contact Customer Service'],
                ['*VAT Included',''],
            ],

            list2:[
                'All packages entering the country are subject to inspection through Customs.',
                'You may authorize Aeropost to automatically clear packages through Customs with a C.I.F. value of up to US $3,000.',
                'To calculate duties for a package use our Online Calculator or ask Customer Service for help.',
                'All security documents with a tracking number will be treated as packages.',
            ],

            table1:[
                ['CIF Value	=	Total package invoice	+	Transportation cost	+	Insurance']
            ],
            
        },
        es_info:{
            list1:[
                "Cobramos por el peso NO por el tamaño de su paquete.",
                "Puede devolver su correo no deseado y le acreditaremos su cuenta.",
                "Puede rastrear sus paquetes en nuestro sitio en www.aeropost.com",
                "No cobramos combustible.",
            ],
            basics:[
                ['','BÁSICO'],
                ['Membresía anual','Ninguna'],
                ['Mínimo mensual','Ninguno'],
                ['Documentos por libra','USD$3.00'],
            ],

            packages:[
                ['0,5 libras', 'USD$5,65'],
                ['1lb','USD$6.20'],
                ['2 libras', 'USD$10,90'],
                ['3 libras', 'USD$13,60'],
                ['libras adicionales', 'USD$3,50'],
                ['Paquetes de más de 35 libras (US$ por libra)','USD$3.15'],
            ],


            otherCharges:[
                ['Otros cargos',''],
                ['Entrega local','GRATIS (se aplican algunas excepciones)'],
                ['Cargo por servicio','$2.99 + IVA por envío'],
                ['Envíos restringidos','<a href="" class="text-blue">Haga clic aquí</a>']
            ],

            warrantyTable:[
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
            ],

            brokerageList:[
                ['VALOR CIF DEL PAQUETE','TARIFA*'],
                ['USD $0.01 a USD $1,000.00','USD$22.50'],
                ['USD $ 1,001.00 a USD $ 3,000.00', 'USD $ 42.50'],
                ['Más de USD $3,000.00','Comuníquese con Servicio al Cliente'],
                ['*VAT incluido',''],
             ],

            list2:[
                'Todos los paquetes que ingresan al país están sujetos a inspección a través de la Aduana.',
                'Usted podrá autorizar a Aeropost a despachar automáticamente paquetes por Aduana con C.I.F. valor de hasta US $3,000.',
                'Para calcular los aranceles de un paquete, use nuestra Calculadora en línea o solicite ayuda al Servicio de atención al cliente.',
                'Todos los documentos de seguridad con un número de seguimiento serán tratados como paquetes.',
            ],

            table1:[
                ['Valor CIF = Factura total del paquete + Costo de transporte + Seguro']
            ],
            
        },
    }
  },
  computed:{
    ...mapState(['lang']),
    info(){return this.lang==='en'? this.en_info:this.es_info}
  }
  
}
</script>

<style scoped>
.snippet{
    @apply text-blue mb-4;
}
</style>
