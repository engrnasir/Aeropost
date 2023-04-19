<template>
    <div>
        <InformationVue :list="info.list1" />
        
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

        <tableVue :list="info.table1"/>

        <InformationVue :title="info.title2" :list="info.list2" />
 
        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'GrenadaRate',
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

            packages:[
                ['Packages','Rates(USD)'],
                ['0.5 lb','USD $6.95'],
                ['1 lb','USD $9.00'],
                ['Addtional lb','$4.00'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Handling Fee','USD $5.00'],
                ['Duties and taxes','Applicable duties and taxes'],
                ['Customs warehousing (local charge at customs)','$3.00ECD'],
                ['Home Delivery (local charge)','Quote with local agent'],
            ],
            table1:[
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['SED','USD $25.00'],
            ],
            
            title2:'Other information:',
            list2:[
                'All documents with a tracking number will be processed as packages.',
                'Shipments that require any special handling, are subject to additional charges. Please quote with local office.',
                'Additional charges apply to shipments measuring over 1 meter on any side. Please quote with the local office.',
            ],
        },
        es_info:{
            list1:[
                'Cobramos por el peso, NO por el tamaño de su paquete.',
                'Puede devolver su correo no deseado y le acreditaremos su cuenta.',
                'Puede rastrear sus paquetes en nuestro sitio en www.aeropost.com.',
            ],

            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0.5 lb','USD $6.95'],
                ['1 libra','USD $9.00'],
                ['libras adicionales','$4,00'],
            ],
            
            OtherCharges:[
                ['Otros cargos',''],
                ['Tarifa de manejo','USD $5.00'],
                ['Derechos e impuestos','Derechos e impuestos aplicables'],
                ['Almacenamiento aduanero (cargo local en la aduana)','$3.00ECD'],
                ['Entrega a domicilio (cargo local)','Cotización con agente local'],
            ],
            table1:[
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
                ['SED','USD $25.00'],
            ],
            
            title2:'Otra información:',
            list2:[
                'Todos los documentos con un número de seguimiento se procesarán como paquetes.',
                'Los envíos que requieran algún manejo especial, están sujetos a cargos adicionales. Cotice con la oficina local.',
                'Se aplican cargos adicionales a los envíos que miden más de 1 metro en cualquier lado. Cotice con la oficina local.',
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
