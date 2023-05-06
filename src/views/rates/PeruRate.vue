<template>
    <div>
                
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <h2 class="main-heading">
            {{ lang==='en'? 'INTERNATIONAL FREIGHT RATES':'TARIFAS DE CARGA INTERNACIONAL' }}
        </h2>
        <tableVue :list="info.otherChanges" :hasHeader="true" :colspan="2"/>
        
        <InformationVue :list="info.list2" />
        
        <h2 class="main-heading">
            {{ lang==='en'?'Detail Of National Home Delivery Service Rates*':'Detalle de Tarifas Servicio a Domicilio Nacional*' }}
        </h2>
        <tableVue :list="info.homeDeliveryService" :hasHeader="true"/>
        
        <InformationVue :list="info.list3" />
        
        <h2 class="main-heading">
            {{ lang==='en'?'HOME DELIVERY COVERAGE AREAS':'ENTREGA A DOMICILIO ZONAS DE COBERTURA' }}
            
        </h2>
        <tableVue :list="info.coverageAreas" :hasHeader="true"/>
        
        <WarrantyVue/>


        <template v-if="lang==='en'">
            <h2 class="main-heading">HANDLING</h2>
            <tableVue :list="info.handling" :hasHeader="true"/>
            
            <h2 class="main-heading">For more information on Tax Exemptions contact <a href="" class="texts-sm">Customer Service.</a> </h2>
            <InformationVue :list="info.list4" />

            <h3 class="heading">For packages with higher costs of $2,000</h3>
            <p class="text-blue mb-4">When the value of the purchase exceeds $ 2,000.00, Aeropost hands the package over to a Customs broker and continues to monitor the import. The norms state that in this case there is no Regime change and the nationalization of such goods follows the process of the Regime of Imports for Consumption, and the procedures implied by this regime. The Customs agent handles the warehousing charges and guidance that are part of the normal Customs process, therefore Customs Handling charges may vary. For these cases, please contact Customer Service before making your purchase.</p>
            
            <h2 class="main-heading">Import Taxes (AdValorem) for packages</h2>
            <h3 class="heading">Tax Exemption for imports up to $ 200 value.</h3>
            <ol class="list-decimal text-[#333] mb-4 ml-4">
                <li>This benefit applies only if the sum of imports per shipment does not exceed this amount.</li>
                <li>To calculate the amount of taxes a product must pay Customs does not consider, in any case, the discounted price that the customer may have paid for the product, but rather uses the full price. Customs adjusts the value of the product to its regular price and the importer must pay the taxes assigned by Customs. Similarly, this rule applies if the shipment is valued at more than $ 200.</li>
            </ol>

            <h3 class="heading">Calculation of Taxes</h3>
            <p class="text-blue mb-4">
                The basis for calculating taxes is the CIF value of the package. <br>
                CIF Value = Value of the total package invocie + Freight + Insurance (*) <br>
                (*) Customs Insurance 0.75% of FOB value. Applies if value is between $ 200 and $2,000. For restricted products that exceed $ 200 in value, call customer service.
            </p>

            <h2 class="main-heading">Other important information:</h2>
            <h3 class="heading">Storage</h3>
            <p class="text-blue mb-4">
                The process of releasing documents or packages shall not exceed the days of grace granted by the storage terminal, as this may generate additional charges. A $ 10 storage fee will be charged for documents and/or packages that remain more than 5 days in the Aeropost warehouse.
            </p>

            <h3 class="heading">Amount of Imports</h3>
            <ol class="list-decimal text-[#333] mb-4 ml-4">
                <li>If you buy as an individual, you are entitled to import up to 3 packages per year (from January 1st to December 31st), not exceeding $ 1,000 in value each packge, or you may import once in the year a package of $ 3,000 maximum.</li>
                <li>If you need to import more than this value and amount, you must arrange your RUC as an individual without a business to be able to import without restriction. You can <a href="http://www.sunat.gob.pe/ol-ti-itinsrucsol/iruc001Alias" class="text-blue">arrange your RUC here.</a></li>
            </ol>

            <h3 class="heading">Managing your Account</h3>
            <p class="text-blue mb-4">
                Our customers can authorize other users in their account so they can import using the same account. Each user may apply their import rights same as the account holder. In this case, these users should be added to the account as a sign of consent of the account holder. When the users make a purchase they will have to go through the same procedure as the account holder, and must change the name of the consignee in the account for each import so that it reflects the name of the importer. In order to make the process easier and more efficient, please attach the bill of purchase in the Pre-alert, and e-mail us the copy of DNI of the authorized user at <a href="mailto:lim@aeropost.com" class="text-blue">lim@aeropost.com</a> so we can process your package. If you want to allow others in your account, simply send your request to <a href="http://www.myaeropost.com/myaero/login.aspx" class="text-blue">MyAero</a> . <br>
                For more information, contact Customer Service .
            </p>

        </template>
        <template v-else>
            <h2 class="main-heading">MANEJO</h2>
            <tableVue :list="info.handling" :hasHeader="true"/>
            
            <h2 class="main-heading">Para obtener más información sobre las exenciones de impuestos, comuníquese con <a href="" class="text-sm">Servicio al cliente</a>.</h2>
            <InformationVue :list="info.list4" />

            <h3 class="heading">Para paquetes con costos superiores a $2,000</h3>
            <p class="text-blue mb-4">Cuando el valor de la compra supera los $ 2.000,00, Aeropost entrega el paquete a un Despachante de Aduana y continúa con el seguimiento de la importación. Las normas establecen que en este caso no hay cambio de Régimen y la nacionalización de dichas mercancías sigue el trámite del Régimen de Importaciones para Consumo, y los trámites que implica dicho régimen. El agente de aduanas maneja los cargos de almacenamiento y orientación que forman parte del proceso normal de aduanas, por lo tanto, los cargos por manejo de aduanas pueden variar. Para estos casos, póngase en contacto con el Servicio de Atención al Cliente antes de realizar su compra.</p>
            
            <h2 class="main-heading">Impuestos de importación (AdValorem) para paquetes</h2>
            <h3 class="heading">Exención de Impuestos para importaciones hasta un valor de $ 200.</h3>
            <ol class="list-decimal text-[#333] mb-4 ml-4">
                <li>Este beneficio aplica únicamente si la suma de las importaciones por envío no supera este monto.</li>
                <li>Para calcular el importe de los impuestos que debe pagar un producto, la Aduana no considera, en ningún caso, el precio rebajado que el cliente haya podido pagar por el producto, sino que utiliza el precio total. La Aduana ajusta el valor del producto a su precio regular y el importador debe pagar los impuestos asignados por la Aduana. De igual forma, esta regla aplica si el envío está valorado en más de $200.</li>
            </ol>

            <h3 class="heading">Cálculo de Impuestos</h3>
            <p class="text-blue mb-4">
                La base para el cálculo de impuestos es el valor CIF del paquete. <br>
                Valor CIF = Valor de la factura total del paquete + Flete + Seguro (*) <br>
                (*) Seguro Aduanero 0,75% del valor FOB. Aplica si el valor está entre $200 y $2,000. Para productos restringidos que excedan los $200 en valor, llame a servicio al cliente.
            </p>

            <h2 class="main-heading">Otra información importante:</h2>
            <h3 class="heading">Almacenamiento</h3>
            <p class="text-blue mb-4">
                El proceso de liberación de documentos o paquetes no deberá exceder los días de gracia otorgados por la terminal de almacenamiento, ya que esto puede generar cargos adicionales. Se cobrará una tarifa de almacenamiento de $ 10 por documentos y/o paquetes que permanezcan más de 5 días en el almacén de Aeropost.
            </p>

            <h3 class="heading">Cantidad de Importaciones</h3>
            <ol class="list-decimal text-[#333] mb-4 ml-4">
                <li>Si compras como particular, tienes derecho a importar hasta 3 paquetes por año (desde el 1 de enero hasta el 31 de diciembre), que no superen los $ 1.000 de valor cada paquete, o puedes importar una vez en el año un paquete de $ 3.000 como máximo .</li>
                <li>Si necesitas importar más de este valor y cantidad, debes tramitar tu RUC como persona física sin empresa para poder importar sin restricción. Puedes <a href="http://www.sunat.gob.pe/ol-ti-itinsrucsol/iruc001Alias" class="text-blue">tramitar tu RUC aquí</a></li>
            </ol>

            <h3 class="heading">Administrando su cuenta</h3>
            <p class="text-blue mb-4">
                Nuestros clientes pueden autorizar a otros usuarios en su cuenta para que puedan importar usando la misma cuenta. Cada usuario puede aplicar sus derechos de importación al igual que el titular de la cuenta. En este caso, estos usuarios deben agregarse a la cuenta como señal de consentimiento del titular de la cuenta. Cuando los usuarios realicen una compra deberán realizar el mismo procedimiento que el titular de la cuenta, debiendo cambiar el nombre del consignatario en la cuenta de cada importación para que refleje el nombre del importador. Para hacer el proceso más fácil y eficiente, por favor adjunte la factura de compra en la Pre-alerta, y envíenos por correo electrónico la copia del DNI del usuario autorizado a <a href="mailto:lim@aeropost.com" class="text-blue">lim@aeropost.com</a> para que podamos procesar su paquete. Si desea permitir que otros accedan a su cuenta, simplemente envíe su solicitud a <a href="http://www.myaeropost.com/myaero/login.aspx" class="text-blue">MyAero</a>. <br>
                Para obtener más información, comuníquese con Servicio al Cliente.
            </p>

        </template>
    
    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
