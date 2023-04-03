<template>
    <div>
        
        <InformationVue :list="info.list1" />
                
        <tableVue :list="info.packages" :hasHeader="true"/>
        
        <h2 class="main-heading">INTERNATIONAL FREIGHT RATES</h2>
        <tableVue :list="info.otherChanges" :hasHeader="true"/>
        
        <InformationVue :list="info.list2" />
        
        <h2 class="main-heading">Detail Of National Home Delivery Service Rates*</h2>
        <tableVue :list="info.homeDeliveryService" :hasHeader="true"/>
        
        <InformationVue :list="info.list3" />
        
        <h2 class="main-heading">HOME DELIVERY COVERAGE AREAS</h2>
        <tableVue :list="info.coverageAreas" :hasHeader="true"/>
        
        <WarrantyVue/>
        
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



    </div>
  
</template>

<script>
import tableVue from '@/components/rates/table.vue';
import InformationVue from '@/components/rates/Information.vue';
import WarrantyVue from '@/components/rates/Warranty.vue';
export default {
  name: 'PeruRate',
  components:{
      tableVue,
      InformationVue,
      WarrantyVue
  },
  data(){
    return{
        info:{

            list1:[
                'You pay for the real weight of your package, not size.',
                'You can return your junk mail and we will credit your account.',
                'You can track your packages on our site at www.aeropost.com.',
            ],
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
                ['Other charges',''],
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
        }
    }
  }
  
}
</script>
