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
                    ['Rate Break (Declared Value in USD)','Rate (USD)'],
                    ['$1 - $99.99','$2.15'],
                    ['$100 - $159.99','$3.90'],
                    ['$160 - $199.99','$3.95'],
                    ['$200 - $299.99','$5.95'],
                    ['$300 - $399.99','$7.95'],
                    ['$400 - $499.99','$9.75'],
                    ['$500 - $599.99','$11.50'],
                    ['$600 - $699.99','$13.25'],
                    ['$700 - $799.99','$14.95'],
                    ['$800 - $899.99','$16.75'],
                    ['$900 - $999.99','$18.50'],
                    ['$1000 - $1099.99','$20.25'],
                    ['$1100 - $1199.99','$21.95'],
                    ['$1200 - $1299.99','$23.75'],
                    ['$1300 - $1399.99','$25.50'],
                    ['$1400 - $1499.99','$27.25'],
                    ['Equal or greater than $1500','2.5% of the Declared Value']
                ]
        },
        es_warrantyTable:{
            title:'Programa de Garantía y Retornos',
            rateList:[
                    ['Ruptura de Tasa (Valor Declarado en USD)','Tarifa (USD)'],
                    ['$1 - 99.99','$2.15'],
                    ['$100 - 159,99 ','$3.90'],
                    ['$160 - 199,99 ','$3.95'],
                    ['$200  - 299,99','$5.95'],
                    ['$300 - 399,99','$7.95'],
                    ['$400 - 499,99','$9.75'],
                    ['$500 - 599,99','$11.50'],
                    ['$600 - 699,99','$13.25'],
                    ['$700 - 799,99','$14.95'],
                    ['$800 - 899,99','$16.75'],
                    ['$900 - 999,99','$18.50'],
                    ['$1000 - 1099,99','$20.25'],
                    ['$1100 - 1199,99','$21.95'],
                    ['$1200 - 1299,99','$23.75'],
                    ['$1300 - 1399,99','$25.50'],
                    ['$1400 - 1499,99','$27.25'],
                    ['Igual o mayor a $1500','2.5% del Valor Declarado'],
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
