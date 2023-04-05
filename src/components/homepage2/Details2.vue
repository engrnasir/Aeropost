<template>
    <div>
      <div class="row wrapper max-md:flex-col">
          <img src="@/assets/images/lady-prealert.png" alt="" class="image">
          <div class="details-wrapper">
              <p class="text-blue mb-4 leading-none text-3xl">PRE-ALERT</p>
              <h3 class="main-heading">Process your package much more smoothly</h3>
              <p class="snippet">After placing an order using your FREE U.S. address, <a href="" class="text-blue">Submit Pre-alert</a> to let us know that your package is on its way to our Miami fulfillment center. This step is crucial in ensuring that packages are processed as smoothly and efficiently as possible.</p>
          </div>
      </div>
  
      <div class="row wrapper flex-row-reverse max-md:flex-col">
          <img src="@/assets/images/autopay2.png" alt="" class="image">
          <div class="details-wrapper">
              <p class="text-blue mb-4 leading-none text-3xl">AUTOPAY</p>
              <h3 class="main-heading">Less time at checkout, more time shopping online.</h3>
              <p class="snippet ">Streamline your online shopping experience even more when you <a href="" class="text-blue">ENROLL IN AUTOPAY</a> at aeropost.com. Enabling the AutoPay function will allow us to automatically charge the cost of your package to your saved  credit card or debit card when it arrives at our Miami fulfillment center.</p>
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
