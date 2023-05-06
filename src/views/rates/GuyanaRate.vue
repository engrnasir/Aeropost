<template>
    <div>
                        
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.otherChanges" :hasHeader="true" :colspan="2"/>

        <tableVue :list="info.homeDelivery" :hasHeader="true"/>

        <WarrantyVue/>


    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'GuyanaRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue
  },
  data(){
    return{
        en_info:{

            packages:[
               ['Packages','Rates (USD)'],
               ['0.50 lb','$7.00'],
               ['1lbs','$9.00'],
               ['2lbs','$12.00'],
               ['3lbs','$15.00'],
               ['Additional lb','$3.30'],
               ['Additional lb (exceeding 200 lbs)','$2.50'],
            ],
            otherChanges:[
                ['Other charges'],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
            ],     
            homeDelivery:[
                ['Home delivery','Rates (USD)'],
                ['1 - 3lbs','$2.00'],
                ['3 - 6lbs','$3.00'],
                ['6 - 10lbs','$4.50'],
                ['10 - 25lbs','$5.50'],
                ['Lb Additional lb (up to 100lbs)','$0.50'],
                ['Additional pieces (per piece)','$1.00'],
                ['Outside of 10-25 Mile Radius','$5.00'],
                ['Deliveries (+Standard Delivery Fees)','$10.00'],
            ],
             
        },
        es_info:{

            packages:[
                ['Paquetes','Tarifas (USD)'],
                ['0,50 libras', '$7,00'],
                ['1 libra','$9,00'],
                ['2 libras', '$12.00'],
                ['3 libras', '$15.00'],
                ['libras adicionales','$3,30'],
                ['lb adicional - más de 200 lb', '$2.50'],
            ],
            otherChanges:[
                ['Otros cargos'],
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
            ],     
            homeDelivery:[
                ['Entrega a domicilio','Tarifas (USD)'],
                ['1 - 3 libras', '$2.00'],
                ['3 - 6 libras', '$3,00'],
                ['6 - 10 libras', '$4,50'],
                ['10 - 25 libras', '$5.50'],
                ['Lb Libras adicionales (hasta 100 libras)','$0.50'],
                ['Piezas adicionales (por pieza)','$1.00'],
                ['Fuera del área metropolitana (10-25 millas)','$5.00'],
                ['Entregas (+Tarifas de envío estándar)','$10.00'],
            ],
                  
        },
    }
  },
  computed:{
    ...mapState(['lang']),
    info(){
        return this.lang==='en'?this.en_info:this.es_info;
    }
  }
  
}
</script>
