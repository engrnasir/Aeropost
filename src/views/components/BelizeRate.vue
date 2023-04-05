<template>
    <div>
        
        <InformationVue :list="info.list1"/>

        <tableVue :list="info.table1" :hasHeader="false"/>
                
        <tableVue :list="info.packages" :hasHeader="true"/>

        <InformationVue :list="info.list2"/>

        <WarrantyVue/>

    </div>
  </template>

  <script>
  import tableVue from '@/components/rates/table.vue';
  import InformationVue from '@/components/rates/Information.vue';
  import WarrantyVue from '@/components/rates/Warranty.vue';
  export default {
    name: 'BelizeRate',
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
                    'You can track your packages on our site at www.aeropost.com'
                ],
            table1:[
                ['Annual Membership', 'FREE'],
                ['Monthly Minimum', 'None'],
                ['Documents', 'USD$2.75 (minimum 4 oz.)']
            ],
            packages:[
                ['Packages','Rates(USD)'],
                ['1 lb.','USD$8.00'],
                ['2 lb.','USD$11.50'],
                ['3 lb.','USD$14.00'],
                ['Additional','USD$3.00'],
                ['Other Charges (USD)','']
            ],
            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling, are subject to additional charges.'
            ],           
        },
      }
    }
    
  }
  </script>
