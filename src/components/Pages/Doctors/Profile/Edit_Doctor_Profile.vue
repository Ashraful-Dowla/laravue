<template>
	<div class="page-wrapper">
		<div class="container" style="margin-top: 25px;margin-left: 50px;">
			<div class="row">
				<div class="col-sm-12">
					<h4 class="page-title">Edit Profile</h4>
				</div>
			</div>
			<div class="row">
				<div class="col-md-10">
					<hr>
				</div>
			</div>
			<form>
				<div class="card-box">
					<h3 class="card-title">Basic Informations</h3>
					<div class="row">
						<div class="col-md-10">
							<div class="profile-img-wrap">
								<img class="inline-block" src="static/assets_admin/img/pic.JPG" />
								<div class="fileupload btn">
									<span class="btn-text">edit</span>
									<input class="upload" type="file">
								</div>
							</div>
							<div class="profile-basic">
								<div class="row">
									<div class="col-sm-5">
					                    <div class="form-group">
					                        <div class="borderBottom">
					                            <input type="text" class="form-control" placeholder="YOUR FIRST NAME" />
					                        </div>
					                    </div>
					                </div>
									<div class="col-sm-5">
					                    <div class="form-group">
					                        <div class="borderBottom">
					                            <input type="text" class="form-control" placeholder="YOUR LAST NAME" />
					                        </div>
					                    </div>
					                </div>
									<div class="col-sm-5">
		                                <div class="form-group">
		                                    <div class="borderBottom">
		                                        <!--<input type="text" class="datepicker form-control" placeholder="YOUR BIRTHDAY">-->
		                                        <date-picker :bootstrap-styling="true" placeholder="YOUR BIRTHDAY" class="datepicker form-control"></date-picker>
		                                    </div>
		                                </div>
		                            </div>
									<div class="col-md-6">
										<p>Select Gender</p>
										<div class="demo-radio-button form-group">
											<input name="group1" type="radio" id="radio_4" class="with-gap" />
                            				<label for="radio_4">MALE</label>
											<input name="group1" type="radio" id="radio_5" class="with-gap" />
                            				<label for="radio_5">FEMALE</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-box">
					<h3 class="card-title">Contact Informations</h3>
					<div class="row">
						<div class="col-sm-12">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="YOUR ADDRESS" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="DISTRICT" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="VILLAGE" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="POSTAL CODE" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="PHONE NUMBER" />
		                        </div>
		                    </div>
		                </div>
					</div>
				</div>
				<div class="card-box">
					<h3 class="card-title">Education Informations</h3>
					<div class="row">
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="INSTITUTION" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="SUBJECT" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="STARTING DATE" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="COMPLETE DATE" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="DEGREE" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="GRADE" />
		                        </div>
		                    </div>
		                </div>
					</div>
					<div class="add-more">
						<button class="btn  btn-raised bg-blue-grey waves-effect"><strong>ADD MORE INSTITUTION</strong></button>
					</div>
				</div>
				<div class="card-box">
					<h3 class="card-title">Experience Informations</h3>
					<div class="row">
						<div class="col-sm-12">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="COMPANY NAME" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="LOCATION" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="POSITION" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="PERIOD FROM" />
		                        </div>
		                    </div>
		                </div>
						<div class="col-sm-6">
		                    <div class="form-group">
		                        <div class="borderBottom">
		                            <input type="text" class="form-control" placeholder="PERIOD TO" />
		                        </div>
		                    </div>
		                </div>
					</div>
					<div class="add-more">
						<button class="btn  btn-raised bg-blue-grey waves-effect"><strong>ADD MORE EXPERIANCE</strong></button>
					</div>
				</div>
				<div class="text-center m-t-20">
					<button type="button" class="btn  btn-raised btn-success waves-effect">SAVE THE CHANGES</button>
				</div>
			</form>
			<hr>
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
		border-bottom: 2px solid #607D8B;
	}
</style>