<template>
    <div class="bg-blue px-8 py-4 pt-0 mb-0 border-0">
        <CountriesVue></CountriesVue>
        <navigation></navigation>
    </div>
</template>

<script>
import CountriesVue from '@/components/header/Countries.vue';
import Navigation from '@/components/header/Navigation.vue'
export default {
    components:{
        CountriesVue,
        Navigation,
    },
}
</script>
