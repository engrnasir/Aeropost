<template>
    <div>
        
        <h2 class="main-heading">{{ lang==='en'?'AIR':'AIRE' }}</h2>
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.handlingFee" :hasHeader="true" :colspan="2"/>

        <tableVue v-for="(table, i) in info.tables" :key="i" :list="table"/>
        
        <InformationVue :title="info.list2Title" :list="info.list2" />

        <tableVue :list="info.maritime" :hasHeader="true" :colspan="2"/>     

        <WarrantyVue/>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'TurksCaicosRate',
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
                ['0.5lb','USD $ 8.50'],
                ['1lb','USD $ 11.50'],
                ['Additional lb up to 30lb','USD $ 4.50'],
                ['Additional lb after 30lb','USD $ 3.75'],
                ['Other Charges (USD)',''],
            ],

            handlingFee:[
                ['Handling Fee'],
                ['Packages with value USD $499.00 and under','USD $10.00 per pkg.'],
                ['Packages with value between USD $500.00 and USD $999.00','USD $15.00 per pkg.'],
                ['Packages with value USD $1,000 and up','USD $20.00 per pkg.'],
            ],

            tables:[
                [
                    ['Multiple Package Shipments: Single purchase with several packages	 ',''],
                    ['First Package: Regular fees apply (Handling fee)',''],
                    ['Additional Packages within a Multiple Shipment','USD $3.50 per kg.'],
                ],
                [
                    ['Delivery',''],
                    ['Provo - Cooper Jack Bay/The Bight/Grace Bay:',''],
                    ['Packages 1-5 lb','USD $5.00'],
                    ['Additional lb','USD $0.50 cents per lb'],	
                ],
                [
                    ['Provo - Other areas',''],
                    ['Packages 1-5 lb','USD $10.00'],
                    ['Additional lb','USD $1.00 per lb'],	
                ],
                [
                    ['North Caicos, South Caicos, Grand Turks',''],
                    ['Packages 1-5 lb','USD $6.50'],
                    ['Additional lb','USD $1.00 per lb'],
                ]
            ],
            
            list2Title:'Other Important Information:',
            list2:[
                'For Restricted shipments, <a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">click here</a> .',
                'We charge on weight NOT on size of your package. Limit 31 inches by any of its sides.',
                'You can track your packages on our site at <a href="http://www.aeropost.com/" class="text-blue">www.aeropost.com </a> ',
                'Duties apply to all imports. Due to hurricane events, certain goods are duty free. Please <a href="http://www.midireccioninteligente.com/2017/TCA2017/website/duty_free.html" class="text-blue">click here</a> to learn about those articles. An approved duty exemption form must be available before Customs Clearance; otherwise, regular tariff applies.',
                'Shipments that require any special handling are subject to additional charges.',
                'You can track your packages on our site at <a href="http://www.aeropost.com/" class="text-blue">www.aeropost.com</a> ',
                'We are always available via email <a href="mailto:serviceTCA@aeropost.com" class="text-blue">serviceTCA@aeropost.com</a>, Chatlive on our website, or toll-free at <a href="tel:(649)%20941-8185" class="text-blue">1 (649) 341-5299</a>.',
            ],
 
            maritime:[
                ['MARITIME'],
                ['<b>Package Rate (USD)</b>','Additional lb $1.00'],
                ['',''],
                ['Per Cu/Ft','USD $10.00 '],
                ['Minimum charge','USD $50.00'],
                ['Handling Fee','USD $10.00'],	
                ['',''],
                ['Freight Per Cu/Ft (150-300 CuFt)','$9.00'],
                ['Minimum charge (freight)','$1350.00'],
                ['Handling Fee','$25.00'],
                ['',''],
                ['Freight Per Cu/Ft (300 CuFt and up)','USD $5.70'],
                ['Minimum charge (freight)','USD $2400.00'],
                ['Handling Fee','USD $50.00'],
                ['',''],
                ['Insurance',''],
                ['If cargo has 0 declared value, minimum charge is','USD $1.60 for every $100.00 of declared value'],
                ['',''],
                ['First package','USD $3.00'],
                ['Each additional package','USD $1.50'],
            ]
        },
        es_info:{

            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0.5lb','USD $ 8.50'],
                ['1lb','USD $ 11.50'],
                ['lb adicional hasta 30lb', 'USD $ 4,50'],
                ['lb adicional después de 30 lb', 'USD $ 3,75'],
                ['Otros cargos (USD)',''],
            ],
            handlingFee:[
                ['Tasa de tramitación'],
                ['Paquetes con valor de USD $499.00 o menos','USD $10.00 por paquete'],
                ['Paquetes con valor entre USD $500.00 y USD $999.00','USD $15.00 por paquete'],
                ['Paquetes con valor de USD $1,000 en adelante','USD $20.00 por paquete'],
            ],
            tables:[
                [
                    ['Envíos de Paquetes Múltiples: Compra única con varios paquetes',''],
                    ['Primer paquete: se aplican tarifas regulares (tarifa de manejo)',''],
                    ['Paquetes Adicionales dentro de un Envío Múltiple','USD $3.50 por kg.'],
                ],
                [
                    ['Entrega',''],
                    ['Provo - Cooper Jack Bay/The Bight/Grace Bay:',''],
                    ['Paquetes 1-5 lb','USD $5.00'],
                    ['lb adicional', 'USD $0,50 centavos por libra'],
                ],
                [
                    ['Provo - Otras áreas',''],
                    ['Paquetes 1-5 lb','USD $10.00'],
                    ['lb adicional','USD $1.00 por lb'],
                ],
                [
                    ['Caicos del Norte, Caicos del Sur, Gran Turca',''],
                    ['Paquetes 1-5 lb','USD $6.50'],
                    ['lb adicional','USD $1.00 por lb'],
                ]
            ],
            
            list2Title:'Otra información importante:',
            list2:[
                'Para envíos restringidos, <a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">haga clic aquí</a> .',
                'Cobramos por el peso, NO por el tamaño de su paquete. Límite de 31 pulgadas por cualquiera de sus lados.',
                'Puede rastrear sus paquetes en nuestro sitio en <a href="http://www.aeropost.com/" class="text-blue">www.aeropost.com </a> ',
                'Los aranceles se aplican a todas las importaciones. Debido a los huracanes, ciertos productos están libres de impuestos. <a href="http://www.midireccioninteligente.com/2017/TCA2017/website/duty_free.html" class="text-blue">haga clic aquí</a> para conocer esos artículos. Un formulario de exención de impuestos aprobado debe estar disponible antes del despacho de aduana; de lo contrario, se aplica la tarifa regular.',
                'Los envíos que requieren un manejo especial están sujetos a cargos adicionales.',
                'Puede rastrear sus paquetes en nuestro sitio en <a href="http://www.aeropost.com/" class="text-blue">www.aeropost.com</a> ',
                'Siempre estamos disponibles a través del correo electrónico <a href="mailto:serviceTCA@aeropost.com" class="text-blue">serviceTCA@aeropost.com</a>, Chatlive en nuestro sitio web o llamando sin cargo al <a href="tel:(649)%20941-8185" class="text-blue">1 (649) 341-5299</a>.',
            ],
 
            maritime:[
                ['MARÍTIMO'],
                ['<b>Tarifa del paquete (USD)</b>','lb adicional $1,00'],
                ['',''],
                ['Por pie cúbico','USD $10,00'],
                ['Cargo mínimo','USD $50.00'],
                ['Tarifa de manejo','USD $10.00'],
                ['',''],
                ['Flete por Cu/Ft (150-300 CuFt)','$9.00'],
                ['Cargo mínimo (flete)','$1350.00'],
                ['Tarifa de manejo','$25.00'],
                ['',''],
                ['Flete por Cu/Ft (300 CuFt y más)','USD $5.70'],
                ['Cargo mínimo (flete)','USD $2400.00'],
                ['Tarifa de manejo','USD $50.00'],
                ['',''],
                ['Seguro',''],
                ['Si la carga tiene valor declarado 0, el cargo mínimo es','USD $1.60 por cada $100.00 de valor declarado'],
                ['',''],
                ['Primer paquete','USD $3.00'],
                ['Cada paquete adicional','USD $1.50'],
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
