<template>
    <div>
        <p class="text-bold text-blue mb-4">{{ info.effectiveDate }}</p>
        
        <InformationVue :list="info.list1" />
        
        <h2 class="main-heading">AIR</h2>
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.handlingFee" :hasHeader="true"/>

        <tableVue v-for="(table, i) in info.tables" :key="i" :list="table"/>
        
        <InformationVue :title="info.list2Title" :list="info.list2" />

        <tableVue :list="info.maritime" :hasHeader="true"/>     

        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'TurksCaicosRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue
  },
  data(){
    return{
        info:{
            effectiveDate:'Effective January 15, 2017',
            list1:[
                'We charge on weight NOT on size of your package.',
                'You can track your packages on our site at www.aeropost.com.',
            ],


            packages:[
                ['Packages','Rates(USD)'],
                ['0.5lb','USD $ 8.50'],
                ['1lb','USD $ 11.50'],
                ['Additional lb up to 30lb','USD $ 4.50'],
                ['Additional lb after 30lb','USD $ 3.75'],
                ['Other Charges (USD)',''],
            ],
            handlingFee:[
                ['Handling Fee',''],
                ['Packages with value USD $499.00 and under','USD $10.00 per pkg.'],
                ['Packages with value between USD $500.00 and USD $999.00','USD $15.00 per pkg.'],
                ['Packages with value USD $1,000 and up','USD $20.00 per pkg.'],
            ],
            tables:[
                [
                    ['Multiple Package Shipments: Single purchase with several packages	 ',''],
                    ['First Package: Regular fees apply (Handling fee)',''],
                    ['Additional Packages within a Multiple Shipment','USD $3.50 per kg.'],
                ],
                [
                    ['Delivery',''],
                    ['Provo - Cooper Jack Bay/The Bight/Grace Bay:',''],
                    ['Packages 1-5 lb','USD $5.00'],
                    ['Additional lb','USD $0.50 cents per lb'],	
                ],
                [
                    ['Provo - Other areas',''],
                    ['Packages 1-5 lb','USD $10.00'],
                    ['Additional lb','USD $1.00 per lb'],	
                ],
                [
                    ['North Caicos, South Caicos, Grand Turks',''],
                    ['Packages 1-5 lb','USD $6.50'],
                    ['Additional lb','USD $1.00 per lb'],
                ]
            ],
            
            list2Title:'Other Important Information:',
            list2:[
                'For Restricted shipments, <a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">click here</a> .',
                'We charge on weight NOT on size of your package. Limit 31 inches by any of its sides.',
                'You can track your packages on our site at <a href="http://www.aeropost.com/" class="text-blue">www.aeropost.com </a> ',
                'Duties apply to all imports. Due to hurricane events, certain goods are duty free. Please <a href="http://www.midireccioninteligente.com/2017/TCA2017/website/duty_free.html" class="text-blue">click here</a> to learn about those articles. An approved duty exemption form must be available before Customs Clearance; otherwise, regular tariff applies.',
                'Shipments that require any special handling are subject to additional charges.',
                'You can track your packages on our site at <a href="http://www.aeropost.com/" class="text-blue">www.aeropost.com</a> ',
                'We are always available via email <a href="mailto:serviceTCA@aeropost.com" class="text-blue">serviceTCA@aeropost.com</a>, Chatlive on our website, or toll-free at <a href="tel:(649)%20941-8185" class="text-blue">1 (649) 341-5299</a>.',
            ],
 
            maritime:[
                ['MARITIME',''],
                ['<b>Package Rate (USD)</b>','Additional lb $1.00'],
                ['',''],
                ['Per Cu/Ft','USD $10.00 '],
                ['Minimum charge','USD $50.00'],
                ['Handling Fee','USD $10.00'],	
                ['',''],
                ['Freight Per Cu/Ft (150-300 CuFt)','$9.00'],
                ['Minimum charge (freight)','$1350.00'],
                ['Handling Fee','$25.00'],
                ['',''],
                ['Freight Per Cu/Ft (300 CuFt and up)','USD $5.70'],
                ['Minimum charge (freight)','USD $2400.00'],
                ['Handling Fee','USD $50.00'],
                ['',''],
                ['Insurance',''],
                ['If cargo has 0 declared value, minimum charge is','USD $1.60 for every $100.00 of declared value'],
                ['',''],
                ['First package','USD $3.00'],
                ['Each additional package','USD $1.50'],
            ]
        }
    }
  }
  
}
</script>
