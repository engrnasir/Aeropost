<template>
    <div>
      <div class="row wrapper max-md:flex-col">
          <img src="@/assets/images/lady-prealert.png" alt="" class="image">
          <div class="details-wrapper">
              <p class="sub-heading">Pre-alert</p>
              <h3 class="main-heading">Process your package much more quickly</h3>
              <p class="snippet">A pre-alert is a way for you to let us know you have a package coming. By doing this you give us the original tracking number and an invoice which then allows us to process your package much more quickly when it arrives in Miami</p>
          </div>
      </div>
  
      <div class="row wrapper flex-row-reverse max-md:flex-col">
          <img src="@/assets/images/autopay2.png" alt="" class="image">
          <div class="details-wrapper">
              <p class="sub-heading">Autopay</p>
              <h3 class="main-heading">Speed delivery</h3>
              <p class="snippet ">Autopay is a setting where you allow us to take payment from your credit card or Paypal account automatically when packages have been invoiced to you. This will ensure the speediest delivery of your package.</p>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style lang="scss" scoped>
  .wrapper{
    @apply flex justify-center items-center px-5 py-16 relative mb-14
        max-md:py-6 max-md:mb-8
            ;
  }
  .sub-heading{
    @apply font-semibold text-2xl text-blue mb-5;
  }
  .main-heading{
    @apply font-bold text-[44px] max-md:text-3xl leading-[44px] text-blue mb-6;
  }
  .snippet{
    @apply text-[#737373] text-[22px] leading-8;
  }
  .bg-layer{
    @apply bg-[#F1F9FD] min-h-full w-[75%] rounded-l-2xl rounded-b-2xl absolute top-0 right-0 z-0
      max-md:hidden
    ;
  }
  .image{
    @apply w-[442px] mr-[128px] relative z-10
      max-lg:w-[300px] max-lg:mr-16
      max-md:mr-0 max-md:mb-10
      ;
  }
  .details-wrapper{
    @apply max-w-[530px] relative z-10
  
    ;
  }
  
  </style>