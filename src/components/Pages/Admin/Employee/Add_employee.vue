<template>
	<div class="page-wrapper">
		<div class="content">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<h4 class="page-title">Add Employee</h4>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<form>
						<div class="row">
							<div class="col-md-6">
                        		<div class="form-group">
                        			<div class="borderBottom">
                        				<input type="text" class="form-control" placeholder="FIRST NAME" />
                        			</div>
                        		</div>
                        	</div>
                        	<div class="col-md-6">
                        		<div class="form-group">
                        			<div class="borderBottom">
                        				<input type="text" class="form-control" placeholder="LAST NAME" />
                        			</div>
                        		</div>
                        	</div>
                        	<div class="col-md-6">
                        		<div class="form-group">
                        			<div class="borderBottom">
                        				<input type="text" class="form-control" placeholder="USERNAME" />
                        			</div>
                        		</div>
                        	</div>
                        	<div class="col-md-6">
                        		<div class="form-group">
                        			<div class="borderBottom">
                        				<input type="email" class="form-control" placeholder="EMAIL" />
                        			</div>
                        		</div>
                        	</div>
                        	<div class="col-md-6">
                        		<div class="form-group">
                        			<div class="borderBottom">
                        				<input type="password" class="form-control" placeholder="PASSWORD" />
                        			</div>
                        		</div>
                        	</div>
                        	<div class="col-md-6">
                        		<div class="form-group">
                        			<div class="borderBottom">
                        				<input type="password" class="form-control" placeholder="CONFIRM PASSWORD" />
                        			</div>
                        		</div>
                        	</div>
							<div class="col-md-6">
								<div class="form-group">
									<div class="borderBottom">
										<input type="text" class="form-control" placeholder="Employee ID" />
									</div>
								</div>
							</div>
							<div class="col-md-6">
                        		<div class="form-group">
                        			<div class="borderBottom">
                        				<date-picker :bootstrap-styling="true" class="datepicker form-control" placeholder="Joining Date"></date-picker>
                        			</div>
                        		</div>
                        	</div>
							<div class="col-md-6">
			                    <div class="form-group">
			                        <div class="borderBottom">
			                            <input type="text" class="form-control" placeholder="PHONE NUMBER" />
			                        </div>
			                    </div>
			                </div>
							<div class="col-md-6">
								<div class="form-group">
				                    <div class="borderBottom">
					                    <select class="form-control show-tick">
					                        <option>Select Role</option>
					                        <option>Admin</option>
											<option>Doctor</option>
											<option>Nurse</option>
											<option>Laboratorist</option>
											<option>Pharmacist</option>
											<option>Accountant</option>
											<option>Receptionist</option>
					                    </select>
					                </div>
				                </div>
			            	</div>
						</div>
						<div class="row">
							<div class="col-md-6">
								<p>Status</p>
								<div class="demo-radio-button form-group">
									<input name="group1" type="radio" id="radio_6" class="with-gap" />
	                				<label for="radio_6">ACTIVE</label>
									<input name="group1" type="radio" id="radio_7" class="with-gap" />
	                				<label for="radio_7">INACTIVE</label>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<div class="m-t-20 text-center">
						<button type="button" class="btn  btn-raised btn-success waves-effect">Create Employee</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Datepicker from 'vuejs-datepicker';
	export default {
		components: {
			'date-picker': Datepicker
		}
	}
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>