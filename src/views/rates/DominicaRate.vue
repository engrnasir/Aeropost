<template>
    <div>
        
        <h2 class="main-heading">AIR</h2>
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <h2 class="main-heading">{{ info.delivery.title }}</h2>
        <tableVue :list="info.delivery.table"/>
        
        <WarrantyVue/>
        
        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <tableVue :list="info.customHandling.table" :hasHeader="true"/>
        
        <p class="text-base mb-4 text-blue ">
            {{ 
                lang==='en'?
                    'Millennium Freight staff will clear and process packages through customs and transport items to office location.'
                    :'El personal de Millennium Freight despachará y procesará los paquetes a través de la aduana y transportará los artículos a la ubicación de la oficina.' 
            }}
        </p>

        <InformationVue :list="info.list3" />

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'DominicaRate',
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
                ['0.5','$8.50'],
                ['1 lb','$11.00'],
                ['2 lb','$14.50'],
                ['3 lb','$19.50'],
                ['Addtional lb','$3.60'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
            ],
            delivery:{
                title:'Delivery Fees (Cash on Delivery)',
                table:[
                    ['1 - 3 Packages','ECD 5.00'],
                    ['4 - 5 Packages','ECD 10.00'],
                    ['6 + Packages','ECD 15.00'],                  		
                ]
            },
            
            list3:[
                '(*) Note: Customers will need to provide the invoice for each package on flight days in order to calculate import duties.'
            ],

            customHandling:{
                title:'Customs Handling',
                table:[
                    ['DESCRIPTION','RATE*'],
                    ['1 - 3 Packages','ECD $25 + applicable duties'],
                    ['4 + Packages','ECD $30 + applicable duties'],
                ]
            }
        },
        es_info:{

            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0.5','$8.50'],
                ['1 libra', '$11.00'],
                ['2 libras', '$14.50'],
                ['3 libras', '$19.50'],
                ['libras adicionales','$3,60'],
            ],
            
            OtherCharges:[
                ['Otros cargos',''],
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
            ],
            delivery:{
                title:'Tarifas de envío (contra reembolso)',
                table:[
                    ['1 - 3 Paquetes','ECD 5.00'],
                    ['4 - 5 Paquetes','ECD 10.00'],
                    ['6 + Paquetes','ECD 15.00'],                  		
                ]
            },
            
            list3:[
                '(*) Nota: Los clientes deberán proporcionar la factura de cada paquete en los días de vuelo para calcular los aranceles de importación.'
            ],

            customHandling:{
                title:'Manejo Aduanal',
                table:[
                    ['DESCRIPCIÓN','TARIFA*'],
                    ['1 - 3 Paquetes','ECD $25 + aranceles aplicables'],
                    ['4 + Paquetes','ECD $30 + aranceles aplicables'],
                ]
            }
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
