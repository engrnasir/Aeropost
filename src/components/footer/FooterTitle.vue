<template>
  <div class="py-[60px] flex flex-col items-center bg-bgImg bg-center bg-cover bg-no-repeat px-5" :class="bgBlue===true?'bg-blue':'bg-[#DDF1FA]'">
        <p class="font-light text-[32px] mb-8 text-center" :class="bgBlue===true?'text-white':'text-blue'" >{{title}}</p>
        <a href="https://courier.aeropost.com/site/en/auth?a=signup" :class="bgBlue===true?'btn-yellow':'btn-blue'">
            {{this.lang==='en'?'Sign Up for Free':'Regístrate Gratis'}}
        </a>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    props:['title','bgBlue'],
    computed:{
        ...mapState(['lang'])
    }
}
</script>
