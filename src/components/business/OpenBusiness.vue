<template>
    <div class="lg:bg-[#EAF8FF99]">
          <div class="container">
                <h2 class="text-blue text-2xl sm:text-3xl  lg:text-4xl font-medium mb-4">
                    {{ lang==='en'?'Open a free business account':'Abra una cuenta comercial gratis' }}
                </h2>
                <button class="get-btn">
                    {{ lang==='en'?'Get Started':'Empezar' }}
                </button>
          </div>
      </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed:{
        ...mapState(['lang'])
    }
}
</script>

<style lang="scss" scoped>
.container{
    @apply w-[96%] max-w-[700px] bg-white shadow-xl rounded-xl p-6 sm:p-10 mx-auto relative z-20 -translate-y-20  text-center
                  mb-10 lg:mb-20 max-md:-translate-y-8 max-md:px-4; 
    .get-btn{
        @apply px-6 sm:px-12 py-2.5 rounded-[40px] text-sm sm:text-xl font-medium bg-yellow text-blue cursor-pointer transition-all duration-200 hover:bg-blue hover:text-white;
      }    
  }
</style>
