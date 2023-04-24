<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }}
        </h2>
        <p class="snippet font-semibold" v-html="info.desc1"></p>      
        <information-vue :list="info.list1" />
        <CardGridVue :list="info.products1"/>


        <h2 class="main-heading">
            {{ lang==='en'? 'Special Handling Product':'Producto de manejo especial' }}
        </h2>
        <p class="snippet font-semibold" v-html="info.desc2"></p>      
        <information-vue :list="info.list2" />
        <CardGridVue :list="info.products2"/>

        <h2 class="main-heading">
            {{ lang==='en'? 'Restricted by Local Customs':'Restringido por las Aduanas Locales' }}
        </h2>
        <information-vue :list="info.list3" />
        <CardGridVue :list="info.products3"/>
        
    </div>
  
</template>

<script>
import InformationVue from '@/components/rates/Information.vue';
import CardGridVue from '@/components/restricted/CardGrid.vue';
import { mapState } from 'vuex';
export default {
  name: 'JamaicaRestricted',
  components:{
      InformationVue,
      CardGridVue
  },
  head(){
    meta:{
        title:'ho'
    }
  },
  data(){
    return{
        en_info:{
            desc1:`These are defined as any quantity of FLAMMABLE, EXPLOSIVE or CORROSIVE material. These items include but are not limited to:`,
            list1:['PLEASE DO NOT SHIP THESE PRODUCTS TO YOUR MIAMI ADDRESS AS THEY CANNOT BE SHIPPED TO YOUR COUNTRY AND YOU WILL NEED TO PAY FOR THEIR DESTRUCTION OR THE COST OF RETURNING THEM TO THE SHIPPER COST.'],
            products1:[
                {img:'Ammunition.png', title:'Ammunition, firearms and firearm parts'},
                {img:'tear-gas.png', title:'Lighters'},
                {img:'item-with-alcohol.png', title:'Any item with alcohol listed as its first ingredient'},
                {img:'matches(1).png', title:'Matches'},
                {img:'cleaning-solutions.png', title:'Cleaning solutions'},
                {img:'car-shocks.png', title:'Car shocks'},
                {img:'Firecrackers.png', title:'Fireworks'},
                {img:'pressure-containers(1).png', title:'Pressure containers'},
                {img:'gas-poisons(1).png', title:'Gas, poisons'},
                {img:'tear-gas.png', title:'Tear gas or pepper spray'},
                {img:'gas-powered.png', title:'Gas - powered tools'},
                {img:'wet-cell-batteries.png', title:'Wet-cell batteries'},                
            ],
            
            
            desc2:`Defined as small quantities of personal use items.`,
            list2:['SHIPMENTS OF THESE GOODS TAKES A MINIMUM OF TWO WEEKS. AN ADDITIONAL FEE OF US $2.00 PER PACKAGE APPLIES:'],
            products2:[
                {img:'aerosols.png', title:'Aerosol cans'},
                {img:'nail-polish.png', title:'Nail polish'},
                {img:'beauty-powders.png', title:'Beauty powders'},
                {img:'non-corrosive-cleaning-solutions.png', title:'Non-corrosive cleaning solutions'},
                {img:'beauty-products.png', title:'Beauty products'},
                {img:'oil-candles.png', title:'Oil candles'},
                {img:'creams.png', title:'Creams'},
                {img:'perfumes.png', title:'Perfumes'},
                {img:'deodorants.png', title:'Deodorants'},
                {img:'sunblock.png', title:'Sunblock'},
                {img:'gels.png', title:'Gels'},
                {img:'sweetener-food-flavoring.png', title:'Sweetener, food flavoring and coloring products'},
                {img:'mouthwash.png', title:'Mouthwash'},
                {img:'car-shocks.png', title:'Car Shocks'},
                {img:'hoverboards.png', title:'Hoverboards'},
            ],

            list3:['THESE ITEMS HAVE CERTAIN LOCAL RESTRICTIONS OR MAY NEED SPECIAL PERMITS TO ENTER THE COUNTRY. PLEASE CONTACT CUSTOMER SERVICE FOR MORE INFORMATION.'],
            products3:[
                {img:'Furs.png', title:'Fur and animal products'},
                {img:'plant-seeds.png', title:'Plant seeds'},
                {img:'explosives.png', title:'Explosives'},
                {img:'plants.png', title:'Plants'},
                {img:'high-value-items.png', title:'Items of extremely high value'},
                {img:'radar-detector.png', title:'Radar detectors'},
                {img:'radar-detector.png', title:'Firearms and ammunition'},
                {img:'tobacco.png', title:'Tobacco'},
                {img:'deodorants.png', title:'Illegal drugs'},
                {img:'toxic-substances.png', title:'Toxic substances'},
                {img:'lasers.png', title:'Lasers of any kind'},
                {img:'toy-guns.png', title:'Toy guns'},
                {img:'live-animals.png', title:'Live animals'},
                {img:'wood.png', title:'Wood'},
                {img:'perishable-items.png', title:'Perishable items'},
            ],
        },
        es_info:{
            desc1:`Se definen como cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO. Estos artículos incluyen pero no se limitan a:`,
            list1:['POR FAVOR, NO ENVÍE ESTOS PRODUCTOS A SU DIRECCIÓN DE MIAMI YA QUE NO SE PUEDEN ENVIAR A SU PAÍS Y DEBERÁ PAGAR POR SU DESTRUCCIÓN O EL COSTO DE DEVOLUCIÓN A COSTO DEL ENVÍO.'],
            products1:[
                {img:'Ammunition.png', title:'Municiones, armas de fuego y piezas de armas de fuego'},
                {img:'tear-gas.png', title:'encendedores'},
                {img:'item-with-alcohol.png', title:'Cualquier artículo con alcohol listado como su primer ingrediente.'},
                {img:'matches(1).png', title:'Partidos'},
                {img:'cleaning-solutions.png', title:'Soluciones de limpieza'},
                {img:'car-shocks.png', title:'Amortiguadores de coche'},
                {img:'Firecrackers.png', title:'Fuegos artificiales'},
                {img:'pressure-containers(1).png', title:'Recipientes a presión'},
                {img:'gas-poisons(1).png', title:'gases, venenos'},
                {img:'tear-gas.png', title:'Gas lacrimógeno o gas pimienta'},
                {img:'gas-powered.png', title:'Herramientas a gasolina'},
                {img:'wet-cell-batteries.png', title:'Baterías de celda húmeda'},                
            ],
            
            
            desc2:`Definido como pequeñas cantidades de artículos de uso personal.`,
            list2:['LOS ENVÍOS DE ESTAS MERCANCÍAS TARDAN UN MÍNIMO DE DOS SEMANAS. APLICA UN CARGO ADICIONAL DE US $2.00 POR PAQUETE:'],
            products2:[
                {img:'aerosols.png', title:'Latas de aerosol'},
                {img:'nail-polish.png', title:'Esmalte de uñas'},
                {img:'beauty-powders.png', title:'Polvos de belleza'},
                {img:'non-corrosive-cleaning-solutions.png', title:'Soluciones de limpieza no corrosivas'},
                {img:'beauty-products.png', title:'Productos de belleza'},
                {img:'oil-candles.png', title:'velas de aceite'},
                {img:'creams.png', title:'Cremas'},
                {img:'perfumes.png', title:'Perfumes'},
                {img:'deodorants.png', title:'Desodorantes'},
                {img:'sunblock.png', title:'Bloqueador solar'},
                {img:'gels.png', title:'Geles'},
                {img:'sweetener-food-flavoring.png', title:'Productos edulcorantes, aromatizantes y colorantes alimentarios'},
                {img:'mouthwash.png', title:'Enjuague bucal'},
                {img:'car-shocks.png', title:'Amortiguadores de coche'},
                {img:'hoverboards.png', title:'hoverboards'},
            ],

            list3:['ESTOS ARTÍCULOS TIENEN CIERTAS RESTRICCIONES LOCALES O PUEDEN NECESITAR PERMISOS ESPECIALES PARA INGRESAR AL PAÍS. PÓNGASE EN CONTACTO CON EL SERVICIO DE ATENCIÓN AL CLIENTE PARA OBTENER MÁS INFORMACIÓN.'],
            products3:[
                {img:'Furs.png', title:'Pieles y productos animales'},
                {img:'plant-seeds.png', title:'Semillas de planta'},
                {img:'explosives.png', title:'explosivos'},
                {img:'plants.png', title:'Plantas'},
                {img:'high-value-items.png', title:'Artículos de valor extremadamente alto'},
                {img:'radar-detector.png', title:'Detectores de radar'},
                {img:'radar-detector.png', title:'Armas de fuego y municiones'},
                {img:'tobacco.png', title:'Tabaco'},
                {img:'deodorants.png', title:'Drogas ilegales'},
                {img:'toxic-substances.png', title:'Sustancias toxicas'},
                {img:'lasers.png', title:'Láseres de cualquier tipo'},
                {img:'toy-guns.png', title:'pistolas de juguete'},
                {img:'live-animals.png', title:'Animales vivos'},
                {img:'wood.png', title:'Madera'},
                {img:'perishable-items.png', title:'artículos perecederos'},
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
