<template>
    <div>
        
        <InformationVue :list="info.list1" />
        
        <h2 class="main-heading">AIR SERVICE RATES</h2>
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.airportCargo" :hasHeader="true"/>

        <p class="text-bold text-sm mb-4 text-blue ">*We are not able to provide any special customs clearance needs for exemptions or special circumstances.  This is including, but not limited to, Pier-Park exemptions, Retail business exemptions,  Government Departments duty exemptions, Temporary Import exemptions,  and any other special exemptions.</p>
        
        <InformationVue :list="info.list2" />

        <h2 class="main-heading">{{ info.maritime.title }}</h2>
        <tableVue :list="info.maritime.table"/>
        
        <p class="text-bold text-base mb-4 text-blue ">*We are not able to provide any special customs clearance needs for exemptions or special circumstances.  This is including, but not limited to, Pier-Park exemptions, Retail business exemptions,  Government Departments duty exemptions, Temporary Import exemptions,  and any other special exemptions.</p>
        <p class="italic text-base mb-4 text-blue ">All packages are subject to BVI Customs Duty Charges. These are government fees. To determine the final cost of your package, use the calculator or simply shop Aeropost.com for all-inclusive prices.</p>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
export default {
  name: 'BritishVirginRate',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        info:{
            list1:[
                'No membership fee',
                'Flights arriving daily (Tuesday to Saturday)',
                'Air: we charge on real weight, not package size',
                'Maritime: we charge on volume only, not weight',
                'Mail is free of charge',
                'FREE local delivery (Tortola only)',
                'FREE product returns',
                'Log in to <a href="http://www.myaeropost.com/sso?srv=https%3a%2f%2fmyaccount.aeropost.com%2fen&culture=eng&gtw=eis" class="text-blue">My Account</a> to track all your packages and purchases',
            ],

            packages:[
                ['Packages','Rates(USD)'],
                ['1 lb','USD $9.95'],
                ['2 - 3 lb','Ea. Add. lb USD $6.00'],
                ['4 - 5 lb','Ea. Add. lb USD $5.00'],
                ['6 - 30 lb','Ea. Add. lb USD $4.00'],
                ['31 - 50 lb','Ea. Add. lb USD $3.50'],
                ['51 lb+','Ea. Add. lb USD $3.00'],
                ['Items over 120 inches in any dimension','200% of rate (i.e. double the regular rate)'],
                ['Warranty and Returns Program (AeroProtect) (for every USD $100 of declared value)','USD $1.00'],
                ['Basic Customs Clearance*','INCLUDED'],
                ['Local Delivery (Tortola only)','only)	INCLUDED'],
                ['Restricted Shipments','INCLUDED (once a week)'],
                ['Product Returns','INCLUDED'],
            ],
            airportCargo:[
                ['Airport Cargo Transfer Fee per Package',''],
                ['Below 2 lbs','USD $1.00'],
                ['2 lbs - 9.9 lbs','USD $2.00'],
                ['10 lbs - 19.99 lbs','USD $4.00'],
                ['20 lbs - 49.99 lbs','USD $6.00'],
                ['50 lbs - 99.99 lbs','USD $8.00'],
                ['100 lbs - 199.99 lbs','USD $10.00'],
                ['200 lbs - 500 lbs','USD $15.00'],
                ['Over 500 pound','USD $30.00'],
            ],

            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling, are subject to additional charges.'
            ],


            maritime:{
                title:'MARITIME SERVICE (Per Cubic Foot)',
                table:[
                        ['1 - 5 cubes	','USD $15.00/cube'],
                        ['5+ 	','USD $10.00/cube'],
                        ['Basic Customs Clearance*	','INCLUDED'],
                        ['Wharfage (Government Fee)	','2% of Invoice Value'],
                    ]
            },

        }
    }
  }
  
}
</script>
