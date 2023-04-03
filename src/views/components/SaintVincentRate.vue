<template>
    <div>      
        
        <InformationVue :list="info.list1" />
        
        <h2 class="main-heading">AIR</h2>
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.otherCharges" :hasHeader="true"/>

         <p class="text-bold text-blue mb-4">*This handling fee charge applies to all transactions, both when customs clearance is provided by Aeropost or the customer elects to pick up Customs document.</p>
        
        <InformationVue :list="info.list2" />

        <tableVue :list="info.maritime" :hasHeader="true"/>     
        
        <p class="text-bold text-blue mb-4"><u>Local documentation charges</u> from vessel company landing agent may apply.</p>        

        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'SaintVincentRate',
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
                'You can track your packages on our site at www.aeropost.com.'
            ],


            packages:[
                ['Packages','Rates(USD)'],
                ['1/2 lb','USD $5.50'],
                ['1 lb','USD $6.60'],
                ['2 lb','USD $11.00'],
                ['Additional lb (up to 200 lb)','USD $3.85'],
                ['200+ lb','USD $3.05 '],
            ],            
            otherCharges:[
                ['Other charges',''],
                ['Customs Handling','USD $3.50*'],	
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
            ],
            
            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling, are subject to additional charges.',
                'Package duties will be collected upon delivery.',
            ],
 
            maritime:[
                ['MARITIME',''],
                ['<b>Individuals and Corporations</b>',''],
                ['Freight','USD $7.25 per cubic ft. '],
                ['Minimum invoice charge:','USD $25.00'],
                ['Handling Fee',''],
                ['From 1 to 40 cubic ft.','USD $10.00'],
                ['From 41 cubic ft. and up','USD $25.00'],

                ['<b>Corporate - 40 qubic feet and higher</b>',''],
                ['This rate discount is upon request, it has a minimum invoice charge per month',''],
                ['Freight','USD $6.53'],
                ['Minimum charge - 40 cubic ft.','USD $260.00'],
                ['Handling Fee',''],
                ['From 1 to 40 cubic ft.','USD $25.00'],
                ['From 40 cubic ft. and up','USD $50.00'],
                ['Customs Brokerage (when required)','USD $50.00'],	

                ['<b>Corporate - 80 Cubit Ft. and Up</b>',''],
                ['This rate discount is upon request, minimum invoice charge per month required',''],
                ['Freight','USD $5.80 per cubic ft.'],
                ['Minimum charge - 80 cubic ft.','USD $410.00'],
                ['Handling Fee','80 cubic feet and up	USD $50.00'],
                ['Customs Brokerage (when required)','USD $100.00'],
                ['Other charges:',''],
                ['Insurance ',''],
                ['For every USD $100 of declared value','USD $1.50'],
                ['USD $5.00 min. when there is no declared value. Covers a max. of USD $350.00',''],
                ['SED for declared value of USD $2500 and up','USD $25.00'],
                ['HAZ','USD $100.00 per UN'],
                ['Delivery',''],
                ["For small cargo to client's location",'USD $65.00'],
                ["For large cargo to client's location",'USD $200.00'],
                ['Other type of cargo','Request quote'],
            ]
        }
    }
  }
  
}
</script>
