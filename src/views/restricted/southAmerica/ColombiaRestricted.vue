<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }}
        </h2>
        <p class="snippet" v-html="info.desc1"></p>
        <table-vue :list="info.products1" :hasHeader="true" :colspan="2"/>
        
        <p class="snippet" v-html="info.desc2"></p>
        <InformationVue :list="info.list1" />
        <p class="snippet" v-html="info.desc3"></p>

        

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'ColombiaRestricted',
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
            products1:[
                ['PRODUCTS'],
                ['Lubricating Oils	','Glass Ornament'],
                ['Air Bag	','Glass Container'],
                ['Shock new','	Mirror'],
                ['Used Shocks	','Medical Sterilization Machine'],
                ['Coals	Gata ','Hydraulic'],
                ['Car Wax	','Mineral Praphite presented in natural forms'],
                ['Check	','Liquid Hand Soap'],
                ['Check Book	','Laser'],
                ['Casino Chips	','Sexual Lubricant'],
                ['Casino Chips	','Wick Floor'],
                ['Blades for Machines	','Used Gear Shift Part'],
                ['Knives / Spoons	','Paintings'],
                ['Pruning knives	','Ceramic Plates'],
                ['Insect fogger	','Cleaning Material'],
                ['Lighters	','Car Suspension'],
                ['Motorcycle suspension','	Ink of any type'],
                ['Glass tube	','Glass Vase'],
                ['Laminated glass	','Car Wheel'],
                ['Dried fruits','	Comestible Seeds'],
                ['Sword	', 'Gun, Gun parts or ammunition'],
                ['co2 tank for paint ball	','Paint Ball Gun'],
                ['Gun pellets	','Matches'],
                ['Sex toys	','Medical, veterinarian or dental instruments'],
            ],


            desc2:`
                All items considered "fragile" (porcelains, ceramics, dishes, glassware) must be properly wrapped and packaged so that they are protected, this needs to be requested to the store where you purchased the item. If they are not perfectly packed Aeropost will not be responsible for items that the item arrive in poor condition.<br><br>
                <b>IMPORTANT SERVICE RECOMMENDATIONS</b>  Please take into account the following recommendations to ease the import process of your packages.
            `,
            list1:[
                'Commercial value must not exceed US$2000.',
                'Measurements should not exceed 1.50 m on any of its sides, nor 3 m of total perimeter.',
                'Weight should not exceed 50 kg.',
                'The number of items in on reference should not exceed a total of 6 if they are being shipped in the same package.',
            ],
            desc3:'Remember to contact our Customer Service department if you have any further questions.'
            
        },
        es_info:{
            desc1:`
                <b>Estos incluyen cualquier artículo que tenga alcohol como primer ingrediente, así como cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO.</b><br><br>
                NO ENVÍE ESTOS PRODUCTOS A SU DIRECCIÓN DE MIAMI YA QUE NO SE PUEDEN ENVIAR A SU PAÍS Y DEBERÁ PAGAR POR SU DESTRUCCIÓN O EL COSTO DE DEVOLVERLOS AL REMITENTE.
            `,
            products1:[
                ['PRODUCTOS'],
                ['Aceites lubricantes','Adorno de vidrio'],
                ['Bolsa de aire','Contenedor de vidrio'],
                ['Impacto nuevo', 'Espejo'],
                ['Choques usados','Máquina de esterilización médica'],
                ['Carbones Gata', 'Hidráulica'],
                ['Car Wax', 'Mineral Praphite presentado en formas naturales'],
                ['Cheque', 'Jabón Líquido para Manos'],
                ['Libro de cheques', 'Láser'],
                ['Fichas de casino', 'Lubricante sexual'],
                ['Fichas de casino', 'Piso de mecha'],
                ['Cuchillas para máquinas','Pieza de cambio de marcha usada'],
                ['Cuchillos / Cucharas', 'Pinturas'],
                ['Cuchillos de podar', 'Placas de cerámica'],
                ['Nebulizador de insectos','Material de limpieza'],
                ['Mecheros','Suspensión de coche'],
                ['Suspensión de motocicleta', 'Tinta de cualquier tipo'],
                ['Tubo de vidrio','Jarrón de vidrio'],
                ['Vidrio laminado','Rueda de coche'],
                ['Frutos secos', 'Semillas comestibles'],
                ['Espada', 'Pistola, Piezas o municiones de armas'],
                ['tanque de co2 para paint ball','Paint Ball Gun'],
                ['Perdigones', 'Fósforos'],
                ['Juguetes sexuales', 'Instrumentos médicos, veterinarios o dentales'],
            ],


            desc2:`
                Todos los artículos considerados "frágiles" (porcelana, cerámica, vajilla, cristalería) deben estar debidamente envueltos y empaquetados para que estén protegidos, esto debe solicitarse a la tienda donde adquirió el artículo. Si no están perfectamente embalados, Aeropost no se hará responsable de los artículos que lleguen en mal estado.<br><br>
                <b>RECOMENDACIONES IMPORTANTES DE SERVICIO</b> Por favor tome en cuenta las siguientes recomendaciones para facilitar el proceso de importación de sus paquetes.
            `,
            list1:[
                'El valor comercial no debe exceder los US$2000.',
                'Las medidas no deben exceder de 1,50 m en ninguno de sus lados, ni 3 m de perímetro total.',
                'El peso no debe exceder los 50 kg.',
                'La cantidad de artículos en referencia no debe exceder un total de 6 si se envían en el mismo paquete.',
            ],
            desc3:'Recuerde ponerse en contacto con nuestro departamento de Atención al Cliente si tiene más preguntas.'
            
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
