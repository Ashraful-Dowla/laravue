<template>
	<div id="app">
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
						<a href="#" class="dropdown-toggle nav-link user-link" data-toggle="dropdown">
							<span class="user-img">
								<img class="rounded-circle" src="static/assets_admin/img/pic.JPG" width="24" alt="Admin">
								<span class="status online"></span>
							</span>
							<span>Admin</span>
						</a>
						<div class="dropdown-menu">
							<a class="dropdown-item"><router-link to="/admin/admin_profile"><span>My Profile</span></router-link></a>
							<a class="dropdown-item" href="#">Logout</a>
						</div>
					</li>
				</ul>
				<!--<div class="dropdown mobile-user-menu float-right">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></a>
					<div class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="profile.html">My Profile</a>
						<a class="dropdown-item" href="edit-profile.html">Edit Profile</a>
						<a class="dropdown-item" href="settings.html">Settings</a>
						<a class="dropdown-item" href="login.html">Logout</a>
					</div>
				</div>-->
			</div>
			<div class="sidebar" id="sidebar">
				<div class="sidebar-inner slimscroll">
					<div id="sidebar-menu" class="sidebar-menu">
						<ul>
							<li class="menu-title">Main</li>
							<li>
								<a class="fa fa-dashboard"><router-link to=""><span>Dashboard</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-user-md"><router-link to="/admin/doctors"><span>Doctors</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-wheelchair"><router-link to="/admin/patients"><span>Patients</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-calendar"><router-link to="/admin/appointments"><span>Appointments</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-calendar-check-o"><router-link to="/admin/doctors_schedule"><span>Doctor Schedule</span></router-link></a>
							</li>
							<li>
								<a class="fa fa-hospital-o"><router-link to="/admin/departments"><span>Departments</span></router-link></a>
							</li>
							<li class="submenu">
								<a href="#"><i class="fa fa-user"></i> <span> Employees </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/admin/employees">Employees List</router-link></li>
									<li><router-link to="/admin/employees/leaves">Leaves</router-link></li>
									<li><router-link to="/admin/holidays">Holidays</router-link></li>
									<li><router-link to="/admin/employees/attendance">Attendance</router-link></li>
								</ul>
							</li>
							<li>
								<a class="fa fa-cog"><router-link to="/admin/settings"><span>Settings</span></router-link></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>