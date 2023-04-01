<template>
    <div>
        <InformationVue :title="info.title1" :list="info.list1"/>

        <h2 class="main-heading">CALCULATE your shipment</h2>
        <tableVue :list="info.basicTable" :hasHeader="true"/>
        <tableVue :list="info.packages" :hasHeader="true"/>
        <tableVue :list="info.otherCharges" :hasHeader="true"/>

        <InformationVue :list="info.list2" />

        <p class="text-base text-blue mb-5">Valid for customers that register their BAC credit or debit card as payment method.</p>
        <p class="text-base text-blue mb-5">**The package weight results of the next whole superior unit in kg, includes the contents and package material when weighted. E.g. 2000g will be 3kg.</p>

        <h2 class="main-heading">{{ info.warrantyTable.title }}</h2>
        <tableVue :list="info.warrantyTable.rateList" />

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <p class="text-base text-blue mb-5" v-html="info.customHandling.description"></p>       
        <tableVue :list="info.customHandling.table1" :tfoot="info.customHandling.table1footer" :hasHeader="true"/>

        <h2 class="main-heading">{{ info.individualCustoms.title }}</h2>
        <tableVue :list="info.individualCustoms.table1" :tfoot="info.individualCustoms.table1Footer" :hasHeader="true"/>

        <h2 class="main-heading">{{ info.storage.title }}</h2>
        <StorageTable :list="info.storage.table1"/>
        <StorageTable :list="info.storage.table2"/>
        <StorageTable :list="info.storage.table3"/>


    </div>
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import StorageTable from '@/components/rates/StorageTable.vue';
export default {
  name: 'Costa',
  components:{
      tableVue,
      InformationVue,
      StorageTable,

  },
  data(){
    return{
     info:{
        title1:'Compare Account Types and Find the One Is Best for You:',
        list1:[
            'We charge based on real weight, not on the size of your package.',
            'You can return your junk mail and we will credit your account.',
            'You can track your packages on our site at www.aeropost.com.'
        ],
        basicTable:[
            ['', 'Basic'],
            ['Annual membership', 'FREE']
        ],
        packages:[
            ['Packages****', ''],
            ['0.5 kg', 'US$6.75'],
            ['1 kg', 'US$10.85'],
            ['2 kg', 'US$17.05'],
            ['3 kg', 'US$23.25'],
            ['4 kg', 'US$28.90'],
            ['5 kg', 'US$35.05'],
            ['6 kg','US$40.70'],
            ['7 kg','US$46.90'],
            ['8 kg','US$53.05'],
            ['9 kg','US$59.30'],
            ['10 kg','US$65.00'],
            ['Additional kg in packages of 100 kg or more', 'US$5.80']
        ],
        otherCharges:[
            ['Other charges', ''],
            ['Fuel Surcharge', '22%'],
            ['Delivery in Metropolitan Area', 'US$2.00'],
            ['Delivery (Outside the Metropolitan Area) from up to 1 Kg', 'US$4.00 minimum'],
            ['Delivery (Outside the Metropolitan Area) additional kilograms over 1 Kg', 'US$2.00'],
            ['Restricted Shipments', '<a href="" class="text-blue">Click here</a>'],
            ['Multiple shipments (Additional piece)', 'US$2.00 per piece']
        ],
        list2:[
            'All security documents with a tracking number will be treated as packages.',
            'Shipments that require any special handling are subject to additional charges.'
        ],
        warrantyTable:{
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
                    
                ]
        },
        customHandling:{
            title:'Customs Handling',
            description:'All packages that enter the country must go through customs and are subject to duties. Customs handling rates are set based on the package CIF value. To calculate duties for a package use our Online Calculator or ask Customer Service for help.\nRates Effective as of July 1, 2022.',
            table1:[
                ["Package's CIF Value", 'Rate* + IVA'],
                ["Books**", "US$4.50"],
                ['Up to US$30.00 CIF', 'US$4.95'],
                ['US$30.01 - US$50.00', 'US$5.95']
                ['US$50.01 - US$100.00', 'US$9.95'],
                ['US$100.01 - US$250.00', 'US$17.95'],
                ['US$251.00 - US$500.00', 'US$23.60'],
                ['US$501.00 - US$1,000.00', 'US$55.25'],
                ['US$1001.00 - US$2,500.00', 'US$89.15'],
                ['US$2501.00 - US$5,000.00', 'US$102.25'],
                ['US$5001.00 - US$10,000.00', 'US$116.50'],
                ['US$10,001.00 - US$15,000.00', 'US$129.80'],
                ['+US$15,000.01', 'US$0,67% CIF'],
                ['Permits', 'US$14.00 + IVA'],
            ],
            table1footer:'Restricted Shipments <br> *Rate does not include sales tax. Applicable until abandonment declaration is effective according to Customs procedures.'
        },
        individualCustoms:{
            title:'Individual Customs Policy',
            table1:[
                ["Package's CIF Value", "Rate*"],
                ['US$1,001-US$2500','US$65.00'],
                ['US$2,501-US$5000', 'US$75.00'],
                ['US$5,001-US$1,0000', 'US$85.00'],
                ['US$1,0001-US$15,000', 'US$95.00'],
                ['Más de US$15,000', '0.5% CIF value'],
            ],
            table1Footer:'Restricted Shipments\n*Rate does not include sales tax. Applicable until abandonment declaration is effective according to Customs procedures.'
        },
        storage:{
            title:'Storage',
            table1:[
                ['Storage Rates for (Courier) Packages Processed by Aerocasillas (Agency)'],
                ['Weight','1 to 30 days','31 to 365 days'],
                ['Under 100 kg','FREE', 'US$55.00 + IV'],
                ['Over 100 Kg', 'US$95.00 + IV', 'US$95.00 + IV'],
            ],
            table2:[
                ['Storage Rates for (Courier) Packages Processed by a Customs Inspector'],
                ['Weight','1 to 30 days','31 to 365 days'],
                ['Under 100 kg', 'US$10.00 + IV', 'US$60.00 + IV'],
                ['Over 100 Kg', 'US$95.00 + IV', 'US$95.00 + IV']
            ],
            table3:[
                ['Storage Rates for (Courier) Packages Processed by External Customs Brokerage Agencies'],
                ['Weight','1 to 30 days','31 to 365 days'],
                ['Under 100 kg','US$20.00 + IV','US$70.00 + IV'],
                ['Over 100 Kg', 'US$105.00 + IV', 'US$105.00 + IV']
            ]
        }



        


     }
    }
  }
  
}
</script>

