<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<h3>Refill Account</h3>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('refillInfo.patient_id')}">
							<input type="text" class="form-control" placeholder="Patient ID: PT-XXXXXXXX" v-model="refillInfo.patient_id"/>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('refillInfo.patient_id') }}</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<div class="borderBottom" :class="{error: validation.hasError('refillInfo.refillAmount')}">
							<input type="text" class="form-control" placeholder="Refill Amount" v-model="refillInfo.refillAmount"/>
						</div>
						<div class="message" style="color: red;">{{ validation.firstError('refillInfo.refillAmount') }}</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<div class="m-t-20 text-center">
						<button type="button" class="ui button positive" @click="refillAccount()">Deposite Credit</button>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>
<script>
	import { apiDomain } from '@/components/Pages/Authentication/config';
	import SimpleVueValidation from 'simple-vue-validator';
	const Validator = SimpleVueValidation.Validator;
	import Swal from 'sweetalert2';
	export default {
		data(){
			return{
				refillInfo:{
					patient_id: '',
					refillAmount: '',
					AD_id: ''
				}
			}
		},
		methods:{
			refillAccount(){
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
	                        }).then((result) => {
	                              if (result.value) {
	                                    self.sendData()     
	                              }
	                        }).catch((e) => {
	                        	console.log(e)
	                        })
	                  }
	            }).catch((e)=>{
	              console.log(e)
	            })
			},
			sendData(){
				var self = this
				this.$http.post(apiDomain + 'api/refillAccount',self.refillInfo)
					.then(response => {
						if(response.status === 200){
							console.log(response)
							self.successModal()
						}
					}).catch((e) => {
						console.log(e)
						self.failedModal()
					})
			},
	        successModal(){
	            Swal.fire(
	                  'Success!',
	                  'Successfully Refilled!',
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
		validators: {
	        'refillInfo.patient_id': function (value) {
	            return Validator.value(value).required();
	        },
	        'refillInfo.refillAmount': function (value) {
	            return Validator.value(value).required();
	        }
    	},
    	created(){
    		const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
    		this.refillInfo.AD_id = tokenData.id
    		// console.log(this.refillInfo.AD_id)
    	}
	}
</script>
<style scoped>
.borderBottom{
	border-bottom: 2px solid #607D8B;
}
</style>