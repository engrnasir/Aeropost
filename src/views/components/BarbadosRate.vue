<template>
    <div>

        <InformationVue :list="info.list1" />

        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <InformationVue :list="info.list2" />

        <WarrantyVue/>
        
        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <p class="text-base text-blue mb-5" v-html="info.customHandling.description"></p>       
        <tableVue :list="info.customHandling.table" :hasHeader="false" :tfoot="info.customHandling.tableFooter"/>
        <tableVue :list="[['(*) Rates do not include VAT']]" />

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'BarbadosRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue
  },
  data(){
    return{
        info:{
            list1:[
                'We charge on weight NOT on size of your package.',
                'You can track your packages on our site at www.aeropost.com',
            ],

            packages:[
                ['Packages','Rates(USD)'],
                ['0.5 lb','USD $6.95'],
                ['1 lb','USD $9.00'],
                ['2 lb','USD $14.00'],
                ['3 lb','USD $19.00'],
                ['Additional lb','USD $5.00'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['Customs Handling','See Custom Handling for details'],
                ['Counter Storage Fee if package is not collected within the next 5 business days after ‘Ready At Counter’','USD $5.00 per day'],            	
	        ],

            list2:[
                'Shipments that require any special handling, are subject to additional charges.',
             ],

            customHandling:{
                title:'Customs Handling',
                description:'All packages that enter the country must go through customs and are subject to pay duties.',
                table:[
                    ['Customs Handling Fee on Personal Entries','USD  $10.00'],
                    ['Customs Handling Fee on Commercial Entries','USD  $20.00'],
                    ['Barbados Goverment Fee per Entry','USD  $5.00'],
                ],
                tableFooter:'Warehouse storage for package not having a proper invoice will apply 5 business days after receiving status alert “In-Customs Needs Documentation” - USD$10.00 + VAT per day'
            },
        }
    }
  }
  
}
</script>
