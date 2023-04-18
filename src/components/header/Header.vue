<template>
    <div class=" px-8 py-4">
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
