<template>
    <div>
        <p class="text-bold text-base mb-4 text-blue ">{{ info.effectiveDate }}</p>

        <InformationVue :list="info.list1" />

        <tableVue :list="info.packages" :hasHeader="true"/>

        <InformationVue :list="info.list2" />

        <WarrantyVue/>
        
        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <p class="text-base text-blue mb-5" v-html="info.customHandling.description"></p>  
        <p class="text-bold text-base mb-4 text-blue ">{{ info.effectiveDate }}</p>
        <tableVue :list="info.customHandling.table" :hasHeader="true"/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'ArubaRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue
  },
  data(){
    return{
        info:{
            effectiveDate:'Effective as of February 1, 2022.',
            list1:[
                'We charge on weight NOT on size of your package.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com.',
            ],

            packages:[
                ['Packages','Rates(USD)'],
                ['0.5 lb','USD$6.50'],
                ['1 lb','USD$7.50'],
                ['2 lb','USD$10.50'],
                ['3 lb','USD$13.50'],
                ['Addtional lb','USD$3.75'],       	
	        ],
            

            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling, are subject to additional charges.'
            ],

            customHandling:{
                title:'Customs Handling',
                description:'All packages that enter the country must go through customs and are subject to pay duties. Customs handling rates are set based on the package CIF value. To calculate duties for a package use our Online Calculator or ask Customer Service for help.',
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
        }
    }
  }
  
}
</script>
