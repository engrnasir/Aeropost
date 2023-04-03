<template>
    <div>
        
        <InformationVue :list="info.list1" />
        
        <tableVue :list="info.basics" :hasHeader="true"/>
        
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.otherChanges" :hasHeader="true"/>

        <WarrantyVue/>

        <InformationVue :list="info.list2" />

        <h2 class="main-heading">{{ info.rule.title }}</h2>
        <p class="text-blue mb-4" v-html="info.rule.description"></p>
        <InformationVue :list="info.rule.list"/>

        <p class="text-sm text-blue mb-4">
            <a href="http://www.aduana.gob.ec/pro/courier.action">http://www.aduana.gob.ec/pro/courier.action</a>
        </p>
        <p class="text-sm text-blue mb-6"><b>Attention by e-mail from Customs</b></p> 
        <p class="text-sm text-blue mb-4">
            <a href="mailto:mesadeservicios@aduana.gob.ec">mesadeservicios@aduana.gob.ec</a>
        </p>
        <p class="text-sm text-blue mb-6">
            Customs procedures, claims, congratulations, suggestions, consultations on customs regulations, <b>CONSULTATION OF IMPORT QUOTAS. </b> 
        </p>
        <p class="text-sm text-blue mb-4"><b>Considerations</b>:</p>
        <p class="text-sm text-blue mb-4">
            Any package that exceeds the 4x4 rule will be subject to the payment of the corresponding taxes, depending on the type of merchandise.<br>
            The 4x4 rule also applies to split shipments. Split shipments are those shipments of different packages that belong to the same consignee, within the same flight.
        </p>
        
        


    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'EcuadorRate',
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
                'You can track your packages on our site at www.aeropost.com',
            ],
            basics:[
              ['','Guayaquil and Quito','Rest of the country'],
              ['Annual Membership','N?A','N?A'],
              ['Monthly Minimum','N?A','N?A'],
            ],
            packages:[
                ['Packages (includes international freight, customs procedures and destination delivery*)','',''],
                ['1 lb.','USD$12.00','USD$15.50'],
                ['2 lbs.','USD$16.50','USD$19.75'],
                ['3 lbs.','USD$20.00','USD$23.00'],
                ['4 lbs.','USD$23.50','USD$26.25'],
                ['5 lbs.','USD$31.50','USD$34.00'],
                ['6 lbs.','USD$35.00','USD$37.25'],
                ['7 lbs.','USD$38.50','USD$40.50'],
                ['8 lbs.','USD$42.00','USD$43.75'],
                ['9 lbs.','USD$46.35','USD$47.85'],
                ['10 lbs.','USD$50.70','USD$51.95'],
                ['lb. Additional up to 10 lbs.','USD$5.00	','USD$5.25'],
            ],
            otherChanges:[
                ['Other charges',''],
                ['Consolidation cost (per package)','USD $3.00'],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
            ],     
            
            list2:[
                'All documents with a tracking number will be processed as packages.',
                'Shipments that require any special handling are subject to additional charges.',
                'Shipments with a value greater than USD $5,000.00 or weighing more than 100 kilograms require an import permit.',
            ],
            rule:{
                title:'4x4 RULE',
                description:'The 4x4 rule refers to packages that have any of the following characteristics:',
                list:[
                    'They are all packages that weigh  <b>up to 4 kilograms and up to USD$400</b>, which can only be used by  <b>natural persons</b>.  The value and weight of the imported items must be submitted simultaneously.',
                    'The Foreign Trade Committee (Comex) resolved that migrants who appear in the  <b>consular registry</b>  may make unlimited imports.',
                    'The consular registry will be interconnected with the National Customs Service (SENAE) system, and migrants will be able to register online through the virtual consulate.',
                ]
            }
            

        }
    }
  }
  
}
</script>
