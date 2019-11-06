<template>
	<div class="page-wrapper">
		<div class="content">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<h4 class="page-title">Edit Leave</h4>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<form>
						<div class="row">
							<div class="col-md-6">
								<div class="form-group">
				                    <div class="borderBottom">
					                    <select class="form-control show-tick">
					                        <option>Select Leave Type</option>
											<option>Casual Leave 12 Days</option>
					                    </select>
					                </div>
				                </div>
			            	</div>
						</div>
						<div class="row">
							<div class="col-md-6">
                        		<div class="form-group">
                        			<div class="borderBottom">
                        				<date-picker :bootstrap-styling="true" class="datepicker form-control" placeholder="Date: From"></date-picker>
                        			</div>
                        		</div>
                        	</div>
							<div class="col-md-6">
                        		<div class="form-group">
                        			<div class="borderBottom">
                        				<date-picker :bootstrap-styling="true" class="datepicker form-control" placeholder="Date: To"></date-picker>
                        			</div>
                        		</div>
                        	</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
                        		<div class="form-group">
                        			<p><b>Number of days</b></p>
                        			<div class="borderBottom">
                        				<input type="text" class="form-control"  value="2"/>
                        			</div>
                        		</div>
                        	</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
                        		<div class="form-group">
                        			<p><b>Leave Reason</b></p>
                        			<div class="borderBottom">
                        				<textarea rows="4" cols="5" class="form-control"></textarea>
                        			</div>
                        		</div>
                        	</div>
						</div>
					</form>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<div class="m-t-20 text-center">
						<button type="button" class="btn  btn-raised btn-success waves-effect">Save Changes</button>
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