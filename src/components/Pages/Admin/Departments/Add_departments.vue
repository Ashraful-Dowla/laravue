<template>
	<div class="page-wrapper">
		<div class="content">
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<h4 class="page-title">Add Department</h4>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-8 offset-lg-2">
					<form>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<p><b>Department Name</b></p>
									<div class="borderBottom">
										<input type="text" class="form-control" placeholder="Department Name" />
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<div class="form-group">
									<p><b>Description</b></p>
									<div class="borderBottom">
										<textarea cols="30" rows="4" class="form-control"></textarea>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<p>Department Status</p>
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
						<button type="button" class="btn  btn-raised btn-success waves-effect">Create Department</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #607D8B;
	}
</style>