<template>
    <table>
      <tr v-for="(items,index) in list" :key="index" :class="index==0? 'thead':''">
          <td :colspan="index==0? 3:''" v-for="(item,i) in items" :key="i" :class="index==0? 'text-white text-base font-semibold':''" v-html="item"></td>
      </tr>
    </table>
  </template>
  
  <script>
  export default {
      props:['list'],
  
      computed:{
  
      }
  
  }
  </script>
  
  <style scoped>
  table {
      @apply w-full border-collapse mb-8;
  }
  
  td, th {
      @apply border-transparent text-left p-[12px] text-base text-[#333333] max-md:w-1/2 max-md:text-sm;
  }
  tr{
   @apply border border-[#dddddd]
  }
  tr:nth-child(odd) {
      @apply bg-[#F7F7F7];
  }
  tr td:first-child{
      @apply w-[500px];
  }
  .thead{
      background: #0B3E9D !important;
    }
    .thead td{
      @apply text-white;
    }
  </style>
  