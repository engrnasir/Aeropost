<template>
    <div>
        <InformationVue :list="info.list1" />
        
        <tableVue :list="info.table1"/>
        
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.OtherCharges"/>        

        <InformationVue :list="info.list2" />
 
        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'SaintLuciaRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue
  },
  data(){
    return{
        en_info:{
            list1:[
                'We charge on weight NOT on size of your package.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com.',
            ],

            table1:[
                ['Annual Membreship	','FREE']
            ],

            packages:[
                ['Packages','Rates(USD)'],
                ['0.50 lb','$5.95'],
                ['1 lb','$7.95'],
                ['2 lb','$11.95'],
                ['3 lb','$15.95'],
                ['Additional lb','$4.00'],
            ],
            
            OtherCharges:[
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
            ],
            
            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling are subject to additional charges.',
            ],
        },
        es_info:{
            list1:[
                'Cobramos por el peso, NO por el tamaño de su paquete.',
                'Puede devolver su correo no deseado y le acreditaremos su cuenta.',
                'Puede rastrear sus paquetes en nuestro sitio en www.aeropost.com.',
            ],

            table1:[
                ['Membresía Anual','GRATIS']
            ],

            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0,50 libras', '$5,95'],
                ['1 libra', '$7.95'],
                ['2 libras', '$11.95'],
                ['3 libras', '$15.95'],
                ['libras adicionales','$4,00'],
            ],
            
            OtherCharges:[
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
            ],
            
            list2:[
                'Todos los documentos de seguridad con un número de seguimiento serán tratados como paquetes.',
                'Los envíos que requieren un manejo especial están sujetos a cargos adicionales.',
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
