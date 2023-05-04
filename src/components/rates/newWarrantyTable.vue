<template>
    <div>
        <tableVue :list="info.table" :hasHeader="true"/>
    </div>
</template>
<script>
import tableVue from '@/components/rates/table.vue';
import { mapState } from 'vuex';
export default {
    components:{
        tableVue
    },
    data(){
        return {
            en_info:{
                table:[
                    ['Rate Break (Declare Value)','Rate'],
                    ['US$1 - US$99.99','	US$1.90'],
                    ['US$100 - US$159.99	','US$3.90'],
                    ['US$160 - US$199.99	','US$3.95'],
                    ['US$200 - US$299.99','	US$5.95'],
                    ['US$300 - US$399.99	','US$7.95'],
                    ['US$400 - US$499.99	','US$9.75'],
                    ['US$500 - US$599.99	','US$11.50'],
                    ['US$600 - US$699.99	','US$13.25'],
                    ['US$700 - US$799.99	','US$14.95'],
                    ['US$800 - US$899.99	','US$16.75'],
                    ['US$900 - US$999.99	','US$18.50'],
                    ['US$1000 - US$1099.99','	US$20.25'],
                    ['US$1100 - US$1199.99','	US$21.95'],
                    ['US$1200 - US$1299.99	','US$23.75'],
                    ['US$1300 - US$1399.99	','US$25.50'],
                    ['US$1400 - US$1499.99	','US$27.25'],
                    ['Equal or greater than $1500 ',' 2.5% of the Declared Value'],
                ],
            },
            es_info:{
                table:[
                    ['Valor declarado del envío (USD) Tarifa (USD)',''],
                    ['$0.01 – $99.99  ','$1.90'],
                    ['$100.00 – $159.99   ','$3.90'],
                    ['$160.00 – $199.99   ','$3.95'],
                    ['$200.00 – $299.99   ','$5.95'],
                    ['$300.00 – $399.99   ','$7.95'],
                    ['$400.00 – $499.99   ','$9.75'],
                    ['$500.00 – $599,99   ','$11.50'],
                    ['$600.00 – $699.99   ','$13.25'],
                    ['$700.00 – $799.99   ','$14.95'],
                    ['$800.00 – $899.99   ','$16.75'],
                    ['$900.00 – $999.99   ','$18.50'],
                    ['$1000.00 – $1099.99 ','$20.25'],
                    ['$1100.00 – $1199.99 ','$21.95'],
                    ['$1200.00 – $1299.99 ','$23.75'],
                    ['$1300.00 – $1399.99 ','$25.50'],
                    ['$1400.00 – $1499.99 ','$27.25'],
                    ['Igual o mayor a $1500.00 ','2.5% del Valor Declarado']
                ],
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

