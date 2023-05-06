<template>
    <div>
        
        <tableVue :list="info.packages" :hasHeader="true" :colspan="2"/>
        
        <tableVue :list="info.otherChanges" :hasHeader="true" :colspan="2"/>

        <h2 class="main-heading">{{ lang==='en'?'Warranty Program and Return Service':'Programa de Garantía y Retornos' }}</h2>
        <newWarrantyTable/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <tableVue :list="info.customHandling.table" :tfoot="info.customHandling.tfoot" :hasHeader="true"/>
        <tableVue :list="info.customHandling.formula"/>

        
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import newWarrantyTable from '@/components/rates/newWarrantyTable.vue';
import { mapState } from 'vuex';
export default {
  name: 'ColombiaRate',
  components:{
      tableVue,
      InformationVue,
      newWarrantyTable
  },
  data(){
    return{
        en_info:{

            packages:[
                ['Packages'],
                ['0.5 lb.','USD$6.00'],
                ['1lb.','USD$7.00'],
                ['2 lb.','USD$13.00'],
                ['3 lb.','USD$17.50'],
                ['Additional lb. up to 20 lb.','USD$4.50'],
                ['More than 20 lb.','USD$4.00'],
            ],
            otherChanges:[
                ['Other charges'],
                ['Home Delivery (Área Metropolitana de Bogota)','FREE'],
                ['Home Delivery (Municipios and remote Areas)','USD$1.00 per lb. (mini USD$3.50)'],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['Multiple shipments (additional piece)','USD$2.00 per piece.'],	
            ],  
            
            customHandling:{
                title:'Customs Handling',
                table:[
                    ["PACKAGE'S VALUE IN USD$","RATE IN USD$*"],
                    ["$0 - $50","$2.00"],
                    ["$50 - $100","$5.00"],
                    ["$100 - $500","$10.00"],
                    ["$500 - $2000","$15.00"],
                    ["More than $2000","	Contact Customer Service"],
                ],
                tfoot:'* Does not include sales tax. All rates are expressed in USD and will be converted to pesos at the exchange rate of the day.',
                formula:[['CIF value = Total invoice of the package + Transport cost + Insurance']]
            },
            
        },
        es_info:{

            packages:[
                ['Paquetes'],
                ['0.5 lb.','USD$6.00'],
                ['1lb.','USD$7.00'],
                ['2 lb.','USD$13.00'],
                ['3 libras', 'USD $ 17,50'],
                ['Lb. adicional hasta 20 lb.', 'USD$4.50'],
                ['Más de 20 lb.','USD$4.00'],
            ],
            otherChanges:[
                ['Otros cargos'],
                ['Envío a domicilio (Área Metropolitana de Bogotá)','GRATIS'],
                ['Envío a Domicilio (Municipios y Áreas Remotas)','USD$1.00 por libra (mini USD$3.50)'],
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
                ['Envíos múltiples (pieza adicional)','USD$2.00 por pieza.'],	
            ], 
            customHandling:{
                title:'Manejo Aduanal',
                table1:[
                    ["Valor del paquete en USD$","Tarifa en USD$*"],
                    ["$0 - $50","$2.00"],
                    ["$50 - $100","$5.00"],
                    ["$100 - $500","$10.00"],
                    ["$500 - $2000","$15.00"],
                    ["Más de $2000","Contactar a servicio al cliente"],
                ],
                tfoot:'*No incluye impuesto de ventas. Todas las tarifas están expresadas en USD y serán convertidas a pesos al tipo de cambio del día.',
                formula:[['Valor CIF = Factura total del paquete + Costo de transporte + Seguro']]
            },         

        },
    }
  },
  computed:{
    ...mapState(['lang']),
    info(){return this.lang==='en'? this.en_info:this.es_info}
  }
  
}
</script>
