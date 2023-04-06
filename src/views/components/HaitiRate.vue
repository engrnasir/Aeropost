<template>
    <div>
        <InformationVue :list="info.list1" />
        
        <tableVue :list="info.table1"/>
        
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

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
  name: 'HaitiRate',
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
                ['Annual Membreship','FREE']
            ],
            packages:[
                ['Packages','Rates(USD)'],
                ['0.50 lb','$7.50'],
                ['1lb','$9.50'],
                ['2 lb','$14.00'],
                ['3 lb','$17.00'],
                ['Addtional lb','$3.30'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Home Delivery','$5.00 por lb'],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['Documents','$4.00 por lb minimun $1.00'],
            ],
            
            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling, are subject to additional charges.',
                'Customs processing per shipment: USD $5.00.',
                'Customs fee may vary based on direct customs charges due to increased paper work and processing.',
            ],
        },
        es_info:{
            list1:[
                'Cobramos por el peso, NO por el tamaño de su paquete.',
                'Puede devolver su correo no deseado y le acreditaremos su cuenta.',
                'Puede rastrear sus paquetes en nuestro sitio en www.aeropost.com.',
            ],

            table1:[
                ['Membresía anual','GRATIS']
            ],
            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0,50 libras', '$7,50'],
                ['1lb','$9.50'],
                ['2 libras', '$14.00'],
                ['3 libras', '$17.00'],
                ['libras adicionales','$3,30'],
            ],
            
            OtherCharges:[
                ['Otros cargos',''],
                ['Entrega a domicilio','$5.00 por lb'],
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
                ['Documentos','$4.00 por lb mínimo $1.00'],
            ],
            
            list2:[
                'Todos los documentos de seguridad con un número de seguimiento serán tratados como paquetes.',
                'Los envíos que requieren algún manejo especial están sujetos a cargos adicionales.',
                'Tramitación aduanera por envío: USD $5.00.',
                'La tarifa de aduana puede variar según los cargos de aduana directos debido al aumento del papeleo y el procesamiento.',
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
