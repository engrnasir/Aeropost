<template>
  <div class="w-full p-5 bg-[#F3FAFF] mb-8" >
    <p class="text-base  text-[#333333]" v-if="title">{{ title }}</p>
    <ul class="list-disc mt-6 px-5" v-if="list">
        <li v-for="(item, i) in list" :key="i" v-html="item"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['title', 'list'],
}
</script>

<style scoped>
ul li{
  @apply pb-2 text-base text-[#333333];
}
a{
    @apply text-blue underline;
}

</style>
