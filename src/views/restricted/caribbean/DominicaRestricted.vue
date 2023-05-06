<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }}
        </h2>
        <p class="snippet" v-html="info.desc1"></p>
        <table-vue :list="info.products1" :hasHeader="true" :colspan="2"/>

        <h2 class="main-heading">
            {{ lang==='en'? 'Special Handling Product':'Producto de manejo especial' }}
        </h2>
        <p class="snippet" v-html="info.desc2"></p>
        <table-vue :list="info.products2" :hasHeader="true" :colspan="2"/>

        <h2 class="main-heading">
            {{ lang==='en'? 'Restricted by Local Customs':'Restringido por las Aduanas Locales' }}
        </h2>
        <p class="snippet" v-html="info.desc3"></p>
        <table-vue :list="info.products3" :hasHeader="true" :colspan="2"/>
        

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'CuracaoRestricted',
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
            products1:[
                ['Products'],
                ['Ammunition, firearms and firearm parts	','Matches'],
                ['Any item with alcohol listed as its first ingredient  ','	Poisons'],
                ['Cleaning solutions	','Pressure containers'],
                ['Fireworks','	Matches'],
                ['Gas	','Tear gas or pepper spray'],
                ['Gas powered tools	','Wet-cell batteries'],
                ['Value certificates and stock of any kind	','Manuscripts'],
                ['Checks	','Academic, property and other titles'],
                ['Passports and identification documents	','Credit or debit cards'],
                ['Cash and coins','	Gift cards'],
                ['Stamps or transportation tickets of any kind	','Gemstones'],
                ['Hoverboards',''],
            ],

            desc2:`
            Defined as small quantities of personal use items. SHIPMENTS OF THESE GOODS WILL BE SENT THE LAST WEEK OF EACH MONTH. AN ADDITIONAL FEE OF US $10 PER PACKAGE APPLIES.
            `,
            products2:[
                ['These items include but are not limited to:'],
                ['Aerosol cans','	Nail polish'],
                ['Beauty powders   ','	Non-corrosive cleaning solutions'],
                ['Beauty products	','Oil candles'],
                ['Creams	','Perfums'],
                ['Deodorants	','Sunblock'],
                ['Gels	','Sweetener, food flavoring and coloring products'],
                ['Mouthwash','	Car Shocks'],
            ],

            desc3:`
            THESE ITEMS HAVE CERTAIN LOCAL RESTRICTIONS OR MAY NEED SPECIAL PERMITS TO ENTER THE COUNTRY. PLEASE CONTACT CUSTOMER SERVICE FOR MORE INFORMATION.
            `,
            products3:[
                ['PRODUCTS'],
                ['Fur and animal products	','Plant seeds'],
                ['Explosives	','Plants'],
                ['Items of extremely high value   ','	Radar detectors'],
                ['Firearms and ammunition	','Tobacco'],
                ['Illegal drugs','	Toxic substances'],
                ['Lasers of any kind	','Toy guns'],
                ['Live animals	','Wood'],
                ['Perishable items',''],
            ]
            

        },
        es_info:{
            desc1:`
            <b>Estos incluyen cualquier artículo que tenga alcohol como primer ingrediente, así como cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO.</b><br><br>
            NO ENVÍE ESTOS PRODUCTOS A SU DIRECCIÓN DE MIAMI YA QUE NO SE PUEDEN ENVIAR A SU PAÍS Y DEBERÁ PAGAR POR SU DESTRUCCIÓN O EL COSTO DE DEVOLVERLOS AL REMITENTE.
            `,
            products1:[
                ['Productos'],
                ['Municiones, armas de fuego y repuestos de armas de fuego', 'Fósforos'],
                ['Cualquier artículo con alcohol listado como su primer ingrediente', 'Venenos'],
                ['Soluciones de limpieza','Recipientes a presión'],
                ['Fuegos artificiales',' Cerillas'],
                ['Gas', 'Gas lacrimógeno o gas pimienta'],
                ['Herramientas a gas', 'Baterías de celda húmeda'],
                ['Valorar certificados y acciones de cualquier clase', 'Manuscritos'],
                ['Cheques', 'Títulos académicos, de propiedad y otros'],
                ['Pasaportes y documentos de identificación','Tarjetas de crédito o débito'],
                ['Efectivo y monedas',' Tarjetas regalo'],
                ['Sellos o billetes de transporte de cualquier clase', 'Piedras preciosas'],
                ['Aerotablas',''],
            ],

            desc2:`
                Definido como pequeñas cantidades de artículos de uso personal. LOS ENVÍOS DE ESTAS MERCANCÍAS SE REALIZARÁN LA ÚLTIMA SEMANA DE CADA MES. APLICA UN CARGO ADICIONAL DE US $10 POR PAQUETE.
            `,
            products2:[
                ['Estos elementos incluyen pero no se limitan a:'],
                ['Latas de aerosol', 'Esmalte de uñas'],
                ['Polvos de belleza', 'Soluciones de limpieza no corrosivas'],
                ['Productos de belleza','Velas de aceite'],
                ['Cremas','Perfumes'],
                ['Desodorantes','Bloqueador solar'],
                ['Gels', 'Productos edulcorantes, aromatizantes y colorantes alimentarios'],
                ['Enjuague bucal', 'Choques de coche'],
            ],

            desc3:`
                ESTOS ARTÍCULOS TIENEN CIERTAS RESTRICCIONES LOCALES O PUEDEN NECESITAR PERMISOS ESPECIALES PARA INGRESAR AL PAÍS. PÓNGASE EN CONTACTO CON EL SERVICIO DE ATENCIÓN AL CLIENTE PARA OBTENER MÁS INFORMACIÓN.
            `,
            products3:[
                ['PRODUCTOS'],
                ['Pieles y productos animales', 'Semillas de plantas'],
                ['Explosivos','Plantas'],
                ['Artículos de valor extremadamente alto', 'Detectores de radar'],
                ['Armas de fuego y municiones', 'Tabaco'],
                ['Drogas ilegales', 'Sustancias tóxicas'],
                ['Láseres de cualquier tipo', 'Pistolas de juguete'],
                ['Animales vivos','Madera'],
                ['Artículos perecederos',''],
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
