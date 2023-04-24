<template>
    <div>
        <h2 class="main-heading">
            {{ lang==='en'? 'Forbidden Products':'Productos Prohibidos' }}
        </h2>
        <p class="snippet" v-html="info.desc1"></p>
                
        <information-vue :list="info.list1" />

        <CardGridVue :list="info.products"/>
        
    </div>
  
</template>

<script>
import InformationVue from '@/components/rates/Information.vue';
import CardGridVue from '@/components/restricted/CardGrid.vue';
import { mapState } from 'vuex';
export default {
  name: 'BahamasRestricted',
  components:{
      InformationVue,
      CardGridVue
  },
  data(){
    return{
        en_info:{
            desc1:`Please do NOT buy these items using our link shopping services as they cannot be shipped to your country and you will need to pay for the cost of returning them to the shipper.`,

            list1:['These include any items with alcohol listed as their first ingredient as well as any quantity of FLAMMABLE, EXPLOSIVE or CORROSIVE material.'],

            products:[
                {img:'Ammunition.png', title:'Ammunition'},
                {img:'Blueprints.png', title:'Blueprints'},
                {img:'Cash-Checks.png', title:'Cash, Checks or Credit Cards'},
                {img:'Pornography-icon.png', title:'Pornography'},
                {img:'Counterfeit-Goods-icon(1).png', title:'Counterfeit Goods'},
                {img:'Dangerous-Goods-icon.png', title:'Dangerous Goods'},
                {img:'Electronic-Cigarettes.png', title:'Electronic Cigarettes'},
                {img:'Firecrackers.png', title:'Firecrackers'},
                {img:'food.png', title:'Food'},
                {img:'Furs.png', title:'Furs'},
                {img:'Gambling-Devices.png', title:'Gambling Devices'},
                {img:'gun.png', title:'Gun'},
                {img:'Ivory-icon.png', title:'Ivory'},
                {img:'Liquor.png', title:'Liquor'},
                {img:'Plants-or-seeds.png', title:'Plants or seeds'},
                {img:'Poisons-of-anykind.png', title:'Poisons of anykind'},
                {img:'Pornography-icon.png', title:'Antique, Unique & Items deemed "Invaluable"'},
                {img:'PreciousMetals.png', title:'PreciousMetals'},
                {img:'Tobacco.png', title:'Tobacco'},
            ],
            
            
        },
        es_info:{
            desc1:`NO compre estos artículos utilizando nuestros servicios de compras por enlace, ya que no se pueden enviar a su país y deberá pagar el costo de devolverlos al remitente.`,

            list1:['Estos incluyen cualquier artículo que contenga alcohol como su primer ingrediente, así como cualquier cantidad de material INFLAMABLE, EXPLOSIVO o CORROSIVO.'],

            products:[
                {img:'Ammunition.png', title:'Munición'},
                {img:'Blueprints.png', title:'Planos'},
                {img:'Cash-Checks.png', title:'Efectivo, cheques o tarjetas de crédito'},
                {img:'Pornography-icon.png', title:'Pornografía'},
                {img:'Counterfeit-Goods-icon(1).png', title:'Productos falsificados'},
                {img:'Dangerous-Goods-icon.png', title:'Mercancías peligrosas'},
                {img:'Electronic-Cigarettes.png', title:'Cigarrillos electrónicos'},
                {img:'Firecrackers.png', title:'petardos'},
                {img:'food.png', title:'Alimento'},
                {img:'Furs.png', title:'Pieles'},
                {img:'Gambling-Devices.png', title:'Dispositivos de juego'},
                {img:'gun.png', title:'Pistola'},
                {img:'Ivory-icon.png', title:'Marfil'},
                {img:'Liquor.png', title:'Espíritu'},
                {img:'Plants-or-seeds.png', title:'plantas o semillas'},
                {img:'Poisons-of-anykind.png', title:'Venenos de cualquier tipo'},
                {img:'Pornography-icon.png', title:'Artículos antiguos, únicos y considerados "invaluables"'},
                {img:'PreciousMetals.png', title:'Metales preciosos'},
                {img:'Tobacco.png', title:'Tabaco'},
            ],
        }
        
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
