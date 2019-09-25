<template>
	<div class="page-wrapper">
		<div class="content">
        <div class="container-fluid" align="left">
        	<div class="col-lg-12 col-md-12 col-sm-12">
                <h2>Order Section</h2>
        	<form>
                 <p><b>Bill ID</b></p>
                <div class="form-group" :class="{error: validation.hasError('bill_id')}">
                    <div>
                         <input type="text" id="order_id" v-model="bill_id" class="form-control borderBottom" placeholder="Enter the Bill ID">
                    </div>
                    <div class="message" style="color: red;">{{ validation.firstError('bill_id') }}</div>
                </div>
            </form>
            <button class="ui button blue" style="float: right;" @click="searchFunction">Search</button>
            <br><br><br><br>
            <div id="printTable" v-if="showDataTable">
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
	         <button class="ui button yellow" style="float: right;" @click="printFunction" v-if="showDataTable" >Print</button>
	         <loading
     			:show="show"
     			:label="label">
 			 </loading>
        </div>
    </div>
    </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueHtmlToPaper from 'vue-html-to-paper'
 
import { apiDomain } from '@/components/Pages/Authentication/config'

import SimpleVueValidation from 'simple-vue-validator'
const Validator = SimpleVueValidation.Validator

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

import loading from 'vue-full-loading'

export default{
        name:'test_issue',
        components: {
    	   loading
  		},
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
                show: false,
                label: 'Loading.....',
                showDataTable: false,
                suc: false,
                patient_id: ''
            };
        },
        methods:{
        	printFunction(){
        		this.show = true
        		window.setTimeout(()=> this.showTable(),3000)
	        },
	        showTable(){
	        	//console.log('asdasd')
	        	this.show=false
        		this.$htmlToPaper('printTable')
	        },
	        searchFunction(){
	        	var self = this
	        	
	        	this.errorCheck()
	        	if(this.suc){
	        		
	        		self.showDataTable = false

		        	this.$http.post( apiDomain + 'api/getOrdersData',{
		        		bill_id: self.bill_id
		        	}).then((response)=>{
			        	
		        		self.options = response.data.data
		        		self.status = response.data.data2[0]["status"]
		        		self.patient_id = response.data.data2[0]["patient_id"]
		        		self.net_payable = response.data.data2[0]["amount_after_discount"]
		        		self.sub_total = response.data.data2[0]["amount"]
		        		self.discount =  response.data.data2[0]["discount"]
		        		self.due = response.data.data2[0]["due"]


			        	self.show = true
			        	window.setTimeout(()=> self.sTable() ,5000)
			        	
		        	}).catch((e)=>{

		        		self.show = true
		        		self.showDataTable = false
		        		window.setTimeout(()=>self.mk() ,5000)
		        	})
	        	}
	        },
	        sTable(){
	        	this.show = false
	        	this.showDataTable = true
	        },
	        errorCheck(){
	        	var self = this
	        	this.$validate()
	        		.then((response)=>{
	        			if(response){
	        				
							self.suc = true	        				
	        			}
	        		})
	        },
            failedModal(){
                Swal.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: 'No Data Found!'
                })
            },
            mk(){
            	this.show = false
            	this.failedModal()
            }
        },
        validators: {
        	'bill_id': function(value){
        		return Validator.value(value).required();
        	}
        }
    }
</script>
<style scoped>
    .borderBottom{
        border-bottom: 2px solid #607D8B;
    }
</style>

<!--Start of Tawk.to Script-->
<!-- <script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5d71535deb1a6b0be60b3293/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script> -->
<!--End of Tawk.to Script-->