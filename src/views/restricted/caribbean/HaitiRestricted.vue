<template>
    <div>

        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }} <br><br>
            {{ lang==='en'? 'Dangerous Goods and Others Items':'Mercancías peligrosas y otros artículos' }}
        </h2>
        <p class="snippet" v-html="info.desc"></p>
        <table-vue :list="info.products" :hasHeader="true"/>
        
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'HaitiRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            desc:`THE FOLLOWING ITEMS ARE RESTRICTED BY EITHER THE FAA, U.S. CUSTOMS, AEROPOST, OR BY CUSTOMS IN HAITI.`,
            products:[
                ['Products',''],
                ['Any flammable, corrosive or explosive item	','Ammunition and firearms'],
                ['Any item with alcohol listed as its first ingredient	','Wet-cell batteries'],
                ['Cleaning solutions	','Poisons'],
                ['Fireworks	','Pressure containers'],
                ['Gas	','Matches'],
                ['Tear gas or pepper spray	','Gas- powered tools'],
                ['Lighters	','Perishables'],
                ['Used tires	','Psychotropic substances, precursors and controlled substances'],
                ['Natural products and vitamins','	Tattoo machines'],
                ['Airbags	 ','Coal'],
                ['Used shoes	','Used underwear'],
                ['Manuscripts	','Checks'],
                ['Academic, property and other titles	','Passports and identification documents'],
                ['Credit or debit cards	','Cash and coins'],
                ['Gift cards	','Stamps or transportation tickets of any kind'],
                ['Gemstones','	Value certificates and stock of any kind'],
                ['Hoverboards	',' '],
                ['Aerosol cans	','Nail polish'],
                ['Beauty powders	','Car shocks'],
                ['Beauty products','Oil candles'],
                ['Creams	','Perfumes'],
                ['Gels	','Sunblock'],
                ['Non-corrosive cleaning solutions','	Sweetener, food flavoring and coloring products'],
                ['Mouthwash',''],
            ],
            
        },
        es_info:{
            desc:`TLOS SIGUIENTES ARTÍCULOS ESTÁN RESTRINGIDOS POR LA FAA, LA ADUANA DE EE. UU., AEROPOST O LA ADUANA DE HAITÍ.`,
            products:[
                ['Productos',''],
                ['Cualquier artículo inflamable, corrosivo o explosivo', 'Municiones y armas de fuego'],
                ['Cualquier artículo con alcohol incluido como su primer ingrediente', 'Baterías de celda húmeda'],
                ['Soluciones de limpieza','Venenos'],
                ['Fuegos artificiales','Contenedores a presión'],
                ['Gasolina','Fósforos'],
                ['Gas lacrimógeno o gas pimienta', 'Herramientas a gas'],
                ['Mecheros','Perecederos'],
                ['Neumáticos usados', 'Sustancias psicotrópicas, precursores y sustancias controladas'],
                ['Productos naturales y vitaminas', 'Máquinas de tatuar'],
                ['Airbags','Carbón'],
                ['Zapatos usados', 'Ropa interior usada'],
                ['Manuscritos','Cheques'],
                ['Títulos académicos, de propiedad y otros', 'Pasaportes y documentos de identificación'],
                ['Tarjetas de crédito o débito', 'Efectivo y monedas'],
                ['Tarjetas regalo', 'Sellos o títulos de transporte de cualquier clase'],
                ['Piedras preciosas', 'Certificados de valor y acciones de cualquier tipo'],
                ['Aerotablas',' '],
                ['Latas de aerosol', 'Esmalte de uñas'],
                ['Polvos de belleza', 'Choques de coche'],
                ['Productos de belleza','Velas de aceite'],
                ['Cremas', 'Perfumes'],
                ['Gels','Bloqueador solar'],
                ['Soluciones de limpieza no corrosivas', 'Productos edulcorantes, aromatizantes y colorantes alimentarios'],
                ['Enjuague bucal',''],
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
