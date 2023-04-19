<template>
    <div>
        
        <InformationVue :list="info.list1"/>

        <tableVue :list="info.table1" :hasHeader="false"/>
                
        <tableVue :list="info.packages" :hasHeader="true"/>

        <InformationVue :list="info.list2"/>

        <WarrantyVue/>

    </div>
  </template>

  <script>
  import tableVue from '@/components/rates/table.vue';
  import InformationVue from '@/components/rates/Information.vue';
  import WarrantyVue from '@/components/rates/Warranty.vue';
  import { mapState } from 'vuex';
  export default {
    name: 'BelizeRate',
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
                    'You can track your packages on our site at www.aeropost.com'
                ],
            table1:[
                ['Annual Membership', 'FREE'],
                ['Monthly Minimum', 'None'],
                ['Documents', 'USD$2.75 (minimum 4 oz.)']
            ],
            packages:[
                ['Packages','Rates(USD)'],
                ['1 lb.','USD$8.00'],
                ['2 lb.','USD$11.50'],
                ['3 lb.','USD$14.00'],
                ['Additional','USD$3.00'],
                ['Other Charges (USD)','']
            ],
            list2:[
                'All security documents with a tracking number will be treated as packages.',
                'Shipments that require any special handling, are subject to additional charges.'
            ],           
        },
        es_info:{
            list1:[
                'Cobramos por el peso, NO por el tamaño de su paquete.',
                'Puede devolver su correo no deseado y le acreditaremos su cuenta.',
                'Puede rastrear sus paquetes en nuestro sitio en www.aeropost.com'
            ],
            table1:[
                ['Membresía Anual', 'GRATIS'],
                ['Mínimo mensual', 'Ninguno'],
                ['Documentos', 'USD$2.75 (mínimo 4 oz.)']
            ],
            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['1 libra', 'USD $ 8,00'],
                ['2 libras', 'USD$11,50'],
                ['3 lb.','USD$14.00'],
                ['Adicional','USD$3.00'],
                ['Otros cargos (USD)','']
            ],
            list2:[
                'Todos los documentos de seguridad con un número de seguimiento serán tratados como paquetes.',
                'Los envíos que requieren algún manejo especial, están sujetos a cargos adicionales.'
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
