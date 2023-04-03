<template>
    <div>
        <p class="text-bold text-base mb-4 text-blue ">{{ info.effectiveDate }}</p>

        <InformationVue :list="info.list1" />
        
        <h2 class="main-heading">AIR</h2>
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <tableVue :list="info.table1"/>

        <InformationVue :list="info.list2" />

        <p class="italic text-base mb-4 text-blue ">Local documentation charges from vessel company landing agent may apply.</p>

        <WarrantyVue/>
        
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'CuracaoRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue

  },
  data(){
    return{
        info:{
            effectiveDate:'Effective February 1, 2022.',
            list1:[
                'We charge on weight NOT on size of your package.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com.',
            ],

            packages:[
                ['Packages','Rates(USD)'],
                ['0.5 lb','$8.50'],
                ['1 lb','$11.00'],
                ['2 lb','$14.50'],
                ['3 lb','$18.50'],
                ['Addtional 10 lbs','$4.00'],
                ['10lbs+','$3.75'],	
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['Home Delivery','$5.00'],
                ['Customs Handling (billed on a separate line)','$6.50/package'],
            ],
            table1:[
                ['Consolidation requests',''],
                ['First Package: Regular fees apply (Handling fee)',''],
                ['Additional Packages within the Multiple Shipment','$3.00 per pkg.'],
            ],

            list2:[
                'Local taxes are not included.',
                'Storage first 5 Days Free; 5 USD$ per Day thereafter.',
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling, are subject to additional charges.',
            ],
        }
    }
  }
  
}
</script>
