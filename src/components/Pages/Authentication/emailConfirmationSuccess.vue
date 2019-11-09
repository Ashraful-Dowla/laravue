<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<loading :active.sync="isLoading" 
	            :can-cancel="true" 
	            :is-full-page="fullPage">
	    </loading>
			<div class="row">
				<div v-if="seen1" class="col-md-8">
					<h3>Congratulation! Your Registration is successfull!</h3>
					<hr>
					<label id="one">Your Confirmation Code: </label> <label id="two">{{$route.params.token}}</label>
					<hr>
					<p>Click <span><strong>Next</strong></span> to Log in</p>
					<button class="btn btn-default" @click="next">Next</button>
				</div>
				<div v-if="seen2" class="col-md-8">
					<h2>{{ message }}</h2>
					<p>Click <span><strong>Next</strong></span> to Log in</p>
					<button class="btn btn-default" @click="next">Next</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { loginUrl, getHeader, userUrl, apiDomain } from './config';
	export default{
		data () {
			return{
				passedEmail: this.$route.params.email,
				passedToken: this.$route.params.token,
				seen1: false,
				seen2: false,
				message: '',
				isLoading: false,
				fullPage: true
			}
		},
		methods: {
			next () {
				window.location.href = "/login"
			}
		},
		created () {
			this.isLoading = true
			const postData = {
				token: this.passedToken,
				email: this.passedEmail
			}
			this.$http.post(apiDomain + 'api/crosscheck',postData)
				.then(response => {
					console.log(response)
					if(response.status === 200){
						if(response.body.crosscheck === 'true'){
							this.seen1 = true;
							this.isLoading = false
						}
						else if(response.body.crosscheck === 'verified'){
							this.message = 'EMAIL ALREADY VERIFIED!'
							this.seen2 = true;
							this.isLoading = false
						}
						else if(response.body.crosscheck === 'invalid'){
							this.message = 'SEEMS YOU ARE NO THE RIGHT USER! REGISTER FIRST.'
							this.seen2 = true;
							this.isLoading = false
						}
					}
				})
		}
	}
</script>
<style scoped>
	h3{
		color: green;
	}
	#one{
		color: black;
		font-weight: bold;
		font-size: 20px;
	}
	#two{
		font-size: 25px;
		background-color: #262723;
		color: #DEE1E6;
	}
	p{
		font-size: 16px;
		width: 150px;
		text-align: center;
		height: 25px;
	}
	h2{
		color: red;
		font-weight: bold;
	}
</style>