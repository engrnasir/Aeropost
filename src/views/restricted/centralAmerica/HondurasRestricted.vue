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

        <tableVue :list="info.table1" :hasHeader="true" :colspan="2"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Special Handling Product':'Producto de manejo especial' }}
        </h2>
        <p class="snippet">
            {{ 
                lang==='en'? 
                'Defined as small quantities of personal use items. THESE GOODS ARE SHIPPED ONCE EVERY 30 DAYS. AN ADDITIONAL FEE OF US$25.00 + IVA  PER PACKAGE APPLIES:'
                :'Definido como pequeñas cantidades de artículos de uso personal. ESTAS MERCANCÍAS SE ENVÍAN UNA VEZ CADA 30 DÍAS. APLICA UN CARGO ADICIONAL DE US$25.00 + IVA POR PAQUETE:' 
            }}</p>
        <tableVue :list="info.products" :hasHeader="true" :colspan="2"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Restricted by Local Customs':'Restringido por las Aduanas Locales' }}
        </h2>
        <p class="snippet">{{ lang==='en'? 'THESE ITEMS HAVE RESTRICTIONS TO ENTER THE COUNTRY.':'ESTOS ARTÍCULOS TIENEN RESTRICCIONES PARA EL INGRESO AL PAÍS.' }}</p>
        <tableVue :list="info.products1" :hasHeader="true" :colspan="2"/>

        <InformationVue :list="info.list1" />
                
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'HondurasSapRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            table1:[
                ['These items include but are not limited to:'],
                ['Ammunition and firearms	','Lighters'],
                ['Any item with alcohol listed as its first ingredient	','Wet-cell batteries'],
                ['Cleaning solutions','	Poisons'],
                ['Fireworks','	Pressure containers'],
                ['Gas	','Matches'],
                ['Tear gas or pepper spray	','Gas powered tools'],
                ['Cigarette rolling paper	','Products containing glycerin'],
                ['Medication or supplements containing amphetamines or any other substances prohibited by the national drug administration office.','	Products containing glycerin'],
                ['Manuscripts	','Checks'],
                ['Academic, property and other titles','	Passports and identification documents'],
                ['Credit or debit cards	','Cash and coins'],
                ['Gift cards	','Stamps or transportation tickets of any kind'],
                ['Gemstones	','Value certificates and stock of any kind'],
            ],

            products:[
                ['These items include but are not limited to:'],
                ['Aerosol cans','	Nail polish'],
                ['Beauty powders	','Car shocks'],
                ['Beauty products	','Oil candles'],
                ['Creams	','Perfumes'],
                ['Gels	','Sunblock'],
                ['Non-corrosive cleaning solutions	','Sweetener, food flavoring and coloring products'],
                ['Edible products	','Medical equipment'],
                ['Mouthwash','	Seeds and plants'],
                ['Hoverboards',''],
            ],

            products1:[
                ['These products include but are not limited to:'],
                ['Category M and violence-inducing video games	','Any kind of pornographic material'],
                ['Electronic cigarrettes	','Sex toys'],
                ['Ammunition and firearm parts	','X-Ray material and equipment'],
                ['Asbestos friction products	','Radiation material and equipment'],
                ['Commercial amounts of :',''],
                ['Vehicle parts <br>T-shirts and sports equipment<br>Any kind of counterfeit and pirated goods','	Seeds and plants'],
                ['Medical equipment ','	Edible products'],
            ],

            list1:[
                "Honduran Customs may seize some of these products, relieving Aerocasillas of all responsibility. However, you will receive the corresponding certificate including a seized goods statement."
            ]
        },
        es_info:{
            table1:[
                ['Estos elementos incluyen pero no se limitan a:'],
                ['Municiones y armas de fuego', 'Mecheros'],
                ['Cualquier artículo con alcohol incluido como su primer ingrediente', 'Baterías de celda húmeda'],
                ['Soluciones de limpieza', 'Venenos'],
                ['Fuegos artificiales',' Recipientes a presión'],
                ['Gasolina','Fósforos'],
                ['Gas lacrimógeno o gas pimienta', 'Herramientas a gas'],
                ['Papel para liar cigarrillos', 'Productos que contienen glicerina'],
                ['Medicamentos o suplementos que contengan anfetaminas o cualquier otra sustancia prohibida por la administración nacional de drogas', 'Productos que contengan glicerina'],
                ['Manuscritos','Cheques'],
                ['Títulos académicos, de propiedad y otros', 'Pasaportes y documentos de identificación'],
                ['Tarjetas de crédito o débito', 'Efectivo y monedas'],
                ['Tarjetas regalo', 'Sellos o títulos de transporte de cualquier clase'],
                ['Piedras preciosas', 'Certificados de valor y acciones de cualquier clase'],
            ],

            products:[
                ['Estos elementos incluyen pero no se limitan a:'],
                ['Latas de aerosol', 'Esmalte de uñas'],
                ['Polvos de belleza', 'Choques de coche'],
                ['Productos de belleza','Velas de aceite'],
                ['Cremas', 'Perfumes'],
                ['Gels','Bloqueador solar'],
                ['Soluciones de limpieza no corrosivas', 'Productos edulcorantes, aromatizantes y colorantes alimentarios'],
                ['Productos comestibles', 'Equipos médicos'],
                ['Enjuague bucal', 'Semillas y plantas'],
                ['Aerotablas',''],
            ],

            products1:[
                ['Estos productos incluyen pero no se limitan a:'],
                ['Categoría M y videojuegos que inducen a la violencia', 'Cualquier tipo de material pornográfico'],
                ['Cigarrillos electrónicos', 'Juguetes sexuales'],
                ['Municiones y repuestos para armas de fuego', 'Material y equipos de rayos X'],
                ['Productos de fricción de amianto', 'Materiales y equipos de radiación'],
                ['Cantidades comerciales de:',''],
                ['Recambios de vehículos <br>Camisetas y material deportivo<br>Cualquier tipo de mercancía falsificada y pirateada', 'Semillas y plantas'],
                ['Equipos médicos', 'Productos comestibles'],
            ],

            list1:[
                "La Aduana de Honduras puede incautar algunos de estos productos, liberando a Aerocasillas de toda responsabilidad. Sin embargo, recibirá el certificado correspondiente que incluye una declaración de bienes incautados."
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
    @apply text-blue mb-4;
}
</style>
