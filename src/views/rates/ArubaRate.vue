<template>
    <div>

        <tableVue :list="info.packages" :hasHeader="true"/>

        <InformationVue :list="info.list2" />

        <WarrantyVue/>
        
        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <tableVue :list="info.customHandling.table" :hasHeader="true"/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'ArubaRate',
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
                ['0.5 lb','USD$6.50'],
                ['1 lb','USD$7.50'],
                ['2 lb','USD$10.50'],
                ['3 lb','USD$13.50'],
                ['Addtional lb','USD$3.75'],       	
	        ],

            customHandling:{
                title:'Customs Handling',
                table:[
                    ['','AWG'],
                    ['USD$0.00 - USD$50.00','AWG 15.00'],
                    ['USD$50.01 - USD$150.00','AWG 25.00'],
                    ['USD$150.01 - USD$200.00','AWG 30.00'],
                    ['USD$201.01 - USD$250.00','AWG 32.00'],
                    ['USD$250.01 - USD$300.00','AWG 34.00'],
                    ['USD$300.01 - USD$350.00','AWG 36.00'],
                    ['USD$350.01 - USD$400.00','AWG 38.00'],
                    ['USD$401.01 - USD$500.00','AWG 40.00'],
                    ['USD$500.01+','AWG 45.00'],
                    ['Special Permit','AWG 16.00'],
                    ['Bislijst','AWG 16.00'],
                    ['OpenBox to verify','AWG 39.00'],
                    ['To Receive Package Next Day','AWG 39.00'],              
	            ]
            },
        },
        es_info:{

            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0,5 libras', 'USD$6,50'],
                ['1 libra', 'USD$7.50'],
                ['2 libras', 'USD$10.50'],
                ['3 libras', 'USD$13,50'],
                ['libras adicionales', 'USD$3,75'],   	
	        ],
            

            customHandling:{
                title:'Manejo Aduanal',
                table:[
                     ['','AWG'],
                     ['USD$0,00 - USD$50,00','AWG 15,00'],
                     ['USD$50,01 - USD$150,00','AWG 25,00'],
                     ['USD$150,01 - USD$200,00','AWG 30,00'],
                     ['USD$201.01 - USD$250.00','AWG 32.00'],
                     ['USD$250.01 - USD$300.00','AWG 34.00'],
                     ['USD$300.01 - USD$350.00','AWG 36.00'],
                     ['USD$350.01 - USD$400.00','AWG 38.00'],
                     ['USD$401,01 - USD$500,00','AWG 40,00'],
                     ['USD$500.01+','AWG 45.00'],
                     ['Permiso especial','AWG 16.00'],
                     ['Bislijst','AWG 16,00'],
                     ['OpenBox para verificar','AWG 39.00'],
                     ['Para recibir el paquete al día siguiente','AWG 39,00'],
]
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
