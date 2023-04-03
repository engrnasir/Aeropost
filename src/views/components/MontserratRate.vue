<template>
    <div>
        <p class="text-bold text-blue">{{ info.effectiveDate }}</p>

        <InformationVue :list="info.list1" />
        
        
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.OtherCharges" :hasHeader="true"/>
        
        <tableVue :list="info.table1"/>

        <InformationVue :list="info.list2" />
 
        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'MontserratRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue
  },
  data(){
    return{
        info:{
            effectiveDate:'Effective February 15, 2014',

            list1:[
                'We charge on weight NOT on size of your package.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com.',
            ],

            packages:[
                ['Packages','Rates(USD)'],
                ['0.50 lb','USD $6.95'],
                ['1 lb','USD $9.00'],
                ['Addtional lb','USD $4.00'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Handling Fee (local charge)','$20.00EC'],
                ['Duties & Taxes','Applicable Duties & Taxes'],
                ['Home Delivery (local charge)','Quote with local agent']
            ],
            table1:[
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['SED Shipment','USD $25.00'],
            ],
            
            list2:[
                'Rate is based on shipments moving Airfreight (Miami-Antigua) and Seafreight via Ferry (Antigua-Montserrat). When the Ferry is not available, shipments will remain in Antigua waiting for reinstatement of Ferry service. Customers can request the Airfreight option at their own expense; Aeropost will support with airfreight rate negotiation and delivery of shipments to the airline.',
                'All documents with a tracking number will be processed as packages.',
                'Shipments that require any special handling, are subject to additional charges. Please quote with local office.',
                'Additional charges apply to shipments measuring over 1 meter on any side. Please quote with the local office.        ',
            ],
        }
    }
  }
  
}
</script>
