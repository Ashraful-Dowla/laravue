<template>
	<div id="app">
		<div class="main-wrapper">
			<div class="header">
				<div class="header-left">
					<a href="/dashboard" class="logo">
						<img src="static/assets_admin/img/logo.png" width="35" height="35" alt=""><span>Receptionist</span>
					</a>
				</div>
				<a id="toggle_btn" href="#"><i class="fa fa-bars"></i></a>
				<a id="mobile_btn" class="mobile_btn float-left" href="#sidebar"><i class="fa fa-bars"></i></a>
				<ul class="nav user-menu float-right">   
					<li class="nav-item dropdown has-arrow">
						<a href="javascript:void(0);" class="dropdown-toggle nav-link user-link" data-toggle="dropdown">
							<span class="user-img">
								<img class="rounded-circle" :src="url+'receptionistImage/'+image" width="24" alt="Admin">
								<span class="status online"></span>
							</span>
							<span>Receptionist</span>
						</a>
						<div class="dropdown-menu">
							<a class="dropdown-item"><router-link to="/receptionist">My Profile</router-link></a>
							<a class="dropdown-item" href="" @click="logOut()">Logout</a>
						</div>
					</li>
				</ul>
				
			</div>
			<div class="sidebar" id="sidebar">
				<div class="sidebar-inner slimscroll">
					<div id="sidebar-menu" class="sidebar-menu">
						<ul style="padding-top: 10px;">
							<li class="active">
								<a class="active fa fa-dashboard"><router-link to="/receptionist/dashboard"><span>Dashboard</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-wheelchair"><router-link to="/receptionist/test_issue"><span>Test Issue</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-money"><router-link to="/receptionist/payment_zone"><span>Payment Zone</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-ambulance"><router-link to="/receptionist/new_patient"><span>Admit New Patient</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-first-order"><router-link to="/receptionist/orders"><span>Orders</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-list"><router-link to="/receptionist/bill_issued"><span>Bill Issued</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-money"><router-link to="/receptionist/my_wallet_recharge"><span>My Wallet Recharge</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-history"><router-link to="/receptionist/transaction"><span>Transaction</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-list"><router-link to="/receptionist/report_upload"><span>Report Upload</span></router-link></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	import { apiDomain } from '@/components/Pages/Authentication/config'
	export default{
		data(){
			return{
				image: '',
				url: ''
			}
		},
		methods:{
			logOut(){
				window.localStorage.removeItem('authUser')
				this.$router.push({path: 'login'})
			}
		},
		created(){
			this.url = apiDomain
			var self = this
			const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
			this.$http.post(apiDomain + 'api/getReceptionistImageForDropdown',{id: tokenData.id})
				.then(response => {
					self.image = response.body[0].image
				})
		}
	}
</script>
<style>
	#sidebar-menu ul li:hover{
		background: #FCFAFA;
	}
</style>