<template>
  <div class="bg-yellow py-14 relative">
    <h2 class="text-blue font-medium px-5 text-4xl mb-12 text-center">What Our Customers Are Saying</h2>
    <div class="row">
        <div class="slider py-4 pb-12">
            <div class="min-w-full flex px-5` grid grid-cols-2 justify-items-center gap-x-3 max-md:grid-cols-1" v-for="i in 3" :key="i">
                <div class="relative w-full max-w-[80%] bg-white shadow-lg rounded-xl p-12">
                    <img src="@/assets/images/dblquote.png" alt="" class="w-12 absolute -top-2 -left-2">
                    <h4 class="text-2xl leading-8 text-[#333333] mb-3">Lorem ipsum dolor sit amet, consectetur</h4>
                    <p class="italic text-[#737373] mb-3">“Aliquam finibus nibh sit amet orci malesuada, a tempor mauris lobortis. Lorem ipsum dolor sit amet.”</p>
                    <p class="font-semibold text-blue text-sm">Nicholas Look</p>
                </div>
                <div class="relativew-full max-w-[80%] bg-white shadow-lg rounded-xl p-12 max-md:hidden">
                    <img src="@/assets/images/dblquote.png" alt="" class="w-12 absolute -top-2 -left-2">
                    <h4 class="text-2xl leading-8 text-[#333333] mb-3">Id venenatis a condimentum vitae sapien</h4>
                    <p class="italic text-[#737373]">I have been using Aeropost for years and what makes them great is the excellent customer service, both locally and also via online chat. I love their coupon program, the ability to have all-inclusive pricing of your items, and tracking. The shipping speed is also great and the easy return policy! I wouldn’t change a thing!”</p>
                    <p class="font-semibold text-blue text-sm">Nicholas Look</p>
                </div>
            </div>
        </div>
        </div>
    <div class="absolute bottom-12 ml-[50%] -translate-x-1/2 flex ">
        <span class="dot active"></span>
        <span class="dot "></span>
        <span class="dot"></span>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            currentSlide : 0,
        }
    },
    methods:{

    },
    mounted(){
        const slider = document.querySelector('.slider');
        const dots = document.querySelectorAll('.dot');
        dots[this.currentSlide].classList.add('active');

        const goToSlide=(n)=> {
            slider.scrollLeft = n * slider.offsetWidth;
            dots[this.currentSlide].classList.remove('active');
            dots[n].classList.add('active');
            this.currentSlide = n;
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                goToSlide(i);
            });
        });
        setInterval(() => {
            let nextSlide = (this.currentSlide + 1) % dots.length;
            goToSlide(nextSlide);
        }, 6000);
    }

}
</script>

<style lang="scss" scoped>
.slider::-webkit-scrollbar{
    display: none;
}
.slider {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
.dot{
    @apply w-5 h-5 p-2 mx-3 rounded-full bg-white cursor-pointer max-md:w-3 max-md:h-3;
}
.active {
  @apply bg-[#0075FF];
}

</style>