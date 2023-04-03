<template>
    <div>
        <InformationVue :list="info.list1" />
        
        <p class="text-bold text-base mb-4 text-blue ">{{ info.effectiveDate }}</p>

        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <InformationVue :list="info.list2" />

        <h2 class="main-heading">{{ info.warrantyTable.title }}</h2>
        <tableVue :list="info.warrantyTable.rateList" :hasHeader="true"/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <p class="text-base text-blue mb-5 max-w-[80%]">{{ info.customHandling.description }}</p>
        
        <h2 class="main-heading">{{ info.consolidatedPolicy.title }}</h2>
        <tableVue :list="info.consolidatedPolicy.table1" :hasHeader="true" :tfoot="info.consolidatedPolicy.table1Footer"/>

        <InformationVue :list="info.list3" />

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
export default {
  name: 'PanamRate',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        info:{
            effectiveDate:'Effective as of March 1, 2023.',
            list1:[
                'We charge on weight NOT on size of your package.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com.',
            ],

            packages:[
                ['Packages',''],
                ['Annual Membership','FREE'],
                ['Monthly Minimum','None'],
                ['Shipping Miami-Panama','USD $3.00 per lb'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Delivery','USD $3.00 per package'],
                ['Customs Handling','See Custom Handling for details'],
                ['Restricted Shipments','<a href="" class="text-blue">Click here</a>'],
                ['Multiple Shipments (additional piece)','USD $2.00 a piece'],
            ],
            list2:[
                'Rates do not include Customs Handling (duties and storage fees).',
                'All security documents with a tracking number will be treated as packages.'
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
                description:"All packages that enter the country must go through customs and are subject to duty charges. Customs handling rates are set based on the package's CIF value. To calculate a package's duty charges, use our Effective as of March 1, 2023",
            },
            consolidatedPolicy:{
                title:'Consolidated Policy',
                table1:[
                    ["Package's CIF Value", 'Rate'],
                    ['Up to USD $99.99','USD $1.00'],
                    ['USD $100.00 - USD $500.00','USD $2.00'],
                    ['USD $500.01 - USD $1000.00','USD $3.50'],
                    ['USD $1,000.00 and above','USD $5.00'],
                ],
                table1Footer:'* Does not include ITBM',
            },
            list3:[
                '* All packages with a CIF value of up to USD $2,000 pay the government a fee of USD $100 in addition to import taxes. ',
                '* Packages with a CIF value below USD $100.00, consigned to an individual, are exempt from import taxes. ',
                '* Packages that remain in the customs area (airport warehouse) for more than two weeks will be valued by local custom.'                
            ],
        }
    }
  }
  
}
</script>
