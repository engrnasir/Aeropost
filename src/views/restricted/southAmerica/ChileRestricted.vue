<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }}
        </h2>
        <p class="snippet" v-html="info.desc1"></p>
        <table-vue :list="info.products1" :hasHeader="true" :colspan="2"/>
        <InformationVue :list="info.list1" />
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Restricted by Local Customs':'Restringido por las Aduanas Locales' }}
        </h2>
        <h3 class="heading">
            {{ lang==='en'? 'Restricted Products':'Productos restringidos' }}
        </h3>
        <p class="snippet" v-html="info.desc2"></p>
        <table-vue :list="info.products2" :hasHeader="true" :colspan="2"/>
        <InformationVue :list="info.list2" />

        

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'ChileRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            desc1:`
            PLEASE DO NOT SHIP THESE PRODUCTS TO YOUR MIAMI ADDRESS SINCE THEY CANNOT BE SHIPPED TO YOUR COUNTRY AND YOU WILL NEED TO PAY FOR THEIR DESTRUCTION OR FOR THEM TO BE RETURNED TO THE SHIPPER.<br><br>
            AEROPOST WILL NOT TRANSPORT THESE ITEMS AND NO CLAIMS WILL BE ACCEPTED FOR THEM. 
            `,
            products1:[
                ['Products'],
                ['Ammunitions and fire arms, BB and pellet guns, air guns or riffles, crossbows, professional sling-shots and the like, explosives','Any item with alcohol listed as its first ingredient'],
                ['Gas-powered tools	','Tear gas or pepper spray'],
                ['Lighters	','Batteries contain chemicals'],
                ['Poisons','	Pressure containers'],
                ['Matches','	Desodorants'],
                ['Nail polish	','*Car schocks'],
                ['Fur and animal products	','Gemstones'],
                ['Manuscripts	','Checks'],
                ['Academic, property and other titles','	Passports and identification documents'],
                ['Credit or debit cards','	Cash and coins'],
                ['Gift cards	','Stamps or transportation tickets of any kind'],
                ['Maps, geographic charts and other documents that indicate international borderlines and national territory limits.	','Firearms and ammunition'],
                ['Hoverboards',''],
            ],
            list1:['*Please note that the car shocks need a permit to enter the country, for more information please contact customer service.'],


            desc2:`
            THESE ITEMS HAVE CERTAIN LOCAL RESTRICTIONS OR MAY NEED SPECIAL PERMITS TO ENTER THE COUNTRY. PLEASE CONTACT CUSTOMER SERVICE FOR MORE INFORMATION.
            `,
            products2:[
                ['Products'],
                ['Creams and cosmetics	','Medication and drugs'],
                ['Pills, vitamin suplements	','Flammable substance and chemical'],
                ['Beauty products','**Consult with customer service'],
                ['Seeds','	Mouthwash'],
                ['Sunblock','	Sweetener, food flavoring and coloring products'],
                ['Perishables	','Medical equipment'],
                ['Food and drinks	','Wood'],
                ['Plants	','Radio controls and radar'],
                ['Tobacco',''],
            ],
            list2:['**If you have any questions please contact customer service.'],
            
        },
        es_info:{
            desc1:`
            POR FAVOR, NO ENVÍE ESTOS PRODUCTOS A SU DIRECCIÓN DE MIAMI YA QUE NO SE PUEDEN ENVIAR A SU PAÍS Y DEBERÁ PAGAR POR SU DESTRUCCIÓN O PARA DEVOLVERLOS AL REMITENTE.<br><br>
            AEROPOST NO TRANSPORTARÁ ESTOS ARTÍCULOS NI SE ACEPTARÁN RECLAMACIONES POR ELLOS.
            `,
            products1:[
                ['Productos'],
                ['Municiones y armas de fuego, escopetas de aire comprimido y perdigones, escopetas o rifles de aire comprimido, ballestas, hondas profesionales y similares, explosivos', 'Cualquier artículo que contenga alcohol como primer ingrediente'],
                ['Herramientas a gas', 'Gas lacrimógeno o gas pimienta'],
                ['Mecheros', 'Las baterías contienen químicos'],
                ['Venenos', 'Recipientes a presión'],
                ['Fósforos', 'Desodorantes'],
                ['Esmalte de uñas', '*Choques de coche'],
                ['Pieles y productos animales','Piedras preciosas'],
                ['Manuscritos','Cheques'],
                ['Títulos académicos, de propiedad y otros', 'Pasaportes y documentos de identificación'],
                ['Tarjetas de crédito o débito', 'Efectivo y monedas'],
                ['Tarjetas regalo', 'Sellos o títulos de transporte de cualquier clase'],
                ['Mapas, cartas geográficas y otros documentos que indiquen las fronteras internacionales y los límites del territorio nacional. ','Armas de fuego y municiones'],
                ['Aerotablas',''],
            ],
            list1:['*Tenga en cuenta que los amortiguadores de automóviles necesitan un permiso para ingresar al país, para obtener más información, comuníquese con el servicio al cliente.'],


            desc2:`
            ESTOS ARTÍCULOS TIENEN CIERTAS RESTRICCIONES LOCALES O PUEDEN NECESITAR PERMISOS ESPECIALES PARA INGRESAR AL PAÍS. PÓNGASE EN CONTACTO CON EL SERVICIO DE ATENCIÓN AL CLIENTE PARA OBTENER MÁS INFORMACIÓN.
            `,
            products2:[
                ['Productos'],
                ['Cremas y cosméticos', 'Medicamentos y drogas'],
                ['Pastillas, suplementos vitamínicos', 'Sustancias y productos químicos inflamables'],
                ['Productos de belleza','**Consultar con atención al cliente'],
                ['Semillas', 'Enjuague bucal'],
                ['Bloqueador solar', 'Productos edulcorantes, aromatizantes y colorantes alimentarios'],
                ['Perecederos','Equipos médicos'],
                ['Alimentos y bebidas', 'Madera'],
                ['Plantas', 'Radiocontroles y radares'],
                ['Tabaco',''],
            ],
            list2:['**Si tiene alguna pregunta, comuníquese con el servicio de atención al cliente.'],
            
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
