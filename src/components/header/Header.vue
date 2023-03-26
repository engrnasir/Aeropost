<template>
    <div class="bg-blue px-8 py-4 pt-0 mb-0 border-0">
        <div class="overlay" @click="setShowCountries(false)" v-show="showCountries "></div>
        <div class="menu-overlay" @click="setShowMenu(false)" v-show="showMenu"></div>
        <CountriesVue></CountriesVue>
        <navigation></navigation>
    </div>
</template>

<script>
import CountriesVue from '@/components/header/Countries.vue';
import Navigation from '@/components/header/Navigation.vue'
import { mapMutations, mapState } from 'vuex';
export default {
    components:{
        CountriesVue,
        Navigation,
    },
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState([
            'showCountries',
            'showMenu'
        ])
    },
    methods:{
        ...mapMutations([
            'setShowCountries',
            'setShowMenu'
        ])
    }
}
</script>

<style scoped>
.overlay{
    @apply w-full min-h-screen fixed left-0 top-0 bg-black opacity-10 z-20;
}
.menu-overlay{
    @apply w-full min-h-screen fixed left-0 top-0 bg-black opacity-40 z-20;
}

</style>