<template>
    <div>
        <p class="text-bold text-base mb-4 text-blue ">{{ info.effectiveDate }}</p>

        <InformationVue :list="info.list1" />
        
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.OtherCharges" :hasHeader="true"/>

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
  name: 'CaymanIslandRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue
  },
  data(){
    return{
        en_info:{
            effectiveDate:'Effective February, 2022.',
            list1:[
                'We charge on weight NOT on size of your package.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com.',
            ],

            packages:[
                ['Packages','Rates(USD)'],
                ['0.50 lb','$7.25'],
                ['1 lb','$8.95'],
                ['2 lb','$13.50'],
                ['3 lb','$18.30'],
                ['Addtional lb up to 30 lb','$4.95'],
                ['Addtional lb after 30 lb','$3.85'],
            ],
            
            OtherCharges:[
                ['Other charges',''],
                ['Handling Fee and processing fee','$7.00'],
                ['Pkg Tax / Customs handling, per pkg','$12.20'],
                ['',''],
                ['Consolidation requests',''],
                ['2nd package and up','$3.50'],
                ['Pkg Tax / Customs handling, per pkg','$7.32'],
                ['',''],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['',''],
                ['Seafreight (CID)',''],
                ['Seafreight Minimum charge: 1 CuFt','$10'],
                ['Seafreight Minimum charge: 2-3 CuFt','$25'],
                ['4 CuFt and higher, Per CuFt','$7.50'],
                ['',''],
                ['Handling & processing fee 1 - 50 CuFt','$10'],
                ['Handling & processing fee 51 - 100 CuF','$25'],
                ['Handling & processing fee 101 - 250 CuFt','$50'],
                ['Handling & processing fee 251 - 500 CuFt','$100'],
                ['Higher than 500 CuFt','Quote'],
                ['',''],
                ['Pkg Tax / Customs handling, per pkg','$6'],
                ['Consolidation, 2nd pkg and up','$3.50'],
                ['Single Bill of Lading','$75'],
                ['SED','$25'],
                ['Customs Brokerage, greater than 500 CuFt','$150'],
                ['Delivery','Quote'],
            ],

            title2:'Other important information:',
            list2:[
                'Cayman Islands applies Government packaging tax of $5.00CI and Government warehousing fee of $5.00CI per shipment.',
                'Duties applies to all imports.',
                'Home/Office Delivery: $5.00CI per package, Charge On Delivery (within Georgetown, Industrial Park and Seven Mile Beach). Other areas, please quote with Local Provider.',
                'Shipments that require any special handling, are subject to additional charges.',
                'We charge on weight NOT on size of your package. Limit 31 inches by any of its sides.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at <a href="https://aeropost.com/" class="text-blue">www.aeropost.com</a>',
                'We are always available through our email <a href="mailto:serviceGCM@aeropost.com" class="text-blue">serviceGCM@aeropost.com</a>, Chatlive at our website, or calling us free at <span class="text-blue">1 (866) 297-1191</span>',
            ],

        },
        es_info:{
            effectiveDate:'Efectivo febrero de 2022.',
            list1:[
                'Cobramos por el peso, NO por el tamaño de su paquete.',
                'Puede devolver su correo no deseado y le acreditaremos su cuenta.',
                'Puede rastrear sus paquetes en nuestro sitio en www.aeropost.com.',
            ],

            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['0,50 libras', '$7,25'],
                ['1 libra', '$8.95'],
                ['2 libras', '$13.50'],
                ['3 libras', '$18.30'],
                ['lb adicional hasta 30 lb', '$4.95'],
                ['lb adicional después de 30 lb', '$3.85'],
            ],
            
            OtherCharges:[
                 ['Otros cargos',''],
                 ['Tarifa de manejo y tarifa de procesamiento','$7.00'],
                 ['Impuestos por paquete/Manejo de aduanas, por paquete','$12.20'],
                 ['',''],
                 ['Solicitudes de consolidación',''],
                 ['Segundo paquete en adelante','$3.50'],
                 ['Impuestos por paquete/Manejo de aduanas, por paquete','$7.32'],
                 ['',''],
                 ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
                 ['',''],
                 ['Transporte marítimo (CID)',''],
                 ['Cargo mínimo de flete marítimo: 1 CuFt','$10'],
                 ['Cargo mínimo de flete marítimo: 2-3 CuFt','$25'],
                 ['4 pies cúbicos y más, por pie cúbico', '$7.50'],
                 ['',''],
                 ['Tarifa de manejo y procesamiento 1 - 50 CuFt','$10'],
                 ['Tarifa de manejo y procesamiento 51 - 100 CuF','$25'],
                 ['Tarifa de manejo y procesamiento 101 - 250 CuFt','$50'],
                 ['Tarifa de manejo y procesamiento 251 - 500 CuFt','$100'],
                 ['Más de 500 pies cúbicos','Cotización'],
                 ['',''],
                 ['Impuestos por paquete / Manejo de aduanas, por paquete','$6'],
                 ['Consolidación, segundo paquete en adelante','$3.50'],
                 ['Conocimiento de Embarque Único','$75'],
                 ['SED','$25'],
                 ['Agencia aduanal, mayor a 500 CuFt','$150'],
                 ['Entrega','Cotización'],
             ],

            title2:'Otra información importante:',
            list2:[
                'Islas Caimán aplica un impuesto de embalaje del gobierno de $ 5,00 CI y una tarifa de almacenamiento del gobierno de $ 5,00 CI por envío.',
                'Los aranceles se aplican a todas las importaciones.',
                'Entrega en casa/oficina: $5.00 CI por paquete, cargo contra entrega (dentro de Georgetown, Industrial Park y Seven Mile Beach). Otras áreas, favor cotizar con Proveedor Local.',
                'Los envíos que requieren algún manejo especial están sujetos a cargos adicionales.',
                'Cobramos por el peso, NO por el tamaño de su paquete. Límite de 31 pulgadas por cualquiera de sus lados.',
                'Puede devolver su correo no deseado y le acreditaremos su cuenta.',
                'Puede rastrear sus paquetes en nuestro sitio en <a href="https://aeropost.com/" class="text-blue">www.aeropost.com</a>',
                'Siempre estamos disponibles a través de nuestro correo electrónico <a href="mailto:serviceGCM@aeropost.com" class="text-blue">serviceGCM@aeropost.com</a>, chat en vivo en nuestro sitio web o llamándonos gratis a <span class="text-blue">1 (866) 297-1191</span>',
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
