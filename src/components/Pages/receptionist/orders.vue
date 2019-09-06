<template>
	<div class="page-wrapper">
        <div class="container" style="margin-top: 25px;margin-left: 50px;">
        	<form>
                 <p><b>Order ID</b></p>
                <div class="form-group">
                    <div>
                         <input type="text" id="order_id" class="form-control borderBottom" placeholder="Tnter the Order ID">
                    </div>
                </div>
            </form>
            <button class="ui button blue" style="float: right;" @click="">Search</button>
            <br><br><br><br>
            <div id="printTable">
	        	<table class="table">
	                <thead>
	                    <tr>
	                        <th scope="col">Order ID</th>
	                        <th scope="col">Patient ID</th>
	                        <th scope="col">Test Name</th>
	                        <th scope="col">Test Cost</th>
	                        <th scope="col">Status</th>
	                    </tr>
	                </thead>
	                <tbody>
	                    <tr v-for="(val,idx) in options ">
	                        <td scope="row" v-if="idx==0">{{ idx+1 }}</td>
	                        <td scope="row" v-else>&nbsp;</td>
	                        <td v-if="idx==0">{{ idx+1 }}</td>
	                        <td v-else>&nbsp;</td>
	                        <td>{{ val.test_name }}</td>
	                        <td>{{ val.test_cost }}</td>
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
	         <button class="ui button yellow" style="float: right;" @click="printFunction" >Print</button>
	         <loading
     			:show="show"
     			:label="label">
 			 </loading>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueHtmlToPaper from 'vue-html-to-paper'
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
                options:[
                    { test_name: 'ECG', test_cost: '1000'},
                    { test_name: 'CBC', test_cost: '500'},
                    { test_name: 'Lipid Profile Serum', test_cost: '1150'},
                    { test_name: 'CT-SCAN OF BRAIN', test_cost: '4000'},
                    { test_name: 'CT-Scan Contrast', test_cost: '1300'}
                ],
                status: '1',
                sub_total: '1000',
                discount: '10',
                net_payable: '900',
                due: '0',
                show: false,
                label: 'Loading.....'
            };
        },
        methods:{
        	printFunction(){
        		this.show = true
        		window.setTimeout(()=> this.showTable(),5000)
	        },
	        showTable(){
	        	//console.log('asdasd')
	        	this.show=false
        		this.$htmlToPaper('printTable')
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