<template>
    <div>
        <InformationVue title="You can track your packages on our site at www.aeropost.com." />

        <tableVue :list="info.table1"/>

        <tableVue :list="info.packages" :hasHeader="true"/>
        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <InformationVue :list="info.list1" />

        <h2 class="main-heading">{{ info.warrantyTable.title }}</h2>
        <tableVue :list="info.warrantyTable.rateList" :hasHeader="true"/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <p class="text-base text-blue mb-5 max-w-[80%]">{{ info.customHandling.description }}</p>
        <tableVue :list="info.customHandling.table1" :hasHeader="true"/>
        <tableVue :list="info.customHandling.cifVal"/>


        <InformationVue :list="info.list2" />


    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
export default {
  name: 'ElSavador',
  components:{
      tableVue,
      InformationVue,
      
  },
  data(){
    return{
        info:{
            table1:[
                ['Annual Membership', '<b>FREE</b>'],
                ['Monthly Minimum', '<b>None</b>']
            ],
            packages:[
                ['Packages',''],
                ['Packages up to 1 lb. (USD $4.75 minimum)', 'USD $3.65 + IVA'],
                ['Packages froms 2lb to 35lb.', 'USD $3.65 per lb + IVA'],
                ['more than 35 lb.', 'USD $2.95 per lb + IVA']
            ],
            OtherCharges:[
                ['Other charges',''],
                ['Fuel Surcharge', 'USD $0.85 per lb. + IVA'],
                ['Delivery in Metropolitan Area', 'USD $2.25 per package (IVA included)'],
                ['Customs Handling', 'See Custom Handling for details'],
                ['Restricted Shipments', '<a href="" class="text-blue">Click here</a>']
            ],
            list1:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling are subject to additional charges.',
                'For packages up to 50 lb, we charge based on the weight of your package, NOT the size.',
                'Other Customs charges subject to governmental dispositions.',
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
                description:'All packages that enter the country must go through customs and are subject to pay duties. Customs handling rates are set based on the package CIF value. To calculate duties for a package use our',
                table1:[
                    ["Package's CIF Value", 'Rate* + IVA'],
                    ['USD $0 - USD $25', 'USD $2.99 + IVA'],
                    ['USD $26 - USD $100','USD $5.99 + IVA'],
                    ['USD $101 - USD $300','USD $12.50 + IVA'],
                    ['USD $301 - USD $500','USD $17.99 + IVA'],
                    ['USD $501 - USD $1000','USD $34.99 + IVA'],
                    ["More than USD$1000 (Individual Custom's Policy)",'USD $54.99 + IVA'],
                    ['Sanitary Permit Paperwork','USD $15.00 + IVA'],
                    ['Chemicals and Pharmaceuticals Board Permit Paperwork','USD $15.00 + IVA'],
                    ['Package Inspection','USD $25.00 + IVA'],
                ],
                cifVal:[
                    ["CIF Value  =  Package's invoice total  +  Transportation cost  +  Insurance"]
                ]
            },
            list2:[
                'Aerocasillas automatically clears all your retained packages up to USD $1,000 CIF value. Taxes and customs handling costs will be charged to the package.',
                'Packages with CIF value over USD $1,000.00 will require an individual customs policy.'
            ]
        }
    }
  }
  
}
</script>
