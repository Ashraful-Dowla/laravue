<template>
	<div id="app">
		<div class="main-wrapper">
			<div class="header">
				<div class="header-left">
					<a href="/dashboard" class="logo">
						<img src="static/assets_admin/img/logo.png" width="35" height="35" alt=""><span>Preclinic</span>
					</a>
				</div>
				<a id="toggle_btn" href="javascript:void(0);"><i class="fa fa-bars"></i></a>
				<a id="mobile_btn" class="mobile_btn float-left" href="#sidebar"><i class="fa fa-bars"></i></a>
				<ul class="nav user-menu float-right">   
					<li class="nav-item dropdown has-arrow">
						<a href="#" class="dropdown-toggle nav-link user-link" data-toggle="dropdown">
							<span class="user-img">
								<img class="rounded-circle" src="static/assets_admin/img/pic.JPG" width="24" alt="Admin">
								<span class="status online"></span>
							</span>
							<span>Doctor</span>
						</a>
						<div class="dropdown-menu">
							<a class="dropdown-item"><router-link to="/doctor/doctor_profile">My Profile</router-link></a>
							<a class="dropdown-item" href="login.html">Logout</a>
						</div>
					</li>
				</ul>
			</div>
			<div class="sidebar" id="sidebar">
				<div class="sidebar-inner slimscroll">
					<div id="sidebar-menu" class="sidebar-menu">
						<ul style="padding-top: 10px;">
							<li class="active">
								<a class=" fa fa-dashboard"><router-link to="/doctor"><span>Dashboard</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-user-md"><router-link to="/doctor/today_patients_list"><span>Today Patients List</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-calendar-check-o"><router-link to="/doctor/see_all_patient_list"><span>All Patients List</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-calendar"><router-link to="/doctor/see_all_doctors_list"><span>See Doctor's List</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-hospital-o"><router-link to="/doctor/prescription"><span>Prescription</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-wheelchair"><router-link to="/doctor/patient_previous_records"><span>Patient's Previous Record</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-hospital-o"><router-link to="/doctor/next_appointment"><span>Next Appointment</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-list"><router-link to="/doctor/report_upload"><span>Report Upload</span></router-link></a>
							</li>
							<li class="submenu">
								<a href="#"><i class="fa fa-user"></i> <span> Leave Request </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/doctor/make_leave_request">Make Leave Request</router-link></li>
									<li><router-link to="/doctor/leave_request_approval">Leave Request Approval</router-link></li>
								</ul>
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
</script>