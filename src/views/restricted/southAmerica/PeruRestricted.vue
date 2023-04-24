<template>
    <div>
        <h2 class="main-heading" v-html="info.heading1"></h2>
        <h2 class="heading" v-html="info.heading2"></h2>
        <p class="snippet" v-html="info.desc1"></p>
        <table-vue :list="info.products1" :hasHeader="true"/>

        <h2 class="main-heading" v-html="info.heading3"></h2>
        <p class="snippet" v-html="info.desc2"></p>

        <div class="mb-5" v-for="(item, i) in info.sections" :key="i">
            <h2 class="heading" v-html="item.heading"></h2>
            <p class="snippet" v-html="item.description"></p>
        </div>

        <h2 class="heading">
            {{ lang==='en'?'Attention:':'Atención:' }}
        </h2>
        <information-vue :list="info.list" />
        
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'PeruRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            heading1:'Forbidden Products',
            heading2:'PRODUCTS PROHIBITED FOR IMPORT',
            heading3:'PRODUCTS RESTRICTED FOR IMPORT',
            desc1:'THE FOLLOWING PRODUCTS ARE COMPLETELY PROHIBITED AND CANNOT ENTER PERU VIA COURIER SERVICE.',
            products1:[
                ['Spare parts and/or accessories used for motor vehicles','	Articles considered part of cultural heritage'],
                ['Used clothing and footwear	','Drugs / Narcotics'],
                ['Explosive Products','	Value certificates, checks '],
                ['Cash and coins	','Live animals'],
                ['Jewels and precious metals','	Leathers and furs'],
                ['Feeding bottles and pacifiers for babies	 ',''],
            ],

            sections:[
                {
                    heading:'PRODUCTS RESTRICTED FOR IMPORT',
                    description:'An import permit issued by the competent authority is required.'
                },
                {
                    heading:'Entity: PRODUCE',
                    description:`
                    Cooling, freezing and refrigeration equipment, provided that they use greenhouse gases and damage the ozone layer (OTO)<br>
                    New tires<br><br>
                    Chemical goods and regulated products (DIQPF)
                    `
                },
                {
                    heading:'Entity: DIGEMID',
                    description:`
                    Orthodontic instruments<br>
                    Electric toothbrushes and their replacement<br>
                    Medical devices (glucose, pressure and body fat measuring tools, thermometers)<br>
                    Medical equipment and instruments in general<br>
                    Pharmaceuticals, vitamins in general<br>
                    Dietary supplements (proteins)<br>
                    Breast milk extractors<br>
                    Baby bottles, pacifiers, teethers<br>
                    Bandaids<br>
                    Medicated lotions, creams and shampoos<br>
                    Contact lenses<br>
                    Electric massagers<br>
                    Tattoo Machines<br>
                    Medicated lotions<br>
                    Instant Botox and other medicated rejuvenation products<br>
                    Makeup in general<br>
                    `
                },
                {
                    heading:'Entity: DIGESA',
                    description:`
                        Lots or collections of children's toys<br>
                        Packaged food and beverages intended for marketing<br>
                        School supplies in quantities intended for marketing<br>
                        Children's stickers<br>
                        All types of air fresheners<br>
                        Devices required to ensure safe application or ingestion of medication (eg,<br>
                        spoons for syrup medication)<br>
                        `
                }, 
                {
                    heading:'Entity: SUCAMEC',
                    description:`
                    Electric guns, CO2 guns, paintball guns, BB guns, bengal guns, smoke signals and spare parts or accessories for guns<br>
                    Electro-shock weapons and accessories<br>
                    Ammunition of all kinds, firearms and any related articles<br>
                    `
                }, 
                {
                    heading:'Entity: MINCETUR',
                    description:`Slot machines, accessories and spare parts`
                }, 
                {
                    heading:'Entity: MINRE (Ministry of Foreign Relations)',
                    description:`Books, magazines, maps, notebooks, diskettes, CDs, videocasettes, blueprints or any other material that represents or references the limits and borders of Peru.`
                }, 
                {
                    heading:'Entity: SENASA',
                    description:`
                    Vegetable products<br>
                    Seeds or plants<br>
                    Animal products and medicines<br>
                    Insecticides, pesticides and fertilizers<br>
                    `
                }, 
                {
                    heading:'Entity: MTC',
                    description:`
                    Telecommunications products and equipment (Insitutionalization permit)<br>
                    Radioelectric transmission equipment (MTC authorization)<br>
                    - To verify merchandise exempt from MTC institutionalization permit, consult the list of Directorial Resolution No. 479-2016-MTC/27, published on Oct 21, 2016 in El Peruano local newspaper.
                    `
                }, 
                {
                    heading:'RESTRICTED PRODUCTS EXEMPT FOR PERSONAL USE',
                    description:`
                    They can be imported in minimum quantities and for strictly personal use, for which THE IMPORTER must sign an affidavit of personal use<br><br> 
                    Makeup, nail polish, perfumes and cologne<br>
                    Shampoos, conditioners and hair dye<br>
                    Over-the-counter skin creams (OTC)<br>
                    Packaged food and beverages<br>
                    Toys for children (maximum 3 units per product type, and maximum 10 for each purchase)<br>
                    School supplies (maximum 3 units per product type, and maximum 10 for each purchase)<br>  
                  `
                }, 
                {
                    heading:'PRODUCTS WITH SPECIAL HANDLING BY AEROPOST (DANGEROUS GOODS)',
                    description:`
                    Considered dangerous goods (consummer commodities) due to their nature: flammable, toxic substances, among others. For example:<br>
                    Perfumes, cologne<br>
                    Nail polish<br>
                    New shock absorbers for car<br><br>
                    These products are consolidated monthly, once the dangerous goods statement from Aeropost International has been issued.<br>
                    `
                }
            ],
            list:[
                "All orders or invoices must be in U.S. dollars ($). Otherwise, customs will apply customs (SUNAT) exchange rate at the moment the merchandise is declared, potentially varying original values.",
                "Package consolidation only occurs when they belong to the same purchase or invoice sent from the shipper as a multi piece shipment.",
                "To consign a shipment under an authorized user's name, both the purchase and invoice must be in the authorized user's name (shipping address).",
                "If you bring more than 3 shipments with a FOB value under USD $1000 each, within 1 year, you will be required an active and existing RUC to bring in the fourth shipment onward. Otherwise, SUNAT blocks the importer from their system to prevent them from importing using the DNI.",
            ]

        },
        es_info:{
            heading1:'Productos Prohibidos',
            heading2:'PRODUCTOS PROHIBIDOS PARA LA IMPORTACIÓN',
            heading3:'PRODUCTOS RESTRINGIDOS PARA LA IMPORTACIÓN',
            desc1:'LOS SIGUIENTES PRODUCTOS ESTÁN TOTALMENTE PROHIBIDOS Y NO PUEDEN INGRESAR AL PERÚ POR SERVICIO DE COURIER.',
            products1:[
                ['Repuestos y/o accesorios utilizados para vehículos de motor', 'Artículos considerados parte del patrimonio cultural'],
                ['Ropa y calzado usados', 'Drogas / Estupefacientes'],
                ['Productos explosivos', 'Valores certificados, cheques'],
                ['Efectivo y monedas', 'Animales vivos'],
                ['Joyas y metales preciosos', 'Cuero y pieles'],
                ['Biberones y chupetes para bebés',''],
            ],

            sections:[
                {
                    heading:'PRODUCTOS RESTRINGIDOS PARA LA IMPORTACIÓN',
                    description:'Se requiere un permiso de importación emitido por la autoridad competente.'
                },
                {
                    heading:'Entidad: PRODUCIR',
                    description:`
                        Equipos de frío, congelación y refrigeración, siempre que utilicen gases de efecto invernadero y dañen la capa de ozono (OTO)<br>
                        Neumáticos nuevos<br><br>
                        Mercancías químicas y productos regulados (DIQPF)
                    `
                },
                {
                    heading:'Entidad: DIGEMID',
                    description:`
                        Instrumentos de ortodoncia<br>
                        Cepillos de dientes eléctricos y su reemplazo<br>
                        Dispositivos médicos (herramientas de medición de glucosa, presión y grasa corporal, termómetros)<br>
                        Equipos e instrumentos médicos en general<br>
                        Productos farmacéuticos, vitaminas en general<br>
                        Suplementos dietéticos (proteínas)<br>
                        Extractores de leche materna<br>
                        Biberones, chupetes, mordedores<br>
                        Tiritas<br>
                        Lociones, cremas y champús medicinales<br>
                        Lentes de contacto<br>
                        Masajeadores eléctricos<br>
                        Máquinas de tatuar<br>
                        Lociones medicinales<br>
                        Botox instantáneo y otros productos de rejuvenecimiento medicados<br>
                        Maquillaje en general<br>
                    `
                },
                {
                    heading:'Entidad: DIGESA',
                    description:`
                        Lotes o colecciones de juguetes para niños<br>
                        Alimentos y bebidas envasados destinados a la comercialización<br>
                        Útiles escolares en cantidades destinadas a la comercialización<br>
                        Pegatinas infantiles<br>
                        Todo tipo de ambientadores<br>
                        Dispositivos necesarios para garantizar la aplicación o ingestión segura de medicamentos (p. ej.,<br>
                        cucharas para jarabe de medicación)<br>
                        `
                }, 
                {
                    heading:'Entidad: SUCAMEC',
                    description:`
                        Pistolas eléctricas, pistolas de CO2, pistolas de paintball, pistolas de aire comprimido, pistolas de bengala, señales de humo y repuestos o accesorios para armas<br>
                        Armas de electrochoque y accesorios<br>
                        Munición de todo tipo, armas de fuego y cualquier artículo relacionado<br>
                    `
                }, 
                {
                    heading:'Entidad: MINCETUR',
                    description:`Máquinas tragamonedas, accesorios y repuestos`
                }, 
                {
                    heading:'Entidad: MINRE (Ministerio de Relaciones Exteriores)',
                    description:`Libros, revistas, mapas, cuadernos, disquetes, CD, videocasetes, planos o cualquier otro material que represente o haga referencia a los límites y fronteras del Perú.`
                }, 
                {
                    heading:'Entidad: SENASA',
                    description:`
                    Productos vegetales<br>
                     Semillas o plantas<br>
                     Productos y medicamentos para animales<br>
                     Insecticidas, pesticidas y fertilizantes<br>
                    `
                }, 
                {
                    heading:'Entidad: MTC',
                    description:`
                    Productos y equipos de telecomunicaciones (Permiso de institucionalización)<br>
                     Equipos de transmisión radioeléctrica (autorización MTC)<br>
                     - Para verificar mercancías exentas del permiso de institucionalización del MTC, consultar el listado de la Resolución Directoral N° 479-2016-MTC/27, publicada el 21 de octubre de 2016 en el diario local El Peruano.
                    `
                }, 
                {
                    heading:'PRODUCTOS RESTRINGIDOS EXENTOS PARA USO PERSONAL',
                    description:`
                    Se pueden importar en cantidades mínimas y para uso estrictamente personal, para lo cual EL IMPORTADOR deberá firmar una declaración jurada de uso personal<br><br>
                     Maquillaje, esmaltes de uñas, perfumes y colonias<br>
                     Champús, acondicionadores y tintes para el cabello<br>
                     Cremas para la piel de venta libre (OTC)<br>
                     Alimentos y bebidas envasados<br>
                     Juguetes para niños (máximo 3 unidades por tipo de producto, y máximo 10 por cada compra)<br>
                     Material escolar (máximo 3 unidades por tipo de producto, y máximo 10 por cada compra)<br>
                  `
                }, 
                {
                    heading:'PRODUCTOS CON MANEJO ESPECIAL POR AEROPOST (MERCANCÍAS PELIGROSAS)',
                    description:`
                    Considerados mercancías peligrosas (mercancías de consumo) por su naturaleza: sustancias inflamables, tóxicas, entre otras. Por ejemplo:<br>
                     Perfumes, colonia<br>
                     Esmalte de uñas<br>
                     Amortiguadores para coche nuevos<br><br>
                     Estos productos se consolidan mensualmente, una vez emitida la declaración de mercancías peligrosas de Aeropost International.<br>
                    `
                }
            ],
            list:[
                "Todos los pedidos o facturas deben ser en dólares estadounidenses ($). De lo contrario, la aduana aplicará el tipo de cambio aduanero (SUNAT) al momento de declarar la mercancía, pudiendo variar los valores originales",
                "La consolidación de paquetes solo ocurre cuando pertenecen a la misma compra o factura enviada por el remitente como un envío de varias piezas",
                "Para consignar un envío a nombre de un usuario autorizado, tanto la compra como la factura deben estar a nombre del usuario autorizado (dirección de envío)",
                "Si traes más de 3 embarques con un valor FOB menor a USD $1000 cada uno, en el plazo de 1 año, se te requerirá un RUC activo y existente para traer el cuarto embarque en adelante. De lo contrario, la SUNAT bloquea al importador de su sistema para evitar que de importar con el DNI.",
            ]

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
