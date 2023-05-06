<template>
    <div>

        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true" :colspan="2"/>

        <tableVue :list="info.homeDeliveryTable" :hasHeader="true"/>

        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'AnguillaRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue,
  },
  data(){
    return{
        en_info:{
            packages:[
                ['Packages','Rates(USD)'],
                ['0.50 lb',	'USD$7.00'],
                ['1 lb','USD$9.00'],
                ['2 lb','USD$11.00'],
                ['3 lb','USD$15.00'],
                ['Addtional lb','USD$3.50'],
	            ],
            
            OtherCharges:[
                ['Other charges'],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
            ],

            homeDeliveryTable:[
                ['Home delivery', 'Rates (USD)'],
                ['1 - 3 lb','USD$2.00'],
                ['3.01 - 6 lb','USD$3.00'],
                ['6.01 - 10 lb','USD$4.50'],
                ['10.01 - 25 lb','USD$5.50'],
                ['Lb Additional lb (up to 100 lb.)','USD$0.50'],
                ['Additional pieces (per piece)','USD$1.00'],
                ['Out of Metropolitan Area (10-25 miles)','USD$5.00'],
                ['Deliveries (+Standard Delivery Fees)','USD$10.00'],
            ],
        },
        es_info:{

            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0,50 libras', 'USD$7,00'],
                ['1 libra', '9,00 USD'],
                ['2 libras','USD$11.00'],
                ['3 libras','USD$15.00'],
                ['libras adicionales','USD$3,50'],
	        ],
            
            OtherCharges:[
                ['Otros cargos'],
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
             ],

            homeDeliveryTable:[
                ['Entrega a domicilio', 'Tarifas (USD)'],
                ['1 - 3 libras','USD$2.00'],
                ['3.01 - 6 libras','USD$3.00'],
                ['6,01 - 10 libras', 'USD$4,50'],
                ['10.01 - 25 libras', 'USD$5.50'],
                ['Lb Libra adicional (hasta 100 lb.)','USD$0.50'],
                ['Piezas adicionales (por pieza)','USD$1.00'],
                ['Fuera del área metropolitana (10-25 millas)','USD$5.00'],
                ['Entregas (+Tarifas de envío estándar)','USD$10.00'],
            ],
            }
        }
  },
  computed:{
    ...mapState(['lang']),
    info(){return this.lang==='en'? this.en_info:this.es_info}
  }
  
}
</script>
