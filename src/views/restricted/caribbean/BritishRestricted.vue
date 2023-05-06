<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Hazmat Products':'Productos de materiales peligrosos' }}
        </h2>
        <p class="snippet" v-html="info.desc1"></p>
        
        <table-vue :list="info.products" :hasHeader="true" :colspan="2"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Restricted by Local Customs':'Restringido por las Aduanas Locales' }}
        </h2>
        <p class="snippet" v-html="info.desc2"></p>
        <table-vue :list="info.products1" :hasHeader="true" :colspan="2"/>

        <InformationVue :list="info.list" />

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'BristishRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            desc1:`
            <b>Products that fall under this category include, but are not limited to any items with alcohol listed as their first ingredient, any quantity of flammable, explosive, and contents under pressure or corrosive material.</b><br><br>
            Packages that fall under these classifications may be held as "Consumer Commodities or Dangerous Goods Holds". Consumer Commodity is a term used in the freight industry for "medium" risk hazmat products in limited quantities. While these products may not be allowed to ship with our Regular Air and Maritime Cargo services, because of their hazmat properties and Airline/Ship safety regulations, we do have special manifests for each account type, for some hazmat products. <br><br>
            <b>Air accounts</b> - Hazmat products are shipped free of charge on two special flights per week!<br><br>
            Manifesting every Tuesday, flying into the BVI on Wednesday or Thursday, and again manifesting every Thursday, flying into the BVI on Friday or Saturday.<br><br>
            <b>Maritime accounts</b> - Hazmat products are shipped free of charge on three special manifests per week! Manifesting every Tuesday, Wednesday, and Thursday.<br><br>
            <b>**Due to Maritime carrier restrictions, certain types of lithium batteries and those over 5kgs are only manifested on Wednesday. </b><br><br>
            <b>**Please note**</b> Some items cannot be shipped via Air or Maritime routes due to carrier or local restrictions. Additionally, you may be required to supply the Safety Data Sheet, provided by your supplier, if our carriers or local government agencies request it. <br><br>
            If you would like us to check if a particular good may be held when arriving in Miami or ship with us, via Air or Maritime routes, please e-mail us at <a href="mailto:help@tortolaexpress.com" class="text-semibold">help@tortolaexpress.com</b> with the link to the product you wish to purchase so we can advise you accordingly.<br>
            `,
            products:[
                ['Hazmat products   **verify with your Local Office** '],
                ['Alcoholic beverages	','Matches'],
                ['Aerosol cans**	 ','Mouthwash'],
                ['Chemical substances**	',' Nail polish'],
                ['Cleaning solutions**	',' Oil candles'],
                ['Creams	','Perfumes and colognes'],
                ['Deodorants	','Personal beauty products'],
                ['Pressure containers**	','Fragances and cosmetics'],
                ['Gas powered tools	','Wet-cell batteries**'],
                ['Gasoline, fuel**	','Gemstones**'],
                ['Gels	','Cash and coins**'],
                ['Items of extremely high value**	','Lighters'],
            ],
            desc2:`THESE PRODUCTS HAVE CERTAIN CARRIER/LOCAL RESTRICTIONS OR MAY NEED SPECIAL PERMITS TO ENTER THE TERRITORY. PLEASE CONTACT CUSTOMER SERVICE FOR MORE INFORMATION.`,

            products1:[
                ['Products**'],
                ['Ammunition,firearms,and firearm parts/accesories	','Motor Vehicle'],
                ['Drugs	',' Perishable items'],
                ['Explosive material	',' Poisons/Toxic Substances'],
                ['Fireworks	 ','Spears/Swords'],
                ['Live Animals	','Stun Gun/Taser'],
                ['Live Plants/Soil/Roots	','Tear gas or pepper spray'],
            ],
            list:[
                '**You may be required to apply for a permit to import these goods. ',
                'Please contact <a href="https://courier.aeropost.com/site/en/pagenotfound" class="text-semibold text-blue"> Customer Service</a> for more information.'
            ]

        },
        es_info:{
            desc1:`
            <b>Los productos que entran en esta categoría incluyen, pero no se limitan a, cualquier artículo que tenga alcohol como su primer ingrediente, cualquier cantidad de material inflamable, explosivo y contenido bajo presión o corrosivo.</b><br><br >
             Los paquetes que se incluyen en estas clasificaciones pueden retenerse como "Productos básicos de consumo o Retenciones de mercancías peligrosas". Mercancía de consumo es un término utilizado en la industria del transporte para productos de materiales peligrosos de riesgo "medio" en cantidades limitadas. Si bien es posible que no se permita el envío de estos productos con nuestros servicios regulares de carga aérea y marítima, debido a sus propiedades de materiales peligrosos y las normas de seguridad de las aerolíneas y los barcos, tenemos manifiestos especiales para cada tipo de cuenta, para algunos productos de materiales peligrosos. <br><br>
             <b>Cuentas aéreas</b>: ¡los productos Hazmat se envían sin cargo en dos vuelos especiales por semana!<br><br>
             Manifestándose todos los martes, volando a las Islas Vírgenes Británicas los miércoles o jueves, y manifestándose de nuevo todos los jueves, volando a las Islas Vírgenes Británicas los viernes o sábados.<br><br>
             <b>Cuentas marítimas</b>: ¡los productos Hazmat se envían sin cargo en tres manifiestos especiales por semana! Se manifiesta todos los martes, miércoles y jueves.<br><br>
             <b>**Debido a las restricciones de los transportistas marítimos, ciertos tipos de baterías de litio y las que pesan más de 5 kg solo se manifiestan los miércoles. </b><br><br>
             <b>**Tenga en cuenta**</b> Algunos artículos no se pueden enviar por rutas aéreas o marítimas debido a restricciones locales o del transportista. Además, es posible que deba proporcionar la Hoja de datos de seguridad, proporcionada por su proveedor, si nuestros transportistas o las agencias gubernamentales locales lo solicitan. <br><br>
             Si desea que verifiquemos si un bien en particular puede ser retenido al llegar a Miami o enviarlo con nosotros, por rutas aéreas o marítimas, envíenos un correo electrónico a <a href="mailto:help@tortolaexpress.com" class= "text-semibold">help@tortolaexpress.com</b> con el enlace del producto que desea adquirir para que podamos asesorarlo.<br>
            `,
            products:[
                ['Productos de materiales peligrosos **verifique con su oficina local** '],
                ['Bebidas alcohólicas', 'Fósforos'],
                ['Latas de aerosol** ','Enjuague bucal'],
                ['Sustancias químicas**', 'Esmalte de uñas'],
                ['Soluciones de limpieza**', 'Velas de aceite'],
                ['Cremas', 'Perfumes y colonias'],
                ['Desodorantes', 'Productos de belleza personal'],
                ['Envases a presión** ','Fragancias y cosméticos'],
                ['Herramientas a gasolina','Baterías de celda húmeda**'],
                ['Gasolina, combustible** ','Piedras preciosas**'],
                ['Geles','Efectivo y monedas**'],
                ['Artículos de valor extremadamente alto** ','Mecheros'],
            ],
            desc2:`ESTOS PRODUCTOS TIENEN CIERTAS RESTRICCIONES LOCALES O DEL TRANSPORTADOR O PUEDEN NECESITAR PERMISOS ESPECIALES PARA INGRESAR AL TERRITORIO. PÓNGASE EN CONTACTO CON EL SERVICIO DE ATENCIÓN AL CLIENTE PARA OBTENER MÁS INFORMACIÓN.`,

            products1:[
                ['Productos**'],
                ['Municiones, armas de fuego y repuestos/accesorios de armas de fuego', 'Vehículos de motor'],
                ['Medicamentos', 'Artículos perecederos'],
                ['Material explosivo', 'Venenos/Sustancias tóxicas'],
                ['Fuegos artificiales','Lanzas/Espadas'],
                ['Animales vivos', 'Pistola paralizante/Taser'],
                ['Plantas vivas/Suelo/Raíces','Gas lacrimógeno o gas pimienta'],
            ],
            list:[
                '**Es posible que deba solicitar un permiso para importar estos productos. ',
                'Comuníquese con <a href="https://courier.aeropost.com/site/en/pagenotfound" class="text-semibold text-blue"> Atención al cliente</a> para obtener más información.'
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
