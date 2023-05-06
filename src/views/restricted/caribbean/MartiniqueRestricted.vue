<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }}
        </h2>
        <p class="snippet" v-html="info.desc1"></p>
        
        <table-vue :list="info.products" :hasHeader="true" :colspan="2"/>

        <InformationVue :list="info.list" />
        

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'MartiniqueRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            desc1:`
            These include any item with alcohol listed as their first ingredient, as well as any amount of FLAMMABLE, EXPLOSIVE or CORROSIVE material. <br><br>
            PLEASE DO NOT SHIP THESE PRODUCTS TO YOUR MIAMI ADDRESS SINCE THEY CANNOT BE SHIPPED TO YOUR COUNTRY AND YOU WILL NEED TO PAY FOR THEIR DESTRUCTION OR FOR THEM TO BE RETURNED TO THE SHIPPER.<br><br>
            AEROPOST WILL NOT TRANSPORT THESE ITEMS AND NO CLAIMS WILL BE ACCEPTED FOR THEM.
            `,
            products:[
                ['PRODUCTS'],
                ['Aerosol cans	','Medical equipment'],
                ['Liquor	','Medication'],
                ['Ammunition, firearms and firearm parts	','Mouthwash'],
                ['Chemical substances','	Nail polish'],
                ['Cleaning solutions','	Oil candles'],
                ['Creams	','Perfumes and colognes'],
                ['Deodorants','	Perishable items'],
                ['Explosive material	','Personal beauty products'],
                ['Fireworks	','Plants'],
                ['Fragrances and cosmetics	','Car shocks'],
                ['Gas powered tools, Poisons	','Pressure containers'],
                ['Gasoline, fuel	','Sweeteners, food flavor or coloring products'],
                ['Gels	','Tear gas or pepper spray'],
                ['Items of extremely high value','	Tobacco'],
                ['Lighters	','Wet-cell batteries'],
                ['Live animals	','Matches'],
                ['Value certificates and stock of any kind','	Manuscripts'],
                ['Checks	','Academic, property and other titles'],
                ['Passports and identification documents','	Credit or debit cards'],
                ['Cash and coins	','Gift cards'],
                ['Stamps or transportation tickets of any kind	','Gemstones'],
                ['Hoverboards	',' '],
            ],
            
            list:[
                'Please note that the car shocks need a permit to enter the country, for more information please contact customer service.'
            ],


        },
        es_info:{
            desc1:`
            Estos incluyen cualquier artículo que contenga alcohol como su primer ingrediente, así como cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO. <br><br>
            POR FAVOR, NO ENVÍE ESTOS PRODUCTOS A SU DIRECCIÓN DE MIAMI YA QUE NO SE PUEDEN ENVIAR A SU PAÍS Y DEBERÁ PAGAR POR SU DESTRUCCIÓN O PARA DEVOLVERLOS AL REMITENTE.<br><br>
            AEROPOST NO TRANSPORTARÁ ESTOS ARTÍCULOS NI SE ACEPTARÁN RECLAMACIONES POR ELLOS.
            `,
            products:[
                ['PRODUCTOS'],
                ['Latas de aerosol', 'Equipo médico'],
                ['Licor', 'Medicamento'],
                ['Municiones, armas de fuego y partes de armas de fuego', 'Enjuague bucal'],
                ['Sustancias químicas', 'Esmalte de uñas'],
                ['Soluciones de limpieza', 'Velas de aceite'],
                ['Cremas', 'Perfumes y colonias'],
                ['Desodorantes', 'Artículos perecederos'],
                ['Material explosivo', 'Productos de belleza personal'],
                ['Fuegos artificiales','Plantas'],
                ['Fragancias y cosmética', 'Amortiguadores de coche'],
                ['Herramientas a gas, Venenos','Contenedores a presión'],
                ['Gasolina, combustible', 'Edulcorantes, saborizantes o colorantes alimentarios'],
                ['Geles', 'Gas lacrimógeno o gas pimienta'],
                ['Artículos de valor extremadamente alto', 'Tabaco'],
                ['Mecheros', 'Baterías de celda húmeda'],
                ['Animales vivos','Partidos'],
                ['Valores certificados y acciones de cualquier clase', 'Manuscritos'],
                ['Cheques', 'Títulos académicos, de propiedad y otros'],
                ['Pasaportes y documentos de identificación', 'Tarjetas de crédito o débito'],
                ['Efectivo y monedas','Tarjetas regalo'],
                ['Sellos o billetes de transporte de cualquier clase', 'Piedras preciosas'],
                ['Aerotablas',' '],
            ],
            
            list:[
                'Tenga en cuenta que los amortiguadores de automóviles necesitan un permiso para ingresar al país, para obtener más información, comuníquese con el servicio al cliente'
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
