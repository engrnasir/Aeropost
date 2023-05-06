<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }} <br> <br>
            {{ lang==='en'? 'Dangerous goods and others':'Mercancías peligrosas y otras' }} 
        </h2>
        <p class="snippet">
            {{ 
                lang==='en'?
                'PLEASE DO NOT SHIP THESE PRODUCTS TO YOUR MIAMI ADDRESS AS THEY WILL NOT BE TRANSPORTED AND YOU WILL BE RESPONSIBLE FOR COSTS OF DESTRUCTION OR RETURN TO SHIPPER.'
                :'NO ENVÍE ESTOS PRODUCTOS A SU DIRECCIÓN DE MIAMI YA QUE NO SERÁN TRANSPORTADOS Y USTED SERÁ RESPONSABLE DE LOS COSTOS DE DESTRUCCIÓN O DEVUELTA AL REMITENTE.'
            }} <br>
            {{ lang==='en'? 'AEROPOST WILL NOT TRANSPORT THESE ITEMS AND NO CLAIMS WILL BE ACCEPTED FOR THEM.':'AEROPOST NO TRANSPORTARÁ ESTOS ARTÍCULOS NI SE ACEPTARÁN RECLAMACIONES POR ELLOS.' }}
        </p>
        <tableVue :list="info.products" :hasHeader="true" :colspan="2"/>
        


        <h2 class="main-heading">
            {{ lang==='en'? 'Special Handling':'Manejo especial' }}
        </h2>
        <p class="snippet">
            {{ lang==='en'? 'Defined as small quantities of personal use items.':'Definido como pequeñas cantidades de artículos de uso personal.' }} <br>
            {{ 
                lang==='en'? 
                'Ten units of special handling products must first accumulate in Miami for these items to ship. Shipping may take 3 to 5 weeks. Additional charge per package: USD $5.00 + VAT.'
                :'Primero se deben acumular diez unidades de productos de manejo especial en Miami para que estos artículos se envíen. El envío puede tardar de 3 a 5 semanas. Cargo adicional por paquete: USD $5.00 + IVA.' 
            }}</p>
        <tableVue :list="info.products1" :hasHeader="true" :colspan="2"/>
        

        <h2 class="main-heading">
            {{ lang==='en'? 'Restricted by Local Customs':'Restringido por las Aduanas Locales' }}
        </h2>
        <p class="snippet">
            {{ lang==='en'? 'These products may be locally restricted or require special permits to enter the country. Please contact Customer Service for more information.':'Estos productos pueden estar restringidos localmente o requerir permisos especiales para ingresar al país. Póngase en contacto con el Servicio de atención al cliente para obtener más información.' }} <br>
            {{ lang==='en'? 'Processing requires an additional fee per package of USD $19.50 + VTA.':'El procesamiento requiere una tarifa adicional por paquete de USD $19.50 + VTA.' }} <br>
            {{ lang==='en'? 'Clearance processing takes 10 days after the product has entered the country.':'El proceso de despacho tarda 10 días después de que el producto haya ingresado al país.' }}
        </p>
        <tableVue :list="info.products2" :hasHeader="true" :colspan="2"/>

        <InformationVue :list="info.list1" />
        
        <h2 class="main-heading">TELCOR</h2>
        <p class="snippet">
            {{ 
                lang==='en'? 
                'Processing cost: USD $21.50. The following products require a TELCOR (Nicaraguan Institute of Telecommunications and Postal Services) permit:'
                :'Costo de procesamiento: USD $21.50. Los siguientes productos requieren un permiso de TELCOR (Instituto Nicaragüense de Telecomunicaciones y Correos):' 
            }}
        </p>
        <tableVue :list="info.products3" :hasHeader="true" :colspan="2"/>
        
        <InformationVue :list="info.list2" />
        
        <h2 class="main-heading">
            {{ lang==='en'?'Require a permit issued by the Forestry and Agriculture Department':'Requerir un permiso emitido por el Departamento Forestal y Agrícola' }}
        </h2>
        <tableVue :list="info.products4" :hasHeader="true" :colspan="2"/>
        
        <InformationVue :list="info.list3" />
        
        <h2 class="main-heading">
            {{ 
                lang==='en'?
                'Require a permit issued by the National Toxic Substance Control and Registration Commission'
                :'Requerir un permiso emitido por la Comisión Nacional de Control y Registro de Sustancias Tóxicas' 
            }}
        </h2>
        <tableVue :list="info.products5" :hasHeader="true"/>
        
        <InformationVue :list="info.list4" />

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'NicaraguaRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            products:[
                ['Products'],
                ['Any flammable, corrosive or explosive items	','Ammunitions and firearms'],
                ['Any item with alcohol listed as a first ingredient	','Wet-cell batteries'],
                ['Cleaning solutions',''],
                ['Fireworks	','Pressurized containers'],
                ['Gas','Matches'],
                ['Tear gas or pepper spray	','Gas-powered tools'],
                ['Lighters	','Perishables'],
                ['Gemstones','	Psychotropic substances, precursors and controlled substances'],
                ['Natural products and vitamins	','Manuscripts'],
                ['Value certificates and stock of any kind	','Checks'],
                ['Academic, property and other titles	','Passports and identification documents'],
                ['Credit or debit cards	','Cash and coins'],
                ['Gift cards	','Stamps or transportation tickets of any kind'],
            ],

            products1:[
                ['Products'],
                ['Deodorant (pressurized container)	','Nail polish'],
                ['Mouth wash	','Aerosol cans'],
                ['Beauty Products	','Oil candles'],
                ['Compressors	','Perfumes'],
                ['Gels	','Sunblock'],
                ['Non-corrosive cleaning solutions','Sweetner, food flavoring and coloring products'],
                ['Car shocks	','Alcohol-containing items'],
                ['Sunblock (pressurized container)	','Pressurized containers'],
                ['Hoverboards (electric skateboards)',''],
            ],
            products2:[
                ['Products <br> Require a permit issued by the Health Department'],
                ['Creams and cosmetics	','Medication'],
                ['Perfume	','Makeup and beauty products'],
                ['Hair products	','Soap'],
                ['Gels	','Skin products'],
                ['Edible products	','Toxic substances'],
                ['Food and beverages	','Medical equipment'],
                ['Sprays and ozone layer damaging products',''],
            ],
            list1:[
                'To learn more about how to request your product’s required permit, please contact:',
                'Nicaraguan Health Department. Address: West side of Colonia Primero de Mayo. Managua, Nicaragua | PBX: 505-2264-7630 | (505)2264-7730 | (505) 2289-4700 | Postal Sector: 15AB | PO Box: 107.',
            ],
            products3:[
                ['Products'],
                ['Cellphones','Tablets (including Kindles)'],
                ['Routers','Servers'],
                ['Smartwatches','Cellphone, tablet and router batteries'],
                ['CEllphone and table USB cables ','LAN port cards'],
                ['Bluetooth hands-free devices',''],
            ],
            list2:[
                'Items not listed above may not require the previously mentioned permit. You may email us your product link to have Aeropost process your query before TELCOR.',
                'To learn more about product permit requests please contact:',
                'TELCOR (Instituto Nicaragüense de Telecomunicación y Correo). Address: Bolivar Avenue, on the corner, diagonal to the Chancellor’s Office. Managua, Nicaragua. | PBX: (505) 2222-7350 | Fax: (505) 2222-7554 | Email: webmaster@telcor.gob.ni.',
            ],
            products4:[
                ['Products'],
                ['Wood	','Seeds'],
                ['Fur and animal origin products	','Plants'],
                ['Veterinary products and accessories	','Agriculture products and accessories'],
                ['Tobacco',''],
            ],
            list3:[
                "Aeropost <b> DOES NOT process these permits; therefore, it is the customer's responsibility to process the permit before the Forestry and Agriculture Department (MAGFOR, for its name in Spanish).</b> For more information, please call PBX: (505)-2276-0512/2276-0200 | Address: Km. 81/2, road to Masaya, Managua Nicaragua."
            ],
            products5:[
                ['Products'],
                ['All commercial and personal use chemicals.'],
            ],
            list4:[
                "Aeropost <b> DOES NOT process these permits; therefore, it is the customer's responsibility to process the permit before the National Toxic Substance Control and Registration Comission.</b> For more information, please call (505)-2228-2002 Ext. 11, 12 | Address: South side of the National Assembly (Asamblea Nacional), Managua."
            ]
        },
        es_info:{
            products:[
                ['Productos'],
                ['Cualquier artículo inflamable, corrosivo o explosivo', 'Municiones y armas de fuego'],
                ['Cualquier artículo con alcohol incluido como primer ingrediente', 'Baterías de celda húmeda'],
                ['Soluciones de limpieza',''],
                ['Fuegos artificiales','Contenedores presurizados'],
                ['Gasolina','Fósforos'],
                ['Gas lacrimógeno o gas pimienta', 'Herramientas a gas'],
                ['Mecheros','Perecederos'],
                ['Piedras preciosas', 'Sustancias psicotrópicas, precursores y sustancias controladas'],
                ['Productos naturales y vitaminas', 'Manuscritos'],
                ['Valor de certificados y acciones de cualquier clase', 'Cheques'],
                ['Títulos académicos, de propiedad y otros', 'Pasaportes y documentos de identificación'],
                ['Tarjetas de crédito o débito', 'Efectivo y monedas'],
                ['Tarjetas regalo', 'Sellos o títulos de transporte de cualquier clase'],
            ],

            products1:[
                ['Productos'],
                ['Desodorante (envase presurizado)','Esmalte de uñas'],
                ['Enjuague bucal', 'Latas de aerosol'],
                ['Productos de belleza ','Velas de aceite'],
                ['Compresores','Perfumes'],
                ['Gels','Bloqueador solar'],
                ['Soluciones de limpieza no corrosivas','Productos edulcorantes, aromatizantes y colorantes alimentarios'],
                ['Choques de coche', 'Artículos que contienen alcohol'],
                ['Bloqueador solar (recipiente presurizado) ','Recipientes presurizados'],
                ['Hoverboards (monopatines eléctricos)',''],
            ],
            products2:[
                ['Productos <br> Requieren un permiso emitido por el Departamento de Salud'],
                ['Cremas y cosméticos', 'Medicamentos'],
                ['Perfume', 'Productos de maquillaje y belleza'],
                ['Productos para el cabello','Jabón'],
                ['Geles','Productos para la piel'],
                ['Productos comestibles', 'Sustancias tóxicas'],
                ['Alimentos y bebidas', 'Equipamiento médico'],
                ['Aerosoles y productos que dañan la capa de ozono',''],
            ],
            list1:[
                'Para obtener más información sobre cómo solicitar el permiso requerido de su producto, comuníquese con:',
                'Departamento de Salud de Nicaragua. Dirección: Costado Oeste de la Colonia Primero de Mayo. Managua, Nicaragua | PBX: 505-2264-7630 | (505)2264-7730 | (505) 2289-4700 | Sector Postal: 15AB | Apartado postal: 107.',
            ],
            products3:[
                ['Productos'],
                ['Teléfonos móviles','Tabletas (incluyendo Kindles)'],
                ['Enrutadores','Servidores'],
                ['Smartwatches','Baterías de móviles, tablets y routers'],
                ['Cables USB de celular y de mesa','Tarjetas de puerto LAN'],
                ['Dispositivos manos libres Bluetooth',''],
            ],
            list2:[
                'Los artículos no enumerados anteriormente pueden no requerir el permiso mencionado anteriormente. Puede enviarnos un correo electrónico con el enlace de su producto para que Aeropost procese su consulta antes que TELCOR.',
                'Para obtener más información sobre las solicitudes de permisos de productos, comuníquese con:',
                'TELCOR (Instituto Nicaragüense de Telecomunicaciones y Correo). Dirección: Avenida Bolívar esquina diagonal a la Cancillería. Managua, Nicaragua. | PBX: (505) 2222-7350 | Fax: (505) 2222-7554 | Correo electrónico: webmaster@telcor.gob.ni.',
            ],
            products4:[
                ['Productos'],
                ['Madera', 'Semillas'],
                ['Pieles y productos de origen animal', 'Plantas'],
                ['Productos y accesorios veterinarios', 'Productos y accesorios agrícolas'],
                ['Tabaco',''],
            ],
            list3:[
                "Aeropost <b> NO tramita estos permisos, por lo tanto, es responsabilidad del cliente tramitar el permiso ante el Ministerio Agropecuario (MAGFOR).</b> Para mayor información favor llamar al PBX: (505)-2276-0512/2276-0200 | Dirección: Km. 81/2, carretera a Masaya, Managua Nicaragua."
            ],
            products5:[
                ['Productos'],
                ['Todos los productos químicos comerciales y de uso personal.'],
            ],
            list4:[
                "Aeropost <b> NO tramita estos permisos, por lo tanto, es responsabilidad del cliente tramitar el permiso ante la Comisión Nacional de Control y Registro de Sustancias Tóxicas.</b> Para más información favor llamar al (505)-2228-2002 Ext . 11, 12 | Dirección: Costado Sur de la Asamblea Nacional, Managua"
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
    @apply text-blue mb-4;
}
</style>
