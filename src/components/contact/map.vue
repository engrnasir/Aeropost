<template>
  <div>

    <WhatsappVue/>
    <div class="mb-3 relative min-h-[50vh]"> 
          <div :class="selectedCountry.mapClass" id="wrapper"></div>
    </div>
  </div>

</template>
<script>
import WhatsappVue from '@/components/contact/whatsapp.vue'
import { mapState } from 'vuex';
export default {
  components:{
    WhatsappVue
  },
  computed:{
    ...mapState(['selectedCountry']),
  }
}
</script>

<style scoped>
#wrapper{
  max-height: 700px;
}
.eapps-google-maps-bar-content{
  max-height: 300px !important; /* Set the desired height of the search panel */
}
</style>




