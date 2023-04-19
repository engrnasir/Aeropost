<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Prohibited Material':'Material Prohibido' }}
        </h2>
        <p class="snippet" v-html="info.desc1"></p>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Consumer Commodity Air':'Consumo de aire de productos básicos' }}
        </h2>
        <p class="snippet">
            {{ lang==='en'? 'Material that can travel via AIR shipment. Currently approved once every 15-days. Additional handling cost of US$15.':'Material que puede viajar vía envío AÉREO. Actualmente aprobado una vez cada 15 días. Costo de manejo adicional de US$15.' }}<br><br>
            {{ lang==='en'? 'Customer may require for an AIR consumer Commodity to fly unscheduled, however the cost to cut AWB is US$125.':'El cliente puede solicitar que un producto de consumo de AIR vuele sin programar, sin embargo, el costo de reducir el AWB es de US $ 125.' }}
        </p>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Consumer Commodity Maritime':'Consumo Mercancía Marítima' }}
        </h2>
        <p class="snippet">
            {{ lang==='en'? 'Material that can travel via Maritime Service Shipment. Currently approved once per week. Additional handling cost of US$15. ':'Material que puede viajar vía Envío de Servicio Marítimo. Actualmente aprobado una vez por semana. Costo de manejo adicional de US$15.' }}
        </p>

        <table-vue :list="info.table1" :hasHeader="true"/>

        <information-vue :list="['For more information please contact customer service.']"/>



        

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'AnguillaRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            desc1:`
                Material Not accepted by AEROPOST.Cannot be shipped Air or Maritime. <br>
                These include any item with alcohol listed as their first ingredient, as well as any amount of FLAMMABLE, EXPLOSIVE or CORROSIVE material.<br>
                PLEASE DO NOT SHIP THESE PRODUCTS TO THE MIAMI ADDRESS SINCE IT CANNOT BE SHIPPED TO DESTINATION, CUSTOMER WILL NEED TO PAY FOR ITS DISPOSAL OR FOR SHIPMENT TO BE RETURNED TO THE SHIPPER.<br>
                AEROPOST WILL NOT TRANSPORT THESE ITEMS AND NO CLAIMS WILL BE ACCEPTED FOR IT.<br>
            `,
            table1:[
                ['Prohibited','Consumer Commodity AIR','Consumer Commodity MARITIME'],
                ['Liquor','Creams','Creams'],
                ['Ammunition, firearms and firearm parts','Deodorants','Deodorants'],
                ['Chemical substances ','Fragrances and cosmetics ','Fragrances and cosmetics '],
                ['Explosive material','Gels','Gels'],
                ['Fireworks','Medical equipment','Medical equipment'],
                ['Gas powered tools, Poisons','Medication (With Prescription)','Medication (With Prescription)'],
                ['Gasoline, fuel','Mouthwash','Mouthwash'],
                ['Items of extremely high value','Perfumes and colognes','Perfumes and colognes'],
                ['Live animals','',''],
                ['Value certificates and stock of any kind','Personal beauty products','Personal beauty products'],
                ['Checks','Car shocks (Only unshceduled)','Car shocks'],
                ['Passports and identification documents','Sweeteners, food flavor or coloring products','Sweeteners, food flavor or coloring products'],
                ['Cash and coins','','Aerosol cans'],
                ['Stamps or transportation tickets of any kind','','Cleaning solutions'],
                ['Perishable items','','Lighters'],
                ['Plants','','Hoverboards'],
                ['Tear gas or pepper spray','','Nail polish'],
                ['Tobacco','','Oil candles'],
                ['Wet-cell batteries','','Pressure containers'],
                ['Matches','',''],
                ['Manuscripts','',''],
                ['Academic, property and other titles','',''],
                ['Credit or debit cards','',''],
                ['Gift cards','',''],
                ['Gemstones','',''],
            ]
        },
        es_info:{
            desc1:`
                Material No aceptado por AEROPOST. No puede ser enviado Aéreo o Marítimo. <br>
                Estos incluyen cualquier artículo que contenga alcohol como su primer ingrediente, así como cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO.<br>
                POR FAVOR, NO ENVÍE ESTOS PRODUCTOS A LA DIRECCIÓN DE MIAMI YA QUE NO SE PUEDEN ENVIAR AL DESTINO, EL CLIENTE DEBERÁ PAGAR POR SU ELIMINACIÓN O PARA QUE EL ENVÍO SE DEVUELVA AL REMITENTE.<br>
                AEROPOST NO TRANSPORTARÁ ESTOS ARTÍCULOS NI SE ACEPTARÁN RECLAMACIONES POR ÉL.<br>
            `,
            table1:[
                ['Prohibido','Producto de consumo AÉREO','Producto de consumo MARÍTIMO'],
                ['Licor','Cremas','Cremas'],
                ['Municiones, armas de fuego y piezas de armas de fuego', 'Desodorantes', 'Desodorantes'],
                ['Sustancias químicas', 'Fragancias y cosméticos', 'Fragancias y cosméticos'],
                ['Material explosivo','Geles','Geles'],
                ['Fuegos artificiales','Equipo médico','Equipo médico'],
                ['Herramientas a gas, venenos','Medicamentos (con receta)','Medicamentos (con receta)'],
                ['Gasolina, combustible','Enjuague bucal','Enjuague bucal'],
                ['Artículos de altísimo valor','Perfumes y colonias','Perfumes y colonias'],
                ['Animales vivos','',''],
                ['Certificados de valor y acciones de cualquier clase','Productos de belleza personal','Productos de belleza personal'],
                ['Chequeos','Amortiguadores de coche (Solo no programados)','Amortiguadores de coche'],
                ['Pasaportes y documentos de identificación','Edulcorantes, productos colorantes o aromatizantes alimentarios','Edulcorantes, productos colorantes o aromatizantes alimentarios'],
                ['Efectivo y monedas','','Latas de aerosol'],
                ['Sellos o títulos de transporte de cualquier clase','','Soluciones de limpieza'],
                ['Artículos perecederos','','Encendedores'],
                ['Plantas','','Hoverboards'],
                ['Gas lacrimógeno o gas pimienta','','Esmalte de uñas'],
                ['Tabaco','','Velas de aceite'],
                ['Baterías de celda húmeda','','Contenedores a presión'],
                ['Partidos','',''],
                ['Manuscritos','',''],
                ['Títulos académicos, de propiedad y otros','',''],
                ['Tarjetas de credito o debito','',''],
                ['Tarjetas de regalo','',''],
                ['Piedras preciosas','',''],
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
