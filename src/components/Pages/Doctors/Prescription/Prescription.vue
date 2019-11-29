<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage">
            </loading>
			<div class="row">
				<div class="col-md-10">
					<h3>Prescription</h3>
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-sm-5">
                    <div class="form-group" :class="{error: validation.hasError('patient_id')}">
                    	<p><b>Patient ID</b></p>
                        <div class="borderBottom">
                            <input type="text" v-model="patient_id" class="form-control" placeholder="Patient ID" />
                        </div>
                        <div class="message" style="color: red;">{{ validation.firstError('patient_id') }}</div>
                    </div>
                </div>
			</div>
			<div class="row">
				<div class="col-md-10" >
					<div class="form-group" :class="{error: validation.hasError('editor_text')}">
						<ckeditor type="classic" v-model="editor_text">CKEDITOR</ckeditor><br>
						<button style="float: right;" type="button" class="ui button positive" @click="sendData"><strong>Prescribe</strong></button>
					</div>
					 <div class="message" style="color: red;">{{ validation.firstError('editor_text') }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { apiDomain } from '@/components/Pages/Authentication/config'
	
	import SimpleVueValidation from 'simple-vue-validator'
	const Validator = SimpleVueValidation.Validator

	import Swal from 'sweetalert2'	
	
	export default {
		data () {
			return {
				editor_text: '',
				patient_id: '',
				id: '2',
				isLoading: false,
				fullPage: true
			}
		},
		created(){
			const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
		    this.id = tokenData.id
		    console.log(this.id)
		},
		methods:{
			sendData(){
				var self = this
	        	this.$validate()
	        		.then((response)=>{
	        			if(response){
							this.chk()     				
	        			}
	        		})
			},
			chk(){
				var self = this
				self.send()
                self.isLoading = true
			},
			send(){
				var self = this
				this.$http.post(apiDomain + 'api/addPrescription',{
					patient_id: self.patient_id,
					editor_text: self.editor_text,
					id: self.id,
				}).then((response)=>{
					console.log(response)
					self.successModal()
					self.isLoading = false
					self.patient_id = ''
					self.editor_text = ''
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
        validators: {
        	'patient_id': function(value){
        		return Validator.value(value).required();
        	},
        	'editor_text': function(value){
        		return Validator.value(value).required();
        	}
        }
	}
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>