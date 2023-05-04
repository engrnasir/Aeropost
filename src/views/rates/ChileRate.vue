<template>
    <div>
        
        <h2 class="main-heading">
           {{lang==='en'?'International Freight':'Cargamento internacional'}}
        </h2>
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.table1"/>
        
        
        <h2 class="main-heading">
            {{lang==='en'?'Home delivery':'Entrega a domicilio'}}
        </h2>
        
        <tableVue :list="info.homeDeliveryPackages" :hasHeader="true"/>

        <h2 class="main-heading">
            {{lang==='en'?'Warranty Program and Return Service':'Programa de Garantía y Servicio de Devolución'}}
        </h2>
        <tableVue :list="info.warrantyPrograms" :hasHeader="true"/>
        
        <tableVue :list="info.table2"/>
        
        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <p class="text-blue mb-4">{{ info.customHandling.description }}</p>
        <tableVue :list="info.customHandling.table" :hasHeader="true"/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'ChileRate',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{

            packages:[
                ['Packages','(Chilean Pesos)'],
                ['Up to 0.5 kg','CLP $6.800'],
                ['Up to 1 kg','CLP $10.500'],
                ['Up to 1.5 kg','CLP $14.900'],
                ['Up to 2 kg','CLP $19.500'],
                ['Up to 2.5 kg','CLP $23.500'],
                ['Up to 3 kg','CLP $27.600'],
                ['Up to 3.5 kg','CLP $31.000'],
                ['Each additional 1/2 Kilogram','CLP $3.900'],	
            ],
            table1:[
                ['Restricted shipments and dangerous goods.	','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>']
            ],

            homeDeliveryPackages:[
                ['Packages (Chilean Pesos)','',''],
                ['<b>Region</b>','<b>0 to 5 kg</b>','<b>Adicional Kg</b>'],
                ['Región Metropolitana','CLP $3.990','CLP $500'],
                ['Arica y Panacota','CLP $9.990','CLP $2.000'],
                ['Tarapacá','CLP $9.990','CLP $2.000'],
                ['Antofagasta','CLP $8.990','CLP $2.000'],
                ['Atacama','CLP $7.990','CLP $1.000'],
                ['Coquimbo','CLP $5.990','CLP $1.000'],
                ['Valparaíso','CLP $5.990','CLP $1.000'],
                ['Libertador Bernardo O′Higgins','CLP $5.990','CLP $1.000'],
                ['Del Maute','CLP $5.990','CLP $1.000'],
                ['Ñuble','CLP $5.990','CLP $1.000'],
                ['Bío-Bío','CLP $5.990','CLP $1.000'],
                ['Araucanía','CLP $5.990','CLP $1.000'],
                ['Los Ríos','CLP $6.490','CLP $1.000'],
                ['Los Lagos','CLP $6.990','CLP $1.000'],
                ['Aysen','CLP $9.990','CLP $1.000'],
                ['Magallanes','CLP $10.990','CLP $3.000'],
            ],
 
            warrantyPrograms:[
                ['Declared value range','Value'],
                ['CLP $0.01  - CLP  $79.995','CLP $1.275'],
                ['CLP $79.996  - CLP  $127.995','CLP $2.555'],
                ['CLP  $127.996 - CLP  $159.995','CLP $2.595'],
                ['CLP  $159.996 - CLP  $239.995','CLP $3.995'],
                ['CLP  $239.996 - CLP  $319.995','CLP $5.595'],
                ['CLP  $319.996 - $CLP  399.995','CLP $6.995'],
                ['CLP  $399.996 - CLP  $479.995','CLP $8.395'],
                ['CLP  $479.996 - CLP  $559.995','CLP $9.795'],
                ['CLP  $559.996 - CLP  $639.995','CLP $11.195'],
                ['CLP  $639.996 - CLP  $719.995','CLP $12.595'],
                ['CLP  $719.996 - CLP  $799.995','CLP $13.995'],
                ['CLP  $799.996 - CLP  $879.995','CLP $15.395'],
                ['CLP  $879.996 - CLP  $959.995','CLP $16.795'],
                ['CLP  $959.996 - CLP  $1.039.995','CLP $18.195'],
                ['CLP  $1.039.996 - CLP  $1.119.995','CLP $19.595'],
                ['CLP  $1.119.996 - CLP  $1.199.995','CLP $20.995'],
                ['CLP  $1.199.996   or more -->2.5% of the Declared Value',''],
            ],
            table2:[
                ['*IVA is not included on these rates.']
            ],
            customHandling:{
                title:'Customs Handling',
                description:"Customs handling rates are based on the package's value.",
                table:[
                    ["PACKAGE'S VALUE IN ($USD)",'Tarifa en pesos chilenos*'],
                    ['USD $0 - USD $29.99','CLP $1,499'],
                    ['USD $30.00 - USD $199.99','CLP $3.640'],
                    ['USD $200.00 - USD $499.99','CLP $5.200'],
                    ['USD $500.00 - USD $999.99','CLP $10.399'],
                    ['Más de USD $1000','CLP $18.200'],
                ]
            }
        },
        es_info:{

            packages:[
                ['Paquetes','(Pesos Chilenos)'],
                ['Hasta 0,5 kg','CLP $6.800'],
                ['Hasta 1 kg','CLP $10.500'],
                ['Hasta 1,5 kg','CLP $14.900'],
                ['Hasta 2 kg','CLP $19.500'],
                ['Hasta 2,5 kg','CLP $23.500'],
                ['Hasta 3 kg','CLP $27.600'],
                ['Hasta 3,5 kg','CLP $31.000'],
                ['Cada 1/2 Kilogramo adicional','CLP $3.900'],
            ],
            table1:[
                ['Envíos restringidos y mercancías peligrosas. ','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>']
            ],

            homeDeliveryPackages:[
                 ['Paquetes (Pesos Chilenos)','',''],
                 ['<b>Región</b>','<b>0 a 5 kg</b>','<b>Kg Adicional</b>'],
                 ['Región Metropolitana','CLP $3.990','CLP $500'],
                 ['Arica y Panacota','CLP $9.990','CLP $2.000'],
                 ['Tarapacá','CLP $9.990','CLP $2.000'],
                 ['Antofagasta','CLP $8.990','CLP $2.000'],
                 ['Atacama','CLP $7.990','CLP $1.000'],
                 ['Coquimbo','CLP $5.990','CLP $1.000'],
                 ['Valparaíso','CLP $5.990','CLP $1.000'],
                 ['Libertador Bernardo O′Higgins','CLP $5.990','CLP $1.000'],
                 ['Del Maute','CLP $5.990','CLP $1.000'],
                 ['Ñuble','CLP $5.990','CLP $1.000'],
                 ['Bío-Bío','CLP $5.990','CLP $1.000'],
                 ['Araucanía','CLP $5.990','CLP $1.000'],
                 ['Los Ríos','CLP $6.490','CLP $1.000'],
                 ['Los Lagos','CLP $6.990','CLP $1.000'],
                 ['Aysén','CLP $9.990','CLP $1.000'],
                 ['Magallanes','CLP $10.990','CLP $3.000'],
             ],
 
            warrantyPrograms:[
                ['Rango de valor declarado','Valor'],
                ['CLP $0,01 - CLP $79,995','CLP $1,275'],
                ['CLP $79.996 - CLP $127.995','CLP $2.555'],
                ['CLP $127.996 - CLP $159.995','CLP $2.595'],
                ['CLP $159.996 - CLP $239.995','CLP $3.995'],
                ['CLP $239.996 - CLP $319.995','CLP $5.595'],
                ['CLP $319.996 - $CLP 399.995','CLP $6.995'],
                ['CLP $399.996 - CLP $479.995','CLP $8.395'],
                ['CLP $479.996 - CLP $559.995','CLP $9.795'],
                ['CLP $559.996 - CLP $639.995','CLP $11.195'],
                ['CLP $639.996 - CLP $719.995','CLP $12.595'],
                ['CLP $719.996 - CLP $799.995','CLP $13.995'],
                ['CLP $799.996 - CLP $879.995','CLP $15.395'],
                ['CLP $879.996 - CLP $959.995','CLP $16.795'],
                ['CLP $959.996 - CLP $1.039.995','CLP $18.195'],
                ['CLP $1.039.996 - CLP $1.119.995','CLP $19.595'],
                ['CLP $1.119.996 - CLP $1.199.995','CLP $20.995'],
                ['CLP $1.199.996 o más -->2,5% del Valor Declarado',''],
            ],
            table2:[
                ['*El IVA no está incluido en estas tarifas.']
            ],
            customHandling:{
                title:'Manejo Aduanal',
                description:"Las tarifas de manejo de aduanas se basan en el valor del paquete.",
                table:[
                    ["VALOR DEL PAQUETE EN ($USD)", 'Tarifa en pesos chilenos*'],
                    ['USD $0 - USD $29.99','CLP $1,499'],
                    ['USD $30.00 - USD $199.99','CLP $3.640'],
                    ['USD $200.00 - USD $499.99','CLP $5.200'],
                    ['USD $500.00 - USD $999.99','CLP $10.399'],
                    ['Más de USD $1000','CLP $18.200'],
                ]
            }
        },
    }
  },
  computed:{
    ...mapState(['lang']),
    info(){return this.lang==='en'? this.en_info:this.es_info}
  }
  
}
</script>
