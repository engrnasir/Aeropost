<template>
    <div>
        <InformationVue :list="info.list1" />
        
        <h2 class="main-heading">AIR</h2>
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <h2 class="main-heading">{{ info.delivery.title }}</h2>
        <tableVue :list="info.delivery.table"/>


        <InformationVue :list="info.list2" />

        
        <WarrantyVue/>
        
        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <p class="text-base text-blue mb-5" v-html="info.customHandling.description"></p>       
        <tableVue :list="info.customHandling.table" :hasHeader="true"/>
        
        <p class="text-base mb-4 text-blue ">Millennium Freight staff will clear and process packages through customs and transport items to office location.</p>

        <InformationVue :list="['(*) Note: Customers will need to provide the invoice for each package on flight days in order to calculate import duties.']" />

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'DominicaRate',
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
                ['0.5','$8.50'],
                ['1 lb','$11.00'],
                ['2 lb','$14.50'],
                ['3 lb','$19.50'],
                ['Addtional lb','$3.60'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
            ],
            delivery:{
                title:'Delivery Fees (Cash on Delivery)',
                table:[
                    ['1 - 3 Packages','ECD 5.00'],
                    ['4 - 5 Packages','ECD 10.00'],
                    ['6 + Packages','ECD 15.00'],                  		
                ]
            },
            
            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling, are subject to additional charges.',
                'Delivery charges for packages will be collected upon delivery.',
            ],

            customHandling:{
                title:'Customs Handling',
                description:'All packages that enter the country must go through customs and are subject to pay duties. Customs handling rates are set based on the package CIF value. To calculate duties for a package use our [Online Calculator][4] or ask Customer Service for help.',
                table:[
                    ['DESCRIPTION','RATE*'],
                    ['1 - 3 Packages','ECD $25 + applicable duties'],
                    ['4 + Packages','ECD $30 + applicable duties'],
                ]
            }
        }
    }
  }
  
}
</script>
