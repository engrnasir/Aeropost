<template>
    <div class="mb-3 relative"> 
        <!-- Peru -->
        <div class="elfsight-app-deb2e522-90d0-4732-ab93-6ae4212c26e2"
             v-show="selectedCountry.id === 'sa5'"></div>
        <!-- Panama  -->
        <div class="elfsight-app-bdc45d78-adaf-4049-911b-66871cbdb3ea"
             v-show="selectedCountry.id === 'ca8'"></div>
        <!-- Guatemala  -->
        <div class="elfsight-app-6bf451b9-afac-440e-b447-fc2abe4bca35"
             v-show="selectedCountry.id === 'ca4'"></div>
        <!-- El Salvador  -->
        <div class="elfsight-app-7f258fb8-a6f2-4631-9991-e5f70dccc182" 
             v-show="selectedCountry.id === 'ca3'"></div>
        <!-- Costa Rica  -->
        <div class="elfsight-app-f11b3c17-7758-44c6-a95f-5aaa17f2593e" 
             v-show="selectedCountry.id === 'ca2'"></div>
        <!-- Colombia  -->
        <div class="elfsight-app-66f6da53-6fd2-45bf-9dac-a3132998c797" 
             v-show="selectedCountry.id === 'sa2'"></div>
        <!-- British Virgin Island / Tortola  -->
        <div class="elfsight-app-20c1b52e-3b0d-449b-b821-1885125daafb" 
             v-show="selectedCountry.id === 'cb6'"></div>
        <!-- Barbados  -->
        <div class="elfsight-app-db1c4192-f501-4022-a1d1-1c7553297e4a" 
             v-show="selectedCountry.id === 'cb5'"></div>
        <!-- Trinidad  -->
        <div class="elfsight-app-0b926e5d-76d4-40ac-845a-3ce42e8a125c" 
             v-show="selectedCountry.id === 'cb19'"></div>
        <!-- Jamaica  -->
        <div class="elfsight-app-d8fd84d8-e15a-480f-af72-7964f5ea7c7b" 
             v-show="selectedCountry.id === 'cb13'"></div>
        <!-- Bahamas  -->
        <div class="elfsight-app-5cbb2034-9af6-4526-be6a-78d38bbe3936" 
             v-show="selectedCountry.id === 'cb4'"></div>


          <WhatsappVue v-if="showWhatsapp"/>
    </div>

</template>
<script>
import WhatsappVue from '@/components/contact/whatsapp.vue'
import { mapState } from 'vuex';
export default {
  components:{
    WhatsappVue
  },
  data() {
    return {
     validIds:['sa5','ca8', 'ca4','ca3','ca2','sa2','cb6','cb5','cb19','cb13','cb4']
    };
  },
  computed:{
    ...mapState(['selectedCountry']),
    showWhatsapp(){
     return this.validIds.includes(this.selectedCountry.id)
    }
  }
}
</script>

<style scoped>
.elfsight-app-7f258fb8-a6f2-4631-9991-e5f70dccc182,
.elfsight-app-f11b3c17-7758-44c6-a95f-5aaa17f2593e,
.elfsight-app-66f6da53-6fd2-45bf-9dac-a3132998c797,
.elfsight-app-20c1b52e-3b0d-449b-b821-1885125daafb,
.elfsight-app-db1c4192-f501-4022-a1d1-1c7553297e4a,
.elfsight-app-0b926e5d-76d4-40ac-845a-3ce42e8a125c,
.elfsight-app-d8fd84d8-e15a-480f-af72-7964f5ea7c7b,
.elfsight-app-5cbb2034-9af6-4526-be6a-78d38bbe3936{
    max-height: 700px;
}

.eapps-google-maps-bar-content{
  max-height: 300px !important; /* Set the desired height of the search panel */
}
</style>




