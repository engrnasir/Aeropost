<template>
    <div class="bg-blue px-8 py-4 pt-0 mb-0 border-0 ">
        <CountryPicker/>
        <Navigation/>
    </div>
</template>

<script>
import CountryPicker from '@/components/header/CountryPicker.vue';
import Navigation from '@/components/header/Navigation.vue'
export default {
    components:{
        CountryPicker,
        Navigation,
    },
}
</script>
