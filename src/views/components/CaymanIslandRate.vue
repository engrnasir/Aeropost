<template>
    <div>
        <p class="text-bold text-base mb-4 text-blue ">{{ info.effectiveDate }}</p>

        <InformationVue :list="info.list1" />
        
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <InformationVue :title="info.title2" :list="info.list2" />

        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'CaymanIslandRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue
  },
  data(){
    return{
        info:{
            effectiveDate:'Effective February, 2022.',
            list1:[
                'We charge on weight NOT on size of your package.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com.',
            ],

            packages:[
                ['Packages','Rates(USD)'],
                ['0.50 lb','$7.25'],
                ['1 lb','$8.95'],
                ['2 lb','$13.50'],
                ['3 lb','$18.30'],
                ['Addtional lb up to 30 lb','$4.95'],
                ['Addtional lb after 30 lb','$3.85'],
            ],
            
            // <a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>
            OtherCharges:[
                ['Other charges',''],
                ['Handling Fee and processing fee','$7.00'],
                ['Pkg Tax / Customs handling, per pkg','$12.20'],
                ['',''],
                ['Consolidation requests',''],
                ['2nd package and up','$3.50'],
                ['Pkg Tax / Customs handling, per pkg','$7.32'],
                ['',''],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['',''],
                ['Seafreight (CID)',''],
                ['Seafreight Minimum charge: 1 CuFt','$10'],
                ['Seafreight Minimum charge: 2-3 CuFt','$25'],
                ['4 CuFt and higher, Per CuFt','$7.50'],
                ['',''],
                ['Handling & processing fee 1 - 50 CuFt','$10'],
                ['Handling & processing fee 51 - 100 CuF','$25'],
                ['Handling & processing fee 101 - 250 CuFt','$50'],
                ['Handling & processing fee 251 - 500 CuFt','$100'],
                ['Higher than 500 CuFt','Quote'],
                ['',''],
                ['Pkg Tax / Customs handling, per pkg','$6'],
                ['Consolidation, 2nd pkg and up','$3.50'],
                ['Single Bill of Lading','$75'],
                ['SED','$25'],
                ['Customs Brokerage, greater than 500 CuFt','$150'],
                ['Delivery','Quote'],
            ],

            title2:'Other important information:',
            list2:[
                'Cayman Islands applies Government packaging tax of $5.00CI and Government warehousing fee of $5.00CI per shipment.',
                'Duties applies to all imports.',
                'Home/Office Delivery: $5.00CI per package, Charge On Delivery (within Georgetown, Industrial Park and Seven Mile Beach). Other areas, please quote with Local Provider.',
                'Shipments that require any special handling, are subject to additional charges.',
                'We charge on weight NOT on size of your package. Limit 31 inches by any of its sides.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at <a href="https://aeropost.com/" class="text-blue">www.aeropost.com</a>',
                'We are always available through our email <a href="mailto:serviceGCM@aeropost.com" class="text-blue">serviceGCM@aeropost.com</a>, Chatlive at our website, or calling us free at <span class="text-blue">1 (866) 297-1191</span>',
            ],

        }
    }
  }
  
}
</script>
