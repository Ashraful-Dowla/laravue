<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<loading :active.sync="isLoading" 
                :can-cancel="true"
                :is-full-page="fullPage">
            </loading>
			<div class="row">
				<div class="col-md-8">
					<h4 class="page-title">Edit Department</h4>
				</div>
				<div class="col-md-2 text-right m-b-30">
                    <router-link to="/admin/departments"><i class="arrow alternate circle left outline icon"></i>Previous</router-link>
                </div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<p><b>Department Name</b></p>
						<div class="borderBottom">
							<input type="text" class="form-control" placeholder="Department Name" />
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<p><b>Description</b></p>
						<div class="borderBottom">
							<textarea cols="30" rows="4" class="form-control"></textarea>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<p>Department Status</p>
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
	export default{
		data(){
			return{
				isLoading: false,
				fullPage: true
			}
		}
	}
</script>
<style scoped>
	.borderBottom{
		border-bottom: 2px solid #0392CE;
	}
</style>