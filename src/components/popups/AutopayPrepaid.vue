<template>
    <div class="popupWrapper">
        <div class="bg-lightYellow rounded-sm mx-auto relative w-[850px] min-h-[570px] max-md:w-[96%] overflow-x-hidden p-6">
            <!-- Bg Blue Images -->
            <img src="@/assets/images/popups/bgBlue.png" alt="bgBlue" class="w-full absolute top-0 left-0 z-0 max-md:h-[700px] max-md:hidden">
            <img src="@/assets/images/popups/autopaybg.png" alt="bgBlueMob" class="w-full absolute top-0 left-0 z-0 h-[770px] md:hidden">
            
            <div class="flex max-md:flex-col justify-between relative z-10">

                <!-- Left Section -->
                <div class="mr-6">
                    <p class="text-4xl text-darkYellow mb-5" v-html="info.heading1"></p>
                    <h2 class="font-bold text-[43px] leading-[48px] mb-6 text-white" v-html="info.heading2"></h2>
                    
                    <div class="flex  md:flex-col max-md:justify-between max-md:items-center">
                        <div>
                            <p class="font-bold text-base text-white mb-5" v-html="info.heading3"></p>
                            <ul class="list-disc ml-5 w-[220px] sm:w-[305px] text-sm font-poppins  text-white">
                                <li v-for="(item, i) in info.list" :key="i" v-html="item" class="leading-6"></li>
                            </ul>
                        </div>

                        <img src="@/assets/images/popups/circularImg.png" alt="circularImg1" class="w-40 md:mt-20 md:self-end md:mr-20">
                    </div>


                    <!-- Skip button -->
                    <div class="flex text-blue mt-5 leading-none">
                        <button class="pr-3 border-r border-blue"> 
                            {{ lang==='en'?'I don’t want to see this again ':'no quiero volver a ver esto' }}
                        </button>
                        <button class="pl-3" @click="$emit('skip', true)"> 
                            {{ lang==='en'?'Skip':'Omitir' }}
                        </button>
                    </div>
                </div>

                <!-- Form -->
                <div class="">
                    <div class="forms ">
                        <div class="flex items-center justify-between" @click="showCreditForm = !showCreditForm">
                            <p class="text-xl font-semibold mb-4">New Credit Card</p>
                            <img src="@/assets/images/popups/minus.png" alt="" class="w-2.5" v-if="showCreditForm">
                            <img src="@/assets/images/popups/plus.png" alt="" class="w-2.5" v-else>
                        </div>
                        <div :class="showCreditForm?'':'hide'">
                            <input type="text" placeholder="Name on Card" v-model="form.credit.name">
                            <div class="md:flex">
                                <input type="text" placeholder="Card Number" v-model="form.credit.number">
                                <div class="flex">
                                    <input type="text" placeholder="MM/YY" class="md:max-w-[95px] mr-2 md:mx-2" v-model="form.credit.expiryDate">
                                    <input type="text" placeholder="CCV" class="md:max-w-[72px]" v-model="form.credit.ccv">
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between" @click="showAddressForm = !showAddressForm" >
                            <p class="text-xl font-semibold mb-3">Address</p>
                            <img src="@/assets/images/popups/minus.png" alt="" class="w-2.5" v-if="showAddressForm">
                            <img src="@/assets/images/popups/plus.png" alt="" class="w-2.5" v-else>
                        </div>
                        <div class="grid md:grid-cols-2 gap-2.5 mb-5" :class="showAddressForm?'':'hide'">
                            <div class="w-full">
                                <p class="label">Address</p>
                                <input type="text" placeholder="Enter" v-model="form.address">
                            </div>
                            <div class="w-full">
                                <p class="label">Address 2 </p>
                                <input type="text" placeholder="Enter Address 2 " v-model="form.address2">
                            </div>
                            <div class="w-full">
                                <p class="label">City</p>
                                <input type="text" placeholder="City" v-model="form.city">
                            </div>
                            <div class="w-full">
                                <p class="label">State / Providence</p>
                                <div class="select bg-white flex items-center md:mb-2 max-md:mr-2 ">
                                    <select name="" id="" placeholder="Select" v-model="form.state" class="cursor-pointer w-full bg-white font-bold text-sm outline-none" >
                                        <option value="" selected disabled>Select</option>
                                    </select>
                                    <img src="@/assets/images/popups/blue-dropdown.png" alt="blue-dropdown" class="w-2.5">
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="label">Zipcode</p>
                                <input type="text" placeholder="Enter" v-model="form.zipcode">
                            </div>
                            <div class="w-full">
                                <p class="label">Country</p>
                                <div class="select bg-white flex items-center md:mb-2 max-md:mr-2 ">
                                    <select name="" id="" placeholder="Select" v-model="form.country" class="cursor-pointer w-full bg-white font-bold text-sm outline-none" >
                                        <option value="" selected disabled>Select</option>
                                    </select>
                                    <img src="@/assets/images/popups/blue-dropdown.png" alt="blue-dropdown" class="w-2.5">
                                </div>
                            </div>
                            <div class="w-full">
                                <p class="label">Telephone</p>
                                <input type="text" placeholder="Number" v-model="form.tel">
                            </div>
    
                        </div>
    
                        <div class="flex md:items-center cursor-pointer mb-10" @click="form.authorized = !form.authorized">
                            <div class="w-5 h-5 rounded-md border border-blue mr-1.5" :class="form.authorized?'bg-blue':''">
                                <img src="@/assets/images/popups/check.png" alt="check" class="w-full h-full">
                            </div>
                            <p class="text-[12px] text-blue">I authorized Aeropost and enable autopay for automatic billing.</p>
                        </div>
    
                        <div class="grid grid-cols-2 gap-2.5 font-bold text-base leading-5">
                            <button class="button"> Cancel </button>
                            <button class="button button-active"> Accept </button>
                        </div>
    
    
                    </div>
                    <div class="sponsers">
                        <img src="@/assets/images/popups/sp1.png" alt="sp1">
                        <img src="@/assets/images/popups/sp2.png" alt="sp2">
                        <img src="@/assets/images/popups/sp3.png" alt="sp3">
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){        
        return {
            showCreditForm:true,
            showAddressForm:true,
            info:{
                heading1:'Want Faster Delivery?',
                heading2:'Sign Up for <span class="text-darkYellow">Autopay</span> Now!',
                heading3:'Discover the Benefits of <span class="text-darkYellow">Autopay</span>',
                list:[
                    'Get Your packages up to 24 hours faster',
                    'FREE Locker Delivery ',
                    'Secure payments with PCI Certification',
                    'No manual payments ',
                    'You will only be charged when your packages get to our Miami warehouse',
                ]
            },
            form:{
                credit:{
                    name:'',
                    number:'',
                    expiryDate:'',
                    ccv:''
                },
                address:'',
                address2:'',
                city:'',
                state:'',
                zipcode:'',
                country:'',
                tel:'',
                authorized:false
            }
        }
    },
    computed:{
        ...mapState(['lang']),
    },
    components:{
    },
    methods:{
        handleLockerSelection(){

        }
    }
}
</script>

<style lang="scss" scoped>
.popupWrapper{
    @apply w-full h-screen font-sofiaPro overflow-y-scroll  py-12 fixed left-0 top-0 bg-[#00000010] z-[999];
}
.popupWrapper::-webkit-scrollbar{
    @apply hidden;
}


.forms{
    @apply w-full md:max-w-[440px] bg-white p-6;
    .label{
    @apply text-sm leading-4 mb-1 text-[#484647]
    }
    .select,
    input{
        @apply outline-none w-full bg-transparent font-sofiaPro font-normal   text-sm px-6 py-2 text-black border border-[#CBCBCB] rounded-[40px] mb-2.5;
    }
    select {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        @apply pr-3;
    }
    .button{
        @apply w-full rounded-[35px] border border-[#808080] p-2.5 text-[#808080] cursor-pointer transition-all duration-200;
    }
    .button:hover,
    .button-active{
        @apply bg-blue text-white;
    }
}
.sponsers{
    @apply flex items-center justify-end mt-3;
    img{
        @apply w-8 mr-4;
    }
}
.hide{
    @apply max-md:hidden
}

</style>
