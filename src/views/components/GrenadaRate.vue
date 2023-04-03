<template>
    <div>
        <InformationVue :list="info.list1" />
        
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <tableVue :list="info.table1"/>


        <InformationVue :title="info.title2" :list="info.list2" />
 
        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'GrenadaRate',
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
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com.',
            ],

            packages:[
                ['Packages','Rates(USD)'],
                ['0.5 lb','USD $6.95'],
                ['1 lb','USD $9.00'],
                ['Addtional lb','$4.00'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Handling Fee','USD $5.00'],
                ['Duties and taxes','Applicable duties and taxes'],
                ['Customs warehousing (local charge at customs)','$3.00ECD'],
                ['Home Delivery (local charge)','Quote with local agent'],
            ],
            table1:[
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['SED','USD $25.00'],
            ],
            
            title2:'Other information:',
            list2:[
                'All documents with a tracking number will be processed as packages.',
                'Shipments that require any special handling, are subject to additional charges. Please quote with local office.',
                'Additional charges apply to shipments measuring over 1 meter on any side. Please quote with the local office.',
            ],
        }
    }
  }
  
}
</script>
