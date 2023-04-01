<template>
    <div>
        <InformationVue :list="info.list1" />

        <tableVue :list="info.table1"/>

        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <InformationVue :list="info.list2" />

        <p class="text-blue text-sm mb-4">*Additional fees apply for packages that are 30 lb and up.</p>

        <h2 class="main-heading">{{ info.warrantyTable.title }}</h2>
        <tableVue :list="info.warrantyTable.rateList" :hasHeader="true"/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <p class="text-base text-blue mb-5 max-w-[80%]">{{ info.customHandling.description }}</p>
        <tableVue :list="info.customHandling.table1" :hasHeader="true" :tfoot="info.customHandling.table1Footer"/>
        <tableVue :list="info.customHandling.cifVal"/>

        <InformationVue :list="info.list3" />

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import StorageTable from '@/components/rates/StorageTable.vue';
export default {
  name: 'Guatemala Rate',
  components:{
      tableVue,
      InformationVue,
      StorageTable,
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
                ['Membership', '<b>FREE</b>'],
            ],
            packages:[
                ['Packages',''],
                ['Packages 1 to 35 lbs ($4.50 minimum)','USD $3.70']
                ['Packages 35 lbs and up','USD $2.60']
            ],
            OtherCharges:[
                ['Other charges',''],
                ['Delivery to External Counters (Quetzaltenango, Antigua, Río Dulce, Pana, etc.)','USD $1.00 additional per lb'],
                ['Home Delivery (Metropolitan Area)','USD $4.50 per package'],
                ['Home Delivery (Provincial Area)','USD $5.50 per package*'],
                ['Customs Handling','See Custom Handling for details'],
            ],

            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling are subject to addional charges.',
            ],


            warrantyTable:{
                title:'Warranty Program and Return Service',
                rateList:[
                        ['Rate Break (Declared Value)','Rate'],
                        ['US$1 - US$99.99','US$1.90'],
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
                    ]
            },
            customHandling:{
                title:'Customs Handling',
                description:'All packages that enter the country must go through customs and are subject to pay duties. Customs handling rates are set based on the package CIF value. To calculate duties for a package use our Online Calculator or ask Customer Service for help.',
                table1:[
                    ["Package's CIF Value", 'Rate'],
                    ['USD $0.01 to USD $15.00','USD $3.00'],
                    ['USD $15.01 to USD $500','USD $6.00'],
                    ['USD $500.01 to USD $999.99','USD $12.00'],
                    ['More than USD $1000.01 (Customs Individual Policy)','USD $65.00 and up'],
                ],
                table1Footer:'* Does not include sales tax.',
                cifVal:[
                    ["CIF Value  =  Package's invoice total  +  Transportation cost  +  Insurance"]
                ],
            },
            list3:[
                'Aeropost automatically clears all your retained packages up to USD $1,000 CIF value. Taxes and customs handling costs will be charged to the package.',
                'Packages with CIF value over USD $1,000.00 will require an individual customs policy. Documents will be handed to the customer for him to do the procedure with the Customs Agency of his choice.',
            ],
        }
    }
  }
  
}
</script>
