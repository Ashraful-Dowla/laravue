<template>
	<div id="printTable" style="display: none;">
	    <table class="table">
	        <thead>
	            <tr>
	                <th scope="col">Bill ID</th>
	                <th scope="col">Patient ID</th>
	                <th scope="col">Test Name</th>
	                <th scope="col">Price</th>
	                <th scope="col">Status</th>
	            </tr>
	        </thead>
	        <tbody>
	            <tr v-for="(val,idx) in options ">
	             	<td scope="row" v-if="idx==0">{{ bill_id }}</td>
	                <td scope="row" v-else>&nbsp;</td>
	                <td v-if="idx==0">{{ patient_id }}</td>
	                <td v-else>&nbsp;</td>
	                <td>{{ val.test_name }}</td>
	                <td>{{ val.price }}</td>
	                <td v-if="status==1 && idx==0"><span class="ui teal label">Paid</span></td>
	                <td v-else-if="status==0 && idx==0"><span class="ui pink label">Unpaid</span></td>
	                <td v-else>&nbsp;</td>
	            </tr>
	            <tr>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	            </tr>
	            <tr>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	                <td style="font-size: 16px;">Sub Total {{ sub_total }}</td>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	            </tr>
	            <tr>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	                <td style="font-size: 16px;">Discount {{ discount }}</td>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	            </tr>
	            <tr>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	                <td style="font-size: 16px;">Net Payable {{ net_payable }}</td>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	            </tr>
	            <tr>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	                <td style="font-size: 16px;">Due {{ due }}</td>
	                <td>&nbsp;</td>
	                <td>&nbsp;</td>
	            </tr>
	        </tbody>
	    </table>
    </div>
</template>

<script type="text/javascript">
	import Vue from 'vue'
	import VueEvents from 'vue-events'
	import VueHtmlToPaper from 'vue-html-to-paper'
 
	import { apiDomain } from '@/components/Pages/Authentication/config'
	
	import Swal from 'sweetalert2'

	const options = {
	  name: '_blank',
	  specs: [
	    'fullscreen=yes',
	    'titlebar=yes',
	    'scrollbars=yes'
	  ],
	  styles: [
	    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
	    'https://unpkg.com/kidlat-css/css/kidlat.css'
	  ]
	}
	
	Vue.use(VueHtmlToPaper, options)
	Vue.use(VueEvents)
	
	export default{
		name: 'bill_issued_pdf',
        data(){
            return {
                selected: '',
                bill_id: '',
                options:[
                    //{ test_name: 'ECG', test_cost: '1000'},
                ],
                status: '',
                sub_total: '',
                discount: '',
                net_payable: '',
                due: '0',
                patient_id: ''
            };
        },
        mounted(){
        	this.$events.$on('functionCall', (id) => this.func(id))
        },
        methods:{
        	func(id){
        		//console.log(id)
        		//console.log('ppppppppppppppppppppppppppppppppppppp')
        		var self = this

        		this.bill_id = id

			    this.$http.get( apiDomain + 'api/getPatientBillIssuedDataPdf/' + self.bill_id).then((response)=>{
				       	self.options = response.data.data
					    self.status = response.data.data2[0]["status"]
					    self.patient_id = response.data.data2[0]["patient_id"]
					    self.net_payable = response.data.data2[0]["amount_after_discount"]
					    self.sub_total = response.data.data2[0]["amount"]
					    self.discount =  response.data.data2[0]["discount"]
					    self.due = response.data.data2[0]["due"]
	        			
	        		    //self.$htmlToPaper('printTable')

	        		    console.log(response)
	        			window.setTimeout(()=> self.$htmlToPaper('printTable'),5000)
	        			//self.$events.$off('functionCall')	
	        		    //console.log('x')
			       	}).catch((e)=>{
			       		console.log(e)
			       	})

        	}
        }
	}
</script>