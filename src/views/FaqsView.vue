<template>
    <div class="min-w-full transition-all duration-1000 bg-[#F5F5F5]">
      <HeroTitleVue :title="title"></HeroTitleVue>
      <div class="w-[95%] max-w-[940px] bg-white shadow-2xl rounded-xl p-10 mx-auto relative z-30 -mt-20 -mb-28 max-md:mt-0 max-md:mb-0 max-md:-translate-y-12">
        <div v-for="(item, i) in questions" :key="i" class="border-b-2 border-[#EBEBEB] py-3 " :class="i===questions.length-1? 'border-none':''">
            <div class="flex items-center justify-between cursor-pointer" @click="collapse(i, item.show)">
                <h3 class="font-bold text-2xl text-blue max-sm:text-lg">{{ item.question }}</h3>
                <img src="@/assets/images/plus.png" alt="" class="w-5 h-5" :class="item.show?'hidden':''">
                <img src="@/assets/images/close.png" alt="" class="w-5 h-5" :class="item.show?'':'hidden'">
            </div>
            <p class="text-base text-[#333333] transition-all duration-500 py-5 leading-8" :class="item.show?'':'bg-white max-h-0 hidden'"  >
                {{ item.answer }}
            </p>
        </div>
      </div>

      <div class="max-md:hidden">
        <SliderVue />
      </div>
      
      <div class="py-[60px] flex flex-col items-center bg-blue bg-bgImg bg-center bg-cover bg-no-repeat">
        <p class="font-light text-[32px] mb-8 text-white" >Need help?</p>
        <router-link to="" class="btn-yellow">Contact Us</router-link>
    </div>

    </div>
  </template>
  
  <script>
  import HeroTitleVue from '@/components/header/HeroTitle.vue';
  import SliderVue from '@/components/homepage/Slider.vue';
  import FooterTitle from '@/components/footer/FooterTitle.vue';
  export default {
    name: 'HomeView',
    components:{
      HeroTitleVue,
      SliderVue,
      FooterTitle,
    },
    data(){
      return{
        title:'FAQs',
        description:'',
        questions:[
            {question:'Save on Taxes', answer:`At checkout, use your FREE Aeropost U.S. address for your packages to be shipped to. For a simple and efficient shipping process, ensure that you input the correct name and address. Your Miami address is a physical address where Aeropost receives your packages and then sends them to your selected store or smart parcel locker in your destination country.   No customer address is exactly the same; each address is made up of your account number, your country code (3 letters), our physical address, and the postal code.  (See example below) Miami Address for PACKAGES (Billing and Shipping Address) Full Name: Name Address Line 1: 1 Aeropost Way Address Lines 2: Country Code + Account # City: Miami State: FL Zip Code: 33206- 3206 Phone Number: (786) 322-2032`, show:false},
            {question:'How to calculate the price?', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam nisi ad eligendi exercitationem nesciunt magnam enim nostrum molestiae similique sequi ullam error, quas obcaecati reprehenderit consequatur excepturi facere ipsam.', show:false},
            {question:'How to pre-alert?', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam nisi ad eligendi exercitationem nesciunt magnam enim nostrum molestiae similique sequi ullam error, quas obcaecati reprehenderit consequatur excepturi facere ipsam.', show:false},
            {question:'How to return a product?', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam nisi ad eligendi exercitationem nesciunt magnam enim nostrum molestiae similique sequi ullam error, quas obcaecati reprehenderit consequatur excepturi facere ipsam.', show:false},
            {question:'How to set up autopay?', answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veniam nisi ad eligendi exercitationem nesciunt magnam enim nostrum molestiae similique sequi ullam error, quas obcaecati reprehenderit consequatur excepturi facere ipsam.', show:false},
        ],
      }
    },
    methods:{
        collapse(index, currState){
            this.questions.forEach(el=>{
                el.show = false
            })
            this.questions[index].show = !currState

        }
    }
    
  }
  </script>

<style lang="scss" scoped>


</style>
  