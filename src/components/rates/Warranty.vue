<template>
    <div>
        <h2 class="main-heading">{{ warrantyTable.title }}</h2>
        <tableVue :list="warrantyTable.rateList" :hasHeader="true"/>
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import { mapState } from 'vuex';
export default {
  name: 'GuadeloupeRate',
  components:{
      tableVue,
  },
  data(){
    return{
        en_warrantyTable:{
            title:'Warranty Program and Return Service',
            rateList:[
                    ['Rate Break (Declared Value)','Rate'],
                    ['US$1 - US$99.99','US$2.15'],
                    ['US$100 - US$159.99','US$3.90'],
                    ['US$160 - US$199.99','US$3.95'],
                    ['US$200 - US$299.99','US$5.95'],
                    ['US$300 - US$399.99','US$7.95'],
                    ['US$400 - US$499.99','US$9.75'],
                    ['US$500 - US$599.99','US$11.50'],
                    ['US$600 - US$699.99','US$13.25'],
                    ['US$700 - US$799.99','US$14.95'],
                    ['US$800 - US$899.99','US$16.75'],
                    ['US$900 - US$999.99','US$18.50'],
                    ['US$1000 - US$1099.99','US$20.25'],
                    ['US$1100 - US$1199.99','US$21.95'],
                    ['US$1200 - US$1299.99','US$23.75'],
                    ['US$1300 - US$1399.99','US$25.50'],
                    ['US$1400 - US$1499.99','US$27.25'],
                    ['Equal or greater than US$1500','2.5% of the Declared Value']
                ]
        },
        es_warrantyTable:{
            title:'Servicio de Garantía y Devoluciones',
            rateList:[
                    ['Ruptura de Tasa (Declarar Valor)','Tasa'],
                    ['1 dólar estadounidense - 99,99 dólares estadounidenses','US$2.15'],
                    ['100 USD - 159,99 USD','US$3.90'],
                    ['160 USD - 199,99 USD','US$3.95'],
                    ['200 dólares estadounidenses - 299,99 dólares estadounidenses','US$5.95'],
                    ['300 dólares estadounidenses - 399,99 dólares estadounidenses','US$7.95'],
                    ['400 dólares estadounidenses - 499,99 dólares estadounidenses','US$9.75'],
                    ['500 dólares estadounidenses - 599,99 dólares estadounidenses','US$11.50'],
                    ['600 dólares estadounidenses - 699,99 dólares estadounidenses','US$13.25'],
                    ['700 dólares estadounidenses - 799,99 dólares estadounidenses','US$14.95'],
                    ['800 dólares estadounidenses - 899,99 dólares estadounidenses','US$16.75'],
                    ['900 dólares estadounidenses - 999,99 dólares estadounidenses','US$18.50'],
                    ['1000 dólares estadounidenses - 1099,99 dólares estadounidenses','US$20.25'],
                    ['1100 dólares estadounidenses - 1199,99 dólares estadounidenses','US$21.95'],
                    ['1200 dólares estadounidenses - 1299,99 dólares estadounidenses','US$23.75'],
                    ['1300 dólares estadounidenses - 1399,99 dólares estadounidenses','US$25.50'],
                    ['1400 dólares estadounidenses - 1499,99 dólares estadounidenses','US$27.25'],
                    ['Igual o mayor a USD$1500','2.5% del Valor Declarado'],

                ]
        },
    }
  },
  computed:{
    ...mapState(['lang']),
    warrantyTable(){
        return this.lang==='en'?this.en_warrantyTable:this.es_warrantyTable
    }
  }
  
}
</script>
