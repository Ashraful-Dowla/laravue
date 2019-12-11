<template>
	<div id="app" class="laravue-back-color">
		<div class="main-wrapper">
			<div class="header">
				<div class="header-left">
					<a href="/dashboard" class="logo">
						<img src="static/assets_admin/img/logo.png" width="35" height="35" alt=""> <span>Preclinic</span>
					</a>
				</div>
				<a id="toggle_btn" href="javascript:void(0);"><i class="fa fa-bars"></i></a>
				<a id="mobile_btn" class="mobile_btn float-left" href="#sidebar"><i class="fa fa-bars"></i></a>
				<ul class="nav user-menu float-right">   
					<li class="nav-item dropdown has-arrow">
						<a href="javascript:void(0);" class="dropdown-toggle nav-link user-link" data-toggle="dropdown">
							<!-- <span class="user-img">
								<img class="rounded-circle" :src="url+'adminImage/'+image" width="24" alt="Admin">
								<span class="status online"></span>
							</span> -->
							<span>Admin</span>
						</a>
						<div class="dropdown-menu">
							<a class="dropdown-item"><router-link to="/admin"><span>Dashboard</span></router-link></a>
							<a class="dropdown-item" href="" @click="logOut()">Logout</a>
						</div>
					</li>
				</ul>
			</div>
			<div class="sidebar laravue-back-color" id="sidebar">
				<div class="sidebar-inner slimscroll">
					<div id="sidebar-menu" class="sidebar-menu">
						<ul style="padding-top: 10px;">
							<li class="active">
								<router-link class="fa fa-dashboard" to="/admin"><span>Dashboard</span></router-link>
							</li>
							<li>
								<router-link class="fa fa-hospital-o" to="/admin/departments"><span>Departments</span></router-link>
							</li>
							<li>
								<router-link class="fa fa-user-md" to="/admin/doctors"><span>Doctors</span></router-link>
							</li>
							<li>
								<router-link class="fa fa-calendar-check-o" to="/admin/doctors_schedule"><span>Doctor Schedule</span></router-link>
							</li>
							<li>
								<router-link class="fa fa-wheelchair" to="/admin/receptionist"><span>Receptionist</span></router-link>
							</li>
							<li>
								<router-link class="fa fa-wheelchair" to="/admin/patients"><span>Patients</span></router-link>
							</li>
							<li>
								<router-link class="fa fa-calendar" to="/admin/appointments"><span>Appointments</span></router-link>
							</li>
							<li>
								<router-link class="fa fa-hospital-o" to="/admin/see_prascriptions"><span>Prescriptions</span></router-link>
							</li>
							<li>
								<router-link class="fa fa-hospital-o" to="/admin/see_reports"><span>Reports</span></router-link>
							</li>
							<li>
								<router-link class="fa fa-hospital-o" to="/admin/payments"><span>Bill Issued</span></router-link>
							</li>
							<li>
								<router-link class="fa fa-list" to="/admin/report_upload"><span>Report Upload</span></router-link>
							</li>
							<li class="submenu">
								<a href="#"><i class="fa fa-user"></i> <span> Ptn's Acnt Summary </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/admin/refill_account">Refill Account</router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="#"><i class="fa fa-user"></i> <span> Leave Management </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/admin/Leave_type">Add Leave Type</router-link></li>
									<li><router-link to="/admin/add_leave">Add Leave manually</router-link></li>
									<li><router-link to="/admin/employees/leaves">Leave Requests</router-link></li>
								</ul>
							</li>
							<li>
								<router-link class="fa fa-hospital-o" to="/admin/test_management"><span>Test Management</span></router-link>
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
	export default{
		methods:{
			logOut(){
				window.localStorage.removeItem('authUser')
				this.$router.push({path: 'login'})
			}
		}
	}
</script>
