<template>
    <div>

        <h2 class="main-heading" v-html="info.heading1"></h2>

        <h2 class="heading" v-html="info.heading2"></h2>

        <p class="snippet" v-html="info.desc1"></p>

        <table-vue :list="info.products1"/>

        <table-vue :list="info.products2" :hasHeader="true"/>
        
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'VenezuelaRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            heading1:'Prohibited Products',
            heading2:'Hazardous Material and Others',
            desc1:'THE FOLLOWING PRODUCTS HAVE TRANSPORT RESTRICTIONS, BOTH BY THE CUSTOMS DEPARTMENT OF THE UNITED STATES AND THE GENERAL DIRECTORATE OF CUSTOMS OF VENEZUELA, FOR WHICH THEY REQUIRE SPECIAL PERMITS IN BOTH NATIONS FOR EXPORT OR IMPORT.',
            products1:[
                ['Permitted Dangerous Goods "Consumer Commodity"'],
                ['Spray Cans'],
                ['Perfume'],
                ['Acetone'],
                ['Nail polish'],
                ['Hair items'],
                ['Fragrances and Cosmetics'],
                ['Batteries'],
                ['Alcohol'],
                ['Alcoholic beverages'],
            ],
            products2:[
                ['Shipping Restricted',''],
                ['Pornography','Long Edged Weapons'],
                ['Perishable Food', 'Vegetables (plants)'],
                ['Chemicals','Jewels or Securities'],
                ['Infallible Material', 'Money or Cash'],
                ['Corrosives','War Toys or Video Games'],
                ['Firearms','Lighters'],
                ['Tobacco/Cigars ','Liquor'],
                ['Active debit or credit cards','Drugs'],
                ['Documents (personal identification) ','Fireworks'],
                ['Gunpowder','Matchsticks'],
                ['Alcohol ','Alcoholic Beverages'],
                ['Ammunition, firearms and part of firearms','Checks'],
            ]

        },
        es_info:{
            heading1:'Productos Prohibidos',
            heading2:'Material Peligroso y Otros',
            desc1:'LOS SIGUIENTES PRODUCTOS TIENEN RESTRICCIONES DE TRANSPORTE, TANTO DEL DEPARTAMENTO DE ADUANAS DE LOS ESTADOS UNIDOS COMO LA DIRECCIÓN GENERAL DE ADUANAS DE VENEZUELA POR LO QUE REQUIEREN EN AMBAS NACIONES DE PERMISOS ESPECIALES PARA SU EXPORTACIÓN O IMPORTACIÓN.',
            products1:[
                ['Artículos peligrosos permitidos "Consumer Commodity"'],
                ['Latas de Aerosol'],
                ['Perfumes'],
                ['Acetona'],
                ['Esmaltes de uñas'],
                ['Artículos para el cabello'],
                ['Fragancias y Cosméticos'],
                ['Baterias'],
                ['Alcohol'],
                ['Bebidas Alcohólicas'],
            ],
            products2:[
                ['Envíos Restringidos',''],
                ['Pornografía	','Armas Blancas Largas'],
                ['Comida Perecedera','	Vegetales (plantas)'],
                ['Químicos	','Joyas o Valores'],
                ['Material infalible','	Dinero o Monedas en Efectivo'],
                ['Corrosivos	','Juguetes o Video Juegos Bélicos'],
                ['Armas de fuego	','Encendedores'],
                ['Tabaco/Cigarros	','Licor'],
                ['Tarjetas de débito o Crédito activas	','Drogas'],
                ['Documentos (identificación personal)	','Fuegos  Artificiales'],
                ['Pólvora	','Fósforos'],
                ['Alcohol	','Bebidas Alcohólicas'],
                ['Municiones, armas de fuego y parte de armas de fuego	','Cheques'],
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
    @apply text-blue mb-4 text-[15px] leading-7 font-normal ;
}
</style>
