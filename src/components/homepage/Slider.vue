<template>
  <div class="bg-yellow py-14 relative">
    <h2 class="text-blue font-medium px-5 text-4xl mb-12 text-center">
       {{ this.lang==='en'?'What Our Customers Are Saying' :'Lo que nuestros clientes están diciendo'}}
    </h2>
    <div class="row">
        <div class="slider py-4 pb-12">
            <div class="min-w-full flex px-5` grid grid-cols-2 justify-items-center gap-x-3 max-md:grid-cols-1" v-for="(quote, i) in quotes" :key="i">
                <div class="relative w-full max-w-[80%] bg-white shadow-lg rounded-xl p-12 flex flex-col justify-between">
                    <img src="@/assets/images/dblquote.png" alt="dblquote" class="w-12 absolute -top-2 -left-2">
                    <div>
                        <h4 class="text-2xl leading-8 text-[#333333] mb-3">{{ quote[0].heading }}</h4>
                        <p class="italic text-[#737373] mb-4 justify-items-start">{{ quote[0].description }}</p>
                    </div>
                    <p class="font-semibold text-blue text-sm">{{ quote[0].author }}</p>
                </div>
                <div class="relative w-full max-w-[80%] bg-white shadow-lg rounded-xl p-12 max-md:hidden flex flex-col justify-between">
                    <img src="@/assets/images/dblquote.png" alt="dblquote" class="w-12 absolute -top-2 -left-2">
                    <div>
                        <h4 class="text-2xl leading-8 text-[#333333] mb-3">{{ quote[1].heading }}</h4>
                        <p class="italic text-[#737373] mb-4">{{ quote[1].description }}</p>
                    </div>
                    <p class="font-semibold text-blue text-sm">{{ quote[1].author }}</p>
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
import { mapState } from 'vuex';
export default {
    data(){
        return{
            currentSlide : 0,
            en_quotes:[
                [
                    {
                        heading: 'Always reliable and efficient!', 
                        description:'“Always reliable and efficient. They have a variety of options, which is commendable!”',
                        author:'Stacy-Ann Allen'
                    },
                    {
                        heading: 'Excellent Customer Service', 
                        description:'“I have been using Aeropost for years and what makes them great is the excellent customer service, both locally and also via online chat. I love their coupon program, the ability to have all-inclusive pricing of your items, and tracking. The shipping speed is also great and the easy return policy! I wouldn’t change a thing!” ',
                        author:'Lavahn Williams'
                    },
                    
                ],
                [
                    {
                        heading: 'On time, easy to track, and super affordable.', 
                        description:'“The service is always an excellent experience; On time, easy to track, and super affordable. Thanks for the smooth operation every time.”',
                        author:'Julian Jones'
                    },
                    {
                        heading: 'Always reliable and efficient!', 
                        description:'“Always reliable and efficient. They have a variety of options, which is commendable!”',
                        author:'Stacy-Ann Allen'
                    },
                    
                ],
                [
                    {
                        heading: 'Excellent Customer Service', 
                        description:'“I have been using Aeropost for years and what makes them great is the excellent customer service, both locally and also via online chat. I love their coupon program, the ability to have all-inclusive pricing of your items, and tracking. The shipping speed is also great and the easy return policy! I wouldn’t change a thing!” ',
                        author:'Lavahn Williams'
                    },
                    {
                        heading: 'On time, easy to track, and super affordable.', 
                        description:'“The service is always an excellent experience; On time, easy to track, and super affordable. Thanks for the smooth operation every time.”',
                        author:'Julian Jones'
                    },
                ]
            ],
            es_quotes:[
                [
                    {
                        heading: 'Siempre un gran servicio', 
                        description:'El servicio es una excelente experiencia; A tiempo, fácil de rastrear y súper accesible. Tienen un buen funcionamiento siempre.',
                        author:'C. Small.'
                    },
                    {
                        heading: 'Excelente servicio al cliente', 
                        description:'He estado usando Aeropost durante años y lo que los hace geniales es el excelente servicio al cliente, tanto localmente como a través del chat en línea. Me encanta su programa de cupones, la capacidad de tener precios con todo incluido de sus artículos y seguimiento. ¡La velocidad de envío también es excelente y la política de devolución fácil! ¡No cambiaría nada!”',
                        author:'Nicolás Look.'
                    },
                ],
                [
                    {
                        heading: 'Siempre un gran servicio', 
                        description:'El servicio es una excelente experiencia; A tiempo, fácil de rastrear y súper accesible. Tienen un buen funcionamiento siempre.',
                        author:'C. Small.'
                    },
                    {
                        heading: 'Excelente servicio al cliente', 
                        description:'He estado usando Aeropost durante años y lo que los hace geniales es el excelente servicio al cliente, tanto localmente como a través del chat en línea. Me encanta su programa de cupones, la capacidad de tener precios con todo incluido de sus artículos y seguimiento. ¡La velocidad de envío también es excelente y la política de devolución fácil! ¡No cambiaría nada!”',
                        author:'Nicolás Look.'
                    },
                ],
                [
                    {
                        heading: 'Siempre un gran servicio', 
                        description:'El servicio es una excelente experiencia; A tiempo, fácil de rastrear y súper accesible. Tienen un buen funcionamiento siempre.',
                        author:'C. Small.'
                    },
                    {
                        heading: 'Excelente servicio al cliente', 
                        description:'He estado usando Aeropost durante años y lo que los hace geniales es el excelente servicio al cliente, tanto localmente como a través del chat en línea. Me encanta su programa de cupones, la capacidad de tener precios con todo incluido de sus artículos y seguimiento. ¡La velocidad de envío también es excelente y la política de devolución fácil! ¡No cambiaría nada!”',
                        author:'Nicolás Look.'
                    },
                ],
            ]
        }
    },
    computed:{
        ...mapState(['lang']),
        quotes(){
            return this.lang==='en'? this.en_quotes:this.es_quotes;
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
