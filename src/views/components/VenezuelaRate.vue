<template>
    <div>
        
        <InformationVue :list="info.list1" />
                        
        <h3 class="heading">Rates for all packages received at the Venezuelan Customs.</h3>
        <tableVue :list="info.packages" :hasHeader="true"/>

        <InformationVue :list="info.list2" />
        
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
export default {
  name: 'VenezuelaRate',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        info:{

            list1:[
                'You can track your packages on our website www.aeropost.com.',
                'We charge by weight NOT the size of the package.',
            ],
            packages:[
               ['International Costs (USA)','',''],
               ['','1 lb.','additional lbs.'],
               ['Freight','USD $4.00','USD $3.00'],
               ['PakProtect*','USD $2.00 for each USD $100 of declared value',''],
               ['Customs Handling','USD $1.50 for each lb.',''],
            ],
            list2:[
                "Costs through MyAero for International Freight and Pakprotect are received and processed by: Aeropost International Services Inc. (Company registered in the United States of America).",
                "The client assumes that by not pre-alerting and not declaring the value of the merchandise, he wishes a maximum insurance coverage of USD $100.",
                "The user accepts and declares to be aware that they are contracting the cargo reception and handling services of Aeropost International Services Inc, a company that operates in the territory of the United States of America, whose services are charged in its official currency, which is the American dollar.",
                "Aeropost International Services Inc, a US company, has contracted the services of Aeropost de Venezuela Adv SA as a logistics operator in the territory of the Bolivarian Republic of Venezuela.",
                "The packages whose contracted Pakprotect service has been paid in Bs, will enjoy coverage in Bs at the Dicom rate in force at the time of the accident.    ",
            ],
            
        }
    }
  }
  
}
</script>
