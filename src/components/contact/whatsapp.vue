<template>
    <div class=" ml-[50%] -translate-x-[50%] mb-5 z-30 w-full md:w-[450px] flex items-start p-6 bg-white md:shadow-2xl md:rounded-sm max-md:mt-6">
        <div class="mr-4">
            <div class="flex items-start mb-4">
                <img src="@/assets/images/whatsapp.png" alt="whatsapp icon" class="w-9 mr-4">
                <p class="text-base text-[#333333] max-[480px]:text-sm" v-if="lang=='en'">
                    You can also contact us through WhatsApp!
                   <br> Click here or scan the following QR code using your cell phone camera.
                </p>
                <p class="text-base text-[#333333] max-[480px]:text-sm" v-else>
                    ¡También puedes contactarnos a través de WhatsApp!
                   <br> Haz clic aquí o escanea el siguiente código QR con la cámara de tu celular.
                </p>
            </div>
            <a href="https://api.whatsapp.com/send/?phone=+1%20929-520-2376&text=hi" class="text-base text-blue">
                {{ lang=='en'?'Open WhatsApp':'Abre WhatsApp' }} 
            </a>
        </div>
        <img src="@/assets/images/wa-qr.png" alt="wa-qr" class="w-[150px] max-[480px]:w-[120px]">
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default{
    computed:{
        ...mapState(['lang'])
    }
}
</script>
