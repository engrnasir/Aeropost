<template>
    <div>
        <p class="text-sm text-bold text-blue mb-4">{{ info.effectiveDate }}</p>

        <InformationVue :list="info.list1" />
        
        <tableVue :list="info.basics" :hasHeader="true"/>

        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.otherChanges" :hasHeader="true"/>
        
        <InformationVue :list="info.list2" />

        <h2 class="main-heading">{{ info.warrantyTable.title }}</h2>
        <tableVue :list="info.warrantyTable.rateList" :hasHeader="true"/>
        
        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <p class="text-blue text-base mb-4" v-html="info.customHandling.description"></p>
        <tableVue :list="info.customHandling.table" :tfoot="info.customHandling.tableFooter" :hasHeader="true"/>

        <tableVue :list="info.table1"/>


    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
export default {
  name: 'ColombiaRate',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        info:{
            effectiveDate:'Effective as of January 10, 2014',

            list1:[
                'We charge on weight NOT on size of your package.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com',
            ],
            basics:[
              ['','BASIC'],
              ['Annual Membreship','First year free'],
              ['Monthly Minimun','None'],
              ['Documents','USD$5.00 per lb.(mini 4 oz.)'],
            ],


            packages:[
                ['Packages',''],
                ['0.5 lb.','USD$6.00'],
                ['1lb.','USD$7.00'],
                ['2 lb.','USD$13.00'],
                ['3 lb.','USD$17.50'],
                ['Additional lb. up to 20 lb.','USD$4.50'],
                ['More than 20 lb.','USD$4.00'],
            ],
            otherChanges:[
                ['Other charges',''],
                ['Home Delivery (Área Metropolitana de Bogota)','FREE'],
                ['Home Delivery (Municipios and remote Areas)','USD$1.00 per lb. (mini USD$3.50)'],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['Multiple shipments (additional piece)','USD$2.00 per piece.'],	
            ],          
            
            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling, are subject to additional charges.',
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
                description:"All packages that enter the country must go through customs and are subject to pay duties. Customs authorities will inspect the package and documentation.<br>To calculate duties for a package use our Online Calculator or ask Customer Service for help.",
                table:[
                    ["PACKAGE'S VALUE IN USD$","RATE IN USD$*"],
                    ["USD$0 - USD$50","USD$2.00"],
                    ["USD$50 - USD$100","USD$5.00"],
                    ["USD$100 - USD$500","USD$10.00"],
                    ["USD$500 - USD$2000","USD$15.00"],
                    ["More than USD$2000","Contact Customer Service"],                    	
                ],
                tableFooter:'* Does not include sales tax. All rates are in USD$ and will be converted to pesos at the exchange rate of the day.'
            },
            table1:[
                ['CIF Value	=	Total package invoice	+	Transportation cost	+	Insurance']
            ]
        }
    }
  }
  
}
</script>
