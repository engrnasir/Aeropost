<template>
    <div class="w-[96%] max-w-[1080px] bg-white shadow-xl rounded-xl p-5 sm:p-10 mx-auto relative z-20 -mb-10">
        <form action="" class="form">

            <div class="flex flex-col items-center justify-between text-center font-medium text-blue mb-10">
                <h2 class="text-xl sm:text-3xl mb-4 leading-6 sm:leading-9">{{ info.title }}</h2>
                <p class="text-sm sm:text-lg ">{{ info.description }}</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-5">

                <div class="w-full">
                    <p class="label">{{ lang==='en'? 'Name':'Nombre' }}</p>
                    <input type="text" name="name" required>
                </div>

                <div class="w-full">
                    <p class="label">{{ lang==='en'? 'Company':'Compañía' }}</p>
                    <input type="text" name="companyName" placeholder="Lbs" required>
                </div>

                <div class="w-full">
                    <p class="label">{{ lang==='en'? 'Phone':'Teléfono' }}</p>
                    <input type="text" name="phone" placeholder="xx xxx xx xx" required>
                </div>

                <div class="w-full">
                    <p class="label">{{ lang==='en'? 'Email':'Correo electrónico' }}</p>
                    <input type="email" name="email">
                </div>

                <div class="w-full">
                    <p class="label">{{ lang==='en'? 'No. of packages per month':'No. de paquetes por mes' }}</p>
                    <input type="number" name="packagesPerMonth">
                </div>
                
                <div class="w-full">
                    <p class="label">{{ lang==='en'? 'Quantity kilos per month':'Cantidad kilos por mes' }}</p>
                    <div class="select-wrapper bg-white flex items-center md:mb-2 max-md:mr-2 ">
                        <select name="quantityKg" id="" >
                            <option value="" selected disabled>{{ lang==='en'? 'Lbs':'' }}</option>
                            <option value="">option1</option>
                            <option value="">option2</option>
                            <option value="">option3</option>
                        </select>
                        <img src="@/assets/images/dropdown.png" alt="dropdown" class="w-2.5">
                    </div>
                </div>  
                
                <div class="w-full">
                    <p class="label">{{ lang==='en'? 'Headings':'Encabezados' }}</p>
                    <div class="select-wrapper bg-white flex items-center md:mb-2 max-md:mr-2 ">
                        <select name="headings1" id="" >
                            <option value="">option1</option>
                            <option value="">option2</option>
                            <option value="">option3</option>
                        </select>
                        <img src="@/assets/images/dropdown.png" alt="dropdown" class="w-2.5">
                    </div>
                </div>  
                
                <div class="w-full">
                    <p class="label">{{ lang==='en'? 'How did you find out about Aeropost?':'¿Cómo se enteró de Aeropost?' }}</p>
                    <div class="select-wrapper bg-white flex items-center md:mb-2 max-md:mr-2 ">
                        <select name="howFindAeropost" id="" >
                            <option value="">option1</option>
                            <option value="">option2</option>
                            <option value="">option3</option>
                        </select>
                        <img src="@/assets/images/dropdown.png" alt="dropdown" class="w-2.5">
                    </div>
                </div>  
                
                <div class="w-full md:col-span-2">  
                    <p class="label">{{ lang==='en'? 'Headings':'Encabezados' }}</p>
                    <textarea name="heading2" id="" cols="30" rows="3"></textarea>
                </div>
                

            </div>

            <div class="flex items-center justify-center">
                <button type="submit" class="button button-active"> {{ lang==='en'?'Send':'Enviar' }} </button>
            </div>
        
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data(){
        return{
            en_info:{
                title:'Let us meet you and help you with your imports',
                description:'A specialized executive will contact you to know our rates and how we can adapt to you r business'
            },
            es_info:{
                title:'Déjanos conocerte y ayudarte con tus importaciones',
                description:'Un ejecutivo especializado lo contactará para conocer nuestras tarifas y cómo podemos adaptarnos a su negocio'
            }
        }
    },
    computed:{
        ...mapState(['lang']),
        info(){
            return this.lang==='en'? this.en_info:this.es_info
        }
    }
}
</script>
<style lang="scss" scoped>
  
  
.form{
  @apply w-full bg-white py-6 ;
  .label{
  @apply text-base leading-4 mb-2.5 text-[#1f1f1f]
  }
  select{
    @apply cursor-pointer w-full bg-white font-bold text-sm outline-none;
  }
  .select-wrapper,
  input,
  textarea{
      @apply outline-none w-full bg-transparent font-sofiaPro font-normal   text-base p-3 text-black border border-[#CBCBCB] rounded-md mb-2.5;
  }
  select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      @apply pr-3;
  } 
  .button{
      @apply w-full max-w-min mx-auto rounded-[35px] border border-[#808080] py-2.5 px-6 text-[#808080] cursor-pointer transition-all duration-200;
  }
  .button:hover,
  .button-active{
      @apply bg-blue text-white;
  }
}
  
</style>
