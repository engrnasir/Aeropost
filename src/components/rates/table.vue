<template>
  <table>
    <tr v-for="(items,index) in list" :key="index" :class="index==0 && warranty? 'bg-blue':''">
        <td v-for="(item,i) in items" :key="i" :class="index==0 && warranty? 'text-white text-base font-semibold':''" >{{item}}</td>
    </tr>
  </table>
</template>

<script>
export default {
    props:['list','warranty']

}
</script>

<style>
table {
    @apply w-full border-collapse mb-8 ;
}

td, th {
    @apply border border-[#dddddd] text-left p-[12px] text-base text-[#333333] max-md:w-1/2 max-md:text-sm;
}
tr:nth-child(even) {
    @apply bg-[#F7F7F7];
}
tr td:first-child{
    @apply w-[500px];
}

</style>