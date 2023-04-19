<template>
    <div>
        <p class="snippet">
            {{ 
                lang==='en'?
                'Our Miami Address service allow you to shop your favorite USA websites and receive your purchases at your home, work or our local store.'
                :'Nuestro servicio de dirección de Miami le permite comprar en sus sitios web favoritos de EE. UU. y recibir sus compras en su hogar, trabajo o nuestra tienda local.' 
            }}
        </p>
        
        <InformationVue :list="info.list1" />

        <p class="snippet">
            {{ 
                lang==='en'?
                'Please note: freight and mail rates are subject to change without prior notice. Mailpac is not responsible for the client not reading or overlooking this advisory.':
                'Tenga en cuenta: las tarifas de flete y correo están sujetas a cambios sin previo aviso. Mailpac no es responsable de que el cliente no lea o pase por alto este aviso.'
            }}
        </p>

        <tableVue :list="info.rates" :hasHeader="true"/>

        <tableVue :list="info.otherCharges" :hasHeader="true"/>

        <InformationVue :list="info.list2" />
        
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <tableVue :list="info.table1"/>
        
        <InformationVue :list="info.list3" />

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'JamaicaRate',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            list1:[
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com'
            ],
            rates:[
                ['','RATES'],
                ['Annual Membership.','	FREE'],
                ['Monthly Minimum','None'],
                ['Mail per lb.','USD$5.50 (4 oz. minimum)'],
                ['Mail with bad address per lb	','USD$8.00'],
                ['Security documents','	USD$2.00'],
            ],
            otherCharges:[
                ['Other Charges',''],
                ['Fuel Surcharge per package','USD$1.50'],
                ['Restricted Shipments ','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue"> Click here</a>']
            ],

            list2:[
                'Shipments that require any special handling are subject to additional charges.',
                'If package weight exceeds 50 lb or the package length',
            ],

            packages:[
                ['Packages',''],
                ['0.5 lb.','USD$5.00'],
                ['1lb.','USD$8.00'],
                ['2 lb.','USD$10.50'],
                ['3 lb.','USD$14.50'],
                ['4 lb.','USD $17.50'],
                ['5 lb.','USD $20.50'],
                ['6 lb.','USD $23.50'],
                ['7 lb.','USD $26.50'],
                ['8 lb.','USD $29.50'],
                ['9 lb.','USD $32.50'],
                ['10 lb.','USD $35.00'],
                ['11 lb.','USD $38.50'],
                ['12. lb.','USD $42.00'],
                ['13 lb.','USD $45.50'],
                ['14 lb.','USD $49.00'],
                ['15 lb.','USD $52.50'],
                ['16 lb.','USD $56.00'],
                ['17 lb.','USD $59.50'],
                ['18 lb.','USD $63.00'],
                ['19 lb.','USD $66.50'],
                ['20 lb.','USD $70.00'],
                ['21 lb.','USD $72.50'],
                ['22 lb.','USD $75.00'],
                ['23 lb.','USD $77.50'],
                ['24 lb.','USD $80.00'],
                ['25 lb.','USD $82.50'],
                ['Above 25 lb.','Plus USD$3.00 per lb.'],
            ],

            table1:[
                ['width + height exceeds 60 inches, a US $15.00 oversize handling fee per piece may apply.']
            ],
            
            list3:[
                "If the dimensional weight exceeds the actual weight, then the dimensional weight will be used to determine the package's charges.",
            ],
        },
        es_info:{
            list1:[
                'Puede devolver su correo no deseado y le acreditaremos su cuenta.',
                'Puede rastrear sus paquetes en nuestro sitio en www.aeropost.com'
            ],
            rates:[
                ['','TARIFAS'],
                ['Membresía Anual.','GRATIS'],
                ['Mínimo mensual','Ninguno'],
                ['Correo por libra','USD$5,50 (4 oz. mínimo)'],
                ['Correo con mala dirección por lb','USD$8.00'],
                ['Documentos de seguridad', 'USD$2.00'],
            ],
            otherCharges:[
                ['Otros cargos',''],
                ['Recargo por combustible por paquete','USD$1.50'],
                ['Envíos restringidos', '<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a> ']
            ],

            list2:[
                'Los envíos que requieren un manejo especial están sujetos a cargos adicionales.',
                'Si el peso del paquete supera las 50 libras o la longitud del paquete',
            ],

            packages:[
                ['Paquetes',''],
                ['0.5 libras','USD$5.00'],
                 ['1lb.','USD$8.00'],
                 ['2 libras', 'USD$10.50'],
                 ['3 libras', 'USD $ 14,50'],
                 ['4 libras', 'USD $17,50'],
                 ['5 libras', 'USD $20.50'],
                 ['6 libras','USD $23.50'],
                 ['7 libras', 'USD $26.50'],
                 ['8 libras', 'USD $29.50'],
                 ['9 libras', 'USD $32,50'],
                 ['10 libras','USD $35.00'],
                 ['11 libras', 'USD $38,50'],
                 ['12 libras','USD $42.00'],
                 ['13 libras', 'USD $45,50'],
                 ['14 libras','USD $49.00'],
                 ['15 libras', '52,50 dólares estadounidenses'],
                 ['16 libras','USD $56.00'],
                 ['17 libras', 'USD $59.50'],
                 ['18 libras','USD $63.00'],
                 ['19 libras', 'USD $66.50'],
                 ['20 libras','USD $70.00'],
                 ['21 libras', 'USD $72.50'],
                 ['22 libras', 'USD $75.00'],
                 ['23 libras', 'USD $77.50'],
                 ['24 libras', 'USD $80.00'],
                 ['25 libras', 'USD $82.50'],
                 ['Más de 25 libras', 'Más USD $ 3.00 por libras'],
            ],

            table1:[
                ['el ancho + la altura superan las 60 pulgadas, se puede aplicar una tarifa de manejo de tamaño grande de US $ 15.00 por pieza.']
            ],
            
            list3:[
                "Si el peso dimensional supera el peso real, se utilizará el peso dimensional para determinar los cargos del paquete",
            ],
        },
    }
  },
  computed:{
    ...mapState(['lang']),
    info(){return this.lang==='en'? this.en_info:this.es_info}
  }
  
}
</script>

<style scoped>
.snippet{
    @apply text-blue mb-4;
}
</style>
