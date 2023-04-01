<template>
    <div>
        <p class="text-bold text-base mb-4 text-blue ">Effective February 15, 2014</p>
        <InformationVue :list="info.list1"/>

        <tableVue :list="info.table1" :hasHeader="false"/>

        <p class="heading">Packages - Rates (USD)</p>
        <tableVue :list="info.table2" :hasHeader="false"/>

        <InformationVue :list="info.list2"/>

        <!-- Warranty -->
        <h3 class="main-heading">{{info.warrantyProgram.title}}</h3>
        <tableVue :list="info.warrantyProgram.rateList" :hasHeader="true" />



    </div>
  </template>

  <script>
  import tableVue from '@/components/rates/table.vue';
  import InformationVue from '@/components/rates/Information.vue';
  export default {
    name: 'BelizeRate',
    components:{
        tableVue,
        InformationVue,
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
            table2:[
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

            warrantyProgram:{
                title:'Warranty Program and Return Service',
                rateList:[
                    ['Rate Break (Declared Value)','Rate'],
                    ['US$1 - US$99.99','US$2.15'],
                    ['US$100 - US$159.99','US$3.90'],
                    ['US$160 - US$199.99','US$3.95'],
                    ['US$200 - US$299.99','US$5.95'],
                    ['US$300 - US$399.99','US$7.95'],
                    ['US$400 - US$499.99','US$9.75'],
                    ['US$500 - US$599.99','US$11.50'],
                    ['US$600 - US$699.99','US$13.25'],
                    ['US$700 - US$799.99','US$14.95'],
                    ['US$800 - US$899.99','US$16.75'],
                    ['US$900 - US$999.99','US$18.50'],
                    ['US$1000 - US$1099.99','US$20.25'],
                    ['US$1100 - US$1199.99','US$21.95'],
                    ['US$1200 - US$1299.99','US$23.75'],
                    ['US$1300 - US$1399.99','US$25.50'],
                    ['US$1400 - US$1499.99','US$27.25'],
                    ['Equal or greater than US$1500','2.5% of the Declared Value']
                    
                ],
            }
        },
      }
    }
    
  }
  </script>
