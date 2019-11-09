<template>
	<div class="page-wrapper">
        <div class="content">
            <loading :active.sync="isLoading" 
                :can-cancel="true" 
                :is-full-page="fullPage">
            </loading>
            <div class="container-fluid" align="left">
                <div class="row clearfix">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="card">
                            <h2> My Wallet Recharge </h2>
                            <div class="body">
                                <form>
                                    <label for="user_id">User ID</label>
                                    <div class="form-group"  :class="{error: validation.hasError('user_id')}">
                                        <div class="form-line">
                                            <input type="text" v-model="user_id" id="user_id" class="form-control" placeholder="Enter the User ID">
                                        </div>
                                        <div class="message" style="color: red;">{{ validation.firstError('user_id') }}</div>
                                    </div>
                                    <label for=amount>Recharge Amount</label>
                                    <div class="form-group"  :class="{error: validation.hasError('recharge_amount')}">
                                        <div class="form-line">
                                            <input type="text" v-model="recharge_amount" id="recharge_amount" class="form-control" placeholder="Enter the Amount">
                                        </div>
                                        <div class="message" style="color: red;">{{ validation.firstError('recharge_amount') }}</div>
                                    </div>
                                    <button type="button" @click="func" class="ui button blue waves-effect" style="float: right;">Recharge</button>
                                    </form>
                                </div>
                            </div>
                        </div>
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
		name: 'my_wallet_recharge',
		data(){
			return{
				user_id: '',
				recharge_amount: '',
				id: '2',
        isLoading: false,
        fullPage: true
			};
		},
        created(){
            var self = this
            const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
            this.id = tokenData.id
        },
		methods:{
            func(){
            	var self = this
                this.$validate()
                    .then((response)=>{
                        if(response){
                    		self.sendData()
                            self.isLoading = true
                        }
                    })
            },
            sendData(){
            	var self = this

            	this.$http.post(apiDomain + 'api/myWalletRecharge',{
            		user_id: self.user_id,
            		recharge_amount: self.recharge_amount,
            		id: self.id
            	}).then((response)=>{
            		console.log(response)
                    self.user_id = ''
                    self.recharge_amount = ''
            		self.successModal()
                    self.isLoading = false
            	}).catch((e)=>{
            		console.log(e)
            		self.failedModal()
                    self.isLoading = false
            	})
            },
            successModal(){
                Swal.fire(
                    'Recharged!',
                    'Successfully Recharged!',
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
			'user_id' : function(value){
                return Validator.value(value).required();
            },
            'recharge_amount' : function(value){
                return Validator.value(value).required().digit();
            }
		}
	}
</script>