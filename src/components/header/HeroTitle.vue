<template>
  <div class="wrapper">
        <div class="flex items-center max-lg:flex-col">
          <h1>{{ title }}</h1>
          <h1 class="border-b-2 border-[#A8EEFF]">{{ utext }}</h1>
        </div>
        <p class="description">{{ description }}</p>
        <router-link to="" class="btn-yellow" v-show="showSignUp">Sign Up For Free</router-link>
    </div>
</template>

<script>
export default {
  props:['title','utext', 'description', 'showSignUp']
}
</script>

<style lang="scss" scoped>
.wrapper{
  @apply w-full bg-blue px-5 pt-[80px] pb-[140px] text-center text-white flex flex-col items-center
          max-md:pt-8 max-md:pb-20
  ;
  h1{
    @apply font-medium text-[53px] leading-[105%] mb-4 max-w-[950px]
            max-md:text-3xl
    ;
  }
  .description{
    @apply text-2xl font-light max-w-[740px]  max-md:w-10/12 max-md:text-xl;
  }
  .btn-yellow{
    @apply mt-5 hidden max-md:inline-block z-30;
  }
}

</style>