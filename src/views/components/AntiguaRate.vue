<template>
    <div>
        <p class="text-bold text-base mb-4 text-blue ">{{ info.effectiveDate }}</p>

        <InformationVue :list="info.list1" />

        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <InformationVue :list="info.list2" />

        <WarrantyVue/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <p class="text-base text-blue mb-5" v-html="info.customHandling.description"></p>       
        <tableVue :list="info.customHandling.table" :hasHeader="true"/>
        
        <h2 class="main-heading">{{ info.customsRates.title }}</h2>
        <tableVue :list="info.customsRates.table" :hasHeader="true"/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'AntiguaRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue,
  },
  data(){
    return{
        info:{
            effectiveDate:'Effective as of February 1, 2022.',
            list1:[
                'We charge on weight NOT on size of your package.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com.',
            ],

            packages:[
                ['Packages','Rates(USD)'],
                ['0.50 lb','USD$7.95'],
                ['1 lb','USD$11.00'],
                ['Addtional lb','USD$4.00'],
	        ],
            
            OtherCharges:[
                ['Handling Fee',''],
                ['USD $1 - $1,000','USD $5.00'],
                ['USD $1,001 - $2,000','USD $10.00'],
                ['USD $2,001 and up','USD $25.00'],
                ['Duties & Taxes:','Applicable duties and taxes'],
                ['Home delivery (local charges)','Please quote with local agent.'],
                ['Restricted Items','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'], 
                ['Consumer Commodity Shipment','Once a month/Add USD $5.00 per CC Shipment'],
                ['SED Shipment','USD $25.00'],	
            ],

            list2:[
                'All documents with tracking number will be treated as packages.',
                'Special handling shipments have additional charges. Please quote with the local office.',
                'Additional charges apply to shipments measuring over than 1 meter on any side. Please quote with the local office.',
            ],

            customHandling:{
                title:'Customs Handling',
                description:'All packages that enter the country must go through customs and are subject to pay duties. Customs handling rates are set based on the package CIF value.',
                table:[
                    ["PACKAGE'S DECLARED VALUE",'RATE*'],
                    ['Per package fee with declared value of USD $1 to USD $1000','USD $5.00'],
                    ['Per package fee with declared value of USD 1001 to USD $2000','USD $10.00'],
                    ['Per package fee with declared value of USD $2001 and up','USD $25.00'],
                ]
            },

            customsRates:{
                title:'Customs rate of duty',
                table:[
                    ['Commodity','Duty %'],
                    ['Clothing','49.5%'],
                    ['Shoe','49.5%'],
                    ['Weaves/Hair Extentions','49.5%'],
                    ['Bags','49.5%'],
                    ['Cellphone','49.5%'],
                    ['Cellphone Accessories','49.5%'],
                    ['Cellphone Parts','32.25%'],
                    ['Charger','32.25%'],
                    ['Tents','49.5%'],
                    ['Video Games','49.5%'],
                    ['Game Accessories','49.5%'],
                    ['Make up kit/cosmetics','49.5%'],
                    ['Toys','49.5%'],
                    ['Decorations','49.5%'],
                    ['Baby Seat ','49.5%'],
                    ['Projector Screen','49.5%'],
                    ['Television','49.5%'],
                    ['Router','32.25%'],
                    ['Kindle','32.25%'],
                    ['Decals (stickers)','32.25%'],
                    ['Water Filter','32.25%'],
                    ['Blood Pressure Monitor','32.25%'],
                    ['Ink Cartridge','32.25%'],
                    ['Hard Drive','32.25%'],
                    ['Memory','32.25%'],
                    ['Magic Jack ','32.25%'],
                    ['Watch','55.25%'],
                    ['Camera','55.25%'],
                    ['Auto Parts ','61%'],
                    ['Jewellery','61%'],
                    ['DVD Player','61%'],
                    ['CDs','61%'],
                    ['Game Cartridge','61%'],
                    ['Novels','10%'],
                    ['Text Books ','0%'],
                    ['Full Computer System','15%'],
                    ['Mother Board','43.75%'],
                    ['Computer Accessories','49.50%'],
                    ['Exercise Equipment','38%'],
                    ['Basketball','38%'],
                    ['Seeds','26.52%'],
                    ['Electric Kettle','49.5% + $20'],
                    ['Toaster','49.5% + $20'],
                    ['Coffee Maker ','49.5% + $20'],
                    ['Hot Plate','49.5% + $100 '],
                    ['Hair Dryer','49.5% + $20'],
                    ['Iron (Clothing)','49.5% + $20'],
                    ['Stove','49.5% + $20'],
                    ['Microwave ','49.5% + $100'],
                    ['Party Supplies','50%'],
                ]

            }
        }
    }
  }
  
}
</script>
