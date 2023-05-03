<template>
    <div>
        
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.otherChanges" :hasHeader="true"/>
        
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'ColombiaRate',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{

            packages:[
                ['Packages',''],
                ['0.5 lb.','USD$6.00'],
                ['1lb.','USD$7.00'],
                ['2 lb.','USD$13.00'],
                ['3 lb.','USD$17.50'],
                ['Additional lb. up to 20 lb.','USD$4.50'],
                ['More than 20 lb.','USD$4.00'],
            ],
            otherChanges:[
                ['Other charges',''],
                ['Home Delivery (Área Metropolitana de Bogota)','FREE'],
                ['Home Delivery (Municipios and remote Areas)','USD$1.00 per lb. (mini USD$3.50)'],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['Multiple shipments (additional piece)','USD$2.00 per piece.'],	
            ],          
            
        },
        es_info:{

            packages:[
                ['Paquetes',''],
                ['0.5 lb.','USD$6.00'],
                ['1lb.','USD$7.00'],
                ['2 lb.','USD$13.00'],
                ['3 libras', 'USD $ 17,50'],
                ['Lb. adicional hasta 20 lb.', 'USD$4.50'],
                ['Más de 20 lb.','USD$4.00'],
            ],
            otherChanges:[
                ['Otros cargos',''],
                ['Envío a domicilio (Área Metropolitana de Bogotá)','GRATIS'],
                ['Envío a Domicilio (Municipios y Áreas Remotas)','USD$1.00 por libra (mini USD$3.50)'],
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
                ['Envíos múltiples (pieza adicional)','USD$2.00 por pieza.'],	
            ],          

        },
    }
  },
  computed:{
    ...mapState(['lang']),
    info(){return this.lang==='en'? this.en_info:this.es_info}
  }
  
}
</script>
