<template>
    <div>
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
  name: 'MartiniqueRate',
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
                ['0.50 lb','USD $6.95'],
                ['1 lb','USD $9.00'],
                ['Addtional lb','USD $4.00'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Handling Fee (local charge)','Quote with local agent'],
                ['Duties & Taxes','Applicable Duties & Taxes'],
                ['Home Delivery (local charge)','Quote with local agent'],	
            ],
            table1:[
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['SED Shipment','USD $25.00'],
                ['Local clearance fees (for shipment brokerage with applied duties and taxes fees)','USD $30.00 (approx.)'],
            ],
            
            list2:[
                'All documents with a tracking number will be processed as packages.',
                'Shipments that require any special handling, are subject to additional charges. Please quote with local office.',
                'Additional charges apply to shipments measuring over 1 meter on any side. Please quote with the local office.',
            ],
        }
    }
  }
  
}
</script>
