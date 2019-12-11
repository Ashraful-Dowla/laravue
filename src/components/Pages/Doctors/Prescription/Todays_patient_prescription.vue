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
                            <input type="text" v-model="patient_id" class="form-control" placeholder="Patient ID" disabled/>
                        </div>
                        <div class="message" style="color: red;">{{ validation.firstError('patient_id') }}</div>
                    </div>
                </div>
			</div>
			<div class="row">
				<div class="col-md-10" >
					<div class="form-group" :class="{error: validation.hasError('editor_text')}">
						<ckeditor type="classic" v-model="editor_text">CKEDITOR</ckeditor><br>
						<button type="button" class="ui button positive" @click="sendData"><strong>Prescribe</strong></button>
					</div>
					 <div class="message" style="color: red;">{{ validation.firstError('editor_text') }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { apiDomain } from '@/components/Pages/Authentication/config'
	import SimpleVueValidation from 'simple-vue-validator';
	const Validator = SimpleVueValidation.Validator;
	import Swal from 'sweetalert2'
	export default{
		data(){
			return{
				patient_id: '',
				doctor_id: '',
				editor_text: '',
				date: '',
				isLoading: false,
				fullPage: true
			}
		},
		methods:{
			sendData(){
				this.isLoading = true
				var self = this
				this.$http.post(apiDomain + 'api/saveAppointmentInfo',{pt_id: self.patient_id, dr_id: self.doctor_id, pres: self.editor_text})
					.then(response => {
						if(response.status == 200){
							console.log(response)
							this.$izitoast.success({
							    title: 'OK',
							    message: 'Prescription successfully added!',
							});
							self.isLoading = false
						}
					}).catch((e)=> {
						console.log(e)
						self.failedModal()
						self.isLoading = false
					})
			},
			failedModal(){
                Swal.fire({
                  type: 'error',
                  title: 'Oops...',
                  text: 'Internal server error. Try again'
                })
            }
		},
		created(){
			this.patient_id = this.$route.params.patient_id
			this.doctor_id = this.$route.params.doctor_id
			this.date = this.$route.params.date
			// console.log(this.patient_id)
			// console.log(this.date)
			// console.log(this.doctor_id)
			var self = this
			this.$http.post(apiDomain + 'api/getPrescriptionInfo',{pt_id: self.patient_id, dr_id: self.doctor_id})
				.then(response => {
					if(response.status == 200){
						console.log(response)
						if(response.body.prescription.prescription == null){
							self.editor_text = ''
						}
						else{
							self.editor_text = response.body.prescription.prescription
						}
					}
				})
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