<template>
    <div>

        <h2 class="main-heading" v-html="info.heading1"></h2>
        <p class="snippet" v-html="info.desc1"></p>
        <card-grid-vue :list="info.products1"/> 
        
        <h2 class="main-heading" v-html="info.heading2"></h2>
        <p class="snippet" v-html="info.desc2"></p>
        <information-vue :list="info.list1"/>
        
        <h2 class="main-heading" v-html="info.heading3"></h2>
        <p class="snippet" v-html="info.desc3"></p>
        <information-vue :list="info.list2"/>
        
        <h2 class="main-heading" v-html="info.heading4"></h2>
        <h2 class="heading" v-html="info.heading5"></h2>
        <p class="snippet" v-html="info.desc4"></p>
        <card-grid-vue :list="info.products2"/> 
        
        <h2 class="heading" v-html="info.heading6"></h2>
        <p class="snippet" v-html="info.desc5"></p>

        <h2 class="heading" v-html="info.heading7"></h2>
        <p class="snippet" v-html="info.desc6"></p>

        <h2 class="heading" v-html="info.heading8"></h2>
        <p class="snippet" v-html="info.desc7"></p>

        <h2 class="heading" v-html="info.heading9"></h2>
        <p class="snippet" v-html="info.desc8"></p>

        <h2 class="heading" v-html="info.heading10"></h2>
        <p class="snippet" v-html="info.desc9"></p>

        <h2 class="heading" v-html="info.heading11"></h2>
        <p class="snippet" v-html="info.desc10"></p>


    </div>
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import CardGridVue from '@/components/restricted/CardGrid.vue';
import { mapState } from 'vuex';
export default {
  name: 'TrinidadRestricted',
  components:{
      tableVue,
      InformationVue,
      CardGridVue
  },
  data(){
    return{
        en_info:{
            heading1:'Forbidden Products',
            desc1:`
            <b>These are defined as any quantity of flammable, explosive or corrosive material.</b><br><br>
            THE FOLLOWING ITEMS ARE RESTRICTED BY EITHER THE FAA, US CUSTOMS, AEROPOST, OR BY TRINIDAD AND TOBAGO.
            `,
            products1:[
                {img:'Ammunition.png', title:'Ammunition, firearms and firearm parts'},
                {img:'tear-gas.png', title:'Lighters'},
                {img:'item-with-alcohol.png', title:'Any item with alcohol listed as its first ingredient'},
                {img:'matches(1).png', title:'Matches'},
                {img:'cleaning-solutions.png', title:'Cleaning solutions'},
                {img:'car-shocks.png', title:'Car shocks'},
                {img:'Firecrackers.png', title:'Fireworks'},
                {img:'pressure-containers(1).png', title:'Pressure containers'},
                {img:'gas-poisons(1).png', title:'Gas, poisons'},
                {img:'tear-gas.png', title:'Tear gas or pepper spray'},
                {img:'gas-powered.png', title:'Gas - powered tools'},
                {img:'wet-cell-batteries.png', title:'Wet-cell batteries'},                
            ],

            heading2:'Processing Fees:',
            desc2:'A third party inspects items classified as Dangerous Goods. The cost of preparing the paperwork varies from product to product, depending on the time and quantity of paperwork required. The minimum charges incurred for processing these items are:',

            list1:[
                'US $150.00 minimum, per category of product (not per package)',
                'US $35.00 per box, only if the shipment needs to be repacked.'
            ],

            heading3:'Documents Required:',
            desc3:"The following documents are required for processing 'Dangerous Goods' items (additional documents might be required based on the product type. This will be determined upon receipt of the package.",
            list2:[
                "MSDS (Material Safety Data Sheet): this can be obtained from either the shipper or the manufacturer's website.",
                'Invoice of product'
            ],

            heading4:'Special Handling Product',
            heading5:'Consumer Commodity',
            desc4:'Items defined as small quantities of a hazardous material which is specially packaged and intended for personal use. Consumer Commodities are subject to regulations and must be registered with US Homeland Security.',
            products2:[
                {img:'aerosols.png', title:'Aerosol cans'},
                {img:'nail-polish.png', title:'Nail polish'},
                {img:'beauty-powders.png', title:'Beauty powders'},
                {img:'non-corrosive-cleaning-solutions.png', title:'Non-corrosive cleaning solutions'},
                {img:'beauty-products.png', title:'Beauty products'},
                {img:'oil-candles.png', title:'Oil candles'},
                {img:'creams.png', title:'Creams'},
                {img:'perfumes.png', title:'Perfumes'},
                {img:'deodorants.png', title:'Deodorants'},
                {img:'sunblock.png', title:'Sunblock'},
                {img:'gels.png', title:'Gels'},
                {img:'sweetener-food-flavoring.png', title:'Sweetener, food flavoring and coloring products'},
                {img:'mouthwash.png', title:'Mouthwash'},
                {img:'car-shocks.png', title:'Car Shocks'},
                {img:'hoverboards.png', title:'Hoverboards'},
            ],

            heading6:'Timeframes<br> Dangerous Goods:',
            desc5:'Our Miami processing center is required by law to process and ship packages classified as Dangerous Goods (HAZMAT) to the consignee within 14 calendars days from the date the package is received. Regulations also dictate, our Miami processing center must destroy unprocessed Dangerous Goods packages after the 14 calendar day period.',

            heading7:'Consumer Commodities:',
            desc6:'Packages that qualify as Consumer Commodities may be held in Miami for up to one week for processing and are usually released for manifest every Friday.',

            heading8:'Options available should the consignee refuse the service charges:<br>Abandonment or Destruction:',
            desc7:'US$25.00 minimum',

            heading9:'Return to Shipper:',
            desc8:'Some items with this classification may not be returned to the Shipper based on industry transportation regulations.',

            heading10:'Package retrieval:',
            desc9:'The customer must pay the Miami processing fee, which is based on the weight of the package, before the package can be released to the consignee or a third party contracted by the consignee at our Miami processing center.',

            heading11:'Restricted by Local Customs',
            desc10:`
                Are imports into Trinidad & Tobago restricted in any way?<br>
                Please review this link first <a href="http://www.customs.gov.tt/importing/importing-faqs" class="font-bold">www.customs.gov.tt/importing/importing-faqs</a><br><br>
                Please <a href="http://www.customs.gov.tt/importing/duties-and-payment" class="font-bold" >click here</a> to learn more about import taxes.<br><br>
                Don’t have a Commercial Invoice? Use the recommended <a href="http://aeropost.com/POS/en/Content/CustomInvoiceFormat">Customs Invoice Format</a>
            `,
        },
        es_info:{
            heading1:'Productos Prohibidos',
            desc1:`
            <b>Se definen como cualquier cantidad de material inflamable, explosivo o corrosivo.</b><br><br>
             LOS SIGUIENTES ARTÍCULOS ESTÁN RESTRINGIDOS POR LA FAA, US ADUANAS, AEROPOST O POR TRINIDAD Y TOBAGO.
            `,
            products1:[
                {img:'Ammunition.png', title:'Municiones, armas de fuego y piezas de armas de fuego'},
                {img:'tear-gas.png', title:'encendedores'},
                {img:'item-with-alcohol.png', title:'Cualquier artículo con alcohol listado como su primer ingrediente.'},
                {img:'matches(1).png', title:'Partidos'},
                {img:'cleaning-solutions.png', title:'Soluciones de limpieza'},
                {img:'car-shocks.png', title:'Amortiguadores de coche'},
                {img:'Firecrackers.png', title:'Fuegos artificiales'},
                {img:'pressure-containers(1).png', title:'Recipientes a presión'},
                {img:'gas-poisons(1).png', title:'gases, venenos'},
                {img:'tear-gas.png', title:'Gas lacrimógeno o gas pimienta'},
                {img:'gas-powered.png', title:'Herramientas a gasolina'},
                {img:'wet-cell-batteries.png', title:'Baterías de celda húmeda'},                
            ],

            heading2:'Tarifas de procesamiento:',
            desc2:'Un tercero inspecciona artículos clasificados como mercancías peligrosas. El costo de preparar el papeleo varía de un producto a otro, dependiendo del tiempo y la cantidad de papeleo requerido. Los cargos mínimos incurridos para procesar estos artículos son:',

            list1:[
                'US $150.00 mínimo, por categoría de producto (no por paquete)',
                'US$ 35,00 por caja, solo si es necesario volver a embalar el envío.'
            ],

            heading3:'Documentos requeridos:',
            desc3:"Se requieren los siguientes documentos para procesar artículos de 'mercancías peligrosas' (es posible que se requieran documentos adicionales según el tipo de producto. Esto se determinará al recibir el paquete.",
            list2:[
                "MSDS (hoja de datos de seguridad del material): se puede obtener en el sitio web del remitente o del fabricante.",
                'Factura de producto'
            ],

            heading4:'Producto de manejo especial',
            heading5:'Producto de consumo',
            desc4:'Artículos definidos como pequeñas cantidades de un material peligroso que está especialmente empaquetado y destinado para uso personal. Los productos de consumo están sujetos a regulaciones y deben estar registrados en el Departamento de Seguridad Nacional de EE. UU.',
            products2:[
                {img:'aerosols.png', title:'Latas de aerosol'},
                {img:'nail-polish.png', title:'Esmalte de uñas'},
                {img:'beauty-powders.png', title:'Polvos de belleza'},
                {img:'non-corrosive-cleaning-solutions.png', title:'Soluciones de limpieza no corrosivas'},
                {img:'beauty-products.png', title:'Productos de belleza'},
                {img:'oil-candles.png', title:'velas de aceite'},
                {img:'creams.png', title:'Cremas'},
                {img:'perfumes.png', title:'Perfumes'},
                {img:'deodorants.png', title:'Desodorantes'},
                {img:'sunblock.png', title:'Bloqueador solar'},
                {img:'gels.png', title:'Geles'},
                {img:'sweetener-food-flavoring.png', title:'Productos edulcorantes, aromatizantes y colorantes alimentarios'},
                {img:'mouthwash.png', title:'Enjuague bucal'},
                {img:'car-shocks.png', title:'Amortiguadores de coche'},
                {img:'hoverboards.png', title:'hoverboards'},
            ],

            heading6:'Plazos<br> Mercancías peligrosas:',
            desc5:'Nuestro centro de procesamiento de Miami está obligado por ley a procesar y enviar paquetes clasificados como mercancías peligrosas (HAZMAT) al destinatario dentro de los 14 días calendario a partir de la fecha de recepción del paquete. Las regulaciones también dictan que nuestro centro de procesamiento de Miami debe destruir los paquetes de mercancías peligrosas sin procesar después del período de 14 días calendario.',

            heading7:'Productos de consumo:',
            desc6:'Los paquetes que califican como productos básicos de consumo pueden retenerse en Miami hasta por una semana para su procesamiento y, por lo general, se liberan para el manifiesto todos los viernes.',

            heading8:'Opciones disponibles en caso de que el consignatario rechace los cargos por servicio:<br>Abandono o Destrucción:',
            desc7:'US$25.00 mínimo',

            heading9:'Devolución al remitente:',
            desc8:'Es posible que algunos artículos con esta clasificación no se devuelvan al Remitente según las normas de transporte de la industria.',

            heading10:'Recuperación de paquetes:',
            desc9:'El cliente debe pagar la tarifa de procesamiento de Miami, que se basa en el peso del paquete, antes de que el paquete pueda ser entregado al consignatario o a un tercero contratado por el consignatario en nuestro centro de procesamiento de Miami.',

            heading11:'Restringido por las Aduanas Locales',
            desc10:`
                ¿Las importaciones a Trinidad y Tobago están restringidas de alguna manera?<br>
                Por favor revise este enlace primero<a href="http://www.customs.gov.tt/importing/importing-faqs" class="font-bold">www.customs.gov.tt/importing/importing-faqs</a><br><br>
                Por favor <a href="http://www.customs.gov.tt/importing/duties-and-payment" class="font-bold" >haga clic aquí</a> para obtener más información sobre los impuestos de importación.<br><br>
                ¿No tienes Factura Comercial? Utilice el recomendado <a href="http://aeropost.com/POS/en/Content/CustomInvoiceFormat">Formato de Factura de Aduana</a>
            `,
        },
    }
  },
  computed:{
    ...mapState(['lang']),
    info(){return this.lang==='en'? this.en_info:this.es_info}
  }
  
}
</script>

<style scoped>
.snippet{
    @apply text-blue mb-4 text-[15px] leading-7 font-normal ;
}
</style>
