<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage">
            </loading>
			<div class="row">
				<div class="col-md-8">
					<h4 class="page-title">Add Your Educational Info</h4>
				</div>
				<div class="col-md-2 text-right m-b-30">
					<router-link to="/doctor"><i class="arrow alternate circle left outline icon"></i>Previous</router-link>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div><br>
			<div class="row">
				<div class="col-md-7">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('info.institution')}">
							<input type="text" class="form-control" placeholder="Institution" v-model="info.institution" >
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('info.institution') }}</div>
					</div>
				</div>
				<div class="col-md-7">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('info.degree')}">
							<input type="text" class="form-control" placeholder="Degree" v-model="info.degree">
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('info.degree') }}</div>
					</div>
				</div>
				<div class="col-md-7">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('info.year_from')}">
							<date-picker :bootstrap-styling="true" class="datepicker form-control" placeholder="Year From" v-model="info.year_from"></date-picker>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('info.year_from') }}</div>
					</div>
				</div>
				<div class="col-md-7">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('info.year_to')}">
							<date-picker :bootstrap-styling="true" class="datepicker form-control" placeholder="Year To" v-model="info.year_to"></date-picker>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('info.year_to') }}</div>
					</div>
				</div>
				<div class="col-md-7">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('info.result')}">
							<input type="text" class="form-control" placeholder="Result" v-model="info.result">
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('info.result') }}</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-7">
					<div class="m-t-20">
            			<button type="button" class="btn  btn-raised btn-success waves-effect" @click="saveInfo()">Save Info</button>
            		</div>
				</div>
			</div><br>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Datepicker from 'vuejs-datepicker';
	import { apiDomain } from '@/components/Pages/Authentication/config'
	import SimpleVueValidation from 'simple-vue-validator';
    import Swal from 'sweetalert2';
  	const Validator = SimpleVueValidation.Validator;
	export default{
		components: {
			'date-picker': Datepicker
		},
		data(){
			return{
				info:{
					institution: '',
					degree: '',
					year_from: '',
					year_to: '',
					result: '',
					doctor_id: '',
					id: ''
				},
				isLoading: false,
				fullPage: true
			}
		},
		methods: {
			saveInfo(){
				var self = this
				this.$validate()
				.then( function(success) {
					if (success) {
						self.sendData()
						self.isLoading = true 
					}
				}).catch((e)=>{
					console.log(e)
				})
			},
			sendData(){
				var self = this
				this.$http.post(apiDomain + 'api/saveDoctorEducationalInfo',self.info)
					.then(response => {
						if(response.status === 200){
							console.log(response)
							self.successModal()
							self.isLoading = false
							self.$router.push({path: 'doctor'})
						}
					}).catch((e) => {
						console.log(e)
						self.failedModal()
						self.isLoading = false
					})
			},
			successModal(){
				Swal.fire(
					'Success!',
					'Successfully Saved!',
					'success'
					)
			},
			failedModal(){
				Swal.fire({
					type: 'error',
					title: 'Oops...',
					text: 'Internal server error. Try again.'
				})
			}
		},
		created() {
			this.info.doctor_id = this.$route.params.doctor_id
			this.info.id = this.$route.params.id
			// console.log(this.info.doctor_id)
		},
		validators: {
	      'info.institution': function (value) {
	        return Validator.value(value).required();
	      },
	      'info.degree': function (value) {
	        return Validator.value(value).required();
	      },
	      'info.year_from': function (value) {
	        return Validator.value(value).required();
	      },
	      'info.year_to': function (value) {
	        return Validator.value(value).required();
	      },
	      'info.result': function (value) {
	        return Validator.value(value).required();
	      }
		}
	}
</script>
<style>
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>