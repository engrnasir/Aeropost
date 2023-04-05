<template>
    <div>
        
        <InformationVue :list="info.list1" />
        
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.otherCharges" :hasHeader="true"/>
        
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
  name: 'SaintMartinRate',
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
                'You can track your packages on our site at www.aeropost.com.',
            ],


            packages:[
                ['Packages','Rates(USD)'],
                ['0.50 lb','$6.45'],
                ['1 lb','$8.00'],
                ['2 lb','$11.00'],
                ['3 lb','$14.50'],
                ['Addtional lb','$3.50'],
            ],
            
            otherCharges:[
                ['Other charges',''],
                ['Restricted Shipments','See Custom Handling for details'],
                ['Customs Handling','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['Home delivery at the Metropolitan area','USD $5.00'],
            ],
            
            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling are subject to additional charges.',
            ],
 
            maritime:[
                ['MARITIME',''],
                ['<b>Individuals and Corporations</b>',''],
                ['Freight','USD $6.45 per cubic ft.'],
                ['Minimum charge:','USD $25.00'],
                ['Handling Fee',''],
                ['From 1 to 40 cubic ft.','USD $10.00'],
                ['From 41 cubic ft. and up','USD $25.00'],

                ['<b>Corporate - 40 Cubic Ft. and Up</b>',''],
                ['This rate discount is applied upon request, minimum invoice charge per month',''],
                ['Freight','USD $5.81 per cubic ft.'],
                ['Minimum charge - 40 cubic ft.','USD $230.00'],
                ['Handling Fee',''],
                ['From 1 to 40 cubic ft.','USD $25.00'],
                ['From 40 cubic ft. and up','USD $50.00'],

                ['<b>Corporate - 80 Cubit Ft. and Up</b>',''],
                ['This rate discount is upon request, minimum invoice charge per month',''],
                ['Freight','USD $5.16 per cubic ft.'],
                ['Minimum charge - 80 cubic ft.','USD $410.00'],
                ['Handling Fee',''],
                ['80 cubic ft. and up','USD $50.00'],

                ['<b>Other Charges</b>',''],
                ["Insurance",''],
                ["For every USD $100 of declared value",'USD $1.50'],
                ["USD $5.00 min. when there is no declared value. Covers a max. of USD $350.00",''],
                ["SED (for declared value of USD $2500 and up)",'	USD $25.00'],
                ["HAZ",'USD $100.00 per UN'],
                ["Delivery",''],
                ["For small cargo to client's location",'USD $65.00'],
                ["For large cargo to client's location",'USD $200.00'],
                ["Other type of cargo",'Request quote'],
            ]
        }
    }
  }
  
}
</script>
