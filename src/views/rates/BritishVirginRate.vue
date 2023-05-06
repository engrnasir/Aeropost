<template>
    <div>
        
        <InformationVue :list="info.list1" />
        
        <h2 class="main-heading">AIR SERVICE RATES</h2>
        <tableVue :list="info.packages" :hasHeader="true"/>

        <tableVue :list="info.airportCargo" :hasHeader="true" :colspan="2"/>

        <p class="text-sm mb-4 text-blue ">
            {{ 
                lang==='en'?
                '*We are not able to provide any special customs clearance needs for exemptions or special circumstances.  This is including, but not limited to, Pier-Park exemptions, Retail business exemptions,  Government Departments duty exemptions, Temporary Import exemptions,  and any other special exemptions.'
                :'*No podemos proporcionar ninguna necesidad especial de despacho de aduanas para exenciones o circunstancias especiales. Esto incluye, entre otros, exenciones de Pier-Park, exenciones de negocios minoristas, exenciones de impuestos de departamentos gubernamentales, exenciones de importación temporal y cualquier otra exención especial.'
            }}
        </p>
        

        <h2 class="main-heading">{{ info.maritime.title }}</h2>
        <tableVue :list="info.maritime.table"/>
        
        <p class=" text-base mb-4 text-blue ">
            {{ 
                lang==='en'?
                '*We are not able to provide any special customs clearance needs for exemptions or special circumstances.  This is including, but not limited to, Pier-Park exemptions, Retail business exemptions,  Government Departments duty exemptions, Temporary Import exemptions,  and any other special exemptions.'
                :'*No podemos proporcionar ninguna necesidad especial de despacho de aduanas para exenciones o circunstancias especiales. Esto incluye, entre otros, exenciones de Pier-Park, exenciones de negocios minoristas, exenciones de impuestos de departamentos gubernamentales, exenciones de importación temporal y cualquier otra exención especial.'
            }}
        </p>
        <p class="italic text-base mb-4 text-blue ">
            {{ 
                lang==='en'?
                'All packages are subject to BVI Customs Duty Charges. These are government fees. To determine the final cost of your package, use the calculator or simply shop Aeropost.com for all-inclusive prices.'
                :'Todos los paquetes están sujetos a cargos de derechos de aduana de BVI. Estas son tarifas del gobierno. Para determinar el costo final de su paquete, use la calculadora o simplemente compre en Aeropost.com los precios con todo incluido.'
            }}
            
        </p>

    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import { mapState } from 'vuex';
