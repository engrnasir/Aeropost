<template>
    <div>
        <InformationVue :list="info.list1" />
        
        <tableVue :list="info.table1"/>
        
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.OtherCharges"/>        

        <InformationVue :list="info.list2" />
 
        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'SaintLuciaRate',
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
                ['Annual Membreship	','FREE']
            ],

            packages:[
                ['Packages','Rates(USD)'],
                ['0.50 lb','$5.95'],
                ['1 lb','$7.95'],
                ['2 lb','$11.95'],
                ['3 lb','$15.95'],
                ['Additional lb','$4.00'],
            ],
            
            OtherCharges:[
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
            ],
            
            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling are subject to additional charges.',
            ],
        }
    }
  }
  
}
</script>
