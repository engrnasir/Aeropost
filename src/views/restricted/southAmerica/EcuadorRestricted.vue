<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }}
        </h2>
        <p class="snippet" v-html="info.desc1"></p>
        <table-vue :list="info.products1" :hasHeader="true"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Special Handling Products':'Productos de Manejo Especial' }}
        </h2>
        <p class="snippet" v-html="info.desc2"></p>
        <table-vue :list="info.products2" :hasHeader="true"/>
        <p class="snippet" v-html="info.desc3"></p>
        
        <h2 class="heading">
            {{ lang==='en'? '4x4 Rule':'Regla 4x4' }}
        </h2>
        <p class="snippet" v-html="info.desc4"></p>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Restricted by Local Customs':'Restringidos por Aduana Local' }}
        </h2>
        <h2 class="heading">
            {{ lang==='en'? 'CLOTHES':'ROPA' }}
        </h2>
        <p class="snippet" v-html="info.desc5"></p>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'EcuadorRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            desc1:`
                <b>The shipment of any product that contains alcohol as the main ingredient is prohibited, as well as any amount of explosive or corrosive material.</b><br><br>
                WE RECOMMEND THAT YOU ABSTAIN FROM SENDING THIS TYPE OF PRODUCTS TO YOUR ADDRESS IN MIAMI, SINCE THEY CANNOT BE TRANSPORTED AND YOU MUST ASSUME THE COSTS OF DESTRUCTION OR RETURN TO THE SUPPLIER.
            `,
            products1:[
                ['PRODUCTS',''],
                ['Jewelry of great value (does not include costume jewelery)', 'Weapons and ammunition'],
                ['Used clothing and footwear that do not apply to the 4 x 4 rule (4 kg or USD $400/3 units) ','Pornographic material'],
                ['Table salt', 'Wet batteries (containing hazardous chemicals or materials)'],
                ['Cooling Equipment','Raw Edible Products'],
                ['Non-prescription medicines, which do not apply to the 4x4 rule (4 kg or USD $400/3 units) ','Non-water-based inks and aerosol paints'],
                ['Live animals','Blisters'],
                ['Toxic, flammable or combustible, radioactive, explosive, gas, etc. ','Products for spraying'],
                ['Corrosives','Engines loaded with liquids (oils, gasoline, diesel, etc.)'],
                ['Fireworks and Gunpowder','Decoders or Signal Receivers'],
                ['Hoverboards (Electric Skateboard) ','Essences'],
                ['Cash','Liquors'],
                ['Used tires','Syrups'],
                ['Drugs and narcotics','Pamphlets and/or printed catalogues, considered advertising material'],
                ['Works of art','Seeds, plants, flowers and unprocessed wood'],
                ['Corpses or humans',''],
                ['Certificates of value and shares of any kind','Manuscripts'],
                ['Checks','Gemstones'],
                ['Passports or identification documents','Credit or debit cards'],
                ['Cash & Coins','Gift Cards'],
            ],


            desc2:`
                <b>Small amounts of personal care products are considered special handling items.</b><br><br>
                THESE ITEMS ARE ALSO RESTRICTED BY LOCAL CUSTOMS AND REQUIRE ADDITIONAL PERMITS. THESE ITEMS INCLUDE BUT ARE NOT LIMITED TO:
            `,
            products2:[
                ['Products ','If it exceeds the 4x4 rule** it is necessary'],
                ['Perfumes* ','Sanitary registration'],
                ['Make-up* ','Sanitary registration'],
                ['Non-commercial medicines* ','Sanitary registration'],
                ['Edible products* ','Sanitary registration'],
                ['Vitamin supplements* ','Sanitary registration'],
                ['Cell phones *** ',' for a natural person and have the IMEI code'],
                ['Dog and cat food', 'Import prohibited'],
            ],
            desc3:`
                *In cases where these products exceed the 4x4 rule, the corresponding taxes must be paid according to the type of merchandise.<br><br>
                <b>For the importation of perfumes, splashes, aerosols in general or any type of product with a spray dispenser, information must be requested from your purchasing advisor in Ecuador as it is considered dangerous merchandise since Aeropost prepares a special flight for its shipment .</b>
            `,

            desc4:`
                The 4x4 rule refers to packages that have any of the following characteristics:<br><br>
                <ol class="list-decimal ml-6 mb-5">
                    <li>Invoice value up to USD $400.00.</li>
                    <li>Package weight up to 4kg.</li>
                    <li>3 or less products with similar characteristics within the same package.</li>
                    <li>Packages that arrive on the same flight or mother guide for the same consignee and do not exceed 4x4</li>
                    <li>See the new Ecuadorian Customs Regulations here.</li>
                </ol>
                *** Resolution Nro-049-2015 entered into force on January 1, 2016. <br><br>
                Article 5.- Only one (1) new cell phone per fiscal year will be allowed to be imported through international postal traffic and expedited messaging or Courier through international passenger arrival halls, border crossings, or seaports, with charge to the identification document number of the natural person who imports the device.
            `,
            
            desc5:`
                Any natural person can import clothing within Category B or 4X4, making correct use of the annual import quota; that is, 5 quotas and USD $1,200, which must be fulfilled simultaneously. If one of these conditions is met before the other, you may make use of an additional annual quota for a single purchase or import, for a value of up to USD $500 and 20 kg, which will be declared in the specific item of this nature. <br><br>
                If an importer uses all the quotas assigned annually, his next import will require an INEN Certificate. If this document is not available, the package will be declared abandoned or mandatory reshipment, as appropriate.
            `

        },
        es_info:{
            desc1:`
                <b>Está prohibido el envío de cualquier producto que contenga alcohol como ingrediente principal, así como cualquier cantidad de material explosivo o corrosivo.</b><br><br>
                RECOMENDAMOS ABSTENERTE DE ENVIAR ESTE TIPO DE PRODUCTOS A TU DIRECCIÓN EN MIAMI, YA QUE NO PODRÁN SER TRANSPORTADOS Y DEBERÁS ASUMIR LOS COSTOS DE DESTRUCCIÓN O DEVOLUCIÓN AL PROVEEDOR.
            `,
            products1:[
                ['PRODUCTOS',''],
                ['Joyas de gran valor (no incluye bisutería)','	Armas y municiones'],
                ['Prendas de vestir y calzado usados que no apliquen a la regla 4 x 4 (4 kg o USD $400/3 unidades)	','Material pornográfico'],
                ['Sal de mesa	','Baterías húmedas (que contengan productos químicos o materiales peligrosos)'],
                ['Equipo de enfriamiento	','Productos comestibles sin procesar'],
                ['Medicinas sin receta, que no apliquen a la regla del 4x4 (4 kg o USD $400/3 unidades)	','Tintas y pinturas en aerosol que no sean a base de agua'],
                ['Animales vivos	','Ampollas'],
                ['Mercancías tóxicas, inflamables o combustibles, radiactivas, explosivos, gas, etc.	','Productos para aspersión'],
                ['Corrosivos	','Motores cargados de líquidos (aceites, gasolina, diesel, etc.)'],
                ['Fuegos artificiales y pólvora	','Decodificadores o receptores de señal'],
                ['Hoverboards (Patineta eléctrica)	','Esencias'],
                ['Dinero en efectivo	','Licores'],
                ['Neumáticos usados	','Jarabes'],
                ['Drogas y estupefacientes	','Folletos y/o catálogos impresos, considerados material publicitario'],
                ['Obras de arte	','Semillas, plantas, flores y madera no procesada'],
                ['Cadáveres o humanos	 ',''],
                ['Certificados de valor y acciones de cualquier tipo	','Manuscritos'],
                ['Cheques	','Piedras preciosas'],
                ['Pasaportes o documentos de identificación	','Tarjetas de crédito o débito'],
                ['Dinero en efectivo y monedas	','Tarjetas de regalo'],
            ],


            desc2:`
                <b>Se consideran artículos de manejo especial aquellas pequeñas cantidades de productos de cuidado personal.</b><br><br>
                ESTOS ARTíCULOS TAMBIéN ESTáN RESTRINGIDOS POR LA ADUANA LOCAL Y REQUIEREN PERMISOS ADICIONALES. ESTOS ARTíCULOS INCLUYEN PERO NO ESTáN LIMITADOS A:
            `,
            products2:[
                ['Productos	','Si sobrepasa la regla de 4x4** es necesario'],
                ['Perfumes*	','Registro sanitario'],
                ['Maquillaje*	','Registro sanitario'],
                ['Medicinas sin fines comerciales*	','Registro sanitario'],
                ['Productos comestibles*	','Registro sanitario'],
                ['Suplementos vitamínicos*	','Registro sanitario'],
                ['Teléfonos celulares ***   ','  para una persona natural y tener el código IMEI'],
                ['Alimentos para perros y gatos ','   Prohibida importación'],
            ],
            desc3:`
            *En los casos en que estos productos sobrepasen la regla del 4x4, se debe efectuar el pago de los tributos correspondientes según el tipo de mercancía.<br><br>
            <b>Para la importación de perfumes, splash, aerosoles en general o todo tipo de producto con dispensador de pulverización se debe solicitar información a su asesor de compras en Ecuador por considerarse mercancía de tipo peligroso ya que Aeropost prepara un vuelo especial para su envío.</b>
            `,

            desc4:`
            La regla de 4x4 se refiere a paquetes que cuenten con alguna de las siguientes características:<br><br>
            <ol class="list-decimal ml-6 mb-5">
                <li>Valor de factura hasta USD $400.00.</li>    
                <li>Peso del paquete hasta 4kg.</li>    
                <li>3 o menos productos con característicaas similares dentro de un mismo paquete.</li>    
                <li>Paquetes que arriben en un mismo vuelo o guía madre para un mismo consignatario y no sobrepasen del 4x4</li>    
                <li>Ver el nuevo Reglamento de Aduanas de Ecuador aquí.</li>    
            </ol>
            *** Resolución Nro-049- 2015 entrada en vigencia el 01 de Enero del 2016. <br><br>
            Artículo 5.- Se permitirá únicamente la importación de un (1) teléfono celular nuevo por año fiscal a través de trafico postal internacional y mensajería acelerada o Courier a través de las salas de arribo internacional de pasajeros, pasos fronterizos, o puertos marítimos, con cargo al número de documento de identificación de la persona natural que importe el dispositivo.
            `,
            
            desc5:`
            Toda persona natural puede importar ropa dentro de la Categoría B o 4X4, haciendo uso correcto del cupo de importación anual; es decir, 5 cupos y USD $1200, que deben cumplirse simultáneamente. De cumplirse una de estas condiciones primero que la otra, usted podrá hacer uso de un cupo adicional anual de una sola compra o importación, por un valor de hasta USD $500 y 20 kg, la cual será declarada en la partida específica de esta naturaleza.<br><br>
            Si un importador utiliza todos los cupos asignados anualmente, su próxima importación requerirá de un Certificado INEN. De no contar con este documento, el paquete será declarado en abandono o reembarque obligatorio, según corresponda.
            `

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
    @apply text-blue mb-4 text-[15px] leading-5;
}
</style>
