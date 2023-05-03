<template>
    <div>
        <h3 class="heading">
            {{ lang==='en'?'Dangerous goods and other restricted items':'Productos Prohibidos' }}
        </h3>
        <p class="snippet" v-if="lang==='en'">
            PLEASE DO NOT SHIP THESE PRODUCTS TO YOUR MIAMI ADDRESS AS THEY CANNOT BE SHIPPED TO YOUR COUNTRY AND YOU WILL NEED TO PAY FOR DESTRUCTION OR RETURN TO SHIPPER COSTS.
            <br><br> AEROCASILLAS WILL NOT TRANSPORT THESE ITEMS AND NO CLAIMS WILL BE ACCEPTED FOR THEM.
        </p>
        <p class="snippet" v-else>
            <b>Cualquier producto que en su listado de ingredientes contenga alcohol. Cualquier cantidad de producto explosivo o corrosivo</b>
            <br><br> POR FAVOR NO ENVÍES ESTOS PRODUCTOS A TU DIRECCIÓN EN MIAMI PUES NO PODRÁN SER TRANSPORTADOS Y DEBERÁS ASUMIR LOS COSTOS DE DESTRUCCIÓN O DEVOLUCIÓN AL PROVEEDOR.
        </p>
        
        <tableVue :list="info.productsTable" :hasHeader="true"/>
        
        <h3 class="heading">
            {{ lang==='en'?'Defined as small quantities of personal use items.':'Definido como pequeñas cantidades de artículos de uso personal.' }}
        </h3>
        <p class="snippet">
            {{ lang==='en'? 'THESE ITEMS INCLUDE BUT ARE NOT LIMITED TO:':'ESTOS ARTÍCULOS INCLUYEN PERO NO SE LIMITAN A:' }}
        </p>
        <tableVue :list="info.productsTable1" :hasHeader="true"/>
        
        <p class="snippet" v-if="lang==='en'">These products require special handling and will be shipped as "consolidated goods" every 15 days. An additional fee of ₵6000 will be charged per package (in addition to the regular freight and customs handling fees).</p>
        <p class="snippet" v-else>Estos productos requieren un manejo especial y se enviarán como "mercancías consolidadas" cada 15 días. Se cobrará una tarifa adicional de ₵ 6000 por paquete (además de las tarifas regulares de flete y manejo de aduanas).</p>

        <h3 class="heading">
            {{ lang==='en'?'Restricted':'Restringido'}}
        </h3>
        <p class="snippet" v-if="lang==='en'">THESE ITEMS HAVE CERTAIN LOCAL RESTRICTIONS OR MAY NEED SPECIAL PERMITS TO ENTER THE COUNTRY. PLEASE CONTACT CUSTOMER SERVICE FOR MORE INFORMATION.</p>
        <p class="snippet" v-else>ESTOS ARTÍCULOS TIENEN CIERTAS RESTRICCIONES LOCALES O PUEDEN NECESITAR PERMISOS ESPECIALES PARA INGRESAR AL PAÍS. PÓNGASE EN CONTACTO CON EL SERVICIO DE ATENCIÓN AL CLIENTE PARA OBTENER MÁS INFORMACIÓN.</p>
        
        <h3 class="heading">
            {{ lang==='en'?'Require Permit from Ministerio de Salud ':'Requiere Permiso del Ministerio de Salud'}}
        </h3>
        <tableVue :list="info.productsTable2" :hasHeader="true"/>
        
        <InformationVue :title="info.list1Title" :list="info.list1" />
        
        
        <h2 class="main-heading">
            {{ lang==='en'?'Products that and Require Important Permits from Various Governmental Entities.':'Productos que y Requieren Permisos Importantes de Varias Entidades Gubernamentales.' }}
        </h2>
        <h3 class="heading">
            {{ lang==='en'?'Aerocasillas DOES NOT process import permits in the following cases:':'Aerocasillas NO tramita permisos de importación en los siguientes casos:' }}
        </h3>
        <tableVue :list="info.productsTable3" :hasHeader="true"/>

        <InformationVue :list="info.list2" />
        
        <h3 class="heading">
            {{ lang==='en'?'These products require import authorization from the Ozone Dependence':'Estos productos requieren autorización de importación de la Dependencia del Ozono'}}
        </h3>
        <h3 class="heading">
            {{ lang==='en'?'Governmental Commission: Ministry of Environment and Energy':'Comisión Gubernamental: Ministerio de Ambiente y Energía'}}
        </h3>
        <tableVue :list="info.productsTable4" :hasHeader="true"/>
        
        <InformationVue :list="info.list3" />

        <p class="snippet" v-if="lang==='en'">
            The Ozone Technical Offices are located 75 meters west of Plaza González Víquez in front of Liceo de Costa Rica. Telephone (506) 2257-1839, email: <a href="mailto:diseca@minae.go.cr" class="text-bold">diseca@minae.go.cr</a>.
        </p>
        <p class="snippet" v-else>
            Las Oficinas Técnicas de Ozono están ubicadas 75 metros oeste de la Plaza González Víquez frente al Liceo de Costa Rica. Teléfono (506) 2257-1839, correo electrónico: <a href="mailto:diseca@minae.go.cr" class="text-bold">diseca@minae.go.cr</a>.
        </p>


        <h3 class="heading">
            {{ lang==='en'?'Require Permit from the "Ministerio de Gobernación y Policía"':'Requerir Permiso del "Ministerio de Gobernación y Policía"'}}
        </h3>
        <tableVue :list="info.productsTable5" :hasHeader="true"/>
        <InformationVue :list="info.list4" />
        
        <h3 class="heading">
            {{ lang==='en'?'Require Permit from Ministerio de Agricultura y Ganadería':'Requiere Permiso del Ministerio de Agricultura y Ganadería'}}
        </h3>
        <tableVue :list="info.productsTable6" :hasHeader="true"/>
        <InformationVue :list="info.list5" />

        <h3 class="heading">
            {{ lang==='en'?'Used or Damaged Products, Purchased as Replacement Parts':'Productos usados o dañados, comprados como repuestos'}}
        </h3>
        <InformationVue :list="info.list6" />

        <p class="snippet">
            {{ lang==='en'? 'Aerocasillas cannot accept claims for these types of situations that are out of our control, given tha,t as public auxiliaries, we must abide by customs regulations. We apologize for any inconvenience this regulation may cause':'Aerocasillas no puede aceptar reclamos por este tipo de situaciones que escapan a nuestro control, ya que como auxiliares públicos debemos acatar las normas aduaneras. Pedimos disculpas por las molestias que esta normativa pueda causar' }}
        </p>


        <h3 class="heading">
            {{ lang==='en'?'Used Clothing':'Ropa usada'}}
        </h3>

        <p class="snippet" v-if="lang==='en'">
            For clearance of used clothing, a complete fumigation procedure must be carried out (DE 17624: Epidemiological Surveillance and Control of Infectious Diseases) Aerocasillas DOES NOT *process permits for these products and it is the customer's responsibility to process permits through the customs agency of their choice. *Claims for such packages shall not be accepted.
            <br><br>
            Storage fees are NOT included; customer must pay storage fees to the Bonded Warehouse.
            <br><br>
            NIGHT MODE
        </p>
        <p class="snippet" v-else>
            Para el despacho de ropa usada se debe realizar un procedimiento completo de fumigación (DE 17624: Vigilancia Epidemiológica y Control de Enfermedades Infecciosas) Aerocasillas NO *tramita permisos para estos productos y es responsabilidad del cliente tramitar permisos a través de la agencia de aduanas de su elección. *No se aceptarán reclamaciones por dichos paquetes.
            <br><br>
            Las tarifas de almacenamiento NO están incluidas; el cliente debe pagar las tasas de almacenamiento en el Depósito Fiscal.
            <br><br>
            MODO NOCTURNO
        </p>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'CostaRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            productsTable:[
                ['Products',''],
                ['Any flammable, corrosive or explosive item', 'Ammunition, firearms and firearm parts'],
                ['Any item with alcohol listed as its first ingredient','Wet-cell batteries'],
                ['Cleaning solutions','	Poisons'],
                ['Fireworks','	Pressure containers'],
                ['Gas','Matches'],
                ['Tear gas or pepper spray','	Gas powered tools'],
                ['Lighters','	Perishables'],
                ['Gemstones or Precious stones','	Psychotropic substances, precursors and controlled substances'],
                ['Natural products and vitamins','	Tattoo machines and accessories'],
                ['Airbags','Coal'],
                ['Used',' Shoes'],
                ['Used',' Underwear'],
                ['Certificates of value and shares of any kind','Manuscripts'],
                ['Checks','Academic, property or any other type of degrees or titles'],
                ['Passports or identification documents	','Credit or debit cards'],
                ['Cash and coins',	'Gift cards'],
                ['Stamps or tickets of any kind','	Real wicker'],
            ],

            productsTable1:[
                ['Products',''],
                ['Aerosol cans',	'Nail polish'],
                ['Beauty powders',	'Aerosol cans'],
                ['Beauty products',	'Oil candles'],
                ['Creams',	'Perfumes'],
                ['Gels',	'Sunblock'],
                ['Non-corrosive cleaning solutions,	Sweetener', 'food flavoring and coloring products'],
                ['Mouthwash', 'Car Shocks'],
            ],

            productsTable2:[
                    ['Productos',''],
                    ['Personal care products (see tab above)','Makeup and beauty products'],
                    ['Perfumes and fragances','Soap'],
                    ['Hair products','Spray products'],
                    ['Gels','Medical equipment'],
                    ['Edible products','Medications'],
                    ['Liquor and beverages','Vitamin supplement pills'],
                    ['Inks and paints','Syrups'],
                    ['Massagers','Suppositories'],
                    ['Ampoules, ointments','Medicated Gel'],
            ],

            list1Title:'IMPORTANT NOTES:',
            list1:[
                'Processing time (including customs clearance): 15 business days.',
                'Permit processing fee: USD $14.00 + IVA',
                'For the processing of drugs, pills, syrups, suppositories, medicated gels and the like, it is required that you provide a prescription, otherwise you will not be able to apply for a permit and claims for such packages will not be accepted.',
                'For the processing of medical equipment you must provide us with a letter describing the uses of the item, as herein requested by Ministerio de Salud.',
                'Aerocasillas processes Ministerio de Salud import permits when the total value of goods that require the permit do not exceed US$500. For permits of items over US$500 the importer must submit the request for the permit directly to Ministerio de Salud.',
                'For shipments in where one of the products requires a permit and the shipment does not come in separate boxes, the importer must first request the permit and subsequently request the nationalization of the full shipment. If the permit is denied, ALL contents in the shipment will be declared "abandoned" according to customs processes.',
                'If permission is not granted, you will be informed through MyAero regarding the reason for denial by Ministerio de Salud (Aerocasillas will advise on the steps to follow in case this situation arises).',
                'Costs of processing the permit will apply. <a href="http://www.ministeriodesalud.go.cr/empresas/importacion/index.htm" class="text-blue">Fast guide for importing food, drugs and cosmetic</a>. *Transport services and permit processing fee must be paid in the usual way. *',
                '<b>IMPORTANT</b>: Aerocasillas will not accept claims for this type of situations beyond their control, and as a civil servant, it must abide by regulations stipulated by customs. We apologize for any inconveniences this regulation may cause.',
                'Keep in mind <b>Aerocasillas does not charge storage fees for packages up to 30 calendar days</b>. After this time, the customer must pay storage fees (US$50 and up) directly to the Bonded Warehouse.',
            ],

            productsTable3:[
                ['Products',''],
                ['Tires	','Tobacco powder to make cigarettes*	 '],
                ['Electronic cigarettes with essences or replacement cartridges*	','Tobacco in cigarettes*'],
            ],
            list2:[
                "Aerocasillas* <i>DOES NOT</i>* <b>process</b> permits and it is the customer's responsibility to process permits through the customs agency of their choice. No claims will be processed for such products.",
                'Storage* is NOT included,* the customer must pay fees to the Bonded Warehouse.',
                'Duties applied to these products according to the Tobacco Law 9028 (government duties)',
            ],

            productsTable4:[
                ['Productos',''],
                ['Refrigerators','Air Conditioners'],
            ],
            list3:[
                "Aerocasillas <b>DOES NOT</b> process permits and it is the customer's responsibility to process permits through the customs agency of their choice. No claims will be processed for such products.",
                "Storage is <b>NOT included</b>, the customer must pay fees to the Bonded Warehouse.",
            ],

            productsTable5:[
                ['Products',''],
                ['Electric guns and accessories	','Paintball guns and accessories'],
                ['CO2-powered guns and accessories','Sharp tools such as crossbows and bows that are not sport related.'],
                ['Electroshock weapons and accessories',''],
            ],
            list4:[
                'Aerocasillas <b>NOT</b> perform the processing of permits and it is your responsibility to process it with a customs agency of your choice.* No claims are allowed for packages for this kind of package.*',
                '<b>Storage fees are NOT included</b>, the customer must pay storage fees to the Bonded Warehouse.',
            ],

            productsTable6:[
                ['Products',''],
                ['Wood','Seeds'],
                ['Fur and animal products','Plants'],
                ['Veterinary products and accessories','Agricultural products and accesories'],
                ['Products for animals','Dairy products'],
                ['Coffee beans','Flour'],
            ],
            list5:[
                "Aerocasillas <b>does not perform</b> the paperwork for these permits so it is the customer's responsibility to process the permit through a Customs Broker. <b>No claims will be accepted for such packages.</b>",
                "You can contact Ministerio de Agricultura y Ganadería for more information at (506) 2299-4814 or 2299-4819.",
                "<b>Warehousing fees are NOT included</b> so the customer must pay them directly to the Bonded Warehouse.",
            ],

            list6:[
                "Any used items require a permit from the 'Ministerio de Salud' which <b>Aerocasillas does not process</b>; so it is the customer's responsibility to process it through a Customs Broker. <b>No claims will be allowed for such packages.</b>",
                '<b>Warehousing fees are NOT included</b> so the customer must pay them directly to the Bonded Warehouse.',
            ]



        },
        es_info:{
            productsTable:[
                 ['Productos',''],
                 ['Cualquier artículo inflamable, corrosivo o explosivo', 'Municiones, armas de fuego y partes de armas de fuego'],
                 ['Cualquier artículo con alcohol incluido como su primer ingrediente', 'Baterías de celda húmeda'],
                 ['Soluciones de limpieza', 'Venenos'],
                 ['Fuegos artificiales',' Recipientes a presión'],
                 ['Gasolina','Fósforos'],
                 ['Gas lacrimógeno o gas pimienta', 'Herramientas a gas'],
                 ['Mecheros', 'Perecederos'],
                 ['Piedras preciosas o piedras preciosas', 'Sustancias psicotrópicas, precursores y sustancias controladas'],
                 ['Productos naturales y vitaminas', 'Máquinas y accesorios para tatuar'],
                 ['Airbags','Carbón'],
                 ['Usado',' Zapatos'],
                 ['Usado',' Ropa Interior'],
                 ['Certificados de valor y acciones de cualquier clase', 'Manuscritos'],
                 ['Cheques', 'Académicos, inmobiliarios o de cualquier otro tipo de grados o títulos'],
                 ['Pasaportes o documentos de identificación', 'Tarjetas de crédito o débito'],
                 ['Efectivo y monedas', 'Tarjetas regalo'],
                 ['Sellos o billetes de cualquier clase', 'Mimbre real'],
             ],

            productsTable1:[
                 ['Productos',''],
                 ['Latas de aerosol', 'Esmalte de uñas'],
                 ['Polvos de belleza', 'Latas de aerosol'],
                 ['Productos de belleza', 'Velas de aceite'],
                 ['Cremas', 'Perfumes'],
                 ['Gels', 'Bloqueador solar'],
                 ['Soluciones de limpieza no corrosivas, edulcorantes', 'productos colorantes y aromatizantes alimentarios'],
                 ['Enjuague bucal', 'Choques de coche'],
             ],

            productsTable2:[
                     ['Productos',''],
                     ['Productos de cuidado personal (ver pestaña arriba)','Productos de maquillaje y belleza'],
                     ['Perfumes y fragancias', 'Jabón'],
                     ['Productos para el cabello','Productos en spray'],
                     ['Gels','Equipamiento médico'],
                     ['Productos comestibles','Medicamentos'],
                     ['Licores y bebidas', 'Complementos vitamínicos'],
                     ['Tintas y pinturas','Jarabes'],
                     ['Masajeadores','Supositorios'],
                     ['Ampollas, ungüentos', 'Gel medicinal'],
             ],

            list1Title:'NOTAS IMPORTANTES:',
            list1:[
                 'Tiempo de procesamiento (incluido el despacho de aduana): 15 días hábiles.',
                 'Tarifa de tramitación de permisos: USD $14.00 + IVA',
                 'Para el procesamiento de medicamentos, pastillas, jarabes, supositorios, geles medicados y similares, se requiere que proporcione una receta médica, de lo contrario no podrá solicitar un permiso y no se aceptarán reclamos por dichos paquetes' ,
                 'Para la tramitación de equipos médicos deberá proporcionarnos una carta en la que se describan los usos del artículo, tal como lo solicita el Ministerio de Salud.',
                 'Aerocasillas tramita permisos de importación del Ministerio de Salud cuando el valor total de las mercancías que requieren el permiso no supere los US$500. Para permisos de partidas superiores a US$500 el importador deberá presentar la solicitud del permiso directamente al Ministerio de Salud.',
                 'Para envíos en los que uno de los productos requiera permiso y el envío no venga en cajas separadas, el importador deberá primero solicitar el permiso y posteriormente solicitar la nacionalización del envío completo. Si se deniega el permiso, TODO el contenido del envío será declarado "abandonado" de acuerdo con los procesos aduaneros.',
                 'Si no se otorga el permiso, se le informará a través de MyAero sobre el motivo de la denegación por parte del Ministerio de Salud (Aerocasillas le asesorará sobre los pasos a seguir en caso de presentarse esta situación).',
                 'Se aplicarán los gastos de tramitación del permiso. <a href="http://www.ministeriodesalud.go.cr/empresas/importacion/index.htm" class="text-blue">Guía rápida para importar alimentos, medicamentos y cosméticos</a>. *Los servicios de transporte y la tasa de tramitación de permisos deben abonarse de la forma habitual. *',
                 '<b>IMPORTANTE</b>: Aerocasillas no aceptará reclamos por este tipo de situaciones fuera de su control, y como funcionario deberá acatar las normas estipuladas por la aduana. Pedimos disculpas por los inconvenientes que esta regulación pueda causar.',
                 'Ten en cuenta que <b>Aerocasillas no cobra gastos de almacenaje de paquetes hasta 30 días naturales</b>. Después de este tiempo, el cliente debe pagar las tarifas de almacenamiento (US$50 en adelante) directamente al Depósito Fiscal.',
             ],

            productsTable3:[
                 ['Productos',''],
                 ['Neumáticos', 'Tabaco en polvo para hacer cigarrillos*'],
                 ['Cigarrillos electrónicos con esencias o cartuchos de repuesto*', 'Tabaco en cigarrillos*'],
             ],
            list2:[
                 "Aerocasillas* <i>NO</i>* <b>tramita</b> permisos y es responsabilidad del cliente tramitar los permisos a través de la agencia aduanal de su elección. No se tramitarán reclamos por dichos productos.",
                 'Almacenamiento* NO incluido*, el cliente debe pagar tasas al Depósito Fiscal.',
                 'Aranceles aplicados a estos productos según la Ley del Tabaco 9028 (derechos gubernamentales)',
             ],

            productsTable4:[
                ['Productos',''],
                ['Refrigeradores','Aire acondicionado'],
            ],
            list3:[
                "Aerocasillas <b>NO</b> tramita permisos y es responsabilidad del cliente tramitar los permisos a través de la agencia aduanal de su elección. No se tramitarán reclamaciones por este tipo de productos.",
                "El almacenaje <b>NO está incluido</b>, el cliente deberá abonar tasas al Depósito Fiscal.",
            ],

            productsTable5:[
                ['Productos',''],
                ['Pistolas eléctricas y accesorios','Pistolas de paintball y accesorios'],
                ['Armas y accesorios que funcionan con CO2','Herramientas afiladas como ballestas y arcos que no están relacionadas con el deporte.'],
                ['Armas de electrochoque y accesorios',''],
            ],
            list4:[
                'Aerocasillas <b>NO</b> realiza el trámite de permisos y es su responsabilidad tramitarlo con la agencia aduanal de su elección.* No se permiten reclamos por bultos para este tipo de bultos.*',
                '<b>Los gastos de almacenaje NO están incluidos</b>, el cliente deberá pagar los gastos de almacenaje al Depósito Fiscal.',
            ],

            productsTable6:[
                 ['Productos',''],
                 ['Madera','Semillas'],
                 ['Pieles y productos animales','Plantas'],
                 ['Productos y accesorios veterinarios','Productos y accesorios agrícolas'],
                 ['Productos para animales','Productos lácteos'],
                 ['Café en grano','Harina'],
             ],
            list5:[
                "Aerocasillas <b>no realiza</b> los trámites de estos permisos por lo que es responsabilidad del cliente tramitar el permiso a través de un Despachante de Aduana. <b>No se aceptarán reclamos por dichos bultos.</b>",
                "Puede comunicarse con el Ministerio de Agricultura y Ganadería para más información al (506) 2299-4814 o 2299-4819.",
                "<b>Las tasas de almacenaje NO están incluidas</b> por lo que el cliente deberá abonarlas directamente en el Depósito Fiscal.",
            ],

            list6:[
                 'Todos los artículos usados requieren de un permiso del Ministerio de Salud el cual <b>Aerocasillas no tramita</b>, por lo que es responsabilidad del cliente tramitarlo a través de un Despachante de Aduana. <b>No se admitirán reclamos por dichos paquetes.</b>',
                 '<b>Los gastos de almacenaje NO están incluidos</b> por lo que el cliente deberá abonarlos directamente en el Depósito Fiscal.',
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

<style scoped>
.snippet{
    @apply text-base font-light text-blue mb-4;
}
</style>
