<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage">
            </loading>
			<div class="row">
				<div class="col-md-8">
					<h4 class="page-title">Add Your Experience</h4>
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
						<div class="borderBottom" :class="{error: validation.hasError('experience.institution')}">
							<input type="text" class="form-control" placeholder="Institution" v-model="experience.institution" >
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('experience.institution') }}</div>
					</div>
				</div>
				<div class="col-md-7">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('experience.position')}">
							<input type="text" class="form-control" placeholder="position" v-model="experience.position">
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('experience.position') }}</div>
					</div>
				</div>
				<div class="col-md-7">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('experience.year_from')}">
							<date-picker :bootstrap-styling="true" class="datepicker form-control" placeholder="Year From" v-model="experience.year_from"></date-picker>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('experience.year_from') }}</div>
					</div>
				</div>
				<div class="col-md-7">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('experience.year_to')}">
							<date-picker :bootstrap-styling="true" class="datepicker form-control" placeholder="Year To" v-model="experience.year_to"></date-picker>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('experience.year_to') }}</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-7">
					<div class="m-t-20 text-center">
            			<button type="button" class="btn  btn-raised btn-success waves-effect" @click="saveexperience()">Save experience</button>
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
				experience:{
					institution: '',
					position: '',
					year_from: '',
					year_to: '',
					doctor_id: '',
					id: ''
				},
				isLoading: false,
				fullPage: true
			}
		},
		methods: {
			saveexperience(){
				var self = this
				this.$validate()
				.then( function(success) {
					if (success) {
						Swal.fire({
							title: 'Are you sure?',
							text: "You won't be able to revert this!",
							type: 'warning',
							showCancelButton: true,
							confirmButtonColor: '#3085d6',
							cancelButtonColor: '#d33',
							confirmButtonText: 'Ok'
						}).then((output) => {
							if (output.value) {
								self.sendData() 
								self.isLoading = true    
							}
						});
					}
				}).catch((e)=>{
					console.log(e)
				})
			},
			sendData(){
				var self = this
				this.$http.post(apiDomain + 'api/saveDoctorWorkingExperience',self.experience)
					.then(response => {
						if(response.status === 200){
							console.log(response)
							self.successModal()
							self.isLoading = false
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
					text: 'Something went wrong! '
				})
			}
		},
		created() {
			this.experience.doctor_id = this.$route.params.doctor_id
			this.experience.id = this.$route.params.id
			// console.log(this.experience.doctor_id)
		},
		validators: {
	      'experience.institution': function (value) {
	        return Validator.value(value).required();
	      },
	      'experience.position': function (value) {
	        return Validator.value(value).required();
	      },
	      'experience.year_from': function (value) {
	        return Validator.value(value).required();
	      },
	      'experience.year_to': function (value) {
	        return Validator.value(value).required();
	      },
		}
	}
</script>
<style>
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>