<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<div class="row">
				<div class="col-md-8">
					<h4 class="page-title">Edit Appointment</h4>
				</div>
				<div class="col-md-2 text-right m-b-30">
					<router-link class="btn  btn-raised bg-grey waves-effect fa fa-chevron-circle-left" to="/admin/appointments"><strong>BACK</strong></router-link>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<div class="form-group">
						<p><b>Appointment ID</b></p>
						<div class="borderBottom">
							<input type="text" class="form-control" placeholder="APT-xxxxxxxxx" />
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<p><b>Patient Name</b></p>
						<div class="borderBottom">
							<select class="form-control show-tick">
								<option>Select</option>
								<option>Jennifer Robinson</option>
								<option>Terry Baker</option>
								<option>Terry Baker</option>
								<option>Terry Baker</option>
								<option>Terry Baker</option>
								<option>Terry Baker</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<div class="form-group">
						<p><b>Department</b></p>
						<div class="borderBottom">
							<select class="form-control show-tick">
								<option>Select</option>
								<option>Dentists</option>
								<option>Neurology</option>
								<option>Opthalmology</option>
								<option>Orthopedics</option>
								<option>Cancer Department</option>
								<option>ENT Department</option>
							</select>
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<p><b>Doctor</b></p>
						<div class="borderBottom">
							<select class="form-control show-tick">
								<option>Select</option>
								<option>Cristina Groves</option>
								<option>Marie Wells</option>
								<option>Henry Daniels</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<div class="form-group">
						<p><b>Date</b></p>
						<div class="borderBottom">
							<date-picker :bootstrap-styling="true" class="datepicker form-control"></date-picker>
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<div>
							<label><strong>Time</strong></label>
							<vue-timepicker format="hh:mm A"></vue-timepicker>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<div class="form-group">
						<p><b>Patient Email</b></p>
						<div class="borderBottom">
							<input type="email" class="form-control" placeholder="example@example.com" />
						</div>
					</div>
				</div>
				<div class="col-md-5">
					<div class="form-group">
						<p><b>Patient Phone Number</b></p>
						<div class="borderBottom">
							<input type="text" class="form-control" placeholder="01XXX-XXXXXX" />
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<p>Appointment Status</p>
					<div class="demo-radio-button form-group">
						<input name="group1" type="radio" id="radio_6" class="with-gap" />
						<label for="radio_6">ACTIVE</label>
						<input name="group1" type="radio" id="radio_7" class="with-gap" />
						<label for="radio_7">INACTIVE</label>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<div class="m-t-20 text-center">
						<button type="button" class="btn  btn-raised btn-success waves-effect">Save Changes</button>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Datepicker from 'vuejs-datepicker'
import VueTimepicker from 'vue2-timepicker'
import 'vue2-timepicker/dist/VueTimepicker.css'
export default {
	components: {
		'date-picker': Datepicker,
		'vue-timepicker': VueTimepicker
	}
}
</script>
<style scoped>
.borderBottom{
	border-bottom: 2px solid #607D8B;
}
</style>