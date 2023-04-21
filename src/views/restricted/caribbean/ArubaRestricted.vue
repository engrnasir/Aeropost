<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }}
        </h2>
        <p class="snippet" v-html="info.desc1"></p>
        
        <table-vue :list="info.products" :hasHeader="true"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Restricted by Local Customs':'Restringido por las Aduanas Locales' }}
        </h2>
        <p class="snippet" v-html="info.desc2"></p>
        
        <table-vue :list="info.products1" :hasHeader="true"/>
        
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'ArubaRestricted',
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
                ['Ammunition, firearms and firearm parts	','Lighters'],
                ['Any item with alcohol listed as its first ingredient    	','Matches'],
                ['Cleaning solutions	','Car shocks'],
                ['Fireworks	','Pressure containers'],
                ['Gas, poisons	','Tear gas or pepper spray'],
                ['Gas - powered tools	','Wet-cell batteries'],
                ['Value certificates and stock of any kind','Manuscripts'],
                ['Checks	','Academic, property and other titles'],
                ['Passports and identification documents	','Credit or debit cards'],
                ['Cash and coins	','Gift cards'],
                ['Stamps or transportation tickets of any kind	','Gemstones'],
                ['Hoverboards',''],
            ],
            desc2:`
            Products Creams and cosmetics Plant seeds Medication and drugs Plants Food and beverages Cell phones and radar detectors Items of extremely high value Items Tobacco Weapons Toxic substances Explosives and ammunition Chemical substances Live animals Aerosoles Animal products or animal fur Wood Perishable items.<br><br>
            THESE ITEMS HAVE CERTAIN LOCAL RESTRICTIONS OR MAY NEED SPECIAL PERMITS TO ENTER THE COUNTRY. PLEASE CONTACT CUSTOMER SERVICE FOR MORE INFORMATION.
            `,
            products1:[
                ['Products',''],
                ['Creams and cosmetics	','Plant seeds'],
                ['Medication and drugs	','Plants'],
                ['Food and beverages	','Cell phones and radar detectors'],
                ['Items of extremely high value Items	','Tobacco'],
                ['Weapons	','Toxic substances'],
                ['Explosives and ammunition	','Chemical substances'],
                ['Live animals	','Aerosoles'],
                ['Animal products or animal fur	','Wood'],
                ['Perishable items	 ',''],
            ],
            
        },
        es_info:{
            desc1:`
            <b>Estos incluyen cualquier artículo que tenga alcohol como primer ingrediente, así como cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO.</b><br><br>
             NO ENVÍE ESTOS PRODUCTOS A SU DIRECCIÓN DE MIAMI YA QUE NO SE PUEDEN ENVIAR A SU PAÍS Y DEBERÁ PAGAR POR SU DESTRUCCIÓN O EL COSTO DE DEVOLVERLOS AL REMITENTE.
            `,
            products:[
                ['Productos',''],
                ['Municiones, armas de fuego y repuestos de armas de fuego', 'Mecheros'],
                ['Cualquier artículo con alcohol listado como su primer ingrediente', 'Fósforos'],
                ['Soluciones de limpieza','Amortiguadores de coche'],
                ['Fuegos artificiales','Contenedores a presión'],
                ['Gases, venenos', 'Gas lacrimógeno o gas pimienta'],
                ['Herramientas accionadas por gas', 'Baterías de celda húmeda'],
                ['Certificados de valor y acciones de cualquier clase', 'Manuscritos'],
                ['Cheques', 'Títulos académicos, de propiedad y otros'],
                ['Pasaportes y documentos de identificación','Tarjetas de crédito o débito'],
                ['Efectivo y monedas','Tarjetas regalo'],
                ['Sellos o billetes de transporte de cualquier clase', 'Piedras preciosas'],
                ['Aerotablas',''],
            ],
            desc2:`
            Productos Cremas y cosméticos Semillas de plantas Medicamentos y drogas Plantas Alimentos y bebidas Teléfonos celulares y detectores de radar Artículos de altísimo valor Artículos Tabaco Armas Sustancias tóxicas Explosivos y municiones Sustancias químicas Animales vivos Aerosoles Productos animales o pieles de animales Madera Artículos perecederos.<br><br >
             ESTOS ARTÍCULOS TIENEN CIERTAS RESTRICCIONES LOCALES O PUEDEN NECESITAR PERMISOS ESPECIALES PARA INGRESAR AL PAÍS. PÓNGASE EN CONTACTO CON EL SERVICIO DE ATENCIÓN AL CLIENTE PARA OBTENER MÁS INFORMACIÓN.
            `,
            products1:[
                ['Productos',''],
                ['Cremas y cosméticos', 'Semillas de plantas'],
                ['Medicamentos y drogas', 'Plantas'],
                ['Alimentos y bebidas', 'Teléfonos móviles y detectores de radar'],
                ['Artículos de artículos de valor extremadamente alto', 'Tabaco'],
                ['Armas', 'Sustancias tóxicas'],
                ['Explosivos y municiones', 'Sustancias químicas'],
                ['Animales vivos', 'Aerosoles'],
                ['Productos animales o pieles de animales', 'Madera'],
                ['Artículos perecederos',''],
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

<style scoped>
.snippet{
    @apply text-blue mb-4 text-[15px] leading-5;
}
</style>
