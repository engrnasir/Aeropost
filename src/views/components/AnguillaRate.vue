<template>
    <div>
        <InformationVue :list="info.list1" />

        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <tableVue :list="info.homeDeliveryTable" :hasHeader="true"/>

        <InformationVue :list="info.list2" />

        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'AnguillaRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue,
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
                ['0.50 lb',	'USD$7.00'],
                ['1 lb','USD$9.00'],
                ['2 lb','USD$11.00'],
                ['3 lb','USD$15.00'],
                ['Addtional lb','USD$3.50'],
	            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
            ],

            homeDeliveryTable:[
                ['Home delivery', 'Rates (USD)'],
                ['1 - 3 lb','USD$2.00'],
                ['3.01 - 6 lb','USD$3.00'],
                ['6.01 - 10 lb','USD$4.50'],
                ['10.01 - 25 lb','USD$5.50'],
                ['Lb Additional lb (up to 100 lb.)','USD$0.50'],
                ['Additional pieces (per piece)','USD$1.00'],
                ['Out of Metropolitan Area (10-25 miles)','USD$5.00'],
                ['Deliveries (+Standard Delivery Fees)','USD$10.00'],
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