export default {
  name: 'BritishVirginRate',
  components:{
      tableVue,
      InformationVue,
  },
  data(){
    return{
        en_info:{
            list1:[
                'No membership fee',
                'Flights arriving daily (Tuesday to Saturday)',
                'Air: we charge on real weight, not package size',
                'Maritime: we charge on volume only, not weight',
                'Mail is free of charge',
                'FREE local delivery (Tortola only)',
                'FREE product returns',
                'Log in to <a href="http://www.myaeropost.com/sso?srv=https%3a%2f%2fmyaccount.aeropost.com%2fen&culture=eng&gtw=eis" class="text-blue">My Account</a> to track all your packages and purchases',
            ],

            packages:[
                ['Packages','Rates(USD)'],
                ['1 lb','USD $9.95'],
                ['2 - 3 lb','Ea. Add. lb USD $6.00'],
                ['4 - 5 lb','Ea. Add. lb USD $5.00'],
                ['6 - 30 lb','Ea. Add. lb USD $4.00'],
                ['31 - 50 lb','Ea. Add. lb USD $3.50'],
                ['51 lb+','Ea. Add. lb USD $3.00'],
                ['Items over 120 inches in any dimension','200% of rate (i.e. double the regular rate)'],
                ['Warranty and Returns Program (AeroProtect) (for every USD $100 of declared value)','USD $1.00'],
                ['Basic Customs Clearance*','INCLUDED'],
                ['Local Delivery (Tortola only)','only)	INCLUDED'],
                ['Restricted Shipments','INCLUDED (once a week)'],
                ['Product Returns','INCLUDED'],
            ],
            airportCargo:[
                ['Airport Cargo Transfer Fee per Package'],
                ['Below 2 lbs','USD $1.00'],
                ['2 lbs - 9.9 lbs','USD $2.00'],
                ['10 lbs - 19.99 lbs','USD $4.00'],
                ['20 lbs - 49.99 lbs','USD $6.00'],
                ['50 lbs - 99.99 lbs','USD $8.00'],
                ['100 lbs - 199.99 lbs','USD $10.00'],
                ['200 lbs - 500 lbs','USD $15.00'],
                ['Over 500 pound','USD $30.00'],
            ],

            maritime:{
                title:'MARITIME SERVICE (Per Cubic Foot)',
                table:[
                        ['1 - 5 cubes	','USD $15.00/cube'],
                        ['5+ 	','USD $10.00/cube'],
                        ['Basic Customs Clearance*	','INCLUDED'],
                        ['Wharfage (Government Fee)	','2% of Invoice Value'],
                    ]
            },

        },
        es_info:{
            list1:[
                'Sin cuota de membresía',
                'Vuelos que llegan todos los días (de martes a sábado)',
                'Aire: cobramos por peso real, no por tamaño de paquete',
                'Marítimo: cobramos solo por volumen, no por peso',
                'El correo es gratuito',
                'Entrega local GRATIS (solo Tortola)',
                'Devoluciones de productos GRATIS',
                'Inicie sesión en <a href="http://www.myaeropost.com/sso?srv=https%3a%2f%2fmyaccount.aeropost.com%2fen&culture=eng&gtw=eis" class="text-blue">Mi Cuenta</a> para realizar un seguimiento de todos sus paquetes y compras',
            ],

            packages:[
                ['Paquetes','Tarifas(USD)'],
                ['1 libra', 'USD $9.95'],
                ['2 - 3 lb','Ea. Agregar. lb USD $6.00'],
                ['4 - 5 lb','Ea. Agregar. libras USD $5.00'],
                ['6 - 30 lb','Ea. Agregar. libras USD $4.00'],
                ['31 - 50 lb','Ea. Agregar. lb USD $3.50'],
                ['51 libras+','Ea. Agregar. lb USD $3.00'],
                ['Artículos de más de 120 pulgadas en cualquier dimensión', '200% de la tarifa (es decir, el doble de la tarifa normal)'],
                ['Programa de Garantía y Devoluciones (AeroProtect) (por cada USD $100 de valor declarado)','USD $1.00'],
                ['Despacho Aduanero Básico*','INCLUIDO'],
                ['Entrega Local (solo Tortola)','solo) INCLUIDA'],
                ['Envíos restringidos','INCLUIDO (una vez por semana)'],
                ['Devoluciones de productos','INCLUIDO'],
            ],
            airportCargo:[
                ['Tarifa de transferencia de carga aeroportuaria por paquete'],
                ['Menos de 2 libras','USD $1.00'],
                ['2 libras - 9,9 libras', 'USD $2,00'],
                ['10 libras - 19,99 libras', 'USD $4,00'],
                ['20 libras - 49,99 libras', 'USD $6,00'],
                ['50 libras - 99,99 libras', 'USD $8,00'],
                ['100 libras - 199,99 libras', 'USD $10,00'],
                ['200 libras - 500 libras', 'USD $15.00'],
                ['Más de 500 libras','USD $30.00'],
            ],


            maritime:{
                title:'SERVICIO MARÍTIMO (Por Pie Cúbico)',
                table:[
                    ['1 - 5 cubos','USD $15.00/cubo'],
                    ['5+ ','USD $10.00/cubo'],
                    ['Despacho Aduanero Básico* ','INCLUIDO'],
                    ['Muelle (tarifa gubernamental)','2% del valor de la factura'],
                ]
            },
        }
    }
  },
  computed:{
        ...mapState(['lang']),
        info(){return this.lang==='en'? this.en_info:this.es_info}
    }
  
}
</script>
