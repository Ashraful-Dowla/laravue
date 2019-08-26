<template>
	<div class="page-wrapper">
		<div class="content">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<h4 class="page-title">Add Schedule</h4>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<form>
						<div class="row">
							<div class="col-sm-4">
								<div class="form-group">
				                    <p><b>Department name</b></p>
				                    <div class="borderBottom">
					                    <select class="form-control show-tick">
					                        <option>Select</option>
											<option>Cardiology</option>
											<option>Sergiology</option>
											<option>Pathodology</option>
											<option>Neurology</option>
					                    </select>
					                </div>
				                </div>
			            	</div>
							<div class="col-sm-4">
								<div class="form-group">
				                    <p><b>Doctor Name</b></p>
				                    <div class="borderBottom">
					                    <select class="form-control show-tick">
					                        <option>Select</option>
											<option>Doctor Name 1</option>
											<option>Doctor Name 2</option>
											<option>Doctor Name 2</option>
											<option>Doctor Name 2</option>
											<option>Doctor Name 2</option>
											<option>Doctor Name 2</option>
											<option>Doctor Name 2</option>
											<option>Doctor Name 2</option>
					                    </select>
					                </div>
				                </div>
			            	</div>
			            	<div class="col-sm-4">
								<div class="form-group">
				                    <p><b>Select Date</b></p>
				                    <div class="borderBottom">
					                    <select class="form-control show-tick">
					                        <option>Select Days</option>
											<option>Sunday</option>
											<option>Monday</option>
											<option>Tuesday</option>
											<option>Wednesday</option>
											<option>Thursday</option>
											<option>Friday</option>
											<option>Saturday</option>
					                    </select>
					                </div>
				                </div>
			            	</div>
						</div>
						<div class="row">
							<div class="col-md-10">
								<hr>
							</div>
						</div>
						<div class="row">
							<div class="col-md-10">
								<input name="group1" type="radio" id="radio_6" class="with-gap" />
                    			<label for="radio_6">
                    				Select if the doctor is available for multiple time in a weekday.
                    			</label>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<div>
										<label><strong>Start Time</strong></label>
										<vue-timepicker format="hh:mm A"></vue-timepicker>
									</div>
								</div>
							</div>
							<div class="col-sm-6">
								<div class="form-group">
									<div>
										<label><strong>End Time</strong></label>
										<vue-timepicker format="hh:mm A"></vue-timepicker>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-10">
								<hr>
							</div>
						</div>
						<div class="col-md-6">
							<p>Schedule Status</p>
							<div class="demo-radio-button form-group">
								<input name="group1" type="radio" id="radio_6" class="with-gap" />
                				<label for="radio_6">ACTIVE</label>
								<input name="group1" type="radio" id="radio_7" class="with-gap" />
                				<label for="radio_7">INACTIVE</label>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<div class="m-t-20 text-center">
						<button type="button" class="btn  btn-raised btn-success waves-effect">Create Schedule</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import VueTimepicker from 'vue2-timepicker'
	import 'vue2-timepicker/dist/VueTimepicker.css'
	export default {
		components: {
			'vue-timepicker': VueTimepicker
		}
	}
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #607D8B;
	}
</style>