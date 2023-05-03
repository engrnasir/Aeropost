<template>
    <div>
        <p class="snippet">
            {{ 
                lang==='en'?
                'Our Miami Address service allow you to shop your favorite USA websites and receive your purchases at your home, work or our local store.'
                :'Nuestro servicio de dirección de Miami le permite comprar en sus sitios web favoritos de EE. UU. y recibir sus compras en su hogar, trabajo o nuestra tienda local.' 
            }}
        </p>

        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.otherCharges" :hasHeader="true"/>
       

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
