<template>
    <div>
        
        <InformationVue :list="info.list1" />
                
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.otherChanges" :hasHeader="true"/>

        <tableVue :list="info.homeDelivery" :hasHeader="true"/>

        <InformationVue :list="info.list2" />

        <WarrantyVue/>


    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'GuyanaRate',
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
                'You can track your packages on our site at www.aeropost.com',
            ],
            packages:[
               ['Packages','Rates (USD)'],
               ['0.50 lb','$7.00'],
               ['1 lb','$9.00'],
               ['2 lb','$12.00'],
               ['3 lb','$15.00'],
               ['Addtional lb','$3.30'],
               ['Additional lb - more than 200 lb','$2.50'],
            ],
            otherChanges:[
                ['Other charges',''],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
            ],     
            homeDelivery:[
                ['Home delivery','Rates (USD)'],
                ['1 - 3 lb.','$2.00'],
                ['3.01 - 6 lb.','$3.00'],
                ['6.01 - 10 lb.','$4.50'],
                ['10.01 - 25 lb.','$5.50'],
                ['Lb Additional lb (up to 100 lb.)','$0.50'],
                ['Additional pieces (per piece)','$1.00'],
                ['Out of Metropolitan Area (10-25 miles)','$5.00'],
                ['Deliveries (+Standard Delivery Fees)','$10.00'],
            ],
            
            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling, are subject to additional charges.',
                'Delivery charges for packages will be collected upon delivery.',
            ],        
        }
    }
  }
  
}
</script>
