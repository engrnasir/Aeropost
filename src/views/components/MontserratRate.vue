<template>
    <div>

        <InformationVue :list="info.list1" />
        
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.OtherCharges" :hasHeader="true"/>
        
        <tableVue :list="info.table1"/>

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
  name: 'MontserratRate',
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
                ['0.50 lb','USD $6.95'],
                ['1 lb','USD $9.00'],
                ['Addtional lb','USD $4.00'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Handling Fee (local charge)','$20.00EC'],
                ['Duties & Taxes','Applicable Duties & Taxes'],
                ['Home Delivery (local charge)','Quote with local agent']
            ],
            table1:[
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['SED Shipment','USD $25.00'],
            ],
            
            list2:[
                'Rate is based on shipments moving Airfreight (Miami-Antigua) and Seafreight via Ferry (Antigua-Montserrat). When the Ferry is not available, shipments will remain in Antigua waiting for reinstatement of Ferry service. Customers can request the Airfreight option at their own expense; Aeropost will support with airfreight rate negotiation and delivery of shipments to the airline.',
                'All documents with a tracking number will be processed as packages.',
                'Shipments that require any special handling, are subject to additional charges. Please quote with local office.',
                'Additional charges apply to shipments measuring over 1 meter on any side. Please quote with the local office.        ',
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
                ['0.50 lb','USD $6.95'], 
                ['1 lb','USD $9.00'], 
                ['Adicional lb','USD $4.00'],
            ],
            
            OtherCharges:[
                ['Otros cargos',''],
                ['Tarifa de manejo (cargo local)','$20.00EC'],
                ['Derechos e impuestos','Derechos e impuestos aplicables'],
                ['Entrega a domicilio (cargo local)','Cotización con agente local']
            ],
            table1:[
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
                ['Envío SED','USD $25.00'],
            ],
            
            list2:[
                'La tarifa se basa en envíos que se mueven por vía aérea (Miami-Antigua) y marítima a través de Ferry (Antigua-Montserrat). Cuando el Ferry no esté disponible, los envíos permanecerán en Antigua a la espera de la reposición del servicio de Ferry. Los clientes pueden solicitar la opción de carga aérea a su cargo; Aeropost apoyará con la negociación de tarifas de flete aéreo y entrega de envíos a la aerolínea.',
                'Todos los documentos con un número de seguimiento se procesarán como paquetes.',
                'Los envíos que requieran algún manejo especial, están sujetos a cargos adicionales. Cotice con la oficina local.',
                'Se aplican cargos adicionales a los envíos que miden más de 1 metro en cualquier lado. Cotice con la oficina local. ',
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
