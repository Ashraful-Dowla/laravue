<template>
	<div class="page-wrapper">
		<div class="content">
	        <div class="container-fluid" align="left">
	        	<div class="col-lg-12 col-md-12 col-sm-12">
	        		<loading :active.sync="isLoading" 
                        :can-cancel="true" 
                        :is-full-page="fullPage">
                    </loading>
	                <h2>Report Upload</h2>
		        	<form>
		                 <p><b>Patient ID</b></p>
		                <div class="form-group" :class="{error: validation.hasError('patient_id')}">
		                    <div>
		                         <input type="text" id="patient_id" v-model="patient_id" class="form-control borderBottom" placeholder="Enter the Patient ID">
		                    </div>
		                    <div class="message" style="color: red;">{{ validation.firstError('patient_id') }}</div>
		                </div>
		                 <p><b>Doctor ID</b></p>
		                <div class="form-group" :class="{error: validation.hasError('doctor_id')}">
		                    <div>
		                         <input type="text" id="doctor_id" v-model="doctor_id" class="form-control borderBottom" placeholder="Enter the Doctor ID">
		                    </div>
		                    <div class="message" style="color: red;">{{ validation.firstError('doctor_id') }}</div>
		                </div>
		                <p><b>Upload file</b></p>
		                <div class="from-group" :class="{error: validation.hasError('reportUrl')}">
		                	<div>
		                		<input type="file" @change="func" id="abc" class="form-control borderBottom" accept=".pdf,.docx">
		                	</div>
		             		<div class="message" style="color: red;">{{ validation.firstError('reportUrl') }}</div>
		                </div>
		                <!-- <iframe :src="reportUrl"></iframe> -->
		            </form>
		            <button class="ui button blue" style="float: right;" @click="sendData">Submit</button>
	        	</div>
	    	</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import { apiDomain } from '@/components/Pages/Authentication/config'

	// ES6 Modules or TypeScript
	import Swal from 'sweetalert2'

	import SimpleVueValidation from 'simple-vue-validator'
	const Validator = SimpleVueValidation.Validator

	export default{
		name:'report_upload',
		data(){
			return{
				patient_id:'',
				doctor_id: '',
				reportUrl: '',
				id: '',
				report_name: '',
				isLoading: false,
				fullPage: true
			}
		},
		created(){
			 var self = this
		     const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
		     this.id = tokenData.id
		     //console.log(this.id)
		},
		methods:{
			sendData(){
				var self = this
	        	this.$validate()
	        		.then((response)=>{
	        			if(response){
	        				self.snd()
                            self.isLoading = true
	        			}
	        		})
			},
			func(input){
				let fileUrl = input.target.files[0]

				//console.log(fileUrl)
				let reader = new FileReader()

				reader.readAsDataURL(fileUrl)

				reader.onload = (event) =>{
					this.reportUrl = event.target.result
					//console.log(input.target.files[0].name)
					//console.log(this.reportUrl)
				}

				this.report_name = document.getElementById('abc').files[0].name
				//console.log(this.report_name)
			},
			snd(){
				var self = this
				this.$http.post( apiDomain + 'api/recReportUpload',{
					patient_id: self.patient_id,
					doctor_id: self.doctor_id,
					reportUrl: self.reportUrl,
					id: self.id,
					report_name: self.report_name
				}).then((response)=>{
					console.log(response)
				 	self.successModal()
				 	self.isLoading = false

				 	self.patient_id = ''
				 	self.doctor_id = ''
				 	self.reportUrl = ''
				 	
				}).catch((e)=>{
					console.log(e)
					self.failedModal()
					self.isLoading = false
				})
			},
            successModal(){
                Swal.fire(
                    'Inserted!',
                    'Successfully Inserted!',
                    'success'
                )
            },
            failedModal(){
                Swal.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: 'Internal server error. Try again'
                })
            }
		},
		validators:{
			'patient_id' : function(value){
            	return Validator.value(value).required();
        	},
        	'doctor_id': function(value){
        		return Validator.value(value).required();
        	},
        	'reportUrl': function (value) {
        		return Validator.value(value).required();
        	}
		}
	}
</script>