import { mapState } from 'vuex';
export default {
  name: 'PeruRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue
  },
  data(){
    return{
        en_info:{

            packages:[
               ['Weight (kg)','Basic'],
               ['Up to 500 g','$7.50'],
               ['Up to 1 kg','$15.25'],
               ['Up to 1.5 kg','$ 19.75'],
               ['Up to 2 kg','$24.50'],
               ['Up to 2.5 kg','$30.50'],
               ['Up to 3 kg','$36.50'],
               ['Additional 0.5 Kg','$5.50'],
               ['More than 10 Kg (every additional 0.5 kg)','$5.50'],
               ['More than 20 Kg (every additional 0.5 kg)','$2.00'],
            ],
            otherChanges:[
                ['Other charges'],
                ['Restricted Shipments','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Click here</a>'],
                ['Bulk Shipments (Consolidated Cargo) per piece','$2.00']
            ],     
            
            list2:[
                'The international freight rate is charged in increments of 1/2 kg.',
                '*A USD $1.60 fee will be collected for every USD $100.00 of declared package value.'
            ],
            homeDeliveryService:[
                ['Weight Range','GAM - Route 30','Main Routes - Route 40**'],
                ['Up to 500 g','$3.00','$4.00	'],
                ['Up to 1 kg','$3.50','$4.75'],
                ['Up to 2 kg','$4.00','$6.75'],
                ['Up to 3 kg','$4.50','$8.75'],
                ['Additional kg','$1.00','$2.50'],
            ],
            list3:[
                '(**) COVERAGE APPLIES TO DEPARTMENT CAPITALS ONLY.',
                'Home delivery rates include the IGV (General Sales Tax).',
                'Customers in remote areas must quote this service directly with Customer Service.',
            ],
            coverageAreas:[
                ['LIMA DELIVERY RATES APPLY',"OTHER CITIES' DELIVERY RATES APPLY"],
                ['Cercado de Lima	','Chachapoyas'],
                ['Ancón	','Huaraz'],
                ['Ate Vitarte','Abancay'],
                ['Barranco','Arequipa'],
                ['Breña	','Ayacucho'],
                ['Carabayllo','Cajamarca'],
                ['Comas	 ','Cuzco'],
                ['Chaclacayo','Huancavelica'],
                ['Chorrillos','Huánuco'],
                ['El Agustino','Ica'],
                ['Jesús María','Huancayo'],
                ['La Molina	','Trujillo'],
                ['La Victoria','Chiclayo'],
                ['Lince	 ','Iquitos'],
                ['Lurigancho (Chosica)','Puerto Maldonado'],
                ['Lurín','Moquegua'],
                ['Magdalena del Mar','Cerro de Pasco'],
                ['Miraflores','Piura'],
                ['Pachacamac','Puno'],
                ['Pucusana','Moyobamba'],
                ['Pueblo Libre','Tacna'],
                ['Puente Piedra','Tumbes'],
                ['Punta Negra','Pucallpa'],
                ['Punta Hermosa	','Other Remote Areas'],
                ['Rímac',''],
                ['San Bartolo	 ',''],
                ['San Isidro	 ',''],
                ['Independencia',''],
                ['San Juan de Miraflores',''],
                ['San Luis	 ',''],
                ['San Martín de Porres',''],
                ['San Miguel	 ',''],
                ['Santiago de Surco',''],
                ['Surquillo	 ',''],
                ['Villa María del Triunfo	',''],
                ['San Juan de Lurigancho',''],
                ['Santa María del Mar	',''],
                ['Santa Rosa	 ',''],
                ['Los Olivos	 ',''],
                ['Cieneguilla	 ',''],
                ['San Borja	 ',''],
                ['Villa El Salvador',''],
                ['Santa Anita	 ',''],
                ['Ricardo Palma',''],
                ['Santa Eulalia',''],
                ['Cercado Callao',''],
                ['Bellavista	',''],
                ['Carmen de la Legua',''],
                ['La Perla	',''],
                ['La Punta	',''],
                ['Ventanilla',''],
            ],
            handling:[
                ['Invoice Value','Rate'],
                ['0-100','$3.75'],
                ['101-200','$5.95'],
                ['201-1000','$9.50'],
                ['1001-2000','$14.50'],
                ['+2001','$165.00'],
            ],
            list4:[
                'All security documents with a tracking number will be handled as packages.',
                'Shipments that require any special handling are subject to additional charges',
                'Rates subject to changes.',
            ]
        },
        es_info:{

            packages:[
                ['Peso (kg)','Básico'],
                ['Hasta 500 g','$7.50'],
                ['Hasta 1 kg','$15.25'],
                ['Hasta 1,5 kg', '$ 19,75'],
                ['Hasta 2 kg','$24.50'],
                ['Hasta 2,5 kg','$30,50'],
                ['Hasta 3 kg','$36.50'],
                ['0,5 kg adicionales', '$5,50'],
                ['Más de 10 Kg (cada 0,5 kg adicional)','$5,50'],
                ['Más de 20 Kg (cada 0,5 kg adicional)','$2,00'],
            ],
            otherChanges:[
                ['Otros cargos'],
                ['Envíos restringidos','<a href="https://aeropost.com/site/en/getit-restricted-shipping" class="text-blue">Haga clic aquí</a>'],
                ['Envíos a granel (Carga consolidada) por pieza','$2.00']
            ],     
            
            list2:[
                'La tarifa de flete internacional se cobra en incrementos de 1/2 kg.',
                '*Se cobrará una tarifa de USD $1,60 por cada USD $100,00 del valor del paquete declarado.'
            ],
            homeDeliveryService:[
                ['Rango de Peso','GAM - Ruta 30','Rutas Principales - Ruta 40**'],
                ['Hasta 500 g','$3.00','$4.00 '],
                ['Hasta 1 kg','$3.50','$4.75'],
                ['Hasta 2 kg','$4.00','$6.75'],
                ['Hasta 3 kg','$4.50','$8.75'],
                ['Kg adicional','$1.00','$2.50'],
            ],
            list3:[
                '(**) LA COBERTURA APLICA SOLO PARA CAPITALES DE DEPARTAMENTO.',
                'Las tarifas de entrega a domicilio incluyen el IGV (Impuesto General a las Ventas).',
                'Los clientes en áreas remotas deben cotizar este servicio directamente con Servicio al Cliente.',
            ],
            coverageAreas:[
                 ['APLICAN TARIFAS DE ENVÍO EN LIMA',"APLICAN TARIFAS DE ENVÍO EN OTRAS CIUDADES"],
                 ['Cercado de Lima', 'Chachapoyas'],
                 ['Ancón', 'Huaraz'],
                 ['Ate Vitarte', 'Abancay'],
                 ['Barranco','Arequipa'],
                 ['Breña', 'Ayacucho'],
                 ['Carabayllo', 'Cajamarca'],
                 ['Comas', 'Cuzco'],
                 ['Chaclacayo', 'Huancavelica'],
                 ['Chorrillos', 'Huánuco'],
                 ['El Agustino','Ica'],
                 ['Jesús María', 'Huancayo'],
                 ['La Molina', 'Trujillo'],
                 ['La Victoria', 'Chiclayo'],
                 ['Lince', 'Iquitos'],
                 ['Lurigancho (Chosica)','Puerto Maldonado'],
                 ['Lurín','Moquegua'],
                 ['Magdalena del Mar', 'Cerro de Pasco'],
                 ['Miraflores','Piura'],
                 ['Pachacamac','Puno'],
                 ['Pucusana', 'Moyobamba'],
                 ['Pueblo Libre', 'Tacna'],
                 ['Puente Piedra', 'Tumbes'],
                 ['Punta Negra','Pucallpa'],
                 ['Punta Hermosa', 'Otras Áreas Remotas'],
                 ['Rímac',''],
                 ['San Bartolo',''],
                 ['San Isidro',''],
                 ['Independencia',''],
                 ['San Juan de Miraflores',''],
                 ['San Luis',''],
                 ['San Martín de Porres',''],
                 ['San Miguel	 ',''],
                 ['Santiago de Surco',''],
                 ['Surquillo',''],
                 ['Villa María del Triunfo',''],
                 ['San Juan de Lurigancho',''],
                 ['Santa María del Mar',''],
                 ['Santa Rosa	 ',''],
                 ['Los Olivos',''],
                 ['Cieneguilla',''],
                 ['San Borja',''],
                 ['Villa El Salvador',''],
                 ['Santa Anita',''],
                 ['Ricardo Palma',''],
                 ['Santa Eulalia',''],
                 ['Cercado Callao',''],
                 ['Bellavista',''],
                 ['Carmen de la Legua',''],
                 ['La Perla',''],
                 ['La Punta',''],
                 ['Ventanilla',''],
             ],
            handling:[
                ['Valor de la factura','Tarifa'],
                 ['0-100','$3.75'],
                 ['101-200','$5.95'],
                 ['201-1000','$9.50'],
                 ['1001-2000','$14.50'],
                 ['+2001','$165.00'],
            ],
            list4:[
                'Todos los documentos de seguridad con un número de seguimiento se manejarán como paquetes.',
                 'Los envíos que requieren un manejo especial están sujetos a cargos adicionales',
                 'Tarifas sujetas a cambios.',
            ]
        },
    }
  },
  computed:{
    ...mapState(['lang']),
    info(){
        return this.lang==='en'?this.en_info:this.es_info;
    }
  }
  
}
</script>
