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

        <tableVue :list="info.table1"/>
        <tableVue :list="info.products" :hasHeader="true"/>
        
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'BelizeRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            
            table1:[
                ['These products include Any items with alcohol listed as their first ingredient as well Any quantityof FLAMMABLE, EXPLOSIVE or CORROSIVE material']
            ],
            products:[
                ['Products',''],
                ['Aerosol cans','Matches'],
                ['Alcoholic beverages ','Medical Equipment'],
                ['Ammunition, firearms and firearm parts','	Motor vehicles'],
                ['Animal furs and skins	','Mouthwash'],
                ['Chemical substances	','Nail polish'],
                ['Cleaning solutions	','Oil candles'],
                ['Creams	','Perfumes and colognes'],
                ['Deodorants	','Perishable items'],
                ['Explosive material	','Personal beauty products'],
                ['Fireworks	','Plants'],
                ['Fragrances and cosmetics	','Poisons'],
                ['Gas powered tools	','Pressure containers'],
                ['Gasoline, fuel	','Seeds'],
                ['Gels	','Sweeteners, food flavor or coloring products'],
                ['Items of extremely high value	','Tear gas or pepper spray'],
                ['Lighters	','Tobacco'],
                ['Live animals	','Wet-cell batteries'],
                ['Value certificates and stock of any kind	','Manuscripts'],
                ['Checks	','Academic, property and other titles'],
                ['Passports and identification documents	','Credit or debit cards'],
                ['Cash and coins	','Gift cards'],
                ['Stamps or transportation tickets of any kind	','Gemstones'],
                ['Hoverboards	',' '],

            ],
        },
        en_info:{
            
            table1:[
            ['Estos productos incluyen Cualquier artículo con alcohol incluido como su primer ingrediente, así como Cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO']
            ],
            products:[
                 ['Productos',''],
                 ['Latas de aerosol','Fósforos'],
                 ['Bebidas alcohólicas', 'Equipamiento médico'],
                 ['Municiones, armas de fuego y repuestos de armas de fuego', 'Vehículos de motor'],
                 ['Pieles y pieles de animales', 'Enjuague bucal'],
                 ['Sustancias químicas', 'Esmalte de uñas'],
                 ['Soluciones de limpieza', 'Velas de aceite'],
                 ['Cremas', 'Perfumes y colonias'],
                 ['Desodorantes','Artículos perecederos'],
                 ['Material explosivo', 'Productos de belleza personal'],
                 ['Fuegos artificiales','Plantas'],
                 ['Fragancias y cosmética', 'Venenos'],
                 ['Herramientas a gas','Contenedores a presión'],
                 ['Gasolina, combustible', 'Semillas'],
                 ['Geles', 'Edulcorantes, saborizantes o colorantes alimentarios'],
                 ['Artículos de valor extremadamente alto', 'Gas lacrimógeno o gas pimienta'],
                 ['Mecheros', 'Tabaco'],
                 ['Animales vivos', 'Baterías de celda húmeda'],
                 ['Valorar certificados y acciones de cualquier clase', 'Manuscritos'],
                 ['Cheques', 'Títulos académicos, de propiedad y otros'],
                 ['Pasaportes y documentos de identificación','Tarjetas de crédito o débito'],
                 ['Efectivo y monedas','Tarjetas regalo'],
                 ['Sellos o billetes de transporte de cualquier clase', 'Piedras preciosas'],
                 ['Aerotablas',' '],

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
    @apply text-blue mb-4;
}
</style>
