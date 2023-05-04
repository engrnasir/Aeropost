<template>
    <div>
        
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.OtherCharges"/>        
 
        <WarrantyVue/>

        <h2 class="main-heading">{{ info.customHandling.title }}</h2>
        <tableVue :list="info.customHandling.table"/>

        <InformationVue :list="info.list" />

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
            customHandling:{
                title:'Customs Handling',
                table:[
                    ['1 lb','	FREE'],
                    ['Over 1 lb	','$5.35 / pkg'],
                ]
            },
            list:[
                'Remember that you may calculate package duties using our online calculator or by contacting Customer Service.All packages entering the country are subject to inspection through Customs. To improve your shopping experience, keep in mind that Aeropost offers Package Brokerage Services, for only $30.00 EC per package. You may authorize Aeropost to automatically clear your packages through Customs by contacting Customer Service at <a href="mailto:brokerage.slu@aeropost.com" class="font-bold">brokerage.slu@aeropost.com</a> or calling (758) 452-3647.*',
                "(*) Automatic package clearing requires product invoices.",
            ]
        },
        es_info:{
            
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
            customHandling:{
                title:'Manejo Aduanal',
                table:[
                    ['1 lb','GRATIS'],
                    ['Más de 1 lb','$5.35/paquete.'],
                ]
            },
            list:[
                'Todos los paquetes que ingresan al país están sujetos a inspección por parte de Aduanas. Para mejorar tu experiencia de compra, Aeropost ofrece el servicio de Manejo Aduanal, por tan solo $30.00 EC por paquete. Contáctanos para solicitar que Aeropost realice automáticamente el manejo aduanal de tus paquetes, contactando a Servicio al Cliente al correo electrónico <a href="mailto:brokerage.slu@aeropost.com" class="font-bold">brokerage.slu@aeropost.com</a> o llamando al teléfono (758) 452-3647.*<br><br>Recuerda que puedes calcular los aranceles de tus paquetes utilizando nuestra calculadora en línea (poner link a calculadora) o contactando a Servicio al Cliente (poner link al chat).',
                "(*) Es necesario presentar las facturas de los productos para recibir el servicio de manejo aduanal automático.",
            ]
            
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
