<template>
    <div class="min-w-full">
        <HeroTitleVue :title="title" :description="description"></HeroTitleVue>

      <div class="container">
        <!-- Air -->
        <h2 class="main-heading">Air</h2>

        <!-- Packages -->
        <div>
            <h3 class="heading">Packages - Rates (USD)</h3>
            <tableVue :list="packages"></tableVue>
        </div>

        <!-- Handling Fee -->
        <div>
            <h3 class="heading">Handling Fee</h3>
            <tableVue :list="handlingFee"></tableVue>
        </div>

        <!-- Multiple Package -->
        <div>
            <h3 class="heading">Multiple Package Shipments: Single purchase with several packages</h3>
            <tableVue :list="packageShipment"></tableVue>
        </div>
        
        <!-- Delivery -->
        <!-- provo Cooper -->
        <div>
            <h3 class="heading">Delivery</h3>
            <h4 class="sub-heading">Provo - Cooper Jack Bay/The Bight/Grace Bay</h4>
            <tableVue :list="provoCooper"></tableVue>
        </div>
        <!-- Provo Others -->
        <div>
            <h3 class="heading">Provo - Other areas</h3>
            <tableVue :list="provoOthers"></tableVue>
        </div>
        <!-- North Caicos -->
        <div>
            <h3 class="heading">North Caicos, South Caicos, Grand Turks</h3>
            <tableVue :list="northCaicos"></tableVue>
        </div>
        
        <InformationVue/>
        
        <div>
            <h2 class="main-heading">Maritime</h2>
            <h4 class="heading">Packages - Rates (USD)</h4>
            <tableVue :list="maritimePackage1"></tableVue>
            <tableVue :list="maritimePackage2"></tableVue>
            <tableVue :list="maritimePackage3"></tableVue>
        </div>

        <div>
            <h4 class="sub-heading">Insurance</h4>
            <tableVue :list="insurance1"></tableVue>
            <tableVue :list="insurance2"></tableVue>
        </div>

        <div>
            <h2 class="main-heading">Warranty Program and Return Service</h2>
            <tableVue :list="warrantyProgram" :warranty="true"></tableVue>

        </div>

      </div>
      
     

      <FooterTitle title="We make shopping simple." :bgBlue='true'></FooterTitle>
    </div>
  </template>

  <script>
  import HeroTitleVue from '@/components/header/HeroTitle.vue';
  import tableVue from '@/components/rates/table.vue';
  import InformationVue from '@/components/rates/Information.vue';
  import FooterTitle from '@/components/footer/FooterTitle.vue';
  export default {
    name: 'HomeView',
    components:{
        HeroTitleVue,
        tableVue,
        InformationVue,
        FooterTitle,
    },
    data(){
      return{
        title:'Rates',
        description:'Your Miami Address service allows you to shop from your favorite U.S.websites and receive or pick up your packages at a local store, locker or get it delivered right to your door..',
        // Air
        packages:[
            ['0.5lb', 'USD $ 8.50'],
            ['1lb','USD $ 11.50'],
            ['Additional lb up to 30lb','USD $ 4.50'],
            ['Additional lb after 30lb','USD $ 3.75'],
            ['Other Charges (USD)',''],
        ],
        handlingFee:[
            ['Packages with value USD $499.00 and under', 'USD $10.00 per pkg.'],
            ['Packages with value between USD $500.00 and USD $999.00', 'USD $15.00 per pkg.'],
            ['Packages with value USD $1,000 and up', 'USD $20.00 per pkg.'],
        ],
        packageShipment:[
            ['First Package','Regular fees apply (Handling fee)'],
            ['Additional Packages within a Multiple Shipment','USD $3.50 per kg.']
        ],
        provoCooper:[
            ['Packages 1-5 lb','USD $5.00'],
            ['Additional lb','USD $0.50 cents per lb']
        ],
        provoOthers:[
            ['Packages 1-5 lb','USD $10.00'],
            ['Additional lb','USD $1.00 per lb']
        ],
        northCaicos:[
            ['Packages 1-5 lb','USD $6.50'],
            ['Additional lb','USD $1.00 per lb'],
        ],

        // Maritime

        maritimePackage1:[
            ['Per Cu/Ft','USD $10.00'],
            ['Minimum charge','Minimum charge'],
            ['Handling fee','Handling fee']
        ],
        maritimePackage2:[
            ['Freight Per Cu/Ft (150-300 CuFt)','$9.00'],
            ['Minimum charge (freight)','$1350.00'],
            ['Handling fee','$25.00']
        ],
        maritimePackage3:[
            ['Freight Per Cu/Ft (300 CuFt and up)','USD $5.70'],
            ['Minimum charge (freight)','USD $2400.00'],
            ['Handling fee','USD $50.00']
        ],
        insurance1:[
            ['If cargo has $0 declared value, minimum charge is','USD $1.60 for every $100.00 of declared value']
        ],
        insurance2:[
            ['First package','USD $3.00'],
            ['Each additional package','USD $1.50']
        ],

        warrantyProgram:[
            ['Rate Break (Declared Value)','Rate'],
            ['US$1 - US$99.99','US$2.15'],
            ['US$100 - US$159.99','US$3.90'],
            ['US$160 - US$199.99','US$3.95'],
            ['US$200 - US$299.99','US$5.95'],
            ['US$300 - US$399.99','US$7.95'],
            ['US$400 - US$499.99','US$9.75'],
            ['US$500 - US$599.99','US$11.50'],
            ['US$600 - US$699.99','US$13.25'],
            ['US$700 - US$799.99','US$14.95'],
            ['US$800 - US$899.99','US$16.75'],
            ['US$900 - US$999.99','US$18.50'],
            ['US$1000 - US$1099.99','US$20.25'],
            ['US$1100 - US$1199.99','US$21.95'],
            ['US$1200 - US$1299.99','US$23.75'],
            ['US$1300 - US$1399.99','US$25.50'],
            ['US$1400 - US$1499.99','US$27.25'],
            ['Equal or greater than US$1500','2.5% of the Declared Value']
            
        ]




      }
    }
    
  }
  </script>
  <style lang="scss" scoped>
  .container{
    @apply w-[96%] max-w-[980px] bg-white shadow-xl rounded-xl p-10 mx-auto relative z-20 -translate-y-20 
                   mb-40 max-md:-translate-y-12 max-md:px-4;  

    .main-heading{
        @apply font-bold text-3xl text-blue leading-none mb-4;
    }
    .heading{
        @apply text-blue text-lg mb-4 font-medium leading-none;
    }
    .sub-heading{
        @apply text-blue text-base mb-4 leading-none;
    }
  }

    
  </style>
  