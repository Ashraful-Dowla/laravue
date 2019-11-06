<template>
	<div id="app">
		<div class="main-wrapper">
			<div class="header">
				<div class="header-left">
					<a href="/dashboard" class="logo">
						<img src="static/assets_admin/img/logo.png" width="35" height="35" alt=""><span>Patient</span>
					</a>
				</div>
				<a id="toggle_btn" href="#"><i class="fa fa-bars"></i></a>
				<a id="mobile_btn" class="mobile_btn float-left" href="#sidebar"><i class="fa fa-bars"></i></a>
				<ul class="nav user-menu float-right">   
					<li class="nav-item dropdown has-arrow">
						<a href="javascript:void(0);" class="dropdown-toggle nav-link user-link" data-toggle="dropdown">
							<span class="user-img">
								<img class="rounded-circle" :src="url+'patientImage/'+image" width="24" alt="Admin">
								<span class="status online"></span>
							</span>
							<span>Patient</span>
						</a>
						<div class="dropdown-menu">
							<a class="dropdown-item" href="" ><router-link to="/patient">My Profile</router-link></a>
							<a class="dropdown-item">My Wallet {{ amount }}</a>
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
								<a class="fa fa-dashboard"><router-link to="/patient/dashboard"><span>Dashboard</span></router-link></a>
							</li>
							<li class="submenu">
								<a href=""><i class="fa fa-user"></i> <span> Appointment </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/patient/appointment">Book Appointment</router-link></li>
									<li><router-link to="/patient/previous_appointment">Previous Appointment</router-link></li>
								</ul>
							</li>
							<li>
								<a class="fa fa-wheelchair"><router-link to="/patient/test_issued"><span>Test Issued</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-calendar"><router-link to="/patient/last_visit"><span>Visit History</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-calendar-check-o"><router-link to="/patient/prescription_view"><span>Prescription View</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-hospital-o"><router-link to="/patient/report_overview"><span>Report Overview</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-hospital-o"><router-link to="/patient/bill_issued"><span>Bill Issued</span></router-link></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<router-view/>
		</div>
	</div>
</template>
<script type="text/javascript">
	import { apiDomain } from '@/components/Pages/Authentication/config'

	export default{
		name: '',
		data(){
			return {
				amount: '',
				id:'',
				image: '',
				url: ''
			}
		},
		created(){
			this.url = apiDomain
			const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
            this.id = tokenData.id

            var self = this
            this.$http.get(apiDomain + 'api/getWalletData/' + self.id)
            	.then((response)=>{
            		self.amount = response.body.total_amount
            	}).catch((e)=>{
            		console.log(e)
            		self.amount = 0
            	})
            this.$http.post(apiDomain + 'api/getPatientImageForDropdown',{id: tokenData.id})
            	.then(response => {
            		self.image = response.body[0].image
            	})

		},
		methods:{
			logOut(){
				window.localStorage.removeItem('authUser')
				this.$router.push({path: 'login'})
			}
		}
	}
</script>
<style>
	#sidebar-menu ul li:hover{
		background: #282923;
	}
</style>