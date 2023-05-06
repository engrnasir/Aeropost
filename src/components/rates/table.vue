<template>
  <table>
    <tr v-for="(items,index) in list" :key="index" :class="index==0 && hasHeader? 'thead':''">
        <td v-for="(item,i) in items" :key="i" :class="index==0 && hasHeader? 'text-white text-base font-semibold':''" v-html="item" :colspan="index===0 && i==0 && colspan>1? colspan:1"></td>
    </tr>
    <tfoot v-if="tfoot">
        <td colspan="2" >
            <p v-html="tfoot" class="w-[80%]"></p>
        </td>
    </tfoot>
  </table>
</template>

<script>
export default {
    props:['list','hasHeader', 'tfoot', 'colspan'],
}
</script>

<style scoped>
table {
    @apply w-full border-collapse mb-8 ;
}

td, th {
    @apply border border-[#dddddd] text-left p-[12px] text-base text-[#333333] max-md:w-1/2 max-md:text-sm capitalize;
}
tr:nth-child(odd) {
    @apply bg-[#F7F7F7];
}
tr td:first-child{
    @apply w-[450px];
}
tfoot{
    background-color: #F3FAFF;
}

.thead{
    background: #0B3E9D !important;
}
.thead td{
      @apply text-white;
    }

</style>
