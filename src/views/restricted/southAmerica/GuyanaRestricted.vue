<template>
    <div>

        <p class="snippet" v-html="info.desc1"></p>
        <table-vue :list="info.products1" :hasHeader="true" :colspan="2"/>
        
        <p class="snippet" v-html="info.desc2"></p>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'GuyanaRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            desc1:`
            This list includes any item with alcohol listed as its first ingredient, as well as any amount of FLAMMABLE, EXPLOSIVE or CORROSIVE material.<br><br>
            Under no circumstances should these products be shipped to your U.S. address with Aeropost, as they cannot be shipped to your destination country. Customers who ship a restricted product to their address will incur the cost of having the item either destroyed or returned to the vendor/sender.<br><br>
            AEROPOST WILL NOT TRANSPORT THESE ITEMS AND NO CLAIMS WILL BE ACCEPTED FOR THEM.
            `,
            products1:[
                ['PRODUCTS'],
                ['Aerosol Cans	','Medical Equipment'],
                ['Liquor	','Medication'],
                ['Ammunition, Firearms And Firearm Farts	','Mouthwash'],
                ['Chemical Substances	','Nail polish'],
                ['Cleaning Solutions	','Oil candles'],
                ['Creams	','Perfumes And Colognes'],
                ['Deodorants	','Perishable Items'],
                ['Explosive Material	','Personal Beauty Products'],
                ['Fireworks	','Plants'],
                ['Fragrances And Cosmetics	','Car Shocks'],
                ['Gas Powered Tools, Poisons	','Pressure Containers'],
                ['Gasoline, Fuel	','Sweeteners, food flavor or coloring products'],
                ['Gels	','Tear gas or pepper spray'],
                ['Items of extremely high value','	Tobacco'],
                ['Lighters','Wet-cell batteries'],
                ['Live animals	','Matches'],
                ['Value certificates and stock of any kind	','Manuscripts'],
                ['Checks	','Academic, property and other titles'],
                ['Passports and identification documents','	Credit or debit cards'],
                ['Cash and coins','	Gift cards'],
                ['Stamps or transportation tickets of any kind','	Gemstones'],
                ['Hoverboards',''],
            ],
            desc2:`
            Please note that the car shocks require a permit to enter the country. For more information regarding restricted products, please contact our customer experience team.
            `,
        },
        es_info:{
            desc1:`
                Estos incluyen cualquier artículo que tenga alcohol como primer ingrediente, así como cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO.<br><br>
                POR FAVOR, NO ENVÍE ESTOS PRODUCTOS A SU DIRECCIÓN DE MIAMI YA QUE NO SE PUEDEN ENVIAR A SU PAÍS Y DEBERÁ PAGAR POR SU DESTRUCCIÓN O PARA DEVOLVERLOS AL REMITENTE.<br><br>
                AEROPOST NO TRANSPORTARÁ ESTOS ARTÍCULOS NI SE ACEPTARÁN RECLAMACIONES POR ELLOS.
            `,
            products1:[
                ['PRODUCTOS'],
                ['Latas de aerosol', 'Equipo médico'],
                ['Licor', 'Medicamento'],
                ['Municiones, armas de fuego y partes de armas de fuego', 'Enjuague bucal'],
                ['Sustancias químicas', 'Esmalte de uñas'],
                ['Soluciones de limpieza', 'Velas de aceite'],
                ['Cremas', 'Perfumes y colonias'],
                ['Desodorantes','Artículos perecederos'],
                ['Material explosivo', 'Productos de belleza personal'],
                ['Fuegos artificiales','Plantas'],
                ['Fragancias y cosmética', 'Amortiguadores de coche'],
                ['Herramientas a gas, Venenos','Contenedores a presión'],
                ['Gasolina, combustible', 'Edulcorantes, saborizantes o colorantes alimentarios'],
                ['Geles', 'Gas lacrimógeno o gas pimienta'],
                ['Artículos de valor extremadamente alto', 'Tabaco'],
                ['Mecheros', 'Baterías de celda húmeda'],
                ['Animales vivos','Partidos'],
                ['Valorar certificados y acciones de cualquier clase', 'Manuscritos'],
                ['Cheques', 'Títulos académicos, de propiedad y otros'],
                ['Pasaportes y documentos de identificación', 'Tarjetas de crédito o débito'],
                ['Efectivo y monedas',' Tarjetas regalo'],
                ['Sellos o títulos de transporte de cualquier clase', 'Piedras preciosas'],
                ['Aerotablas',''],
            ],
            desc2:`
                Tenga en cuenta que los amortiguadores de automóviles necesitan un permiso para ingresar al país, para obtener más información, comuníquese con el servicio al cliente.
            `,
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
