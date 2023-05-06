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
  name: 'SaintLuciaRestricted',
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
                ['Products'],
                ['Aerosol cans','	Medical Equipment'],
                ['Liquor	','Motor vehicles'],
                ['Animal furs, skins or live animals	','Mouthwash'],
                ['Ammunition, firearms and firearm parts  ',' 	Nail polish'],
                ['Chemical substances	','Oil candles'],
                ['Cleaning solutions	','Perfumes and colognes'],
                ['Creams	','Perishable items'],
                ['Deodorants	','Personal beauty products'],
                ['Explosive material	','Plants'],
                ['Fireworks','	Fuel'],
                ['Fragrances and cosmetics	','Poisons'],
                ['Gas- powered tools','	Sweeteners, food flavor or coloring products'],
                ['Gas	','Tear gas or pepper spray'],
                ['Gels	','Tobacco'],
                ['Items of extremely high value','	Wet-cell batteries'],
                ['Lighters	','Seeds'],
                ['*Car shocks	','Matches'],
                ['Gemstones','	Stamps or transportation tickets of any kind'],
                ['Manuscripts	','Checks'],
                ['Academic, property and other titles	','Passports and identification documents'],
                ['Credit or debit cards	','Cash and coins'],
                ['Value certificates and stock of any kind	','Gift cards'],
                ['Hoverboards',''],
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
                ['Productos'],
                ['Latas de aerosol', 'Equipos médicos'],
                ['Licor', 'Vehículos de motor'],
                ['Pieles de animales, pieles o animales vivos', 'Enjuague bucal'],
                ['Municiones, armas de fuego y partes de armas de fuego', 'Esmalte de uñas'],
                ['Sustancias químicas', 'Velas de aceite'],
                ['Soluciones de limpieza', 'Perfumes y colonias'],
                ['Cremas','Artículos perecederos'],
                ['Desodorantes', 'Productos de belleza personal'],
                ['Material explosivo','Plantas'],
                ['Fuegos artificiales',' Combustible'],
                ['Fragancias y cosmética', 'Venenos'],
                ['Herramientas a gasolina', 'Edulcorantes, saborizantes o colorantes alimentarios'],
                ['Gas', 'Gas lacrimógeno o gas pimienta'],
                ['Geles', 'Tabaco'],
                ['Artículos de valor extremadamente alto', 'Baterías de celda húmeda'],
                ['Mecheros', 'Semillas'],
                ['*Choques de coche','Partidos'],
                ['Piedras preciosas', 'Sellos o billetes de transporte de cualquier clase'],
                ['Manuscritos','Cheques'],
                ['Títulos académicos, de propiedad y otros', 'Pasaportes y documentos de identificación'],
                ['Tarjetas de crédito o débito', 'Efectivo y monedas'],
                ['Certificados de valor y acciones de cualquier clase', 'Tarjetas regalo'],
                ['Aerotablas',''],
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
