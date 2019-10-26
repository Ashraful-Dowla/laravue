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
						<a href="#" class="dropdown-toggle nav-link user-link" data-toggle="dropdown">
							<span class="user-img">
								<img class="rounded-circle" src="static/assets_admin/img/pic.JPG" width="24" alt="Admin">
								<span class="status online"></span>
							</span>
							<span>Doctor</span>
						</a>
						<div class="dropdown-menu">
							<a class="dropdown-item"><router-link to="">My Profile</router-link></a>
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
								<a class="active fa fa-dashboard"><router-link to=""><span>Dashboard</span></router-link></a>
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
<style>
	#sidebar-menu ul li:hover{
		background: #FCFAFA;
	}
</style>