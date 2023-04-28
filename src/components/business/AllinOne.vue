<template>
     <div class="bg-[#EAF8FF99] mb-20">
        <div class="allinOne-wrapper">
            
            <div class="max-lg:mb-10 lg:mr-8 ">
                <p class="text-blue mb-4 leading-none font-semibold text-2xl capitalize mb-4">{{ info.allinOne.title }}</p>
                <h3 class="text-blue text-4xl leading-10 font-bold capitalize mb-4" v-html="info.allinOne.heading "></h3>
                <p class="text-[#737373] text-xl " v-html="info.allinOne.description"></p>
            </div>
    
            <div class="grid sm:grid-cols-2 gap-5">
                <div class="bg-white w-full rounded-xl p-4 shadow-md" v-for="(item, i) in info.cards" :key="i">
                    <p class="text-base font-bold font-sofiaPro text-[#333333] mb-4" v-html="item.title"></p>
                    <div class="flex">
                        <img :src="require(`@/assets/images/business/${item.img}`)" alt="parcel" class="w-[70px] h-[70px] mr-4">
                        <ul class="list-disc leading-5 text-sm">
                            <li class="mb-1" v-for="(l,j) in item.list" :key="j" v-html="l"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

      </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            en_info:{
                allinOne:{
                title:'All In One Place',
                heading:'Import Shipping & Customs Clearance',
                description:'Whether you’re starting, growing, or expanding your business, we’re here for YOU.'
                },
                cards:[
                    {
                        title:'Parcels & Documents',
                        img:'parcel.png',
                        list:[
                            'Light to medium weight shipments (typically upto 70lbs)',
                            'Business to Business/Business to Consumer',
                        ]
                    },
                    {
                        title:'Cargo & Freight',
                        img:'cargo.png',
                        list:[
                            'Heavier shipments (typically 70lbs+) using pallets or containers',
                            'Business to Business',
                        ]
                    }
                ]
            },
            es_info:{
                allinOne:{
                title:'Todo en un lugar',
                heading:'Envío de importación y despacho de aduanas',
                description:'Ya sea que esté comenzando, creciendo o expandiendo su negocio, estamos aquí para USTED.'
                },
                cards:[
                    {
                        title:'Paquetes y Documentos',
                        img:'parcel.png',
                        list:[
                            'Envíos de peso ligero a mediano (típicamente hasta 70 libras)',
                            'Empresa a Empresa/Empresa a Consumidor',
                        ]
                    },
                    {
                        title:'Carga y flete',
                        img:'cargo.png',
                        list:[
                            'Envíos más pesados (típicamente de más de 70 libras) utilizando tarimas o contenedores',
                            'Empresa a empresa',
                        ]
                    }
                ]
            },
        }
    },
    computed:{
        ...mapState(['lang']),
        info(){
            return this.lang==='en'? this.en_info : this.es_info;
        }
    }
}
</script>

<style lang="scss" scoped>
.allinOne-wrapper{
    @apply flex max-lg:flex-col lg:items-center w-full max-w-[1080px] mx-auto py-16 px-5
}
</style>
