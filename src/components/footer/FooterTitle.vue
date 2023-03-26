<template>
  <div class="py-[60px] flex flex-col items-center bg-bgImg bg-center bg-cover bg-no-repeat px-5" :class="bgBlue===true?'bg-blue':'bg-[#DDF1FA]'">
        <p class="font-light text-[32px] mb-8 text-center" :class="bgBlue===true?'text-white':'text-blue'" >{{title}}</p>
        <router-link to="" :class="bgBlue===true?'btn-yellow':'btn-blue'">Sign Up Fro Free</router-link>
    </div>
</template>

<script>
export default {
    props:['title','bgBlue']
}
</script>