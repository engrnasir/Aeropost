<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }}
        </h2>
        <p class="snippet" v-html="info.desc1"></p>
        
        <table-vue :list="info.products" :hasHeader="true"/>
        
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'BarbadosRestricted',
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
                ['PRODUCTS',''],
                ['Aerosol cans	','Matches'],
                ['Alcoholic beverages	','Medical equipment'],
                ['Ammunition, firearms and firearm parts  	','Furs'],
                ['Chemical substances	','Nail polish'],
                ['Cleaning products	','Oil candles'],
                ['Creams	','Perfumes and colognes'],
                ['Deodorants	','Perishable items'],
                ['Explosive material	','Personal beauty products'],
                ['Fireworks	Plants'],
                ['Fragrances and cosmetics	','Poisons'],
                ['Gas-powered tools	','Pressurized containers'],
                ['Gasoline, fuel	','Seeds'],
                ['Gels	','Sweeteners, food flavoring and coloring products'],
                ['Items of extremely high value	','Pepper spray'],
                ['Lighters	','Tobacco'],
                ['Live animals	','Cellphone batteries'],
                ['Mouthwash	','Camouflage'],
                ['Sex toys	','Value certificates and stock of any kind'],
                ['Manuscripts	Checks'],
                ['Academic, property and other titles	','Passports and identification documents'],
                ['Credit or debit cards','	Cash and coins'],
                ['Gift cards	','Stamps and transportation tickets of any kind'],
                ['Precious stones	','Hoverboards '],
            ],

        },
        es_info:{
            desc1:`
            <b>Estos incluyen cualquier artículo que tenga alcohol como primer ingrediente, así como cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO.</b><br><br>
             NO ENVÍE ESTOS PRODUCTOS A SU DIRECCIÓN DE MIAMI YA QUE NO SE PUEDEN ENVIAR A SU PAÍS Y DEBERÁ PAGAR POR SU DESTRUCCIÓN O EL COSTO DE DEVOLVERLOS AL REMITENTE.
            `,
            products:[
                ['PRODUCTOS',''],
                ['Latas de aerosol', 'Fósforos'],
                ['Bebidas alcohólicas', 'Equipamiento médico'],
                ['Municiones, armas de fuego y partes de armas de fuego', 'Pieles'],
                ['Sustancias químicas', 'Esmalte de uñas'],
                ['Productos de limpieza', 'Velas de aceite'],
                ['Cremas', 'Perfumes y colonias'],
                ['Desodorantes','Artículos perecederos'],
                ['Material explosivo', 'Productos de belleza personal'],
                ['Plantas de fuegos artificiales'],
                ['Fragancias y cosmética', 'Venenos'],
                ['Herramientas a gas','Contenedores a presión'],
                ['Gasolina, combustible', 'Semillas'],
                ['Geles', 'Edulcorantes, aromatizantes y colorantes alimentarios'],
                ['Artículos de valor extremadamente alto', 'Aerosol de pimienta'],
                ['Mecheros', 'Tabaco'],
                ['Animales vivos','Baterías de celular'],
                ['Enjuague bucal', 'Camuflaje'],
                ['Juguetes sexuales', 'Certificados de valor y acciones de cualquier tipo'],
                ['Comprobaciones de manuscritos'],
                ['Títulos académicos, de propiedad y otros', 'Pasaportes y documentos de identificación'],
                ['Tarjetas de crédito o débito', 'Efectivo y monedas'],
                ['Tarjetas regalo', 'Sellos y títulos de transporte de cualquier clase'],
                ['Piedras preciosas', 'Hoverboards'],
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
