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

        <tableVue :list="info.table1" :hasHeader="true"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Special Handling Product':'Producto de manejo especial' }}
        </h2>
        <p class="snippet">{{ lang==='en'? 'Defined as small quantities of personal use items.':'Definido como pequeñas cantidades de artículos de uso personal.' }}</p>
        <p class="snippet">{{ lang==='en'? 'Shipments of these goods are once every 15 days. An Additional fee of US $18.00 + VAT per packages':'Los envíos de estos bienes son una vez cada 15 días. Una tarifa adicional de US $ 18.00 + IVA por paquete' }}</p>
        <p class="snippet">{{ lang==='en'? 'These items include but are not limited to:':'Estos artículos incluyen pero no se limitan a:' }}</p>
        <tableVue :list="info.products" :hasHeader="true"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'Restricted by Local Customs':'Restringido por las Aduanas Locales' }}
        </h2>
        <p class="snippet">{{ lang==='en'? 'These products that require the permission of the National Drug Directorate, the Ministry of Health or the Ministry of Defense:':'Estos productos que requieren el permiso de la Dirección Nacional de Drogas, el Ministerio de Salud o el Ministerio de Defensa:' }}</p>
        <p class="snippet">{{ lang==='en'? 'THESE ITEMS HAVE CERTAIN OF LOCAL RESTRICTIONS OR MAY NEED SPECIAL PERMITS TO ENTER THE COUNTRY. PLEASE CONTACT CUSTOMER SERVICE FOR MORE INFORMATION.':'ESTOS ARTÍCULOS TIENEN CIERTAS RESTRICCIONES LOCALES O PUEDEN NECESITAR PERMISOS ESPECIALES PARA INGRESAR AL PAÍS. PÓNGASE EN CONTACTO CON EL SERVICIO DE ATENCIÓN AL CLIENTE PARA OBTENER MÁS INFORMACIÓN.' }}</p>
        <tableVue :list="info.products1" :hasHeader="true"/>
        
        <InformationVue :list="info.list1" />
                

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'ElSalvadorRestricted',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            
            table1:[
                ['These items include but are not limited to:',''],
                ['Ammunition, firearms and firearm parts ','Lighters'],
                ['Any item with alcohol listed as its first ingredient','Wet-cell batteries'],
                ['Cleaning solutions','Poisons'],
                ['Fireworks','Pressure containers'],
                ['Gas','Matches'],
                ['Tear gas or pepper spray', 'Gas powered tools'],
                ['Cigarette rolling paper', 'Products containing glycerin'],
                ['Medication or supplements containing amphetamines or any other substances prohibited by the national drug administration office.', 'Products containing glycerin'],
            ],
            products:[
                ['Products',''],
                ['Aerosol cans','Nail polish'],
                ['Beauty powders ','Aerosol cans'],
                ['Beauty products ','Oil candles'],
                ['Creams ','Perfumes'],
                ['Gels','Sunblock'],
                ['Non-corrosive cleaning solutions  ','Sweetener, food flavoring and coloring products'],
                ['Mouthwash ','Car shocks'],
                ['Shoks absorber ','Lithium batteries (6 lb and up), including laptop batteries'],
                ['Hoverboards',''],
            ],
            products1:[
                ['PRODUCTS',''],
                ['Perfumes, creams and cosmetics','Seeds'],
                ['Pressure containers','Plants'],
                ['Medical equipment ','Radio controls and radars'],
                ['Explosives and ammunition ','Tobacco'],
                ['Ammunition, firearms and firearm parts (including air-powered arms and paintball arms)  ','Toxic substances'],
                ['Food and beverages ','Wood'],
                ['Live animals','Precursors and chemical substances'],
                ['Aerosoles','Animal furs and skins'],
                ['Energy saving merchandise','Medicines, drugs and narcotics'],
                ['Items of extremely high value	','Toothpaste, mouthwash, shampoo,etc.'],
                ['Paints','Cleaning solutions'],
                ['Car batteries','	Sex toys'],
                ['Fluorescent Lamp','Swords and knives for hunting or camping'],
                ['Binoculars and other items of potential military use.',''],
            ],
            list1:[
                'If you decide to ship these products under the categories where they belong you must have a permit, which can be processed by the client or through us.',
                'These type of permits take a little longer to go through customs procedures because they must have the approval of the relevant ministry to begin the process.',
            ]
        },
        es_info:{
            table1:[
                ['Estos elementos incluyen pero no se limitan a:',''],
                ['Municiones, armas de fuego y repuestos de armas de fuego', 'Mecheros'],
                ['Cualquier artículo con alcohol incluido como su primer ingrediente', 'Baterías de celda húmeda'],
                ['Soluciones de limpieza','Venenos'],
                ['Fuegos artificiales','Contenedores a presión'],
                ['Gasolina','Fósforos'],
                ['Gas lacrimógeno o gas pimienta', 'Herramientas a gas'],
                ['Papel para liar cigarrillos', 'Productos que contienen glicerina'],
                ['Medicamentos o suplementos que contengan anfetaminas o cualquier otra sustancia prohibida por la oficina nacional de administración de drogas.', 'Productos que contengan glicerina'],
            ],
            products:[
                ['Productos',''],
                ['Latas de aerosol', 'Esmalte de uñas'],
                ['Polvos de belleza', 'Latas de aerosol'],
                ['Productos de belleza','Velas de aceite'],
                ['Cremas', 'Perfumes'],
                ['Gels','Bloqueador solar'],
                ['Soluciones de limpieza no corrosivas', 'Productos edulcorantes, aromatizantes y colorantes alimentarios'],
                ['Enjuague bucal', 'Choques de coche'],
                ['Absorbedor de choques', 'Baterías de litio (6 lb y más), incluidas baterías de portátiles'],
                ['Aerotablas',''],
            ],
            products1:[
                ['PRODUCTOS',''],
                ['Perfumes, cremas y cosméticos', 'Semillas'],
                ['Contenedores a presión','Plantas'],
                ['Equipamiento médico', 'Radiomandos y radares'],
                ['Explosivos y municiones', 'Tabaco'],
                ['Municiones, armas de fuego y piezas de armas de fuego (incluidas las armas neumáticas y las armas de paintball)', 'Sustancias tóxicas'],
                ['Alimentos y bebidas', 'Madera'],
                ['Animales vivos','Precursores y sustancias químicas'],
                ['Aerosoles', 'Pieles y pieles de animales'],
                ['Mercancías ahorradoras de energía','Medicamentos, drogas y estupefacientes'],
                ['Artículos de valor extremadamente alto', 'Pasta de dientes, enjuague bucal, champú, etc.'],
                ['Pinturas','Soluciones de limpieza'],
                ['Baterías de coche', 'Juguetes sexuales'],
                ['Lámpara fluorescente', 'Espadas y cuchillos para cazar o acampar'],
                ['Binoculares y otros artículos de potencial uso militar.',''],
            ],
            list1:[
                'Si decide enviar estos productos bajo las categorías a las que pertenecen, debe tener un permiso, que puede ser tramitado por el cliente o a través de nosotros.',
                'Este tipo de permisos tardan un poco más en pasar por los trámites aduaneros porque deben contar con la aprobación del ministerio correspondiente para iniciar el trámite',
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
