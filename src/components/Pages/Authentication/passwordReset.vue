<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 50px;margin-left: 150px;">
			<loading :active.sync="isLoading" 
			:can-cancel="true" 
			:is-full-page="fullPage">
			</loading>
			<div class="row">
				<div class="col-md-8">
					<h4 class="page-title">Password Reset</h4>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('passwordData.oldPassword')}">
							<input 
							type="password" 
							class="form-control" 
							placeholder="Old Password" 
							v-model="passwordData.oldPassword"
							>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('passwordData.oldPassword') }}</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('passwordData.newPassword')}">
							<input 
							type="password" 
							class="form-control" 
							placeholder="New Password" 
							v-model="passwordData.newPassword"
							>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('passwordData.newPassword') }}</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('confirmPassword')}">
							<input 
							type="password" 
							class="form-control" 
							placeholder="Confirm Password" 
							v-model="confirmPassword"
							>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('confirmPassword') }}</div>
					</div>
				</div>
			</div>
			<!-- {{passwordData.email}} -->
			<div class="row">
				<div class="col-md-10">
					<div class="m-t-20">
						<button type="button" class="btn  btn-raised btn-success waves-effect" @click="changePassword()">Save Changes</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import SimpleVueValidation from 'simple-vue-validator';
	import { apiDomain } from './config';
	import Swal from 'sweetalert2';
	const Validator = SimpleVueValidation.Validator;
	export default{
		data(){
			return{
				passwordData: {
					oldPassword: '',
					newPassword: '',
					email: this.$route.params.email
				},
				newPass: this.newPassword,
				confirmPassword: '',
				isLoading: false,
				fullPage: true,
				errMsg: 'Internal Server Error'
			}
		},
		methods: {
			changePassword(){
				var self = this
				this.isLoading = true
				this.$http.post(apiDomain + 'api/resetPassword', this.passwordData)
					.then(response => {
						if (response.status === 200) {
							console.log(response)
							self.successModal()
							self.isLoading = false
						}
					}).catch((e) => {
						console.log(e)
						if(e.status === 401){
							self.errMsg = "Incorrect Paasword"
							self.failedModal()
							self.isLoading = false
						}
					})
			},
			successModal(){
		        Swal.fire(
		          'Success!',
		          'Password reset successfully!',
		          'success'
		          )
		    },
		    failedModal(){
		        Swal.fire({
		          type: 'error',
		          title: this.errMsg
		      })
		    }
		},
		validators: {
			 'passwordData.oldPassword': function (value) {
			   return Validator.value(value).required();
			},
			'passwordData.newPassword': function (value) {
			   return Validator.value(value).required().minLength(6);
			},
			'confirmPassword, passwordData.newPassword': function (confirmPassword, newPass) {
			    if(this.validation.isTouched('confirmPassword')){
			       return Validator.value(confirmPassword).required().match(newPass);
			   }
			},
		}
	}
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>