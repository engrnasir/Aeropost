<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }}
        </h2>
        <p class="snippet" v-html="info.desc1"></p>
        
        <table-vue :list="info.products" :hasHeader="true"/>

        <information-vue :list="info.list1"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Restricted Products':'Productos restringidos' }}
        </h2>
        <p class="snippet">
            {{ lang==='en'?'THESE ITEMS HAVE CERTAIN LOCAL RESTRICTIONS OR MAY NEED SPECIAL PERMITS TO ENTER THE COUNTRY. PLEASE CONTACT CUSTOMER SERVICE FOR MORE INFORMATION.':'ESTOS ARTÍCULOS TIENEN CIERTAS RESTRICCIONES LOCALES O PUEDEN NECESITAR PERMISOS ESPECIALES PARA INGRESAR AL PAÍS. PÓNGASE EN CONTACTO CON EL SERVICIO DE ATENCIÓN AL CLIENTE PARA OBTENER MÁS INFORMACIÓN.' }}<br><br>
            {{ lang==='es'?'These products require a special permit from the Department of Agriculture.':'Estos productos requieren un permiso especial del Departamento de Agricultura.' }}
        </p>
        
        <table-vue :list="info.products1" :hasHeader="true"/>
        
        <information-vue :list="info.list2"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Special Handling Product':'Producto de manejo especial' }}
        </h2>
        <p class="snippet">
            {{ lang==='en'?'Defined as small quantities of personal use items.':'Definido como pequeñas cantidades de artículos de uso personal.' }}<br><br>
            {{ lang==='en'?'SHIPMENTS OF THESE GOODS ARE LIMITED TO TWICE A MONTH.':'LOS ENVÍOS DE ESTOS BIENES ESTÁN LIMITADOS A DOS VECES AL MES.' }}
        </p>
        <table-vue :list="info.products2" :hasHeader="true"/>
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'AntiguaRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            desc1:`
            <b>These include any items with alcohol listed as their first ingredient as well as any quantity of FLAMMABLE, EXPLOSIVE or CORROSIVE material.</b><br><br>
            PLEASE DO NOT SHIP THESE PRODUCTS TO YOUR MIAMI ADDRESS AS THEY CANNOT BE SHIPPED TO YOUR COUNTRY AND YOU WILL NEED TO PAY FOR THEIR DESTRUCTION OR THE COST OF RETURNING THEM TO THE SHIPPER.
            `,
            products:[
                ['Products',''],
                ['Any flammable, corrosive or explosive item','All weapons, including but not limited to ammunition and fire arms, BB guns, paintball guns, bows and arrows, etc.'],
                ['Any item with alcohol listed as its first ingredient','Wet-cell batteries'],
                ['Cleaning solutions','Poisons'],
                ['Fireworks	','Pressure containers'],
                ['Gas','Matches'],
                ['Tear gas or pepper spray','Gas - powered tools'],
                ['Lighters','Perishables'],
                ['Used tires','Psychotropic substances, precursors and controlled substances'],
                ['Natural products and vitamins	','Tattoo machines and accessories'],
                ['Airbags','Coal'],
                ['Used shoes','Used underwear'],
                ['Gemstones','Stamps or transportation tickets of any kind'],
                ['Manuscripts','Checks'],
                ['Academic, property and other titles	','Passports and identification documents'],
                ['Credit or debit cards	','Cash and coins'],
                ['Gift cards','Green camouflage clothing '],
                ['*Car shocks','Hoverboards'],
            ],
            list1:['Please note that the car shocks need a permit to enter the country, for more information please contact customer service.'],
            products1:[
                ['Products'],
                ['Seeds/Plant Matter*'],
            ],
            list2:['*Due to strict import laws, these products require a special permit BEFORE the item can be shipped to Antigua.  Forms can be obtained by contacting us at service.anu@aeropost.com or calling 268-562-5089.'],
            products2:[
                ['Products',''],
                ['Aerosol cans	','Nail polish'],
                ['Beauty powders	','Aerosol cans'],
                ['Beauty products	','Oil candles'],
                ['Creams	','Perfumes'],
                ['Gels	','Sunblock'],
                ['Non-corrosive cleaning solutions	','Sweetener, food flavoring and coloring products'],
                ['Mouthwash	 ','Cars shocks'],
            ]

        },
        es_info:{
            desc1:`
            <b>Estos incluyen cualquier artículo que tenga alcohol como primer ingrediente, así como cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO.</b><br><br>
             NO ENVÍE ESTOS PRODUCTOS A SU DIRECCIÓN DE MIAMI YA QUE NO SE PUEDEN ENVIAR A SU PAÍS Y DEBERÁ PAGAR POR SU DESTRUCCIÓN O EL COSTO DE DEVOLVERLOS AL REMITENTE.
            `,
            products:[
                ['Productos',''],
                ['Cualquier artículo inflamable, corrosivo o explosivo', 'Todas las armas, incluidas, entre otras, municiones y armas de fuego, pistolas de aire comprimido, pistolas de bolas de pintura, arcos y flechas, etc.'],
                ['Cualquier artículo con alcohol incluido como su primer ingrediente', 'Baterías de celda húmeda'],
                ['Soluciones de limpieza','Venenos'],
                ['Fuegos artificiales','Contenedores a presión'],
                ['Gasolina','Fósforos'],
                ['Gas lacrimógeno o gas pimienta','Herramientas accionadas por gas'],
                ['Mecheros','Perecederos'],
                ['Neumáticos usados', 'Sustancias psicotrópicas, precursores y sustancias controladas'],
                ['Productos naturales y vitaminas','Máquinas y accesorios para tatuar'],
                ['Airbags','Carbón'],
                ['Zapatos usados','Ropa interior usada'],
                ['Piedras preciosas', 'Sellos o billetes de transporte de cualquier clase'],
                ['Manuscritos','Cheques'],
                ['Títulos académicos, de propiedad y otros', 'Pasaportes y documentos de identificación'],
                ['Tarjetas de crédito o débito', 'Efectivo y monedas'],
                ['Tarjetas regalo','Ropa de camuflaje verde'],
                ['*Choques de coche','Hoverboards'],
            ],
            list1:['Tenga en cuenta que los amortiguadores de automóviles necesitan un permiso para ingresar al país, para obtener más información, comuníquese con el servicio al cliente.'],
            products1:[
                ['Productos'],
                ['Semillas/Materia vegetal*'],
            ],
            list2:['*Debido a las estrictas leyes de importación, estos productos requieren un permiso especial ANTES de que el artículo pueda enviarse a Antigua. Los formularios se pueden obtener poniéndose en contacto con nosotros en service.anu@aeropost.com o llamando al 268-562-5089.'],
            products2:[
                ['Productos',''],
                ['Latas de aerosol', 'Esmalte de uñas'],
                ['Polvos de belleza', 'Latas de aerosol'],
                ['Productos de belleza','Velas de aceite'],
                ['Cremas', 'Perfumes'],
                ['Gels','Bloqueador solar'],
                ['Soluciones de limpieza no corrosivas', 'Productos edulcorantes, aromatizantes y colorantes alimentarios'],
                ['Enjuague bucal', 'Cars shocks'],
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
    @apply text-blue mb-4 text-[15px] leading-5;
}
</style>
