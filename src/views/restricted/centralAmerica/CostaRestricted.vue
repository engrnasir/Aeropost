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
        
        <tableVue :list="info.productsTable" :hasHeader="true" :colspan="2"/>
        <h3 class="heading" v-if="lang==='es'">
            Productos de Manejo Especial
        </h3>
        <h3 class="heading">
            {{ lang==='en'?'Defined as small quantities of personal use items.':'Definido como cantidades pequeñas de artículos de cuidado personal' }}
        </h3>
        <p class="snippet">
            {{ lang==='en'? 'THESE ITEMS INCLUDE BUT ARE NOT LIMITED TO:':'ESTOS ARTÍCULOS TAMBIÉN ESTÁN RESTRINGIDOS POR LA ADUANA LOCAL Y REQUIEREN PERMISOS ADICIONALES. ESTOS ARTÍCULOS INCLUYEN PERO NO ESTÁN LIMITADOS A:' }}
        </p>
        <tableVue :list="info.productsTable1" :hasHeader="true" :colspan="2"/>

        <p class="snippet" v-if="lang==='en'">These products require special handling and will be shipped as "consolidated goods" every 15 days. An additional fee of ₵6000 will be charged per package (in addition to the regular freight and customs handling fees).</p>
        <p class="snippet" v-else>Estos productos requieren un manejo especial que tiene un costo de ¢6000.00 por paquete (adicional al costo normal de transporte y nacionalización)  y viajan de forma consolidada cada 15 días.</p>

        <h3 class="heading" v-if="lang==='es'">
            Restringidos por la Aduana Local
        </h3>
        <h3 class="heading">
            {{ lang==='en'?'Restricted':'Restringidos'}}
        </h3>
        <p class="snippet" v-if="lang==='en'">THESE ITEMS HAVE CERTAIN LOCAL RESTRICTIONS OR MAY NEED SPECIAL PERMITS TO ENTER THE COUNTRY. PLEASE CONTACT CUSTOMER SERVICE FOR MORE INFORMATION.</p>
        <p class="snippet" v-else>ESTOS ARTÍCULOS PUEDEN TENER ALGÚN TIPO DE RESTRICCIÓN LOCAL O NECESITAN PERMISOS ESPECIALES PARA ENTRAR AL PAÍS. POR FAVOR CONTACTA A SERVICIO AL CLIENTE PARA MÁS INFORMACIÓN</p>
        
        <h3 class="heading">
            {{ lang==='en'?'Require Permit from Ministerio de Salud ':'Requieren permiso del Ministerio de Salud '}}
        </h3>
        <tableVue :list="info.productsTable2" :hasHeader="true" :colspan="2"/>

        <InformationVue :title="info.list1Title" :list="info.list1" />
        
        
        <h2 class="main-heading">
            {{ lang==='en'?'Products that and Require Important Permits from Various Governmental Entities.':'Productos que requieren Permiso de Importación por Diversas Entidades Gubernamentales' }}
        </h2>
        <h3 class="heading">
            {{ lang==='en'?'Aerocasillas DOES NOT process import permits in the following cases:':'Aerocasillas NO realiza el permiso de importación para los siguientes casos:' }}
        </h3>
        <tableVue :list="info.productsTable3" :hasHeader="true" :colspan="2"/>

        <InformationVue :list="info.list2" />
        
        <h3 class="heading">
            {{ lang==='en'?'These products require import authorization from the Ozone Dependence':'Requieren autorización de importación de la Comisión Gubernamental del'}}
        </h3>
        <h3 class="heading">
            {{ lang==='en'?'Governmental Commission: Ministry of Environment and Energy':'Ozono Dependencia: Ministerio de Ambiente y Energía.'}}
        </h3>
        <tableVue :list="info.productsTable4" :hasHeader="true" :colspan="2"/>


        
        <InformationVue :list="info.list3" />

        <p class="snippet" v-if="lang==='en'">
            The Ozone Technical Offices are located 75 meters west of Plaza González Víquez in front of Liceo de Costa Rica. Telephone (506) 2257-1839, email: <a href="mailto:diseca@minae.go.cr" class="text-bold">diseca@minae.go.cr</a>.
        </p>
        <p class="snippet" v-else>
            La oficina Técnica del Ozono, se encuentran ubicadas 75 metros al oeste de Plaza González Víquez, frente al Liceo de Costa Rica. Teléfono 257-1839, correo electrónico: <a href="mailto:diseca@minae.go.cr" class="text-bold">diseca@minae.go.cr</a>.
        </p>


        <h3 class="heading">
            {{ lang==='en'?'Require Permit from the "Ministerio de Gobernación y Policía"':'Requieren permiso del Ministerio de Gobernación y Policía'}}
        </h3>
        <tableVue :list="info.productsTable5" :hasHeader="true" :colspan="2"/>
        <InformationVue :list="info.list4" />
        



        <h3 class="heading">
            {{ lang==='en'?'Require Permit from Ministerio de Agricultura y Ganadería':'Requieren permiso del Ministerio de Agricultura y Ganadería'}}
        </h3>
        <tableVue :list="info.productsTable6" :hasHeader="true" :colspan="2"/>
        <InformationVue :list="info.list5" />

        <h3 class="heading">
            {{ lang==='en'?'Used or Damaged Products, Purchased as Replacement Parts':'Productos Usados o Dañados (Adquiridos para repuestos)'}}
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
            Para el desalmacenaje de ropa usada se debe realizar un trámite de fumigación (DE 17624: Reglamento Vigilancia Epidemiológica y Control Enfermedades Transmisibles) el cual Aerocasillas <b>NO tramita <i>*por lo que es responsabilidad del cliente tramitarlo con una Agencia Aduanal de su preferencia. </i> *No se aceptarán reclamos por paquetes de este tipo.</b>
            <br><br>
            <b>El bodegaje NO está incluido,</b> por lo que el cliente deberá cancelarlo directamente al Almacén Fiscal.
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
                ['Products'],
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
                ['Products'],
                ['Aerosol cans',	'Nail polish'],
                ['Beauty powders',	'Aerosol cans'],
                ['Beauty products',	'Oil candles'],
                ['Creams',	'Perfumes'],
                ['Gels',	'Sunblock'],
                ['Non-corrosive cleaning solutions,	Sweetener', 'food flavoring and coloring products'],
                ['Mouthwash', 'Car Shocks'],
            ],

            productsTable2:[
                    ['Productos'],
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
                ['Productos'],
                ['Llantas y neumáticos','	Tabaco en polvo para hacer cigarrillos*'],
                ['Cigarillos electrónicos con cartuchos de reposición o esencias*	','Tabaco en cigarillos*'],
            ],
            list2:[
                'Aerocasillas* <b><i>NO realiza el trámite de estos permisos por lo que es responsabilidad del cliente tramitarlo con una Agencia Aduanal de su preferencia.</i> *No se aceptarán reclamos por paquetes de este tipo.</b>',
                'El bodegaje NO está incluido, por lo que el cliente deberá cancelarlo directamente al Almacén Fiscal.',
                '<i>*Requieren pago a productos de TABACO LEY 9028 (entero que se paga al gobierno) *</i>',
            ],

            productsTable4:[
                ['Productos'],
                ['Refrigeradoras	','Aires acondicionados'],
            ],
            list3:[
                'Aerocasillas <b>NO tramita</b> este permiso por lo que es responsabilidad del cliente tramitarlo con una Agencia Aduanal de su preferencia. No se aceptarán reclamos por paquetes de este tipo.',
                'El bodegaje <b>NO *está incluido,*</b> por lo que el cliente deberá cancelarlo directamente al Almacén Fiscal.',
            ],

            productsTable5:[
                ['Productos'],
                ['Pistolas y accesorios para CO2','	Pistolas y accesorios para paintball'],
                ['Pistolas de bengala y de señales de humo','	Herramientas punzo cortantes como ballestas y arcos que no sean para deporte'],
                ['Armas y accesorios de electroshock',''],
            ],
            list4:[
                'Aerocasillas NO realiza el trámite de estos permisos por lo que es responsabilidad del cliente tramitarlo con una Agencia Aduanal de su preferencia.* No se aceptarán reclamos por paquetes de este tipo*.',
                '<b>El bodegaje NO está incluido</b>, por lo que el cliente deberá cancelarlo directamente al Almacén Fiscal.',
            ],

            productsTable6:[
                ['Productos'],
                ['Madera	','Semillas'],
                ['Pieles y productos de origen animal	','Plantas'],
                ['Productos y accesorios veterinarios	','Productos y accesorios para agricultura'],
                ['Productos para uso animal','	Productos lácteos'],
                ['Café en grano','	Harina'],
            ],
            list5:[
                'Aerocasillas NO realiza el trámite de estos permisos por lo que es responsabilidad del cliente tramitarlo con una Agencia Aduanal de su preferencia.* No se aceptarán reclamos por paquetes de este tipo*.',
                'Puede realizar sus consultas al Ministerio de Agricultura y Ganadería a los teléfonos 2299-4814 or 2299-4819.',
                '<b>El bodegaje NO está incluido,</b> por lo que el cliente deberá cancelarlo directamente al Almacén Fiscal.',
            ],

            list6:[
                'Cualquier artículo usado requiere un permiso del Ministerio de Salud el cual Aerocasillas NO TRAMITA *; por lo que es responsabilidad del cliente tramitarlo con una Agencia Aduanal de su preferencia. *No se aceptarán reclamos por paquetes de este tipo.',
                'El bodegaje <b>NO está incluido</b> por lo que el cliente deberá cancelarlo directamente al Almacén Fiscal.',
            ]



        },
        es_info:{
            productsTable:[
                ['Productos'],
                ['Cualquier producto flamable, corrosivo o explosivo	','Municiones, armas de fuego y parte de armas de fuego'],
                ['Cualquier artículo con alcohol como primer ingrediente	','Baterías que contengan productos quimicos o sean dangerous good'],
                ['Soluciones de limpieza	','Venenos'],
                ['Fuegos artificiales y pólvora','	Envases a presión'],
                ['Gas	','Fósforos'],
                ['Gas lacrimógeno o de pimienta	','Herramientas que funcionen con gas'],
                ['Encendedores	','Productos perecederos'],
                ['Piedras preciosas','	Psicotrópicos, precursores y sustancias controladas'],
                ['Productos naturales y vitamínicos','	Máquinas de tatuaje y accesorios'],
                ['Airbags	','Carbón'],
                ['Zapatos Usados	','Ropa interior usada'],
                ['Certificados de valor y acciones de cualquier tipo','	Manuscritos'],
                ['Cheques	','Títulos académicos, de propiedades o cualquier otro tipo'],
                ['Pasaportes o documentos de identificación','	Tarjetas de crédito o débito'],
                ['Dinero en efectivo y monedas	','Tarjetas de regalo'],
                ['Estampillas o tiquetes de cualquier tipo','	Mimbre real'],
             ],

            productsTable1:[
                ['Productos'],
                ['Desodorantes	','Esmalte de uñas'],
                ['Polvos de belleza	','Envases de aerosol'],
                ['Productos de belleza	','Candelas de aceite'],
                ['Cremas	','Perfumes'],
                ['Geles	','Bloqueador solar'],
                ['Soluciones de limpieza no corrosivas	','Endulzantes, saborizantes o colorantes de alimentos.'],
                ['Enjuague bucal','	Amortiguadores'],
                ['Hoverboards (Patineta eléctrica)',''],
             ],
            productsTable2:[
                ['Products'],
                ['Productos de Cuidado Personal  (ver pestaña arriba)	','Productos de belleza'],
                ['Perfumes','	Maquillaje'],
                ['Productos para el cabello	','Jabón'],
                ['Geles','	Productos en spray o que dañen la capa de ozono'],
                ['Productos comestibles	','Equipo médico'],
                ['Licor y bebidas','	Medicamentos'],
                ['Tintas y pinturas	','Pastillas suplemento vitamínico'],
                ['Masajeadores	','Jarabes'],
                ['Ampollas','	Supositorios'],
                ['Gel medicado	','Ungüentos'],
             ],

            list1Title:'NOTAS IMPORTANTES:',
            list1:[
                'Tiempo de trámite (incluyendo desalmacenaje): 15 días hábiles.',
                'Costo de trámite del permiso: USD $14.00 + IVA',
                'Para el trámite de medicamentos, pastillas, jarabes, supositorios, geles medicados y similares *, es requisito imprescindible que usted nos facilite una receta médica o epícrisis; *de lo contrario no se puede tramitar el permiso y no se aceptarán reclamos por paquetes de este tipo.',
                'Para el trámite de equipo médico es requisito que usted nos brinde una carta explicativa de uso del artículo, ya que el Ministerio de Salud solicita este documento para todos estos casos.',
                'Aerocasillas realiza el trámite de permiso de importación de sus paquetes ante el Ministerio de Salud cuando el valor total de las mercancías que requieran del permiso no exceda los $500.',
                'Para todo aquel trámite de permiso con un valor superior a $500, el importador deberá presentarse directamente en la Ventanilla Única de Comercio del Ministerio de Salud para solicitar el permiso de importación.',
                'Embarques en los cuales uno de los productos requiera un permiso y este embarque no venga en cajas separadas, se debe primero tramitar el permiso requerido, posteriormente, se realiza el proceso de nacionalización del producto. De no ser aprobado el permiso TODO su contenido quedara en abandono según el proceso estipulado por aduanas.',
                'Si el permiso es rechazado, usted será informado mediante su sistema MyAero del motivo del rechazo por parte del Ministerio de Salud (Aerocasillas le informara de los pasos a seguir en caso que esta situación se presente).',
                'El costo del trámite del permiso será igualmente aplicado. <a href="http://www.ministeriodesalud.go.cr/empresas/importacion/index.htm" class="text-blue">Guía rápida para importar alimentos, medicamentos y cosméticos</a>.  Los servicios  de transporte y costo de trámite del permiso deben ser cancelados de la forma habitual.',
                '<b>IMPORTANTE:</b> Aerocasillas no podrá aceptar reclamos por este tipo de situaciones fuera de nuestro control, ya que como Auxiliar de la función pública debe acatar las regulaciones estipuladas por aduana. Ofrecemos disculpas por cualquier inconveniente que esta regulación  le ocasione.',
                'Recuerde que <b>Aerocasillas no cobra bodegaje por los paquetes hasta los 30 días naturales</b>. Transcurrido ese tiempo, el cliente deberá cancelar los costos de bodegaje ($50 en adelante) directamente al Almacén Fiscal.',
             ],

            productsTable3:[
                 ['Productos'],
                 ['Neumáticos', 'Tabaco en polvo para hacer cigarrillos*'],
                 ['Cigarrillos electrónicos con esencias o cartuchos de repuesto*', 'Tabaco en cigarrillos*'],
             ],
            list2:[
                 "Aerocasillas* <i>NO</i>* <b>tramita</b> permisos y es responsabilidad del cliente tramitar los permisos a través de la agencia aduanal de su elección. No se tramitarán reclamos por dichos productos.",
                 'Almacenamiento* NO incluido*, el cliente debe pagar tasas al Depósito Fiscal.',
                 'Aranceles aplicados a estos productos según la Ley del Tabaco 9028 (derechos gubernamentales)',
             ],

            productsTable4:[
                ['Productos'],
                ['Refrigeradores','Aire acondicionado'],
            ],
            list3:[
                "Aerocasillas <b>NO</b> tramita permisos y es responsabilidad del cliente tramitar los permisos a través de la agencia aduanal de su elección. No se tramitarán reclamaciones por este tipo de productos.",
                "El almacenaje <b>NO está incluido</b>, el cliente deberá abonar tasas al Depósito Fiscal.",
            ],

            productsTable5:[
                ['Productos'],
                ['Pistolas eléctricas y accesorios','Pistolas de paintball y accesorios'],
                ['Armas y accesorios que funcionan con CO2','Herramientas afiladas como ballestas y arcos que no están relacionadas con el deporte.'],
                ['Armas de electrochoque y accesorios',''],
            ],
            list4:[
                'Aerocasillas <b>NO</b> realiza el trámite de permisos y es su responsabilidad tramitarlo con la agencia aduanal de su elección.* No se permiten reclamos por bultos para este tipo de bultos.*',
                '<b>Los gastos de almacenaje NO están incluidos</b>, el cliente deberá pagar los gastos de almacenaje al Depósito Fiscal.',
            ],

            productsTable6:[
                 ['Productos'],
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
