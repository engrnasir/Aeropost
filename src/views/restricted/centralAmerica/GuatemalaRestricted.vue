<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }}
        </h2>
        <p class="snippet font-semibold">
            {{ 
                lang==='en'?
                'These include any items with alcohol listed as their first ingredient as well as any quantity of FLAMMABLE, EXPLOSIVE or CORROSIVE material.'
                :'Estos incluyen cualquier artículo que tenga alcohol como su primer ingrediente, así como cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO.'
            }}
        </p>
        <p class="snippet">
            {{ 
                lang==='en'?
                'PLEASE DO NOT SHIP THESE PRODUCTS TO YOUR MIAMI ADDRESS AS THEY CANNOT BE SHIPPED TO YOUR COUNTRY AND YOU WILL NEED TO PAY FOR THEIR DESTRUCTION OR THE COST OF RETURNING THEM TO THE SHIPPER.'
                :'NO ENVÍE ESTOS PRODUCTOS A SU DIRECCIÓN DE MIAMI YA QUE NO SE PUEDEN ENVIAR A SU PAÍS Y DEBERÁ PAGAR POR SU DESTRUCCIÓN O EL COSTO DE DEVOLVERLOS AL REMITENTE.'
            }}
        </p>
        <p class="snippet">
            {{ 
                lang==='en'?
                'AEROPOST WILL NOT TRANSPORT THESE ITEMS AND NO CLAIMS WILL BE ACCEPTED FOR THEM.'
                :'AEROPOST NO TRANSPORTARÁ ESTOS ARTÍCULOS NI SE ACEPTARÁN RECLAMACIONES POR ELLOS.'
            }}
        </p>

        <tableVue :list="info.products" :hasHeader="true" :colspan="2"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Special Handling Product':'Producto de manejo especial' }}
        </h2>
        <p class="snippet">
            {{ 
                lang==='en'? 
                'Defined as small quantities of personal use items. These packages will be shipped when a batch of 10 has been accumulated in Miami. Shipping time can vary from 3 to 5 weeks. An additional fee of US $4.00 + IVA per package applies:'
                :'Definido como pequeñas cantidades de artículos de uso personal. Estos paquetes serán enviados cuando se haya acumulado un lote de 10 en Miami. El tiempo de envío puede variar de 3 a 5 semanas. Aplica un cargo adicional de US $4.00 + IVA por paquete:' 
            }}</p>
        <tableVue :list="info.products1" :hasHeader="true" :colspan="2"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Restricted by Local Customs':'Restringido por las Aduanas Locales' }}
        </h2>
        <p class="snippet">{{ lang==='en'? 'These items have certain of local restrictions or may need special permits to enter the country. Please contact Customer Service for more information.':'Estos artículos tienen ciertas restricciones locales o pueden necesitar permisos especiales para ingresar al país. Póngase en contacto con el Servicio de atención al cliente para obtener más información.' }}</p>
        <p class="snippet">{{ lang==='en'? 'Additional charge for package US $30.00 + IVA The timeframe for customs clearance is 3 days after the package has arrived in country.':'Cargo adicional por paquete US $30.00 + IVA El plazo para el despacho de aduana es de 3 días después de que el paquete haya llegado al país.' }}</p>
        <tableVue :list="info.products2" :hasHeader="true" :colspan="2"/>
        
        <p class="snippet">{{ lang==='en'? 'To learn how to request the permits required for your product, contact: Ministry of Public Health and Social Assistance of the Republic of Guatemala.':'Para conocer cómo solicitar los permisos requeridos para su producto, comuníquese con: Ministerio de Salud Pública y Asistencia Social de la República de Guatemala.' }}</p>
        <p class="snippet">{{ lang==='en'? 'Address: 6ª avenida 3-45 zona 11 | PBX: 2444-7474 | Telephone: 2475-2121 y 24752122':'Dirección: 6ª avenida 3-45 zona 11 | PBX: 2444-7474 | Teléfono: 2475-2121 y 24752122' }}</p>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'These items require a permit from the Ministry of Agriculture and Livestock':'Estos artículos requieren un permiso del Ministerio de Agricultura y Ganadería' }}
        </h2>
        <tableVue :list="info.products3" :hasHeader="true" :colspan="2"/>

        <InformationVue :list="info.list1" />
                
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'GuatemalaRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            products:[
                ['Products'],
                ['Any flammable, corrosive or explosive items','Ammunitions and fire arms'],
                ['Any item with alcohol listed as its first ingredient','Wet-cell batteries'],
                ['Cleaning solutions','Poisons'],
                ['Fireworks','Pressure containers'],
                ['Gas','Matches'],
                ['Tear gas or pepper spray','Gas- powered tools'],
                ['Lighters','Prishables'],
                ['Used tires','Psychotropic substances, precursors and controlled substances'],
                ['Natural products and vitamins','	Tattoo machines'],
                ['Airbags',''],
            ],

            products1:[
                ['These items have certain of local restrictions or may need special permits to enter the country.include but are not limited to:'],
                ['Desodorants	','Nail polish'],
                ['Beauty powders','	Aerosol cans'],
                ['Beauty products','	Oil candles'],
                ['Creams','Perfumes'],
                ['Gels	','Sunblock'],
                ['Non-corrosive cleaning solutions','Sweetener, food flavoring and coloring products'],
                ['Mouthwash','	Car shocks'],
                ['Hoverboards','Batteries '],
                ['Any flammable, corrosive or explosive items','Ammunitions and fire arms'],
                ['Any item with alcohol listed as its first ingredient','Wet-cell batteries'],
                ['Cleaning solutions	','Poisons'],
                ['Fireworks	','Pressure containers'],
                ['Gas	','Matches'],
                ['Tear gas or pepper spray','	Gas- powered tools'],
                ['Lighters	','Prishables'],
                ['Used tires	','Psychotropic substances, precursors and controlled substances'],
                ['Natural products and vitamins	','Tattoo machines'],
                ['Airbags',''],
            ],
            products2:[
                ['Products <br>Require Permit from the "Ministry of Public Health"'],
                ['Creams and cosmetics	','Medications and drugs'],
                ['Perfumes and fragances','Makeup and beauty products'],
                ['Hair products	','Soap'],
                ['Gels	','Tobacco'],
                ['Food and beverages','Toxic substances'],
                ['Liqueur	','Medical equipment'],
                ['Aerosoles	',''],
            ],
            products3:[
                ['Products'],
                ['Wood	','Seeds'],
                ['Fur and animal products	','Plants'],
                ['Veterinary products and accessories	','Agricultural products and accesories'],
                ['Products for animals','Dairy products'],
            ],
            list1:[
                "Aerocasillas DOES NOT handle permit procesess, therefore it is the client's responsibility to file the necessary the paperwork with the Ministry of Agriculture, Livestock and Food (MAGA). For more information call PBX: 2413-7000 or directly visit the Ministry in 7th Ave 12-90 zone 13, Guatemala."
            ]
        },
        es_info:{
            products:[
                ['Productos'],
                ['Cualquier artículo inflamable, corrosivo o explosivo', 'Municiones y armas de fuego'],
                ['Cualquier artículo con alcohol incluido como su primer ingrediente', 'Baterías de celda húmeda'],
                ['Soluciones de limpieza','Venenos'],
                ['Fuegos artificiales','Contenedores a presión'],
                ['Gasolina','Fósforos'],
                ['Gas lacrimógeno o gas pimienta', 'Herramientas a gas'],
                ['Mecheros','Prishables'],
                ['Neumáticos usados', 'Sustancias psicotrópicas, precursores y sustancias controladas'],
                ['Productos naturales y vitaminas', 'Máquinas de tatuar'],
                ['Bolsas de aire',''],
            ],

            products1:[
                ['Estos artículos tienen ciertas restricciones locales o pueden necesitar permisos especiales para ingresar al país. Incluyen pero no se limitan a:'],
                ['Desodorantes', 'Esmalte de uñas'],
                ['Polvos de belleza', 'Latas de aerosol'],
                ['Productos de belleza', 'Velas de aceite'],
                ['Cremas','Perfumes'],
                ['Gels','Bloqueador solar'],
                ['Soluciones de limpieza no corrosivas','Productos edulcorantes, aromatizantes y colorantes alimentarios'],
                ['Enjuague bucal', 'Choques de coche'],
                ['Hoverboards','Baterías'],
                ['Cualquier artículo inflamable, corrosivo o explosivo', 'Municiones y armas de fuego'],
                ['Cualquier artículo con alcohol incluido como su primer ingrediente', 'Baterías de celda húmeda'],
                ['Soluciones de limpieza','Venenos'],
                ['Fuegos artificiales','Contenedores a presión'],
                ['Gasolina','Fósforos'],
                ['Gas lacrimógeno o gas pimienta', 'Herramientas a gas'],
                ['Mecheros', 'Prishables'],
                ['Neumáticos usados', 'Sustancias psicotrópicas, precursores y sustancias controladas'],
                ['Productos naturales y vitaminas', 'Máquinas de tatuar'],
                ['Bolsas de aire',''],
            ],
            products2:[
                ['Productos <br>Requieren Permiso del "Ministerio de Salud Pública"'],
                ['Cremas y cosméticos', 'Medicamentos y drogas'],
                ['Perfumes y fragancias','Productos de maquillaje y belleza'],
                ['Productos para el cabello','Jabón'],
                ['Geles', 'Tabaco'],
                ['Alimentos y bebidas','Sustancias tóxicas'],
                ['Licor', 'Equipamiento médico'],
                ['Aerosoles',''],
            ],
            products3:[
                ['Productos'],
                ['Madera', 'Semillas'],
                ['Pieles y productos animales', 'Plantas'],
                ['Productos y accesorios veterinarios', 'Productos y accesorios agrícolas'],
                ['Productos para animales','Productos lácteos'],
            ],
            list1:[
                "Aerocasillas NO maneja trámite de permisos, por lo tanto es responsabilidad del cliente realizar los trámites necesarios ante el Ministerio de Agricultura, Ganadería y Alimentación (MAGA). Para mayor información llamar al PBX: 2413-7000 o visitar directamente el Ministerio en 7ma Ave. 12-90 zona 13, Guatemala."
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
