<template>
    <div>
        <InformationVue :list="info.list1" />
        
        <tableVue :list="info.table1"/>
        
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <InformationVue :list="info.list2" />
 
        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'HaitiRate',
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

            table1:[
                ['Annual Membreship','FREE']
            ],
            packages:[
                ['Packages','Rates(USD)'],
                ['0.50 lb','$7.50'],
                ['1lb','$9.50'],
                ['2 lb','$14.00'],
                ['3 lb','$17.00'],
                ['Addtional lb','$3.30'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Home Delivery','$5.00 por lb'],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['Documents','$4.00 por lb minimun $1.00'],
            ],
            
            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling, are subject to additional charges.',
                'Customs processing per shipment: USD $5.00.',
                'Customs fee may vary based on direct customs charges due to increased paper work and processing.',
            ],
        }
    }
  }
  
}
</script>
